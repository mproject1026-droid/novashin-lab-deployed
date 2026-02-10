import { useState, useRef } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useReactToPrint } from 'react-to-print'

// 🚨 取得 API Key
const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

type AppHelperProps = {
    selected: Record<string, string>;
    handleSelect: (key: string, id: string) => void;
    getInfo: (id: string) => Equipment | undefined;
}

// 核心選單渲染組件
const renderSection = ({ selected, handleSelect, getInfo }: AppHelperProps, targetType: string, subtitle: string, label: string, index: number, stateKey: string) => {
    const filteredItems = equipmentDb.filter(e => {
        const t = e.type as string;
        if (targetType === 'source') return t === 'streamer';
        if (targetType === 'streaming_dac') return t === 'streamer' || t === 'dac';
        if (targetType === 'wall_outlet') return t === 'power';
        if (targetType === 'feet') return t === 'other';
        return t === targetType;
    });

    const sortedItems = [...filteredItems].sort((a, b) => a.brand.localeCompare(b.brand));
    const currentItem = getInfo(selected[stateKey]);

    return (
      <div className="flex-1 min-w-[280px] no-print">
        <label className="text-gold-dim text-[11px] font-black tracking-[0.2em] mb-4 block uppercase flex items-center opacity-60">
            <span className="bg-gold text-black px-2 py-0.5 rounded-sm mr-2 text-[9px] font-mono">{index.toString().padStart(2, '0')}</span>
            {label}
        </label>
        <select 
          className="w-full bg-[#111] border border-gold/20 p-5 rounded-none text-text-main focus:border-gold outline-none transition-all text-sm cursor-pointer hover:bg-white/5 appearance-none shadow-inner"
          value={selected[stateKey] || ''}
          onChange={(e) => handleSelect(stateKey, e.target.value)}
        >
          <option value="">{subtitle}</option>
          {sortedItems.map(item => (
            <option key={item.id} value={item.id}>{item.brand} - {item.model}</option>
          ))}
        </select>
      </div>
    );
};

function App() {
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [customInput, setCustomInput] = useState('') 
  const [report, setReport] = useState('')
  const [loading, setLoading] = useState(false)
  const reportRef = useRef<HTMLDivElement>(null);

  const handleSelect = (key: string, id: string) => {
    setSelected(prev => ({ ...prev, [key]: id }))
  }

  const getInfo = (id: string) => equipmentDb.find(e => e.id === id)
  const commonProps: AppHelperProps = { selected, handleSelect, getInfo };

  const handlePrint = useReactToPrint({
    contentRef: reportRef,
    documentTitle: `NovaShin_Audiology_Insight_2026`,
  });

  const generateDiagnosis = async () => {
    const hasSelection = Object.values(selected).some(v => v !== '') || customInput.trim() !== '';
    if (!hasSelection) return;
    
    setLoading(true);
    setReport(''); 
    
    try {
      // 💡 嘗試多種模型名稱以確保相容性
      const modelName = "gemini-1.5-flash"; 
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY.trim()}`;
      
      const labelMap: Record<string, string> = {
        s1: "訊源", s2: "DAC", s3: "DDC", s4: "串流DAC",
        s5: "前級", s6: "後級", s7: "綜擴", s8: "喇叭",
        s9: "重低音", s10: "線材", s11: "壁插", s12: "腳墊"
      };

      const dbContext = Object.entries(selected)
        .map(([key, id]) => {
          const item = getInfo(id);
          return item ? `[${labelMap[key]}] ${item.brand} ${item.model} (物理參數: ${item.physicsNote} / 聲音特性: ${item.sonicSignature})` : null;
        }).filter(Boolean).join('\n');

      const promptText = `你是 Novashin 音響實驗室首席分析官。請針對以下清單撰寫一份「雜誌排版感」的專業深度分析報告。
      
      配置：${dbContext}
      備註：${customInput}

      要求：
      1. 使用 Markdown。標題一(#)僅用於「NovaShin 嚴選」，標題二(##)用於大章節。
      2. 每一段不超過三行。
      3. 模仿發燒雜誌專業語調。不要出現「主觀建議」字眼。`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });

      const data = await response.json();

      // 🚨 終極防護機制
      if (data.error) {
        throw new Error(`Google API 報錯: ${data.error.message}`);
      }

      if (!data.candidates || data.candidates.length === 0) {
        throw new Error("AI 伺服器傳回空數據，可能是內容觸發了安全過濾，請更換器材組合再試。");
      }

      const text = data.candidates[0].content.parts[0].text;
      setReport(text);

    } catch (error: any) {
      console.error(error);
      setReport(`❌ 診斷失敗：${error.message}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-4 md:px-8 font-sans">
      <header className="text-center mb-32 no-print">
        <div className="text-gold tracking-[1.5em] text-[10px] mb-8 uppercase font-black opacity-20">Novashin Audio Laboratory</div>
        <h1 className="text-6xl md:text-[8rem] font-black text-gold-gradient mb-8 tracking-tighter italic leading-none text-white">
            NOVASHIN <span className="font-thin not-italic opacity-60">LAB</span>
        </h1>
        <p className="text-text-main/20 tracking-[0.5em] text-[10px] uppercase font-bold">Project Manhattan | 2026 EDITION</p>
      </header>

      <main className="max-w-7xl mx-auto space-y-16 pb-32">
        {/* 選單區塊 */}
        <section className="grid grid-cols-1 gap-12 no-print">
            <div className="bg-[#0A0A0A] p-12 rounded-[4rem] border border-white/5 shadow-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {renderSection(commonProps, "source", "訊源...", "01: Source", 1, "s1")}
                    {renderSection(commonProps, "dac", "DAC...", "02: DAC", 2, "s2")}
                    {renderSection(commonProps, "ddc", "DDC...", "03: DDC", 3, "s3")}
                    {renderSection(commonProps, "streaming_dac", "Streaming DAC...", "04: Combined", 4, "s4")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-20 border-t border-white/5">
                    {renderSection(commonProps, "preamp", "前級...", "05: Preamp", 5, "s5")}
                    {renderSection(commonProps, "poweramp", "後級...", "06: Power Amp", 6, "s6")}
                    {renderSection(commonProps, "amp", "綜擴...", "07: Integrated", 7, "s7")}
                </div>
            </div>

            <div className="bg-[#0A0A0A] p-12 rounded-[4rem] border border-white/5 shadow-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {renderSection(commonProps, "speaker", "主喇叭...", "08: Main Speaker", 8, "s8")}
                    {renderSection(commonProps, "subwoofer", "重低音...", "09: Low Frequency", 9, "s9")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 pt-20 border-t border-white/5">
                    {renderSection(commonProps, "cable", "線材...", "10: Cables", 10, "s10")}
                    {renderSection(commonProps, "wall_outlet", "壁插...", "11: Wall Outlet", 11, "s11")}
                    {renderSection(commonProps, "feet", "墊材...", "12: Isolation", 12, "s12")}
                </div>
            </div>
            
            <div className="text-center px-4">
                <textarea
                    className="w-full max-w-4xl mx-auto bg-transparent border-b border-gold/10 p-8 text-gold-bright placeholder-gold/10 focus:border-gold outline-none h-24 text-center text-xl italic transition-all"
                    placeholder="13: 自定義補充 (例如: 古河 NCF, 升級銀線...)"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                />
            </div>
        </section>

        {/* 按鈕 */}
        <div className="text-center pt-24 no-print space-y-12">
          <button 
            disabled={loading}
            onClick={generateDiagnosis}
            className={`group px-32 py-12 bg-gold text-black rounded-none font-black text-3xl shadow-[0_40px_80px_rgba(201,168,76,0.25)] transition-all hover:scale-105 active:scale-95`}
          >
            {loading ? 'CALCULATING...' : '⚡ GENERATE REPORT'}
          </button>
        </div>

        {/* 🖨️ 專業報告區 */}
        {report && (
          <div ref={reportRef} className="report-wrapper print-container mt-64 p-12 md:p-32 bg-[#080808] rounded-[3rem] border border-gold/10 relative">
            <div className="report-header">
                <div className="report-header-subtitle">Audio Laboratory Report</div>
                <h1 className="report-header-title">NOVA<span className="text-white">SHIN</span><span className="report-header-badge">嚴選</span></h1>
                <p className="report-header-cert">Audiology Certification</p>
                <div className="report-header-id">ID: NS-{Math.random().toString(36).substr(2, 9).toUpperCase()} | VERIFIED 2026</div>
            </div>

            <article className="report-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
            </article>

            <div className="report-footer mt-32 pt-12 border-t border-white/5">
                <span>© NOVASHIN LAB</span>
                <span>AUTHENTIC REPORT</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
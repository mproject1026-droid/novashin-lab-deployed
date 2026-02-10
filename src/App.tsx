import { useState, useRef } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useReactToPrint } from 'react-to-print'

const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

type AppHelperProps = {
    selected: Record<string, string>;
    handleSelect: (key: string, id: string) => void;
    getInfo: (id: string) => Equipment | undefined;
}

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
    return (
      <div className="flex-1 min-w-[280px] no-print">
        <label className="text-gold-dim text-[11px] font-black tracking-[0.2em] mb-3 block uppercase flex items-center opacity-70">
            <span className="bg-gold text-black px-2 py-0.5 rounded-sm mr-2 text-[9px] font-mono">{index.toString().padStart(2, '0')}</span>
            {label}
        </label>
        <select 
          className="w-full bg-[#111] border border-gold/10 p-5 rounded-sm text-text-main focus:border-gold outline-none transition-all text-sm cursor-pointer hover:bg-white/5 appearance-none shadow-inner"
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
  const handlePrint = useReactToPrint({ contentRef: reportRef, documentTitle: `NovaShin_Strictly_Selected_Report` });

  const generateDiagnosis = async () => {
    const hasSelection = Object.values(selected).some(v => v !== '') || customInput.trim() !== '';
    if (!hasSelection) return;
    setLoading(true); setReport(''); 
    
    try {
      const modelName = "gemini-1.5-flash"; 
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY.trim()}`;
      
      const labelMap: Record<string, string> = {
        s1: "訊源", s2: "DAC", s3: "DDC", s4: "串流DAC", s5: "前級", s6: "後級", s7: "綜擴", s8: "喇叭", s9: "重低音", s10: "線材", s11: "壁插", s12: "腳墊"
      };
      const dbContext = Object.entries(selected).map(([key, id]) => {
          const item = getInfo(id);
          return item ? `[${labelMap[key]}] ${item.brand} ${item.model} (技術細節: ${item.physicsNote} / 聲音特性: ${item.sonicSignature})` : null;
      }).filter(Boolean).join('\n');

      const promptText = `你現在是 NovaShin 音響實驗室首席分析官。請撰寫一份頂級音響系統深度分析報告。\n【系統配置】\n${dbContext}\n【附加裝備】: ${customInput}\n\n請務必使用 Markdown 格式，包含 # NovaShin 嚴選 大標題、前言、組件特性分析、物理分析、玄學聽感描述、結論。語氣專業客觀。`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });

      const data = await response.json();

      // 🚨 這裡就是修復「reading 0」的關鍵防呆
      if (data.error) {
        throw new Error(`Google API 錯誤: ${data.error.message}`);
      }
      
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content) {
          setReport(data.candidates[0].content.parts[0].text);
      } else {
          // 如果 AI 因為安全原因拒絕回答，會跑到這裡
          console.log("完整回應數據:", data);
          throw new Error("AI 拒絕回應或格式錯誤。這通常是因為金鑰未生效或觸發安全過濾。");
      }
    } catch (error: any) {
      setReport(`❌ 系統分析失敗：${error.message}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-4 md:px-8 font-sans">
      <header className="text-center mb-24 no-print">
        <div className="text-gold tracking-[1.5em] text-[10px] mb-6 uppercase font-black opacity-30">Laboratory Intelligence</div>
        <h1 className="text-6xl md:text-[8rem] font-black text-gold-gradient mb-8 tracking-tighter italic leading-none">NOVASHIN <span className="font-thin not-italic opacity-80">LAB</span></h1>
      </header>

      <main className="max-w-6xl mx-auto space-y-12 pb-32">
        <section className="bg-[#0A0A0A] p-12 rounded-[4rem] border border-white/5 shadow-3xl no-print">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {renderSection(commonProps, "source", "訊源...", "1: Source", 1, "s1")}
                {renderSection(commonProps, "dac", "DAC...", "2: DAC", 2, "s2")}
                {renderSection(commonProps, "ddc", "DDC...", "3: DDC", 3, "s3")}
                {renderSection(commonProps, "streaming_dac", "Streaming DAC...", "4: Streamer", 4, "s4")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5">
                {renderSection(commonProps, "preamp", "前級...", "5: Preamp", 5, "s5")}
                {renderSection(commonProps, "poweramp", "後級...", "6: Power Amp", 6, "s6")}
                {renderSection(commonProps, "amp", "綜擴...", "7: Integrated", 7, "s7")}
            </div>
        </section>

        <section className="bg-[#0A0A0A] p-12 rounded-[4rem] border border-white/5 shadow-3xl no-print">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {renderSection(commonProps, "speaker", "主喇叭...", "8: Speaker", 8, "s8")}
                {renderSection(commonProps, "subwoofer", "重低音...", "9: Sub", 9, "s9")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5">
                {renderSection(commonProps, "cable", "線材...", "10: Cables", 10, "s10")}
                {renderSection(commonProps, "wall_outlet", "壁插...", "11: Wall Outlet", 11, "s11")}
                {renderSection(commonProps, "feet", "墊材...", "12: Isolation", 12, "s12")}
            </div>
            <div className="mt-12">
                <textarea className="w-full bg-transparent border-b border-gold/20 p-4 text-gold-bright placeholder-gold/20 focus:border-gold outline-none h-16 text-center text-lg italic" placeholder="13: 自定義裝備補充..." value={customInput} onChange={(e) => setCustomInput(e.target.value)} />
            </div>
        </section>

        <div className="text-center pt-12 no-print space-y-12">
          <button disabled={loading} onClick={generateDiagnosis} className={`px-32 py-10 bg-gold text-black rounded-sm font-black text-2xl shadow-2xl transition-all ${loading ? 'opacity-50 cursor-wait animate-pulse' : 'hover:scale-105'}`}>
            {loading ? 'ANALYZING...' : '⚡ GENERATE LAB REPORT'}
          </button>
          {report && <button onClick={() => handlePrint()} className="block mx-auto text-gold/50 hover:text-gold text-xs font-black tracking-[0.5em] underline">DOWNLOAD PDF ↓</button>}
        </div>

        {report && (
          <div ref={reportRef} className="report-wrapper print-container mt-48 relative overflow-hidden">
            <div className="report-header">
                <div className="report-header-subtitle">Audio Laboratory Report</div>
                <h1 className="report-header-title">NOVA<span className="text-white">SHIN</span><span className="report-header-badge">嚴選</span></h1>
                <p className="report-header-cert">Audiology Certification</p>
            </div>
            <article className="report-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
            </article>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
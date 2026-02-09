import { useState, useRef } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
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
        <label className="text-gold-dim text-[11px] font-bold tracking-[0.1em] mb-2 block uppercase flex items-center">
            <span className="bg-gold/20 text-gold-bright px-2 py-0.5 rounded mr-2 text-[10px] min-w-[24px] text-center">{index}</span>
            {label}
        </label>
        <select 
          className="w-full bg-dark-panel border border-gold/20 p-3 rounded-lg text-text-main focus:border-gold outline-none transition-all text-sm cursor-pointer hover:bg-white/5"
          value={selected[stateKey] || ''}
          onChange={(e) => handleSelect(stateKey, e.target.value)}
        >
          <option value="">{subtitle}</option>
          {sortedItems.map(item => (
            <option key={item.id} value={item.id}>{item.brand} - {item.model}</option>
          ))}
        </select>
        {currentItem && (
          <div className="mt-2 text-[10px] text-gold/60 italic px-2 border-l-2 border-gold/30 leading-relaxed">
              「{currentItem.sonicSignature.substring(0, 45)}...」
          </div>
        )}
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
    documentTitle: `NovaShin_Audiology_Report`,
  });

  const generateDiagnosis = async () => {
    const hasSelection = Object.values(selected).some(v => v !== '') || customInput.trim() !== '';
    if (!hasSelection) {
      alert('請先選擇您的系統配置。');
      return;
    }
    
    setLoading(true);
    setReport(''); 
    
    try {
      // ✅ 使用您帳號特有的 v1beta 接口與型號
      const modelName = "gemini-2.5-flash"; 
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY.trim()}`;
      
      const labelMap: Record<string, string> = {
        s1: "訊源", s2: "DAC", s3: "DDC", s4: "串流DAC",
        s5: "前級", s6: "後級", s7: "綜擴", s8: "喇叭",
        s9: "重低音", s10: "線材", s11: "壁插", s12: "腳墊"
      };

      const dbContext = Object.entries(selected)
        .map(([key, id]) => {
          if (!id) return null;
          const item = getInfo(id);
          return item ? `${labelMap[key]}: ${item.brand} ${item.model} (物理規格: ${item.physicsNote} / 聲音特性: ${item.sonicSignature})` : null;
        }).filter(Boolean).join('\n');

      const promptText = `
        你現在是一位極致理性的 High-End 音響系統分析師，受命於 Novashin 音響實驗室。
        請根據以下清單撰寫一份深度分析報告。

        【系統配置】
        ${dbContext}
        使用者自定義補充：${customInput}

        【寫作風格與排版指令】
        1. **語調**：理工男的浪漫。前半段引用電子學原理（阻抗匹配、諧波失真、時基誤差、電源紋波），後半段轉化為感性聽感。
        2. **客觀性**：絕對不要提到「建議」、「我覺得」或「推薦」，請以「系統綜效」與「物理規律」出發進行客觀陳述。
        3. **格式化 (非常重要)**：
           - **不要使用 Markdown 表格**。
           - 組件概覽請使用以下格式：**類別：品牌 型號 — 核心技術短評**。
           - 報告開頭必須是：# NovaShin 嚴選 (大字標題)
           - 下一行為：## 終極進化：系統深度分析報告
        4. **文字密度**：請適度斷句與換行，確保視覺寬鬆、好讀。
      `;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });

      const data = await response.json();
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          setReport(data.candidates[0].content.parts[0].text);
      } else {
          throw new Error(data.error?.message || "AI 思考受阻，請重試。");
      }
    } catch (error: any) {
      setReport(`❌ 系統連接失敗：${error.message}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-obsidian py-12 px-4 md:px-8 font-sans selection:bg-gold/30">
      {/* 網頁版標題 */}
      <header className="text-center mb-16 no-print">
        <div className="text-gold tracking-[0.8em] text-[10px] mb-4 uppercase opacity-50 font-bold">Project Manhattan</div>
        <h1 className="text-5xl md:text-7xl font-black text-gold-gradient mb-4 tracking-tighter italic">
            NOVASHIN <span className="font-light not-italic">LAB</span>
        </h1>
        <p className="text-text-main/40 tracking-[0.3em] text-xs uppercase font-serif">Acoustic Engineering Intelligence</p>
      </header>

      <main className="max-w-7xl mx-auto space-y-10 pb-20">
        
        {/* 數位與類比選單區塊 (列印時隱藏) */}
        <section className="grid grid-cols-1 gap-10 no-print">
            <div className="bg-dark-panel/30 p-8 rounded-[2rem] border border-gold/10 shadow-2xl">
                <h3 className="text-gold text-xs font-bold mb-8 tracking-[0.2em] uppercase border-l-2 border-gold pl-4">Digital & Analog Path</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {renderSection(commonProps, "source", "選擇純訊源...", "1: 純訊源", 1, "s1")}
                    {renderSection(commonProps, "dac", "選擇純 DAC...", "2: 數類轉換", 2, "s2")}
                    {renderSection(commonProps, "ddc", "選擇 DDC...", "3: 數位介面", 3, "s3")}
                    {renderSection(commonProps, "streaming_dac", "選擇串流 DAC...", "4: 串流 DAC 合併", 4, "s4")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {renderSection(commonProps, "preamp", "選擇前級...", "5: 前級擴大機", 5, "s5")}
                    {renderSection(commonProps, "poweramp", "選擇後級...", "6: 後級擴大機", 6, "s6")}
                    {renderSection(commonProps, "amp", "選擇綜擴...", "7: 綜合擴大機", 7, "s7")}
                </div>
            </div>

            <div className="bg-dark-panel/30 p-8 rounded-[2rem] border border-gold/10 shadow-2xl">
                <h3 className="text-gold text-xs font-bold mb-8 tracking-[0.2em] uppercase border-l-2 border-gold pl-4">Output & Accessories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {renderSection(commonProps, "speaker", "選擇主喇叭...", "8: 靈魂揚聲器", 8, "s8")}
                    {renderSection(commonProps, "subwoofer", "選擇重低音...", "9: 極低頻補足", 9, "s9")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {renderSection(commonProps, "cable", "選擇線材...", "10: 發燒線材", 10, "s10")}
                    {renderSection(commonProps, "wall_outlet", "選擇壁插...", "11: 電源壁插", 11, "s11")}
                    {renderSection(commonProps, "feet", "選擇墊材...", "12: 避震腳墊", 12, "s12")}
                </div>
            </div>

            <div className="bg-gradient-to-r from-dark-panel/60 to-transparent p-8 rounded-[2rem] border border-gold/20 shadow-2xl">
                <h3 className="text-gold-bright text-xs font-bold mb-4 tracking-[0.2em] uppercase">13: 自定義裝備 (Custom Gear)</h3>
                <textarea
                    className="w-full bg-black/40 border border-gold/10 rounded-xl p-4 text-paper placeholder-white/10 focus:border-gold outline-none h-24 text-sm"
                    placeholder="輸入任何型號或特殊補充說明..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                />
            </div>
        </section>

        {/* 控制按鈕 */}
        <div className="text-center pt-8 no-print flex flex-col md:flex-row justify-center gap-6">
          <button 
            disabled={loading}
            onClick={generateDiagnosis}
            className={`px-16 py-6 bg-gold text-obsidian rounded-full font-black text-lg shadow-2xl transition-all 
                        ${loading ? 'opacity-50 cursor-wait animate-pulse' : 'hover:scale-105 active:scale-95'}`}
          >
            {loading ? 'ANALYZING...' : '⚡ 生成深度分析報告'}
          </button>
          
          {report && (
              <button 
                onClick={() => handlePrint()}
                className="px-12 py-6 border-2 border-gold text-gold rounded-full font-black text-lg hover:bg-gold hover:text-obsidian transition-all"
              >
                📥 導出 PDF 報告
              </button>
          )}
        </div>

        {/* 🖨️ 報告顯示區 (這裡的內容會被印出) */}
        {report && (
          <div ref={reportRef} className="print-container mt-20 p-10 md:p-20 bg-[#0F0F0F] rounded-[3rem] border border-gold/20 gold-glow">
            
            {/* 只在列印時隱藏，平時顯示精美的 NovaShin 嚴選 Header */}
            <div className="text-center mb-16 border-b border-gold/20 pb-10">
                <div className="text-gold tracking-[1em] text-[10px] mb-4 uppercase">Official Lab Report</div>
                <h1 className="text-5xl md:text-7xl font-black text-gold-bright mb-4 tracking-tighter">
                    NOVA<span className="text-white">SHIN</span> <span className="bg-gold text-obsidian px-3 ml-2">嚴選</span>
                </h1>
                <p className="text-gold-dim text-sm tracking-[0.4em] font-serif italic">Certified by Novashin Audio Laboratory</p>
                <div className="mt-8 text-[9px] text-white/20 font-mono">ID: NS-{Math.random().toString(36).substr(2, 9).toUpperCase()} | 2026 EDITION</div>
            </div>

            <article className="prose prose-invert prose-gold max-w-none 
                                font-serif text-paper/90
                                print:prose-black print:text-black
                                prose-headings:text-gold-bright prose-headings:font-black
                                prose-h1:hidden 
                                prose-h2:text-2xl prose-h2:tracking-tight prose-h2:mt-12
                                prose-p:leading-loose prose-p:text-lg
                                prose-li:text-gold prose-li:font-bold">
              <ReactMarkdown>{report}</ReactMarkdown>
            </article>

            {/* 頁尾 */}
            <div className="mt-24 pt-10 border-t border-gold/10 flex justify-between items-center text-[9px] text-gold/30 tracking-[0.3em] font-mono">
                <span>© NOVASHIN AUDIO LAB</span>
                <span className="hidden print:block">SYSTEM DEEP ANALYSIS REPORT</span>
                <span>AUTHENTIC REPORT</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
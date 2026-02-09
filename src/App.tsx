import { useState, useRef } from 'react'
import { equipmentDb, type Equipment, type EquipmentType } from './equipmentDb' 
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
    
    // 修正 TypeScript 型別比對問題，建立一個映射表
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

  // PDF 導出功能
  const handlePrint = useReactToPrint({
    contentRef: reportRef,
    documentTitle: `NovaShin_Strictly_Selected_Report`,
  });

  const generateDiagnosis = async () => {
    const hasSelection = Object.values(selected).some(v => v !== '') || customInput.trim() !== '';
    if (!hasSelection) {
      alert('請至少選擇或輸入一項器材！');
      return;
    }
    
    setLoading(true);
    setReport(''); 
    
    try {
      const modelName = "gemini-2.5-flash"; 
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY.trim()}`;
      
      const dbContext = Object.entries(selected)
        .map(([key, id]) => {
          if (!id) return null;
          const item = getInfo(id);
          return item ? `[${key}] ${item.brand} ${item.model} (規格:${item.physicsNote} / 特性:${item.sonicSignature})` : null;
        }).filter(Boolean).join('\n');

      const promptText = `
        你現在是 Novashin 音響實驗室的首席分析官。請針對以下清單撰寫一份深度分析報告。
        系統配置：
        ${dbContext}
        使用者補充：${customInput}

        要求：
        1. 語調：極致專業、客觀、老錢風。結合電子學物理分析與玄學聽感。
        2. 文章內「絕對不要」提到任何 Novashin 給予建議的主觀字眼，請用客觀陳述。
        3. 格式：Markdown 表格與標題。
        4. 標題使用：「系統深度剖析報告」。
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
          throw new Error(data.error?.message || "AI 無回應");
      }
    } catch (error: any) {
      setReport(`❌ 分析失敗：${error.message}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-obsidian py-12 px-4 md:px-8 font-sans">
      <header className="text-center mb-16 no-print">
        <div className="text-gold tracking-[0.8em] text-[10px] mb-4 uppercase opacity-50 font-bold">Project Manhattan</div>
        <h1 className="text-5xl md:text-7xl font-black text-gold-gradient mb-4 tracking-tighter">
          NOVASHIN <span className="font-light italic">LAB</span>
        </h1>
        <p className="text-text-main/40 tracking-[0.3em] text-xs uppercase">終極系統診斷：12 階段完美路徑</p>
      </header>

      <main className="max-w-7xl mx-auto space-y-10 pb-20">
        
        {/* 1-4: 數位前端 */}
        <section className="bg-dark-panel/30 p-6 md:p-8 rounded-3xl border border-gold/10 no-print shadow-2xl">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-[0.1em] border-b border-gold/10 pb-4">
            <span className="text-xl mr-3">💿</span> 數位前端 (Digital Source)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {renderSection(commonProps, "source", "選擇純轉盤...", "1: 純訊源 / Source", 1, "s1")}
            {renderSection(commonProps, "dac", "選擇純 DAC...", "2: 數類轉換 / DAC", 2, "s2")}
            {renderSection(commonProps, "ddc", "選擇 DDC...", "3: 數位介面 / DDC", 3, "s3")}
            {renderSection(commonProps, "streaming_dac", "選擇串流 DAC...", "4: 串流 DAC 合併機", 4, "s4")}
          </div>
        </section>

        {/* 5-7: 類比放大 */}
        <section className="bg-dark-panel/30 p-6 md:p-8 rounded-3xl border border-gold/10 gold-glow no-print shadow-2xl">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-[0.1em] border-b border-gold/10 pb-4">
            <span className="text-xl mr-3">⚡</span> 類比放大 (Amplification)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderSection(commonProps, "preamp", "選擇前級...", "5: 前級擴大機", 5, "s5")}
            {renderSection(commonProps, "poweramp", "選擇後級...", "6: 後級擴大機", 6, "s6")}
            {renderSection(commonProps, "amp", "選擇綜擴...", "7: 綜合擴大機", 7, "s7")}
          </div>
        </section>

        {/* 8-9: 揚聲系統 */}
        <section className="bg-dark-panel/30 p-6 md:p-8 rounded-3xl border border-gold/10 no-print shadow-2xl">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-[0.1em] border-b border-gold/10 pb-4">
            <span className="text-xl mr-3">🔊</span> 揚聲系統 (Speakers)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderSection(commonProps, "speaker", "選擇主喇叭...", "8: 靈魂揚聲器", 8, "s8")}
            {renderSection(commonProps, "subwoofer", "選擇重低音...", "9: 極低頻 / Sub", 9, "s9")}
          </div>
        </section>

        {/* 10-12: 優化配件 */}
        <section className="bg-dark-panel/30 p-6 md:p-8 rounded-3xl border border-gold/10 no-print shadow-2xl">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-[0.1em] border-b border-gold/10 pb-4">
            <span className="text-xl mr-3">🔌</span> 配件優化 (Accessories)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderSection(commonProps, "cable", "選擇線材...", "10: 發燒線材", 10, "s10")}
            {renderSection(commonProps, "wall_outlet", "選擇壁插...", "11: 電源壁插", 11, "s11")}
            {renderSection(commonProps, "feet", "選擇墊材...", "12: 避震腳墊", 12, "s12")}
          </div>
        </section>

        {/* 13: 自定義 */}
        <section className="bg-gradient-to-b from-dark-panel/60 to-obsidian p-8 rounded-3xl border border-gold/30 no-print shadow-2xl">
          <h2 className="text-gold-bright text-lg font-bold mb-4 flex items-center tracking-[0.1em]">
            <span className="bg-gold text-obsidian px-2 py-0.5 rounded mr-3 text-sm font-black">13</span>
            自定義裝備 (Custom Gear)
          </h2>
          <textarea
            className="w-full bg-black/50 border border-gold/30 rounded-xl p-4 text-paper placeholder-white/20 focus:border-gold outline-none transition-all h-32"
            placeholder="輸入任何型號或特殊補充..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
          />
        </section>

        {/* 按鈕 */}
        <div className="text-center pt-8 no-print flex justify-center gap-6">
          <button 
            disabled={loading}
            onClick={generateDiagnosis}
            className={`px-12 py-5 bg-gold text-obsidian rounded-full font-bold text-lg shadow-2xl transition-all ${loading ? 'opacity-50 cursor-wait' : 'hover:scale-105 active:scale-95'}`}
          >
            {loading ? 'Novashin AI 深度掃描中...' : '⚡ 生成診斷報告'}
          </button>
          
          {report && (
              <button 
                onClick={() => handlePrint()}
                className="px-12 py-5 border-2 border-gold text-gold rounded-full font-bold text-lg hover:bg-gold hover:text-obsidian transition-all"
              >
                📥 導出 PDF
              </button>
          )}
        </div>

        {/* 🖨️ 報告顯示區 */}
        {report && (
          <div ref={reportRef} className="print-container mt-20 p-10 md:p-20 bg-white/5 rounded-[2.5rem] border border-gold/20 gold-glow">
            {/* PDF 刊頭 */}
            <div className="hidden print:block text-center mb-12 border-b-4 border-black pb-8">
                <h1 className="text-5xl font-black text-black mb-2 tracking-tighter">NOVA<span className="text-[#C9A84C]">SHIN</span> 嚴選</h1>
                <p className="text-sm text-gray-500 tracking-[0.6em] font-bold uppercase">Audio Laboratory Certified Report</p>
                <div className="mt-4 text-[10px] text-gray-400">報告編號：NS-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
            </div>

            <article className="prose prose-invert prose-gold max-w-none 
                                print:prose-black print:text-black
                                prose-headings:text-gold-bright prose-headings:font-black
                                prose-table:border-gold/20 prose-th:bg-gold/5">
              <ReactMarkdown>{report}</ReactMarkdown>
            </article>

            {/* PDF 頁尾 */}
            <div className="hidden print:flex justify-between items-center mt-20 pt-6 border-t border-gray-200 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <span>© 2026 Novashin Audio Laboratory</span>
                <span>系統深度分析報告</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
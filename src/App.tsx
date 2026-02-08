import { useState } from 'react'
// 修正點：引入所有需要的型別和資料
import { equipmentDb, type Equipment } from './equipmentDb' 
import { GoogleGenerativeAI } from "@google/generative-ai"
import ReactMarkdown from 'react-markdown'

// 安全獲取 API Key
const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// 這裡定義一個 Helper Type，讓 renderSection 知道它會收到什麼
type AppHelperProps = {
    selected: Record<string, string>;
    handleSelect: (type: string, id: string) => void;
    // getInfo 也要傳入，但為了簡潔，我們在 App 裡面處理
    getInfo: (id: string) => Equipment | undefined;
}


// 核心選單渲染組件 (最終的 Helper Function)
const renderSection = (
  { selected, handleSelect, getInfo }: AppHelperProps, // 這裡接收所有需要的依賴
  type: string, 
  subtitle: string, 
  label: string
) => {
    // 找出符合類型的器材 (這裡可以直接使用 equipmentDb 因為它是被 import 的)
    const filteredItems = equipmentDb.filter(e => e.type.includes(type) || (type === 'amp' && (e.type === 'preamp' || e.type === 'poweramp')));

    // 依照 Brand (品牌名稱) 進行 A-Z 排序
    const sortedItems = [...filteredItems].sort((a, b) => a.brand.localeCompare(b.brand));

    const currentItem = getInfo(selected[type]);

    return (
      <div className="flex-1">
        <label className="text-gold-dim text-[10px] font-bold tracking-[0.2em] mb-2 block uppercase">{label}</label>
        <select 
          className="w-full bg-dark-panel border border-gold/20 p-4 rounded-lg text-text-main focus:border-gold outline-none transition-all text-sm"
          value={selected[type] || ''}
          onChange={(e) => handleSelect(type, e.target.value)}
        >
          <option value="">{subtitle}</option>
          {sortedItems.map(item => (
            <option key={item.id} value={item.id}>
                {item.brand} - {item.model} ({item.sonicSignature.split('、')[0]})
            </option>
          ))}
        </select>
        {currentItem && (
          <div className="mt-3 text-[10px] text-gold/60 italic px-1 animate-pulse">
              「{currentItem.sonicSignature}」
          </div>
        )}
      </div>
    );
};


function App() {
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [report, setReport] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSelect = (type: string, id: string) => {
    setSelected(prev => ({ ...prev, [type]: id }))
  }

  const getInfo = (id: string) => equipmentDb.find(e => e.id === id)

  const commonProps = { selected, handleSelect, getInfo }; // 集中傳遞公共參數

  // 核心功能：呼叫 AI 生成報告
  const generateDiagnosis = async () => {
    // ... (這段邏輯跟上次一樣，請保持不變) ...
    if (!selected.amp && !selected.speaker) {
      alert('請至少選擇「擴大機」或「喇叭」！');
      return;
    }
    
    if (!genAI) {
      setReport('🚨 嚴重錯誤：API Key 未載入，請檢查 .env 檔案。');
      return;
    }

    setLoading(true);
    setReport(''); 
    
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      const systemContext = Object.entries(selected)
        .map(([type, id]) => {
          const item = getInfo(id);
          return item ? `[${type}] ${item.brand} ${item.model}: ${item.sonicSignature}. (Novashin評語: ${item.novashinVerdict})` : '';
        }).join('\n');

      const prompt = `
        你現在是 Novashin 音響實驗室的總編輯。請針對以下組合寫一份深度分析報告：
        ${systemContext}
        
        要求：
        1. 語氣專業、優雅、發燒友風格 (提及活生感、音場、密度)。
        2. 結構：
           # 終極進化：系統深度分析報告
           ## 前言
           ## 組件概覽
           ## 化學反應分析
           ## 救援計畫與升級建議
        3. 使用 Markdown 格式。
      `;

      const result = await model.generateContent(prompt);
      setReport(result.response.text());
    } catch (error) {
      console.error(error);
      setReport('❌ 分析失敗：請稍後再試，或檢查 API Key 是否正確。');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-obsidian py-16 px-6 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gold-gradient mb-4 tracking-tighter">
          NOVASHIN <span className="font-light">音響實驗室</span>
        </h1>
        <p className="text-text-main/40 tracking-[0.5em] text-sm uppercase">Ultimate System Analysis</p>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        
        {/* LEVEL 1 - 核心 */}
        <section className="bg-dark-panel/40 p-8 rounded-3xl border border-gold/10 gold-glow">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-widest">● LEVEL 1 - 核心系統</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {renderSection(commonProps, "amp", "選擇擴大機...", "AMPLIFIER")}
            {renderSection(commonProps, "speaker", "選擇喇叭...", "LOUDSPEAKER")}
          </div>
        </section>

        {/* LEVEL 2 */}
        <section className="bg-dark-panel/40 p-8 rounded-3xl border border-gold/10">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-widest">● LEVEL 2 - 數位訊源</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {renderSection(commonProps, "streamer", "選擇串流...", "STREAMER")}
            {renderSection(commonProps, "dac", "選擇 DAC...", "DAC")}
          </div>
        </section>

        {/* LEVEL 3 */}
        <section className="bg-dark-panel/40 p-8 rounded-3xl border border-gold/10">
          <h2 className="text-gold text-sm font-bold mb-6 flex items-center tracking-widest">● LEVEL 3 - 周邊與優化</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {renderSection(commonProps, "subwoofer", "選擇超低音...", "SUBWOOFER")}
            {renderSection(commonProps, "cable", "選擇線材...", "CABLE / INTERCONNECT")}
            {renderSection(commonProps, "power", "選擇電源處理...", "POWER CONDITIONER")}
          </div>
        </section>


        {/* 按鈕 */}
        <div className="text-center">
          <button 
            disabled={loading}
            onClick={generateDiagnosis}
            className={`px-16 py-5 bg-gradient-to-r from-gold to-gold-dim text-obsidian rounded-full font-bold text-xl shadow-[0_0_30px_rgba(201,168,76,0.3)] transition-all ${loading ? 'opacity-50' : 'hover:scale-105 active:scale-95'}`}
          >
            {loading ? 'AI 正在運算中...' : '⚡ 生成終極進化報告'}
          </button>
        </div>

        {/* 報告區 */}
        {report && (
          <div className="mt-12 p-10 bg-dark-panel rounded-3xl border border-gold/20 animate-in fade-in zoom-in duration-500">
            <div className="prose prose-invert prose-gold max-w-none text-paper leading-relaxed">
              <ReactMarkdown>{report}</ReactMarkdown>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
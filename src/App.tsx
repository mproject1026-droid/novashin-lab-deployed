import { useState, useRef, useMemo } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// 從 Vite 環境變數讀取 API Key
const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

// 1. 定義八大中文類別與資料庫類型的映射
const CATEGORIES = [
  { key: 'source', label: '訊源', types: ['streamer'] },
  { key: 'dac', label: 'DAC', types: ['dac'] },
  { key: 'preamp', label: '前級', types: ['preamp'] },
  { key: 'poweramp', label: '後級', types: ['poweramp'] },
  { key: 'intamp', label: '綜合擴大機', types: ['amp'] },
  { key: 'speaker', label: '喇叭', types: ['speaker', 'subwoofer'] },
  { key: 'stand', label: '腳座', types: ['other'] },
  { key: 'cable', label: '電線', types: ['cable', 'power'] },
];

const App = () => {
  const [selected, setSelected] = useState<Record<string, { brand: string; model: string }>>({});
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // 2. 核心邏輯：根據分類自動過濾品牌名單 (從你那 527 筆資料裡提煉)
  const brandMaps = useMemo(() => {
    const maps: Record<string, string[]> = {};
    CATEGORIES.forEach(cat => {
      const filtered = equipmentDb.filter(e => cat.types.includes(e.type));
      maps[cat.key] = Array.from(new Set(filtered.map(e => e.brand))).sort();
    });
    return maps;
  }, []);

  const handleInputChange = (key: string, field: 'brand' | 'model', value: string) => {
    setSelected(prev => ({
      ...prev,
      [key]: { ...prev[key] || { brand: '', model: '' }, [field]: value }
    }));
  };

  // 3. 核心 API 呼叫：直接對接 AI Studio (Gemini 1.5 Flash)
  const analyzeWithAI = async (brand: string, model: string, categoryLabel: string) => {
    // 雖然你有 $300，但 API Key 沒讀到還是會掛掉
    if (!API_KEY) {
      console.error("找不到 API Key，請檢查 .env 檔案中的 VITE_GEMINI_KEY");
      return null;
    }

    const prompt = `你是頂尖音響專家 Novashin。分析器材：[${brand}] [${model}]，類別：[${categoryLabel}]。
    請以 JSON 格式回傳（嚴格符合 Equipment Interface）：
    {
      "sonicSignature": "聲音特色深度分析...",
      "pairingAdvice": "搭配建議...",
      "physicsNote": "硬體技術筆記...",
      "novashinVerdict": "一段犀利、幽默且專業的毒舌評價。"
    }`;

    try {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { response_mime_type: "application/json" }
        })
      });
      
      const data = await resp.json();
      const text = data.candidates[0].content.parts[0].text;
      return JSON.parse(text);
    } catch (e) {
      console.error("AI 分析出錯:", e);
      return null;
    }
  };

  const generateReport = async () => {
    const activeKeys = Object.keys(selected).filter(k => selected[k]?.brand && selected[k]?.model);
    if (activeKeys.length === 0) return alert("請至少填入一項器材");

    setLoading(true);
    let fullReport = `# NOVASHIN LAB 系統診斷報告\n\n---\n\n`;

    const analysisPromises = activeKeys.map(async (k) => {
      const cat = CATEGORIES.find(c => c.key === k);
      const data = await analyzeWithAI(selected[k].brand, selected[k].model, cat?.label || "");
      return { ...selected[k], ...data, category: cat?.label };
    });

    const results = await Promise.all(analysisPromises);

    results.forEach(info => {
      if (!info) return;
      fullReport += `### 【${info.category}】${info.brand} ${info.model}\n`;
      fullReport += `**聲音特徵**：${info.sonicSignature || "數據分析失敗"}\n\n`;
      fullReport += `**搭配建議**：${info.pairingAdvice || "無資料"}\n\n`;
      fullReport += `**技術細節**：${info.physicsNote || "無資料"}\n\n`;
      fullReport += `> **Novashin 總結**：${info.novashinVerdict || "這器材我也看不透。"}\n\n---\n\n`;
    });

    setReport(fullReport);
    setLoading(false);
    setTimeout(() => reportRef.current?.scrollIntoView({ behavior: 'smooth' }), 500);
  };

  return (
    <div className="min-h-screen bg-obsidian text-text-main p-8 selection:bg-gold selection:text-black">
      <main className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="text-6xl font-black text-gold-gradient tracking-tighter mb-4">PROJECT MANHATTAN</h1>
          <p className="text-gold tracking-[0.4em] text-[10px] opacity-40 uppercase">AI-Driven Acoustic Intelligence Suite</p>
        </header>

        {/* 網格佈局：八大分類 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div key={cat.key} className="bg-dark-panel p-5 rounded-lg border border-gold/10 hover:border-gold/30 transition-all shadow-xl">
              <label className="text-gold-dim text-[11px] font-black tracking-[0.2em] mb-4 flex items-center opacity-60">
                <span className="bg-gold text-black px-2 py-0.5 mr-2">{idx + 1}</span> {cat.label}
              </label>
              
              <div className="space-y-3">
                <select 
                  className="w-full bg-obsidian border border-gold/20 p-3 text-sm text-white focus:border-gold outline-none cursor-pointer"
                  onChange={(e) => handleInputChange(cat.key, 'brand', e.target.value)}
                >
                  <option value="">選擇品牌</option>
                  {(brandMaps[cat.key] || []).map(b => <option key={b} value={b}>{b}</option>)}
                  <option value="Other">其他品牌 (自行輸入型號)</option>
                </select>

                <input 
                  placeholder="輸入正確型號" 
                  className="w-full bg-obsidian border border-gold/20 p-3 text-sm text-white focus:border-gold outline-none placeholder:opacity-20"
                  onChange={(e) => handleInputChange(cat.key, 'model', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={generateReport}
          disabled={loading}
          className="w-full mt-12 py-6 bg-gold text-black font-black uppercase tracking-[0.8em] hover:bg-gold-bright transition-all disabled:opacity-30 active:scale-95"
        >
          {loading ? "數據合成中 ANALYZING..." : "開始系統診斷"}
        </button>

        {/* 報告呈現 */}
        {report && (
          <div ref={reportRef} className="mt-20 p-12 bg-white text-black rounded shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
             <article className="prose prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
             </article>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
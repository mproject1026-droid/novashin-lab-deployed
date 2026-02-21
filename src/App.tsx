import { useState, useRef, useMemo } from 'react'
import { equipmentDb } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

// 系統類別定義
const CATEGORIES = [
  { key: 'source', label: '訊源' },
  { key: 'dac', label: 'DAC' },
  { key: 'preamp', label: '前級' },
  { key: 'poweramp', label: '後級' },
  { key: 'intamp', label: '綜合擴大機' },
  { key: 'speaker', label: '喇叭' },
  { key: 'stand', label: '腳座' },
  { key: 'cable', label: '電線' },
];

export interface Equipment {
  id: string;
  brand: string;
  model: string;
  type: string;
  sonicSignature: string;
  pairingAdvice: string;
  physicsNote: string;
  novashinVerdict: string;
}

const App = () => {
  const [selected, setSelected] = useState<Record<string, { brand: string; model: string }>>({});
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // 僅從 equipmentDb 提取品牌清單作為選單使用，完全不讀取其器材屬性資料
  const brandList = useMemo(() => {
    return Array.from(new Set(equipmentDb.map(e => e.brand))).sort();
  }, []);

  const handleInputChange = (key: string, field: 'brand' | 'model', value: string) => {
    setSelected(prev => ({
      ...prev,
      [key]: { ...prev[key] || { brand: '', model: '' }, [field]: value }
    }));
  };

  // 完全依賴 LLM 的資料獲取邏輯
  const fetchEquipmentInfoFromAI = async (brand: string, model: string, categoryLabel: string): Promise<Equipment> => {
    const prompt = `分析目標：品牌 [${brand}]，型號 [${model}]，設備類別 [${categoryLabel}]。
請基於客觀聲學數據與市場評價，提供以下 JSON 格式的結構化資料，不輸出任何其他文字：
{
  "id": "ai-${Date.now()}",
  "brand": "${brand}",
  "model": "${model}",
  "type": "${categoryLabel}",
  "sonicSignature": "客觀描述其頻段分佈、動態表現與聲音特徵。",
  "pairingAdvice": "基於電氣特性（如阻抗、靈敏度、功率需求）的搭配建議。",
  "physicsNote": "核心硬體架構、單體材質、解碼晶片等物理規格描述。",
  "novashinVerdict": "專業、具備批判性與個人觀點的總結評價。"
}`;

    try {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          contents: [{ parts: [{ text: prompt }] }],
          // 強制指定回傳格式為 JSON
          generationConfig: { response_mime_type: "application/json" } 
        })
      });
      const data = await resp.json();
      const text = data.candidates[0].content.parts[0].text;
      return JSON.parse(text);
    } catch (e) {
      return { 
        id: 'error', brand, model, type: categoryLabel, 
        sonicSignature: "API 請求失敗或超時。", 
        pairingAdvice: "無法取得資料。", 
        physicsNote: "無法取得資料。", 
        novashinVerdict: "系統無法解析此設備。" 
      };
    }
  };

  const generateReport = async () => {
    const activeKeys = Object.keys(selected).filter(k => selected[k]?.brand && selected[k]?.model);
    if (activeKeys.length === 0) return alert("系統錯誤：未檢測到有效輸入參數。");

    setLoading(true);
    let fullReport = `# NOVASHIN LAB 系統分析報告\n\n`;

    // 併發處理所有已輸入的器材，提升 API 請求效率
    const results = await Promise.all(
      activeKeys.map(k => {
        const catLabel = CATEGORIES.find(c => c.key === k)?.label || '未分類';
        return fetchEquipmentInfoFromAI(selected[k].brand, selected[k].model, catLabel);
      })
    );

    results.forEach(info => {
      fullReport += `## 【${info.brand}】${info.model} (${info.type})\n`;
      fullReport += `**聲音特徵**：${info.sonicSignature}\n\n`;
      fullReport += `**搭配建議**：${info.pairingAdvice}\n\n`;
      fullReport += `**技術筆記**：${info.physicsNote}\n\n`;
      fullReport += `> **Novashin 總結**：${info.novashinVerdict}\n\n---\n\n`;
    });

    setReport(fullReport);
    setLoading(false);
    setTimeout(() => reportRef.current?.scrollIntoView({ behavior: 'smooth' }), 500);
  };

  return (
    <div className="min-h-screen bg-obsidian text-text-main p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-black text-gold-gradient tracking-tighter mb-4">PROJECT MANHATTAN</h1>
          <div className="text-gold-dim tracking-[0.3em] text-xs uppercase opacity-60">LLM 驅動即時聲學分析系統</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div key={cat.key} className="bg-dark-panel p-5 rounded-lg border border-gold/10 relative">
              <label className="text-gold-dim text-[11px] font-black tracking-[0.2em] mb-4 flex items-center opacity-60">
                <span className="bg-gold text-black px-2 py-0.5 mr-2">{idx + 1}</span> {cat.label}
              </label>
              
              <div className="space-y-3">
                <select 
                  className="w-full bg-obsidian border border-gold/20 p-3 text-sm text-white focus:border-gold outline-none"
                  onChange={(e) => handleInputChange(cat.key, 'brand', e.target.value)}
                >
                  <option value="">選擇品牌</option>
                  {brandList.map(b => <option key={b} value={b}>{b}</option>)}
                  <option value="Other">自訂品牌</option>
                </select>

                <input 
                  placeholder="輸入型號" 
                  className="w-full bg-obsidian border border-gold/20 p-3 text-sm text-white focus:border-gold outline-none"
                  onChange={(e) => handleInputChange(cat.key, 'model', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={generateReport}
          disabled={loading}
          className="w-full mt-12 py-5 bg-gold text-black font-black uppercase tracking-[0.5em] hover:bg-gold-bright transition-all disabled:opacity-30 cursor-pointer"
        >
          {loading ? "DATA SYNTHESIZING..." : "EXECUTE LLM ANALYSIS"}
        </button>

        {report && (
          <div ref={reportRef} className="mt-16 bg-white p-10 text-black shadow-2xl relative">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
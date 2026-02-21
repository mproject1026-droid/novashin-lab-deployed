import { useState, useRef } from 'react'
import { equipmentDb, type Equipment, type EquipmentType } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

// 定義選擇狀態：每個類別現在存的是 { brand, model }
type SelectedState = Record<string, { brand: string; model: string }>;

const App = () => {
  const [selected, setSelected] = useState<SelectedState>({});
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // 處理輸入變更
  const handleInputChange = (key: string, field: 'brand' | 'model', value: string) => {
    setSelected(prev => ({
      ...prev,
      [key]: { ...prev[key], [field]: value }
    }));
  };

  // 核心：獲取器材資訊 (優先查表，查不到就問 AI)
  const fetchEquipmentInfo = async (brand: string, model: string, type: string): Promise<Equipment> => {
    // 1. 先在現有的 500 多筆資料找 (模糊匹配)
    const localMatch = equipmentDb.find(
      e => e.brand.toLowerCase() === brand.toLowerCase() && e.model.toLowerCase() === model.toLowerCase()
    );
    if (localMatch) return localMatch;

    // 2. 找不到，調用 AI Studio
    const prompt = `你是一位音響專家 Novashin。請分析以下器材：品牌 [${brand}]，型號 [${model}]，類別 [${type}]。
    請直接回傳以下格式的 JSON，不要有任何其他文字：
    {
      "id": "custom-id",
      "brand": "${brand}",
      "model": "${model}",
      "type": "${type}",
      "sonicSignature": "聲音特色的深度分析...",
      "pairingAdvice": "專業的搭配建議...",
      "physicsNote": "核心技術規格簡述...",
      "novashinVerdict": "一段犀利、幽默且帶有 Novashin 個人色彩的總結。"
    }`;

    try {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await resp.json();
      const text = data.candidates[0].content.parts[0].text;
      return JSON.parse(text.replace(/```json|```/g, ""));
    } catch (e) {
      return { 
        id: 'error', brand, model, type: type as any, 
        sonicSignature: "AI 暫時離線", pairingAdvice: "請檢查網路", 
        physicsNote: "無法取得資料", novashinVerdict: "這台器材太神祕了，連我都看不透。" 
      };
    }
  };

  const generateReport = async () => {
    const activeKeys = Object.keys(selected).filter(k => selected[k].brand && selected[k].model);
    if (activeKeys.length === 0) return alert("請至少填入一項器材");

    setLoading(true);
    let fullReport = `# NOVASHIN LAB 系統診斷報告\n\n`;

    // 併發處理所有輸入的器材
    const results = await Promise.all(
      activeKeys.map(k => fetchEquipmentInfo(selected[k].brand, selected[k].model, k))
    );

    results.forEach(info => {
      fullReport += `## [${info.brand}] ${info.model}\n`;
      fullReport += `**聲音特徵**：${info.sonicSignature}\n\n`;
      fullReport += `**搭配建議**：${info.pairingAdvice}\n\n`;
      fullReport += `**技術筆記**：${info.physicsNote}\n\n`;
      fullReport += `> **Novashin 總結**：${info.novashinVerdict}\n\n---\n\n`;
    });

    setReport(fullReport);
    setLoading(false);
  };

  // 渲染單個輸入區塊
  const renderInputSection = (key: string, label: string) => (
    <div className="flex-1 min-w-[300px] mb-6 p-4 bg-dark-panel rounded-lg border border-gold/20">
      <label className="text-gold text-[12px] font-bold mb-3 block uppercase tracking-widest">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        <input 
          placeholder="Brand 品牌" 
          className="bg-obsidian border border-gold/30 p-2 text-sm text-white focus:border-gold outline-none"
          onChange={(e) => handleInputChange(key, 'brand', e.target.value)}
        />
        <input 
          placeholder="Model 型號" 
          className="bg-obsidian border border-gold/30 p-2 text-sm text-white focus:border-gold outline-none"
          onChange={(e) => handleInputChange(key, 'model', e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-gold-gradient mb-2">PROJECT MANHATTAN</h1>
        <p className="opacity-50 text-sm">Input your gear. Let AI do the audition.</p>
      </header>

      <div className="flex flex-wrap gap-4">
        {renderInputSection('source', 'Digital Source')}
        {renderInputSection('dac', 'D/A Converter')}
        {renderInputSection('amp', 'Amplifier')}
        {renderInputSection('speaker', 'Loudspeakers')}
      </div>

      <button 
        onClick={generateReport}
        disabled={loading}
        className="w-full mt-8 py-4 bg-gold text-black font-bold uppercase tracking-[0.5em] hover:bg-gold-bright transition-all disabled:opacity-50"
      >
        {loading ? "ANALYZING..." : "GENERATE SYSTEM REPORT"}
      </button>

      {report && (
        <div ref={reportRef} className="mt-12 p-8 bg-white text-black rounded-sm shadow-2xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;
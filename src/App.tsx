import { useState, useRef, useMemo } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

// 狀態現在改為儲存：{ brand, model }
type SelectedState = Record<string, { brand: string; model: string }>;

const App = () => {
  const [selected, setSelected] = useState<SelectedState>({});
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // 1. 理性提取品牌清單 (從你現有的 500 多筆資料自動生成)
  const allBrands = useMemo(() => {
    const brands = Array.from(new Set(equipmentDb.map(e => e.brand)));
    return brands.sort((a, b) => a.localeCompare(b));
  }, []);

  const handleInputChange = (stateKey: string, field: 'brand' | 'model', value: string) => {
    setSelected(prev => ({
      ...prev,
      [stateKey]: { ...prev[stateKey], [field]: value }
    }));
  };

  // 2. 核心邏輯：先在資料庫找，找不到才叫 AI
  const fetchEquipmentInfo = async (brand: string, model: string, type: string): Promise<Equipment> => {
    // 優先匹配資料庫
    const match = equipmentDb.find(e => 
      e.brand.toLowerCase() === brand.toLowerCase() && 
      e.model.toLowerCase() === model.toLowerCase()
    );
    if (match) return match;

    // 資料庫沒有，啟動 AI Studio
    const prompt = `你是一位音響專家 Novashin。分析器材：[${brand}] [${model}]，類別：[${type}]。
    回傳 JSON：{ "id": "custom", "brand": "${brand}", "model": "${model}", "type": "${type}", "sonicSignature": "...", "pairingAdvice": "...", "physicsNote": "...", "novashinVerdict": "..." }
    (Verdict 請保持你犀利、幽默、帶點毒舌的風格)`;

    try {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await resp.json();
      const text = data.candidates[0].content.parts[0].text;
      return JSON.parse(text.replace(/```json|```/g, ""));
    } catch (e) {
      return { id: 'err', brand, model, type: type as any, sonicSignature: "無法解析", pairingAdvice: "查無資料", physicsNote: "查無資料", novashinVerdict: "這台我沒聽過，可能太稀有了。" };
    }
  };

  const generateReport = async () => {
    const activeKeys = Object.keys(selected).filter(k => selected[k]?.brand && selected[k]?.model);
    if (activeKeys.length === 0) return alert("請填寫器材");

    setLoading(true);
    let fullReport = `# NOVASHIN LAB 診斷報告\n\n`;

    const results = await Promise.all(activeKeys.map(k => fetchEquipmentInfo(selected[k].brand, selected[k].model, k)));

    results.forEach(info => {
      fullReport += `## ${info.brand} ${info.model}\n\n**聲音特徵**：${info.sonicSignature}\n\n**搭配建議**：${info.pairingAdvice}\n\n**技術筆記**：${info.physicsNote}\n\n> **Novashin 總結**：${info.novashinVerdict}\n\n---\n\n`;
    });

    setReport(fullReport);
    setLoading(false);
    setTimeout(() => reportRef.current?.scrollIntoView({ behavior: 'smooth' }), 500);
  };

  // 3. 恢復你原本的高級感 UI 渲染
  const renderSection = (stateKey: string, label: string, index: number) => (
    <div key={stateKey} className="flex-1 min-w-[280px] mb-8 no-print p-4 bg-dark-panel rounded-lg border border-gold/10">
      <label className="text-gold-dim text-[11px] font-black tracking-[0.2em] mb-4 block uppercase opacity-60">
        <span className="bg-gold text-black px-2 py-0.5 mr-2">{index}</span> {label}
      </label>
      
      <div className="space-y-3">
        {/* 品牌選擇 */}
        <select 
          className="w-full bg-obsidian border border-gold/20 p-3 text-sm text-white focus:border-gold outline-none transition-all"
          onChange={(e) => handleInputChange(stateKey, 'brand', e.target.value)}
        >
          <option value="">選擇品牌</option>
          {allBrands.map(b => <option key={b} value={b}>{b}</option>)}
          <option value="Other">其他品牌</option>
        </select>

        {/* 型號輸入 */}
        <input 
          placeholder="輸入型號 (例如: C2700)" 
          className="w-full bg-obsidian border border-gold/20 p-3 text-sm text-white focus:border-gold outline-none transition-all placeholder:opacity-30"
          onChange={(e) => handleInputChange(stateKey, 'model', e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-obsidian text-text-main font-sans selection:bg-gold selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-20 text-center relative">
          <h1 className="text-6xl font-black tracking-[-0.05em] mb-4 text-gold-gradient">PROJECT MANHATTAN</h1>
          <div className="text-gold tracking-[0.5em] text-xs opacity-50 uppercase">Audio System Analysis Architecture</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderSection('source', 'Digital Source', 1)}
          {renderSection('dac', 'D/A Converter', 2)}
          {renderSection('amp', 'Amplifier', 3)}
          {renderSection('speaker', 'Loudspeakers', 4)}
        </div>

        <button 
          onClick={generateReport}
          disabled={loading}
          className="w-full mt-12 py-6 bg-gold text-black font-black uppercase tracking-[0.8em] hover:bg-gold-bright transition-all disabled:opacity-30"
        >
          {loading ? "DATA SYNTHESIZING..." : "EXECUTE ANALYSIS"}
        </button>

        {/* 報告顯示區 (保留你原本精美的 Markdown 樣式) */}
        {report && (
          <div ref={reportRef} className="report-wrapper mt-20 p-10 bg-white text-black relative">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
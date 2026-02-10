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

  const handlePrint = useReactToPrint({
    contentRef: reportRef,
    documentTitle: `NovaShin_Strictly_Selected_Report`,
  });

  const generateDiagnosis = async () => {
    const hasSelection = Object.values(selected).some(v => v !== '') || customInput.trim() !== '';
    if (!hasSelection) { return; }
    
    setLoading(true);
    setReport(''); 
    
    try {
      const modelName = "gemini-2.5-flash"; 
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY.trim()}`;
      
      const labelMap: Record<string, string> = {
        s1: "訊源", s2: "DAC", s3: "DDC", s4: "串流DAC",
        s5: "前級", s6: "後級", s7: "綜擴", s8: "喇叭",
        s9: "重低音", s10: "線材", s11: "壁插", s12: "腳墊"
      };

      const dbContext = Object.entries(selected)
        .map(([key, id]) => {
          const item = getInfo(id);
          return item ? `[${labelMap[key]}] ${item.brand} ${item.model} (技術細節: ${item.physicsNote} / 聲音特性: ${item.sonicSignature})` : null;
        }).filter(Boolean).join('\n');

      const promptText = `
你現在是 NovaShin 音響實驗室首席分析官。請撰寫一份「頂級音響系統深度分析報告」。

【待分析器材清單】
${dbContext}
【附加裝備補充】: ${customInput}

【報告格式 - 必須嚴格遵守以下 Markdown 結構】

# [系統組合名稱]深度分析

**作者：** NovaShin AI
**日期：** ${new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}

## 前言

（開篇分析這套系統在當代音響版圖中的地位。務實、權威、客觀。每段約60-80字，段落間空一行。）

## 系統組成與各器材特性分析

（簡述系統組合的整體定位。）

### 1. [器材類別]：[品牌] [型號]

（用2-3段文字介紹該器材的技術背景與特色，每段約60-80字。）

> 引用專家評論或論壇觀點 [編號]

| 優點 | 缺點 |
|------|------|
| **優點標題：** 說明文字 | **缺點標題：** 說明文字 |
| **優點標題：** 說明文字 | **缺點標題：** 說明文字 |
| **優點標題：** 說明文字 | **缺點標題：** 說明文字 |

（依此格式逐一分析所有器材，每個器材都要有獨立的 ### 標題、介紹段落、引用、優缺點表格）

## 電子學原理分析

（分層次探討系統的技術原理。）

### 1. [技術主題]

（用段落和條列深入探討。）

- **要點標題：** 說明內容

## 玄學感性描述

（描述整體聲音表現：音場、結像、人聲、樂器質感。）

- **音色與質感：** 描述內容
- **音場與結像：** 描述內容
- **高頻與低頻：** 描述內容

## 優點與缺點分析

| 優點 (Pros) | 缺點 (Cons) |
|-------------|-------------|
| **1. 優點標題：** 說明 | **1. 缺點標題：** 說明 |
| **2. 優點標題：** 說明 | **2. 缺點標題：** 說明 |
| **3. 優點標題：** 說明 | **3. 缺點標題：** 說明 |
| **4. 優點標題：** 說明 | **4. 缺點標題：** 說明 |

## 適合音樂類型

1. **音樂類型名稱：** 說明為何適合
2. **音樂類型名稱：** 說明為何適合
3. **音樂類型名稱：** 說明為何適合
4. **音樂類型名稱：** 說明為何適合

## 結論

（總結這套系統的定位與價值。2-3段，每段約60-80字。）

---

## 參考資料

[1] 來源資訊
[2] 來源資訊
（列出所有引用來源）

【重要規範】
- 嚴格遵循上述 Markdown 層級：# 僅用於主標題，## 用於章節，### 用於子標題
- 優缺點必須使用 Markdown 表格（| 優點 | 缺點 |），不可用其他格式
- 段落間空一行，每段不超過80字
- 關鍵技術術語必須加粗（如 **R-2R**, **Class A**, **Beryllium**）
- 引用使用 > 區塊格式，附上編號
- 客觀、權威、禁止主觀建議語氣
- 必須包含優點與缺點的平衡分析
- 參考資料必須附上
      `;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });

      const data = await response.json();
      setReport(data.candidates[0].content.parts[0].text);
    } catch (error: any) {
      setReport(`❌ 系統連接失敗：${error.message}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-4 md:px-8">
      {/* 網頁刊頭 */}
      <header className="text-center mb-24 no-print">
        <div className="text-gold tracking-[1.5em] text-[10px] mb-6 uppercase font-black opacity-30">Laboratory Intelligence</div>
        <h1 className="text-6xl md:text-[8rem] font-black text-gold-gradient mb-8 tracking-tighter italic leading-none">
            NOVASHIN <span className="font-thin not-italic opacity-80">LAB</span>
        </h1>
        <p className="text-text-main/30 tracking-[0.5em] text-[10px] uppercase font-bold">Project Manhattan - 2026 Edition</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-16 pb-32">
        
        {/* 選單區域 */}
        <section className="grid grid-cols-1 gap-12 no-print">
            <div className="bg-[#0A0A0A] p-12 rounded-[4rem] border border-white/5 shadow-3xl">
                <h3 className="text-gold-dim text-[10px] font-black mb-16 tracking-[0.5em] uppercase text-center border-b border-gold/10 pb-8">I. Digital & Analog Backbone</h3>
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
            </div>

            <div className="bg-[#0A0A0A] p-12 rounded-[4rem] border border-white/5 shadow-3xl">
                <h3 className="text-gold-dim text-[10px] font-black mb-16 tracking-[0.5em] uppercase text-center border-b border-gold/10 pb-8">II. Output & Tuning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {renderSection(commonProps, "speaker", "主喇叭...", "8: Speaker", 8, "s8")}
                    {renderSection(commonProps, "subwoofer", "重低音...", "9: Sub", 9, "s9")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5">
                    {renderSection(commonProps, "cable", "線材...", "10: Cables", 10, "s10")}
                    {renderSection(commonProps, "wall_outlet", "壁插...", "11: Wall Outlet", 11, "s11")}
                    {renderSection(commonProps, "feet", "墊材...", "12: Isolation", 12, "s12")}
                </div>
            </div>
            
            <div className="p-4">
                <textarea
                    className="w-full bg-transparent border-b border-gold/20 p-4 text-gold-bright placeholder-gold/20 focus:border-gold outline-none h-16 text-center text-lg italic"
                    placeholder="13: 自定義裝備 (例如: 古河 NCF 壁插...)"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                />
            </div>
        </section>

        {/* 控制 */}
        <div className="text-center pt-12 no-print space-y-12">
          <button 
            disabled={loading}
            onClick={generateDiagnosis}
            className={`group px-32 py-10 bg-gold text-black rounded-sm font-black text-2xl shadow-[0_40px_80px_rgba(201,168,76,0.3)] transition-all hover:scale-105 active:scale-95`}
          >
            {loading ? 'ANALYZING...' : '⚡ GENERATE LAB REPORT'}
          </button>
          {report && (
            <div>
              <button onClick={() => handlePrint()} className="text-gold-bright/40 hover:text-gold-bright text-xs font-black tracking-[0.5em] transition-all underline underline-offset-8">
                DOWNLOAD PDF CERTIFICATE ↓
              </button>
            </div>
          )}
        </div>

        {/* 報告顯示區 */}
        {report && (
          <div ref={reportRef} className="report-wrapper print-container mt-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gold/40"></div>
            
            {/* 報告刊頭 - NovaShin 嚴選 */}
            <div className="report-header">
                <div className="report-header-subtitle">Audio Laboratory Report</div>
                <h1 className="report-header-title">
                    NOVA<span className="text-white">SHIN</span>
                    <span className="report-header-badge">嚴選</span>
                </h1>
                <div className="report-header-divider"></div>
                <p className="report-header-cert">Audiology Certification</p>
                <div className="report-header-id">
                  ID: NS-{Math.random().toString(36).substr(2, 9).toUpperCase()} | VERIFIED 2026
                </div>
            </div>

            {/* Markdown 報告內容 */}
            <article className="report-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
            </article>

            {/* 報告頁尾 */}
            <div className="report-footer">
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

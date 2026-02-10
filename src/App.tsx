import { useState, useRef } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const API_KEY = import.meta.env.VITE_GEMINI_KEY || "";

type AppHelperProps = {
    selected: Record<string, string>;
    handleSelect: (key: string, id: string) => void;
    getInfo: (id: string) => Equipment | undefined;
}

const renderSection = ({ selected, handleSelect }: AppHelperProps, targetType: string, subtitle: string, label: string, index: number, stateKey: string) => {
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
      <div className="flex-1 min-w-[260px] no-print">
        <label className="text-gold-dim text-[11px] font-black tracking-[0.2em] mb-3 block uppercase flex items-center opacity-60">
            <span className="bg-gold text-black px-2 py-0.5 rounded-sm mr-2 text-[9px] font-mono">{index.toString().padStart(2, '0')}</span>
            {label}
        </label>
        <select 
          className="w-full bg-[#111] p-4 text-text-main focus:outline-none transition-all text-sm cursor-pointer hover:bg-white/5"
          style={{ border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px' }}
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
  const [pdfLoading, setPdfLoading] = useState(false)
  const reportRef = useRef<HTMLDivElement>(null);

  const handleSelect = (key: string, id: string) => {
    setSelected(prev => ({ ...prev, [key]: id }))
  }

  const getInfo = (id: string) => equipmentDb.find(e => e.id === id)
  const commonProps: AppHelperProps = { selected, handleSelect, getInfo };

  /* ===== PDF 下載 (html2pdf.js - 手機/電腦通用) ===== */
  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setPdfLoading(true);

    try {
      // 動態載入 html2pdf.js
      const html2pdf = (await import('html2pdf.js')).default;

      // 建立一個用於 PDF 的克隆元素，套用白底黑字樣式
      const cloneEl = reportRef.current.cloneNode(true) as HTMLElement;
      cloneEl.style.backgroundColor = 'white';
      cloneEl.style.color = 'black';
      cloneEl.style.padding = '20mm';
      cloneEl.style.borderRadius = '0';
      cloneEl.style.border = 'none';

      // 將所有文字改為黑色
      cloneEl.querySelectorAll('*').forEach((el) => {
        const htmlEl = el as HTMLElement;
        const tag = htmlEl.tagName.toLowerCase();
        
        // 標題
        if (['h1', 'h2', 'h3', 'h4'].includes(tag)) {
          htmlEl.style.color = 'black';
          htmlEl.style.webkitTextFillColor = 'black';
        }
        // 段落、列表
        if (['p', 'li', 'span', 'td', 'th'].includes(tag)) {
          htmlEl.style.color = 'black';
        }
        // 粗體
        if (tag === 'strong') {
          htmlEl.style.color = 'black';
        }
        // 引用區塊
        if (tag === 'blockquote') {
          htmlEl.style.borderLeftColor = '#999';
          htmlEl.style.backgroundColor = '#f5f5f5';
        }
        // 表格表頭
        if (tag === 'th') {
          htmlEl.style.backgroundColor = '#f3f3f3';
          htmlEl.style.borderColor = '#ddd';
        }
        // 表格儲存格
        if (tag === 'td') {
          htmlEl.style.borderColor = '#ddd';
        }
      });

      // report-header 區域特殊處理
      const headerTitle = cloneEl.querySelector('.report-header-title') as HTMLElement;
      if (headerTitle) {
        headerTitle.style.color = 'black';
        headerTitle.style.webkitTextFillColor = 'black';
        headerTitle.querySelectorAll('span').forEach(s => {
          s.style.color = 'black';
          s.style.webkitTextFillColor = 'black';
        });
      }
      const badge = cloneEl.querySelector('.report-header-badge') as HTMLElement;
      if (badge) {
        badge.style.backgroundColor = '#333';
        badge.style.color = 'white';
      }
      const subtitle = cloneEl.querySelector('.report-header-subtitle') as HTMLElement;
      if (subtitle) subtitle.style.color = '#666';
      const cert = cloneEl.querySelector('.report-header-cert') as HTMLElement;
      if (cert) cert.style.color = '#666';
      const divider = cloneEl.querySelector('.report-header-divider') as HTMLElement;
      if (divider) divider.style.backgroundColor = '#ccc';
      const headerId = cloneEl.querySelector('.report-header-id') as HTMLElement;
      if (headerId) headerId.style.color = '#999';

      // 頁尾
      const footer = cloneEl.querySelector('.report-footer') as HTMLElement;
      if (footer) {
        footer.style.borderTopColor = '#ddd';
        footer.style.color = '#999';
      }

      // 頂部金色線條移除
      const topLine = cloneEl.querySelector('div[style*="height: 2px"]') as HTMLElement;
      if (topLine) topLine.style.background = '#ddd';

      // H2 底線
      cloneEl.querySelectorAll('.report-content h2').forEach(el => {
        (el as HTMLElement).style.borderBottomColor = '#ddd';
      });

      // hr
      cloneEl.querySelectorAll('.report-content hr').forEach(el => {
        (el as HTMLElement).style.borderTopColor = '#ddd';
      });

      // marker 顏色無法直接改，但列印時不影響

      const opt = {
        margin:       [15, 18, 15, 18], // 上右下左 mm
        filename:     'NovaShin_Audiology_Insight_2026.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true,
          letterRendering: true,
          logging: false,
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
      };

      await html2pdf().set(opt).from(cloneEl).save();

    } catch (error: any) {
      console.error('PDF 生成失敗:', error);
      alert('PDF 下載失敗，請重試。');
    }

    setPdfLoading(false);
  };

  const generateDiagnosis = async () => {
    const hasSelection = Object.values(selected).some(v => v !== '') || customInput.trim() !== '';
    if (!hasSelection) return;
    
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

      const promptText = `你現在是 NovaShin 音響實驗室首席分析官。請撰寫一份「頂級音響系統深度分析報告」。

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
- 參考資料必須附上`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
      });

      const data = await response.json();

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
    <div className="min-h-screen bg-[#050505] py-12 px-4 md:px-8">
      {/* 網頁刊頭 */}
      <header className="text-center mb-24 no-print">
        <div className="text-gold tracking-[1.5em] text-[10px] mb-6 uppercase font-black opacity-20">Novashin Audio Laboratory</div>
        <h1 className="text-6xl md:text-[8rem] font-black mb-8 tracking-tighter leading-none">
            <span className="text-gold-gradient" style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: 'italic' }}>NOVASHIN</span>
            {' '}
            <span className="font-thin opacity-50 text-white not-italic" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>LAB</span>
        </h1>
        <p className="text-text-main/20 tracking-[0.5em] text-[10px] uppercase font-bold">Project Manhattan | 2026 EDITION</p>
      </header>

      <main className="max-w-7xl mx-auto space-y-16 pb-32">
        {/* 選單區塊 */}
        <section className="grid grid-cols-1 gap-10 no-print">
            <div className="bg-[#0A0A0A] p-10 md:p-12 rounded-3xl" style={{ border: '1px solid rgba(255,255,255,0.04)' }}>
                <h3 className="text-gold-dim text-[10px] font-black mb-12 tracking-[0.5em] uppercase text-center pb-6" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>I. Digital & Analog Backbone</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {renderSection(commonProps, "source", "訊源...", "01: Source", 1, "s1")}
                    {renderSection(commonProps, "dac", "DAC...", "02: DAC", 2, "s2")}
                    {renderSection(commonProps, "ddc", "DDC...", "03: DDC", 3, "s3")}
                    {renderSection(commonProps, "streaming_dac", "Streaming DAC...", "04: Combined", 4, "s4")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    {renderSection(commonProps, "preamp", "前級...", "05: Preamp", 5, "s5")}
                    {renderSection(commonProps, "poweramp", "後級...", "06: Power Amp", 6, "s6")}
                    {renderSection(commonProps, "amp", "綜擴...", "07: Integrated", 7, "s7")}
                </div>
            </div>

            <div className="bg-[#0A0A0A] p-10 md:p-12 rounded-3xl" style={{ border: '1px solid rgba(255,255,255,0.04)' }}>
                <h3 className="text-gold-dim text-[10px] font-black mb-12 tracking-[0.5em] uppercase text-center pb-6" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>II. Output & Tuning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {renderSection(commonProps, "speaker", "主喇叭...", "08: Main Speaker", 8, "s8")}
                    {renderSection(commonProps, "subwoofer", "重低音...", "09: Low Frequency", 9, "s9")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-12 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    {renderSection(commonProps, "cable", "線材...", "10: Cables", 10, "s10")}
                    {renderSection(commonProps, "wall_outlet", "壁插...", "11: Wall Outlet", 11, "s11")}
                    {renderSection(commonProps, "feet", "墊材...", "12: Isolation", 12, "s12")}
                </div>
            </div>
            
            <div className="text-center px-4">
                <textarea
                    className="w-full max-w-4xl mx-auto bg-transparent p-6 text-gold-bright placeholder-gold/15 focus:outline-none h-20 text-center text-lg italic transition-all"
                    style={{ borderBottom: '1px solid rgba(201,168,76,0.15)' }}
                    placeholder="13: 自定義補充 (例如: 古河 NCF 壁插, 升級銀線...)"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                />
            </div>
        </section>

        {/* 按鈕 */}
        <div className="text-center pt-16 no-print space-y-10">
          <button 
            disabled={loading}
            onClick={generateDiagnosis}
            className="px-24 py-8 bg-gold text-black font-black text-2xl transition-all hover:scale-105 active:scale-95"
            style={{ boxShadow: '0 30px 60px rgba(201,168,76,0.25)', borderRadius: '2px' }}
          >
            {loading ? 'ANALYZING...' : '⚡ GENERATE REPORT'}
          </button>
          {report && (
            <div>
              <button 
                onClick={handleDownloadPDF} 
                disabled={pdfLoading}
                className="text-gold-bright/30 hover:text-gold-bright text-xs font-black tracking-[0.5em] transition-all underline underline-offset-8"
              >
                {pdfLoading ? 'GENERATING PDF...' : 'DOWNLOAD PDF CERTIFICATE ↓'}
              </button>
            </div>
          )}
        </div>

        {/* 報告顯示區 */}
        {report && (
          <div ref={reportRef} className="report-wrapper print-container mt-20 relative overflow-hidden">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'rgba(201,168,76,0.4)' }}></div>
            
            {/* 報告刊頭 - NovaShin 嚴選 */}
            <div className="report-header">
                <div className="report-header-subtitle">Audio Laboratory Report</div>
                <h1 className="report-header-title">
                    NOVA<span style={{ color: 'white' }}>SHIN</span>
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

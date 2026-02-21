import { useState, useMemo } from 'react'
import { equipmentDb, type Equipment } from './equipmentDb' 
// ... 其他 import 保持不變

const App = () => {
  const [selected, setSelected] = useState<Record<string, { brand: string; model: string }>>({});
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 1. 理性提取：從資料庫中提取唯一且排序好的品牌名單
  const brandList = useMemo(() => {
    const brands = Array.from(new Set(equipmentDb.map(e => e.brand)));
    return brands.sort((a, b) => a.localeCompare(b));
  }, []);

  const handleInputChange = (key: string, field: 'brand' | 'model', value: string) => {
    setSelected(prev => ({
      ...prev,
      [key]: { ...prev[key], [field]: value }
    }));
  };

  // 2. 判斷邏輯：先查表，後 AI
  const fetchEquipmentInfo = async (brand: string, model: string, type: string): Promise<Equipment> => {
    const localMatch = equipmentDb.find(
      e => e.brand.toLowerCase() === brand.toLowerCase() && 
           e.model.toLowerCase() === model.toLowerCase()
    );
    
    if (localMatch) return localMatch;

    // 如果資料庫沒這筆，才消耗 $300 美金的 API
    const prompt = `你是一位音響專家 Novashin... (略，同前一個回答)`;
    // ... API Fetch 邏輯 ...
  };

  // 3. 渲染輸入區塊：品牌改用 <select> 或 <datalist>
  const renderInputSection = (key: string, label: string) => (
    <div className="flex-1 min-w-[300px] mb-6 p-4 bg-dark-panel rounded-lg border border-gold/20">
      <label className="text-gold text-[12px] font-bold mb-3 block uppercase tracking-widest">{label}</label>
      <div className="grid grid-cols-2 gap-2">
        {/* 品牌下拉選單 */}
        <select 
          className="bg-obsidian border border-gold/30 p-2 text-sm text-white focus:border-gold outline-none"
          onChange={(e) => handleInputChange(key, 'brand', e.target.value)}
        >
          <option value="">選擇品牌</option>
          {brandList.map(b => <option key={b} value={b}>{b}</option>)}
          <option value="Other">其他品牌 (請手打型號)</option>
        </select>

        {/* 型號手打輸入 */}
        <input 
          placeholder="Model 型號" 
          className="bg-obsidian border border-gold/30 p-2 text-sm text-white focus:border-gold outline-none"
          onChange={(e) => handleInputChange(key, 'model', e.target.value)}
        />
      </div>
    </div>
  );

  // ... 剩下的 UI 與生成邏輯 ...
}
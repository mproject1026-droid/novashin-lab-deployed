// ============================================================================
// Novashin 音響實驗室 - Project Manhattan
// Equipment Database Full V-2026
// 數據庫終極擴充版 - 2015~2026 核心主力產品
// Generated: 2026-02-08
// Total Brands: 67 | Total Products: 527
// Coverage: amp, speaker, dac, streamer, preamp, poweramp, cable, power, subwoofer
// ============================================================================

export type EquipmentType =
  | "amp"
  | "speaker"
  | "dac"
  | "streamer"
  | "preamp"
  | "poweramp"
  | "cable"
  | "power"
  | "subwoofer";

export interface Equipment {
  id: string;
  brand: string;
  model: string;
  type: EquipmentType;
  sonicSignature: string;
  pairingAdvice: string;
  physicsNote: string;
  novashinVerdict: string;
}

export const equipmentDb: Equipment[] = [
  {
    id: "acc-a75",
    brand: "Accuphase",
    model: "A-75",
    type: "poweramp",
    sonicSignature: "純A類立體聲後級，兼具A-80的細膩與P-7500的驅動力，聲音溫暖飽滿，音樂性與音響性完美結合。",
    pairingAdvice: "比A-80更容易搭配，能應對更多種類的喇叭。既能享受純A類的甜美，又不用擔心推力不足的問題。是金嗓子純A類後級中的長青樹。",
    physicsNote: "純A類立體聲後級，輸出功率60W/8Ω。內部結構與用料都是旗艦等級，是P-7300的純A類版本。",
    novashinVerdict: "如果A-80是遙不可及的女神，那A-75就是可以娶回家的賢妻。聲音溫暖又有力，聽什麼都好聽。買了它，音響之路大概就走到盡頭了，可以安心退燒。"
  },
  {
    id: "acc-a80",
    brand: "Accuphase",
    model: "A-80",
    type: "poweramp",
    sonicSignature: "純A類單聲道後級，聲音的純度與細膩度達到巔峰，中高頻的質感華麗無比，空氣感十足。",
    pairingAdvice: "為追求極致音質的發燒友而生。適合搭配高效率、高質素的喇叭，能展現出純A類最迷人的音色。驅動力不是其強項，搭配是關鍵。",
    physicsNote: "純A類單聲道設計，輸出功率65W/8Ω。巨大的散熱片是其標誌，確保在純A類工作下的穩定性。",
    novashinVerdict: "這不是後級，這是藝術品。那種聲音的純淨感，會讓你覺得以前聽的都是雜訊。雖然只有65瓦，但那每一瓦都是鑽石。當然，價格也是鑽石級的。"
  },
  {
    id: "acc-c2850",
    brand: "Accuphase",
    model: "C-2850",
    type: "preamp",
    sonicSignature: "聲音飽滿厚實，中頻帶有磁性，情感表現力豐富，是金嗓子經典音色的代表。",
    pairingAdvice: "適合搭配聲音較為骨感的後級，能為系統注入溫暖與厚度。與大功率後級搭配，能兼顧聲音的細膩與場面感。",
    physicsNote: "同樣採用Balanced AAVA技術，但音色調校上更偏向傳統金嗓子的溫潤風格。用料紮實，機身結構穩重。",
    novashinVerdict: "這就是大家口中說的『金嗓子味』。聲音暖厚飽滿，聽什麼都好聽。雖然解析力不是最強，但那種音樂的感染力，會讓你一直想聽下去。"
  },
  {
    id: "acc-c2900",
    brand: "Accuphase",
    model: "C-2900",
    type: "preamp",
    sonicSignature: "背景極黑，聲音純淨無染，細節描繪能力如同顯微鏡般清晰，音場透明度高。",
    pairingAdvice: "搭配自家後級是天作之合，也能提升任何後級的分析力與透明度。是系統升級、挖掘錄音細節的關鍵一環。",
    physicsNote: "採用獨家Balanced AAVA音量控制技術，訊噪比極高。左右聲道獨立供電，徹底杜絕串音干擾。",
    novashinVerdict: "換上C-2900，你會發現原來你的CD裡藏了這麼多東西。聲音的照妖鏡，任何錄音的瑕疵都無所遁形。但同樣的，錄音中的美好也會被加倍放大。"
  },
  {
    id: "acc-c3900",
    brand: "Accuphase",
    model: "C-3900",
    type: "preamp",
    sonicSignature: "金嗓子目前的旗艦前級，集純淨、細膩、大氣於一身，聲音的權威感與真實感無可挑剔。",
    pairingAdvice: "系統的終極升級，能將任何頂級後級的潛力完全釋放。搭配自家A-80或P-7500後級，是許多發燒友的夢幻組合。",
    physicsNote: "採用雙平衡式AAVA音量控制，將失真與噪音降至理論極限。左右聲道完全獨立的箱體結構，物理隔離做到極致。",
    novashinVerdict: "聲音的王者，閉上眼睛，樂團彷彿就在你面前。你聽到的不再是音響，而是音樂本身。唯一的挑戰是你的錢包，以及你家裡那台不爭氣的後級。"
  },
  {
    id: "acc-dc1000",
    brand: "Accuphase",
    model: "DC-1000",
    type: "dac",
    sonicSignature: "金嗓子新一代旗艦DAC，在DC-950的精準基礎上，增添了更多的音樂性與華麗感，聲音更為活生。",
    pairingAdvice: "搭配任何頂級系統都能勝任。能為過於理性的系統注入音樂的靈魂，也能讓原本就充滿活力的系統更上一層樓。",
    physicsNote: "採用ROHM BD34301EKV DAC晶片，是業界首款採用此晶片的Hi-End音響。金嗓子自行開發的數位處理線路，將這顆晶片的潛力完全發揮。",
    novashinVerdict: "金嗓子終於在『精準』跟『好聽』之間找到了完美的平衡點。DC-1000的聲音，既有鑑聽器材的準確，又有高級音響的音樂性。聽完之後，你會開始懷疑人生，原來數位訊源可以這麼好聽。"
  },
  {
    id: "acc-dc950",
    brand: "Accuphase",
    model: "DC-950",
    type: "dac",
    sonicSignature: "聲音精準、中性，細節還原能力驚人，音場深遠，是標準的錄音室鑑聽風格。",
    pairingAdvice: "系統的數位心臟，能大幅提升任何數位訊源的品質。搭配自家DP-950轉盤是西裝一套，也能讓其他串流機或CD機脫胎換骨。",
    physicsNote: "採用雙ESS ES9038PRO DAC晶片，左右聲道獨立。獨家MDSD (Multiple Double Speed DSD) 處理技術，將DSD訊號處理能力推向極致。",
    novashinVerdict: "數位訊源的照妖鏡，錄音好壞一聽便知。聲音非常誠實，不加任何味精。如果你追求的是原汁原味，那DC-950就是你的答案。但如果你喜歡聽『有味道』的聲音，可能會覺得它太過冷靜。"
  },
  {
    id: "acc-dg68",
    brand: "Accuphase",
    model: "DG-68",
    type: "dac",
    sonicSignature: "空間校正的魔術師，能將任何不完美的聆聽空間，化腐朽為神奇。聲音本身中性透明，其價值在於對空間的掌控能力。",
    pairingAdvice: "任何系統的最後一塊拼圖。特別是對於有駐波、殘響等空間問題的發燒友，DG-68是救星。它不僅是DAC，更是空間等化器。",
    physicsNote: "第四代數位空間校正器，結合了Voicing Equalizer與Spectrum Analyzer功能。透過麥克風測量，自動或手動調整頻率響應，解決空間聲學問題。",
    novashinVerdict: "這不是音響器材，這是黑魔法。不管你家裡的空間有多爛，DG-68都能幫你搞定。駐波？轟隆聲？通通消失。你會驚訝地發現，原來不是你的器材不好，是你家太爛。有了它，窮人的鳥籠也能變身黃金聆聽室。"
  },
  {
    id: "acc-dp770",
    brand: "Accuphase",
    model: "DP-770",
    type: "streamer",
    sonicSignature: "金嗓子首款獨立串流播放機，聲音維持一貫的精緻、細膩與高密度感，數位感極低，音樂性流暢自然。",
    pairingAdvice: "為追求高品質串流音樂的發燒友設計，可搭配自家DAC或任何高品質DAC使用。透過HS-LINK Ver.2連接自家DAC，可達到最佳的DSD傳輸效果。",
    physicsNote: "高精度SACD/CD轉盤與串流播放功能結合。支援Tidal, Qobuz等主流串流服務，也支援Roon Ready。內部用料與避震結構都極為講究。",
    novashinVerdict: "金嗓子終於想通了，搞串流才是未來。DP-770的聲音，完全沒有一般串流機的數位毛躁感，聽起來就像在聽最高級的SACD。如果你是金嗓子的信徒，又想擁抱串流，這台就是你的聖杯。"
  },
  {
    id: "acc-e480",
    brand: "Accuphase",
    model: "E-480",
    type: "amp",
    sonicSignature: "金嗓子中階主力，聲音甜美潤澤，音樂性極佳，是聆聽人聲、弦樂的利器。",
    pairingAdvice: "適合搭配效率較高的書架喇叭或中小型落地喇叭，能營造出溫暖親密的聆聽氛圍。搭配英國喇叭，更能凸顯其中頻的毒性。",
    physicsNote: "AB類放大，輸出功率180W/8Ω，阻尼係數600。雖然是中階機，但AAVA音量控制、平衡輸入等核心技術一樣不缺。",
    novashinVerdict: "聽人聲會中毒的機器，那種甜潤感，就像在耳朵裡灌了蜂蜜。推力雖然不是最強，但把喇叭服侍得服服貼貼的，絕對是聽流行樂、爵士樂的逸品。"
  },
  {
    id: "acc-e5000",
    brand: "Accuphase",
    model: "E-5000",
    type: "amp",
    sonicSignature: "金嗓子新世代旗艦綜擴，聲音中性大氣，音場開闊，兼具純A類的細膩與AB類的驅動力，是全能型的代表。",
    pairingAdvice: "百搭機種，幾乎不挑喇叭。無論是傳統動圈、靜電還是號角，都能推出應有的水準。特別適合系統尚未定型，還在摸索方向的發燒友。",
    physicsNote: "AB類放大，輸出功率240W/8Ω，是金嗓子史上最強大的綜擴。採用旗艦前後級下放的技術，內部用料極盡奢華。",
    novashinVerdict: "一台E-5000，解決你所有的搭配煩惱。聲音就是又大又穩，什麼音樂類型都難不倒它。唯一的缺點就是貴，但買了它，你等於買了金嗓子的全套前後級，划算！"
  },
  {
    id: "acc-e700",
    brand: "Accuphase",
    model: "E-700",
    type: "amp",
    sonicSignature: "承襲E-800的貴氣，但更顯年輕活力，速度感與解析力更為突出，聲音活生感十足。",
    pairingAdvice: "適合搭配反應快速、解析力高的喇叭，能展現其速度與細節的優勢。與日系或美系喇叭搭配，能創造出充滿活力的音場。",
    physicsNote: "AB類放大，輸出功率125W/8Ω，同樣具備AAVA音量控制與高阻尼係數。平衡式設計，從輸入到輸出的訊號路徑都力求最短。",
    novashinVerdict: "如果說E-800是雍容華貴的貴婦，那E-700就是穿著西裝的運動員。聲音更衝、更猛，但又不失金嗓子該有的細膩。CP值比大哥高多了。"
  },
  {
    id: "acc-e800",
    brand: "Accuphase",
    model: "E-800",
    type: "amp",
    sonicSignature: "純A類驅動，聲音溫潤如玉，細節豐富，中頻密度感極強，有著金嗓子標誌性的華麗高頻。",
    pairingAdvice: "驅動力驚人，能馴服市面上多數難搞的喇叭，尤其適合搭配歐系鑑聽喇叭，能補足其冷底聲線，增添音樂性。",
    physicsNote: "純A類放大，輸出功率50W/8Ω，阻尼係數高達1000，對喇叭的控制力無庸置疑。獨家AAVA音量控制技術，確保全音域的聲音純淨度。",
    novashinVerdict: "標準的貴婦機，聲音細膩到讓你頭皮發麻。雖然是純A類，但別被那50瓦的數字騙了，推力跟頭牛一樣。買這台，基本上可以退燒一半了。"
  },
  {
    id: "acc-p4700",
    brand: "Accuphase",
    model: "P-4700",
    type: "poweramp",
    sonicSignature: "聲音精準、快速，解析力高，音場描繪清晰，是現代金嗓子聲音的代表。",
    pairingAdvice: "適合追求高解析、高透明度的系統。搭配反應快速的喇叭，能創造出如臨現場的音場。與C-2900前級是絕配。",
    physicsNote: "AB類立體聲後級，輸出功率150W/8Ω。採用儀器級放大電路，確保訊號的精準傳輸。",
    novashinVerdict: "聲音快、狠、準，一點都不拖泥帶水。如果你喜歡聽大編制交響樂，或是細節爆棚的電子樂，P-4700會讓你爽到飛起。但如果你想找溫暖的人聲，可能會覺得有點太『直白』了。"
  },
  {
    id: "acc-p7500",
    brand: "Accuphase",
    model: "P-7500",
    type: "poweramp",
    sonicSignature: "驅動力如洪水猛獸，低頻權威感十足，能將喇叭的潛力壓榨到最後一滴。聲音密度感強，場面宏大。",
    pairingAdvice: "專治各種難推的怪獸級喇叭，特別是那些低效率、阻抗變化大的靜電或平面喇叭。搭配自家前級，能達到最佳的音色一致性。",
    physicsNote: "AB類立體聲後級，輸出功率300W/8Ω，橋接後可達1200W/2Ω。阻尼係數高達1000，對喇叭的控制力堪稱恐怖。",
    novashinVerdict: "暴力美學的極致展現。不管你的喇叭有多難搞，P-7500都能讓它跪下唱征服。低頻打下去，沙發都會震。這不是在聽音樂，這是在感受音樂的物理衝擊。"
  },
  {
    id: "ae-ae100",
    brand: "Acoustic Energy",
    model: "AE100",
    type: "speaker",
    sonicSignature: "小巧的體積，卻有著超乎想像的能量感與規模感。聲音溫暖厚實，中頻極具魅力。",
    pairingAdvice: "非常容易驅動，是小功率擴大機的好朋友。放在書房或臥室，能輕鬆組建一套迷人的小系統。",
    physicsNote: "採用4吋中低音單體，搭配WDT導波技術高音。後置的長方形低音反射孔，是AE的招牌設計，能增加低頻的延伸感。",
    novashinVerdict: "傳奇的AE100後繼者，體積雖小，但聲音可不小。那種溫暖厚實的中頻，聽人聲簡直是享受。放在桌上當電腦喇叭，絕對是奢侈的享受。堪稱窮人福音的代表作。"
  },
  {
    id: "ae-ae120",
    brand: "Acoustic Energy",
    model: "AE120",
    type: "speaker",
    sonicSignature: "衝擊力強，動態對比鮮明，聲音充滿活力與激情，是聽流行樂、搖滾樂的利器。",
    pairingAdvice: "需要搭配控制力好的擴大機，否則低頻容易失控。搭配速度快的擴大機，更能凸顯其活潑的個性。",
    physicsNote: "採用WDT寬闊擴散技術高音單體，搭配兩顆紙盆低音單體，創造出豐沛的低頻量感。箱體底部填充重物，增加穩定性。",
    novashinVerdict: "年輕人的第一對落地喇叭。聲音夠衝、夠猛，聽起來就是爽。雖然細膩度還有進步空間，但以這個價位來說，已經是打遍天下無敵手。拿來看電影，效果絕對比Soundbar好上一百倍。"
  },
  {
    id: "ae-ae309",
    brand: "Acoustic Energy",
    model: "AE309",
    type: "speaker",
    sonicSignature: "精緻細膩的聲音，中高頻表現尤其出色，音像凝聚，細節豐富，帶有英國喇叭特有的甜美感。",
    pairingAdvice: "適合在中小空間使用，搭配音色溫潤的擴大機，能營造出迷人的音樂氛圍。是聆聽小品、爵士樂的絕佳選擇。",
    physicsNote: "與AE320同樣採用陶瓷鋁質三明治振膜單體，但尺寸較小。箱體內部使用特殊的阻尼材料，進一步吸收不必要的共振。",
    novashinVerdict: "標準的英倫情人，聲音甜美得讓人融化。雖然低頻不是強項，但那種精緻的質感，會讓你專注在音樂的細節裡。很適合夜深人靜時，一個人靜靜品味。"
  },
  {
    id: "ae-ae320",
    brand: "Acoustic Energy",
    model: "AE320",
    type: "speaker",
    sonicSignature: "聲音活潑明快，中頻飽滿有彈性，人聲表現親切自然，整題聽感輕鬆愉悅。",
    pairingAdvice: "相對容易驅動，搭配中價位的日系或歐系綜擴都能有不錯的表現。很適合做為入門Hi-Fi系統的主力喇叭。",
    physicsNote: "三音路四單體設計，使用陶瓷鋁質三明治振膜低音單體，確保低頻的清晰度與速度感。HDF箱體結構，有效降低箱體共振。",
    novashinVerdict: "AE的中堅份子，CP值之王。聲音好聽、不貴、又不難推，還要要求什麼？外型也百搭，放在客廳絕對不失禮。窮人的福音，買了不會後悔。"
  },
  {
    id: "ae-ae520",
    brand: "Acoustic Energy",
    model: "AE520",
    type: "speaker",
    sonicSignature: "聲音開闊大氣，能量感十足，低頻深沉有力，音場寬鬆自然，是標準的英國聲底，但更添現代感。",
    pairingAdvice: "對擴大機的驅動力有一定要求，建議搭配推力充足、聲音中性的擴大機，能展現其全面的實力。不適合小功率管機。",
    physicsNote: "採用碳纖維中音與低音單體，反應速度快、剛性強。搭配25mm鋁質高音，並使用WDT波導技術，讓高頻擴散性更佳。",
    novashinVerdict: "AE的旗艦喇叭，標準的西裝暴徒。看起來文質彬彬，放起音樂來可是力拔山河。那個低頻，不是量多，而是沉下去的質。看電影、聽搖滾，爽度破表。"
  },
  {
    id: "atc-scm100asl",
    brand: "ATC",
    model: "SCM100ASL",
    type: "speaker",
    sonicSignature: "承襲150的鑑聽血統，但體積更適合一般居家空間。聲音同樣精準中性，中頻的真實感與密度感是ATC的標誌。",
    pairingAdvice: "主動式設計，搭配通透、細節豐富的前級，能展現其鑑聽本色。避免搭配音色過於濃厚的訊源，以免影響其中性平衡。",
    physicsNote: "同樣採用SM75-150S饅頭中音，搭配12吋的低音單體。內建主動式電子分音與AB類後級，確保單體間的完美銜接。",
    novashinVerdict: "如果說150是巨石強森，那100就是傑森史塔森。體型小一點，但一樣拳拳到肉。饅頭中音的毒性不減，聽人聲、聽鋼琴，真實到你會害怕。是能在真實世界中擁有的錄音室之聲。"
  },
  {
    id: "atc-scm11",
    brand: "ATC",
    model: "SCM11",
    type: "speaker",
    sonicSignature: "ATC入門的最佳選擇，以相對小的體積和親民的價格，提供ATC招牌的中性、高密度聲音。聲音平衡、耐聽。",
    pairingAdvice: "相較於SCM19，SCM11對擴大機友善許多。搭配50-100W的優質綜擴，就能有很好的表現。是體驗ATC魅力的敲門磚。",
    physicsNote: "採用ATC自家開發的CLD中低音單體，雖然不是SL等級，但依然保有極佳的剛性與阻尼特性。箱體作工紮實，超越同級。",
    novashinVerdict: "窮人的ATC，但聲音一點都不窮。那種紮實的聲音密度，在同價位書架喇叭中找不到對手。雖然沒有饅頭中音，但ATC的硬漢本色依然清晰可見。CP值爆表，買了絕對不後悔。"
  },
  {
    id: "atc-scm150asl",
    brand: "ATC",
    model: "SCM150ASL",
    type: "speaker",
    sonicSignature: "鑑聽喇叭的王者，聲音中性、精準、動態龐大，低頻拳拳到肉，音場還原極度真實，彷彿置身錄音室現場。",
    pairingAdvice: "主動式設計，內建專屬後級，僅需搭配高品質前級與訊源。對前端器材的個性非常敏感，前端給什麼，它就給你什麼。",
    physicsNote: "三音路主動式設計，搭載ATC招牌的SM75-150S饅頭中音單體，以及375mm的超線性低音單體。內建350W的AB類後級，分頻點由主動電子分音器精準控制。",
    novashinVerdict: "聲音的照妖鏡，錄音好壞無所遁形。那顆饅頭中音的密度感與真實度，聽過就回不去了。低頻不是多，而是又快又沉，打在胸口會痛。這是專業錄音室的標準配備，也是無數發燒友的終極夢想。"
  },
  {
    id: "atc-scm19",
    brand: "ATC",
    model: "SCM19",
    type: "speaker",
    sonicSignature: "被動式書架喇叭的標竿，聲音密度極高，音像凝聚如針點，動態對比強烈，是標準的ATC硬漢風格。",
    pairingAdvice: "極度考驗擴大機的驅動力與控制力。瓦數只是參考，電流才是王道。搭配不當，聲音會乾、扁、瘦。搭配得宜，你會得到一對超跑級的書架喇叭。",
    physicsNote: "與SCM20ASL相同的SL中低音單體，但改為被動式設計。箱體結構異常堅固，重量驚人。效率不高，是標準的『大食』喇叭。",
    novashinVerdict: "最難推的書架喇叭，沒有之一。但如果你能馴服它，它會給你全世界。聲音的密度與衝擊力，完全不像這個體積的喇叭該有的表現。這不是一對輕鬆聽音樂的喇叭，這是一對挑戰你音響功力的喇叭。"
  },
  {
    id: "atc-scm20asl",
    brand: "ATC",
    model: "SCM20ASL",
    type: "speaker",
    sonicSignature: "書架喇叭的體積，卻有著落地喇叭的密度與權威感。中頻飽滿紮實，人聲的真實感令人動容。",
    pairingAdvice: "主動式設計，適合在中小空間打造頂級的鑑聽系統。對前級的質素非常敏感，是系統前端的放大鏡。",
    physicsNote: "二音路主動式設計，採用ATC獨家的『Super Linear』中低音單體，磁力系統異常強大。內建250W的AB類後級。",
    novashinVerdict: "書架喇叭的終極型態。那個人聲，不是甜，而是『真』。閉上眼睛，歌手就站在你面前。雖然是書架，但低頻的衝擊力絕對會讓你嚇一跳。是小空間的王者，也是大系統的照妖鏡。"
  },
  {
    id: "atc-scm40",
    brand: "ATC",
    model: "SCM40",
    type: "speaker",
    sonicSignature: "被動式的SCM40，保留了ATC中性的聲音骨架與高密度中頻，但給予使用者更多搭配擴大機的彈性與樂趣。",
    pairingAdvice: "對擴大機的『電流』輸出能力要求很高，而不是看瓦數。建議搭配電流輸出大、控制力好的後級，才能把那顆饅頭中音推得飽滿。",
    physicsNote: "與SCM40A相同的單體配置，但改為被動式分音。分音器用料紮實，確保訊號的低失真傳輸。效率偏低，需要大電流後級伺候。",
    novashinVerdict: "ATC給發燒友的挑戰書。推得好，它就是天堂；推不好，它就是木頭。這對喇叭是檢驗擴大機實力的試金石。如果你對自己的後級有信心，那就來挑戰看看吧。"
  },
  {
    id: "atc-scm40a",
    brand: "ATC",
    model: "SCM40A",
    type: "speaker",
    sonicSignature: "ATC主動式技術的入門磚，以相對親民的價格，提供ATC招牌的中性、高密度聲音。動態與衝擊力在同價位中無出其右。",
    pairingAdvice: "主動式設計，省去搭配後級的煩惱。訊源與前級的選擇是關鍵，建議搭配解析力高、聲音乾淨的前端。",
    physicsNote: "首款搭載ATC自家設計、製造的高音單體SH25-76。同樣配備了招牌的饅頭中音單體，並由三路獨立後級驅動。",
    novashinVerdict: "想體驗饅頭中音的威力，但又不想賣房子的最佳選擇。聲音就是標準的ATC風格，快、狠、準。雖然低頻沒有大哥們那麼沉，但拳拳到肉的衝擊力絕對過癮。CP值之王，買了不會錯。"
  },
  {
    id: "atc-scm50asl",
    brand: "ATC",
    model: "SCM50ASL",
    type: "speaker",
    sonicSignature: "ATC主動式家族的中堅，也是最經典的型號。聲音平衡、精準，中頻的魅力無可取代，是許多人心中的ATC代表作。",
    pairingAdvice: "主動式設計，對前級的要求很高。搭配一台好的前級，它能帶你上天堂；搭配不好的前級，它會讓你懷疑人生。",
    physicsNote: "經典的三音路設計，包含饅頭中音、9吋低音單體與軟半球高音。內建三路獨立後級，總功率達350W。",
    novashinVerdict: "ATC的代名詞，饅頭中音的創始者。這對喇叭定義了什麼叫做『監聽』。聲音不美，但絕對真。聽習慣了ATC，再去聽別的喇叭，都會覺得聲音假假的。是音響圈的『誠實豆沙包』。"
  },
  {
    id: "atc-sia2-100",
    brand: "ATC",
    model: "SIA2-100",
    type: "amp",
    sonicSignature: "SIA2-150的縮小版，聲音同樣中性、直接，但驅動力稍弱一些。適合搭配ATC入門級的書架喇叭。",
    pairingAdvice: "搭配SCM7、SCM11等ATC入門書架喇叭的理想選擇。在中小空間中，能提供充足的驅動力與控制力。",
    physicsNote: "AB類設計，每聲道輸出100W/8Ω。繼承了SIA2-150的設計理念，但在功率上做了妥協，以換取更親民的價格。",
    novashinVerdict: "ATC西裝的入門款。如果你買了SCM11，又不想花大錢買擴大機，這台就是你的標準答案。聲音沒什麼好說的，就是ATC。樸實無華，但拳拳到肉。"
  },
  {
    id: "atc-sia2-150",
    brand: "ATC",
    model: "SIA2-150",
    type: "amp",
    sonicSignature: "為驅動自家喇叭而生的綜擴，聲音中性、直接、驅動力強大。不加任何味精，忠實還原前端訊號。",
    pairingAdvice: "驅動ATC自家被動式喇叭（如SCM11, SCM19, SCM40）的最佳選擇之一。聲音特性與自家喇叭一脈相承，能達到最佳的系統匹配性。",
    physicsNote: "AB類設計，每聲道輸出150W/8Ω。具備高電流輸出能力與高阻尼係數，確保對喇叭單體的絕對控制力。",
    novashinVerdict: "ATC官方西裝。如果你用ATC喇叭，又懶得在外面找擴大機，買這台就對了。聲音就是標準的白開水，無色無味，但解渴。它不會給你驚喜，但絕對不會讓你失望。"
  },
  {
    id: "ar-dac9",
    brand: "Audio Research",
    model: "DAC9",
    type: "dac",
    sonicSignature: "帶有真空管潤飾的數位類比轉換器，聲音保有數位的高解析，又增添了真空管的溫潤與流暢感，數位感極低。",
    pairingAdvice: "能為任何過於冷硬的數位系統注入暖意與音樂性。搭配自家擴大機，能達到最佳的音色匹配。",
    physicsNote: "混合式設計，數位部分由Quad DAC晶片處理，類比放大級則採用一支6H30真空管。支援多種數位輸入與高解析格式。",
    novashinVerdict: "數位解碼的『柔焦鏡』。它能把數位訊號的稜角磨圓，讓聲音聽起來更順、更耐聽。如果你覺得你的串流機聲音太衝、太刮耳，DAC9就是你的解藥。是數位時代的類比溫情。"
  },
  {
    id: "ar-gsi75",
    brand: "Audio Research",
    model: "GSi75",
    type: "amp",
    sonicSignature: "結合了DAC、唱放與綜擴於一身的全能管機。聲音溫暖、飽滿，充滿音樂性，是ARC傳統美聲的現代演繹。",
    pairingAdvice: "一台搞定所有事，只需搭配一對喇叭與訊源。驅動力不俗，搭配中等效率的喇叭，能營造出迷人的聽感。",
    physicsNote: "採用KT150功率管，輸出75瓦。內建的DAC與MM/MC唱頭放大器都具備相當高的水準，並非只是附加功能。",
    novashinVerdict: "音響界的瑞士刀，什麼功能都有。聲音就是標準的好聽，溫暖又有力。雖然解析力不是頂尖，但那種音樂的感染力，會讓你忘記音響的存在。是懶人發燒友的福音，也是退燒的好選擇。"
  },
  {
    id: "ar-i50",
    brand: "Audio Research",
    model: "I/50",
    type: "amp",
    sonicSignature: "ARC的入門級綜擴，外型年輕多彩，聲音活潑、明快，充滿活力，是專為年輕世代設計的管機。",
    pairingAdvice: "容易驅動，搭配效率不差的書架喇叭或小型落地喇叭，就能輕鬆享受管機的樂趣。可選配DAC或唱放模組。",
    physicsNote: "使用兩對6550WE功率管，輸出50瓦。提供多種顏色選擇，是ARC史上最『潮』的產品。",
    novashinVerdict: "年輕人的第一台ARC。外型騷包，聲音也很有個性。聽流行、聽搖滾，節奏感十足。這不是你爺爺的管機，這是可以放在IKEA家具上的潮物。聲音可能不是最Hi-End，但絕對是最Fun。"
  },
  {
    id: "ar-ref160m",
    brand: "Audio Research",
    model: "Reference 160M",
    type: "poweramp",
    sonicSignature: "新世代ARC的代表作，聲音透明、快速、解析力高，一改傳統管機的昏黃印象，音場通透如水晶。",
    pairingAdvice: "適合搭配解析力高、反應快速的現代喇叭，能展現其通透的音質。搭配自家REF 6SE前級，能達到音色與風格的完美統一。",
    physicsNote: "每聲道使用4支KT150功率管，可切換三極管或超線性模式。獨特的透明錶頭設計，可以看見內部真空管的運作狀態。",
    novashinVerdict: "穿著Prada的惡魔。外觀時尚，聲音更是又快又狠。誰說管機只能聽人聲？REF 160M聽搖滾、聽電子樂，照樣讓你爽到翻。這是給新世代發燒友的管機，傳統派可能會覺得少了點『管味』。"
  },
  {
    id: "ar-ref160s",
    brand: "Audio Research",
    model: "Reference 160S",
    type: "poweramp",
    sonicSignature: "REF 160M的立體聲版本，聲音同樣通透、快速，但更添一分溫潤與從容，音樂性更佳。",
    pairingAdvice: "比單聲道版本更容易搭配，驅動力依然強勁。一台就能搞定多數落地喇叭，是追求新世代ARC美聲的務實選擇。",
    physicsNote: "立體聲設計，共使用8支KT150功率管，每聲道輸出140瓦。與160M同樣具備三極管/超線性切換與透明錶頭。",
    novashinVerdict: "如果160M是超跑，那160S就是高性能轎跑。速度一樣快，但更舒適、更實用。聲音多了一點人情味，聽什麼都好聽。是理性與感性的完美結合，也是ARC最暢銷的後級之一。"
  },
  {
    id: "ar-ref6se",
    brand: "Audio Research",
    model: "Reference 6SE",
    type: "preamp",
    sonicSignature: "極度通透、安靜的背景，音場寬闊、層次分明，細節描繪能力驚人，是標準的ARC參考級聲底。",
    pairingAdvice: "搭配自家Reference系列後級是天作之合，也能提升任何後級的透明度與解析力。是系統升級、挖掘錄音細節的關鍵。",
    physicsNote: "純A類、零負回授設計，使用6支6H30真空管。電源供應與穩壓線路極為講究，是好聲的基礎。",
    novashinVerdict: "聲音的X光機，任何細節都逃不過它的法眼。換上它，你會發現你的系統原來可以這麼透明。雖然是管機，但一點都不慢、不糊。是追求極致解析力的發燒友的夢幻逸品。"
  },
  {
    id: "ar-ref750sel",
    brand: "Audio Research",
    model: "Reference 750 SEL",
    type: "poweramp",
    sonicSignature: "管機的巔峰之作，聲音開闊、宏大、輕鬆，兼具真空管的溫潤與晶體機的驅動力，音場深遠如海。",
    pairingAdvice: "能驅動地球上任何喇叭，是怪獸級喇叭的終極歸宿。前端搭配自家Reference系列前級，能展現出驚人的音樂性與真實感。",
    physicsNote: "每聲道使用16支KT150功率管，輸出750瓦的恐怖功率。巨大的體積與重量，需要獨立的電源與空間規劃。全球限量10對。",
    novashinVerdict: "音響界的核動力航空母艦。這不是後級，這是權力的象徵。開機時家裡電燈會暗一下是基本操作。聲音就是『輕鬆』兩個字，再大的場面都舉重若輕。富人玩具的極致，買得起的都是神人。"
  },
  {
    id: "ar-ref80s",
    brand: "Audio Research",
    model: "Reference 80S",
    type: "poweramp",
    sonicSignature: "Reference系列的入門磚，以更小的體積與功率，提供ARC新世代的通透美聲。聲音細膩、活生，充滿空氣感。",
    pairingAdvice: "適合搭配高效率的書架或中小型落地喇叭，在中小空間能營造出極佳的音場與音樂氛圍。",
    physicsNote: "立體聲設計，使用4支KT150功率管，每聲道輸出70瓦。繼承了老大哥們的核心技術與設計語彙。",
    novashinVerdict: "麻雀雖小，五臟俱全。雖然只是入門級，但那種通透的貴氣，一聽就知道是ARC的血統。推力雖然不大，但把喇叭服侍得很好，聲音活生感十足。是體驗ARC魅力的最佳捷徑。"
  },
  {
    id: "aq-dragonbass",
    brand: "Audioquest",
    model: "Dragon BASS",
    type: "cable",
    sonicSignature: "在Dragon ZERO的基礎上，增添了低頻的權威感與重量感，聲音更為飽滿、紮實，衝擊力十足。",
    pairingAdvice: "適合需要補強低頻量感與衝擊力的系統，特別是搭配書架喇叭或低頻較為收斂的系統。能讓系統的下盤更穩、更沉。",
    physicsNote: "與Dragon ZERO同樣採用完美表層純銀導體與DBS系統，但在導體配置上進行了優化，以強化低頻的傳輸。BASS版本帶有為雙線分音設計的低音優化。",
    novashinVerdict: "如果Dragon ZERO是絕世劍客，那Dragon BASS就是重裝鎧甲的騎士。在極致的解析力之上，再給你千軍萬馬的氣勢。低頻不是糊成一團，而是又沉又快又有層次。價格同樣是天價，是給追求完美低頻的富豪們的終極解答。"
  },
  {
    id: "aq-dragonzero",
    brand: "Audioquest",
    model: "Dragon ZERO",
    type: "cable",
    sonicSignature: "極致的透明度與解析力，背景漆黑如深空，聲音純淨無染，彷彿移除了系統中的最後一層紗。",
    pairingAdvice: "系統的終極升級線材，能徹底釋放頂級器材的潛力。適合追求極致解析、中性無染的發燒友。前端器材若有瑕疵，也會被無情放大。",
    physicsNote: "採用100%完美表層純銀(PSS)導體，搭配碳基多層降噪系統與電池電介質偏壓系統(DBS)，徹底隔絕RF射頻干擾。ZERO技術確保特性阻抗為零。",
    novashinVerdict: "線材界的倚天屠龍記，一出手便知有沒有。換上Dragon，你會懷疑人生，原來自己的系統可以這麼強。聲音的照妖鏡，任何優缺點都無所遁形。價格也是天價，一條線可以買一台車，標準的富人玩具。"
  },
  {
    id: "aq-niagara1200",
    brand: "Audioquest",
    model: "Niagara 1200",
    type: "power",
    sonicSignature: "入門級的電源處理器，能有效濾除電源中的雜訊，提升系統的背景寧靜度與聲音的清晰度。",
    pairingAdvice: "適合入門級或中階音響系統，以及電腦Hi-Fi、耳機系統等。是體驗純淨電源魅力的第一步。",
    physicsNote: "採用了與高階型號相同的核心濾波技術，但在電流容量與插座數量上有所簡化。提供7個插座，足夠一般系統使用。",
    novashinVerdict: "窮人的電源救星。雖然沒有大哥們的瞬時電流儲備，但光是濾除雜訊的功能，就足以讓你的系統脫胎換骨。聲音會變得更乾淨、更耐聽。是花小錢、辦大事的典型代表，CP值爆表。"
  },
  {
    id: "aq-niagara3000",
    brand: "Audioquest",
    model: "Niagara 3000",
    type: "power",
    sonicSignature: "專為綜擴、後級等大電流器材設計的電源處理器，能提供充沛的瞬時電流，讓聲音的動態與衝擊力更上一層樓。",
    pairingAdvice: "適合直接連接後級或大功率綜擴，解決大動態下的電流壓縮問題。前端器材則可搭配Niagara 1200。",
    physicsNote: "具備瞬時電流儲備技術，並提供2組大電流專用插座。體積更為小巧，方便擺放在音響架上。",
    novashinVerdict: "後級的大力丸。如果你的系統在大場面時會軟腳，那Niagara 3000就是你的救星。它能讓你的後級吃得飽、跑得快，低頻虎虎生風。是解決系統動態不足的特效藥。"
  },
  {
    id: "aq-niagara5000",
    brand: "Audioquest",
    model: "Niagara 5000",
    type: "power",
    sonicSignature: "承襲7000的核心技術，提供純淨、穩定的電源，有效提升系統的透明度與動態表現。",
    pairingAdvice: "適用於中高階的Hi-End系統，是追求純淨電源的務實選擇。效果雖然不如7000那麼極致，但已能解決多數電源問題。",
    physicsNote: "與7000同樣具備面波校正與瞬時電流儲備技術，但在用料與電流容量上略有簡化。",
    novashinVerdict: "Niagara 7000的青春版。效果有大哥的八成，但價格親民不少。對於多數發燒友來說，5000的效果已經非常足夠了。是CP值很高的電源處理器，也是系統升級的『黑科技』。"
  },
  {
    id: "aq-niagara7000",
    brand: "Audioquest",
    model: "Niagara 7000",
    type: "power",
    sonicSignature: "為系統提供極度純淨的電源，讓背景變得漆黑，聲音的細節、動態、層次感都獲得飛躍性提升。",
    pairingAdvice: "任何Hi-End系統的終極電源解決方案。特別是對於居住在電源品質不佳地區的發燒友，效果如獲新生。",
    physicsNote: "專利的面波校正技術，能處理最寬頻寬的AC電源噪音。瞬時電流儲備技術，能為後級擴大機提供超過90安培的峰值電流。",
    novashinVerdict: "音響系統的『淨水器』。沒用之前不覺得，用過之後就拿不下來了。你會驚訝地發現，原來你家的電這麼『髒』。換上Niagara 7000，等於幫你的器材換了個乾淨的家。價格不菲，但效果顯著，是看得到（聽得到）的投資。"
  },
  {
    id: "aq-thunderbirdzero",
    brand: "Audioquest",
    model: "ThunderBird ZERO",
    type: "cable",
    sonicSignature: "聲音飽滿、有力，中低頻的衝擊力與密度感極佳，音場宏大，帶有美式線材的熱情與活力。",
    pairingAdvice: "適合搭配需要增加厚度與衝擊力的系統，能為聲音注入能量感。是聆聽搖滾、流行樂的絕佳搭配。",
    physicsNote: "採用完美表層純銅+(PSC+)導體，導體尺寸經過優化，以降低失真。同樣搭載了碳基降噪系統與DBS。",
    novashinVerdict: "線材界的肌肉車。聲音就是又厚又猛，聽起來爽度一流。雖然細膩度不如龍系列，但那種拳拳到肉的快感，會讓你忍不住一直開大音量。CP值相對較高，是體驗Audioquest魅力的好選擇。"
  },
  {
    id: "aq-williamtellzero",
    brand: "Audioquest",
    model: "William Tell ZERO",
    type: "cable",
    sonicSignature: "聲音平衡、自然，兼具解析力與音樂性，是Audioquest中性聲底的代表。高頻延伸自然，中頻飽滿，低頻沉穩。",
    pairingAdvice: "百搭型線材，適用於各種系統。既能提升系統的解析力，又不會改變原有的音色平衡。是系統調音的可靠參考。",
    physicsNote: "採用完美表層純銅+(PSC+)導體，結合了ZERO零特性阻抗與DBS電介質偏壓系統。是Folk Hero系列的次旗艦。",
    novashinVerdict: "線材界的模範生，各方面表現都很均衡。沒有特別突出的個性，但就是好聽、耐聽。如果你不知道自己的系統缺什麼，換上William Tell通常都不會錯。雖然不夠『毒』，但絕對是穩紮穩打的升級。"
  },
  {
    id: "avg-duomezzoxd",
    brand: "Avantgarde",
    model: "Duo Mezzo XD",
    type: "speaker",
    sonicSignature: "Duo的強化版，採用更大的中音號角與更強的低音系統。聲音更為飽滿、權威，規模感與動態都更接近Trio。",
    pairingAdvice: "對擴大機的要求與Duo相似，但更強的低音系統讓它能應對更大的空間。是追求極致號角之聲，但家中放不下Trio的發燒友的終極選擇。",
    physicsNote: "採用更大的800mm中音號角，低音部分則由兩顆12吋單體組成主動式系統，並由DSP控制。",
    novashinVerdict: "Duo跟Trio之間的完美橋樑。既有Duo的甜美中頻，又有接近Trio的氣勢與規模。如果你覺得Duo還不夠過癮，但又被Trio的體積嚇到，那Duo Mezzo就是你的真命天子。"
  },
  {
    id: "avg-duoxd",
    brand: "Avantgarde",
    model: "Duo XD",
    type: "speaker",
    sonicSignature: "承襲Trio的號角精髓，但體積更為親民。聲音同樣直接、活生，中頻的密度感與真實感是其最大魅力，人聲毒性極強。",
    pairingAdvice: "同樣適合小功率管機，特別是300B或2A3等經典管種。XD版本內建DSP與主動低音，可針對空間進行校正，搭配彈性更大。",
    physicsNote: "二音路號角設計，搭配SUB231 XD主動式超低音。中音號角與高音號角同軸排列，確保相位一致性。效率107dB。",
    novashinVerdict: "Avantgarde的銷售冠軍，也是最經典的型號。那個人聲，聽了會中毒，甜美又真實，彷彿歌手在你耳邊唱歌。雖然沒有Trio那麼龐大的規模感，但在一般家庭空間中，Duo的表現已經是頂天了。"
  },
  {
    id: "avg-solo",
    brand: "Avantgarde",
    model: "Solo",
    type: "speaker",
    sonicSignature: "單聲道號角喇叭，可作為中置聲道或組成多聲道系統。聲音特性與Duo系列一脈相承，直接、有力。",
    pairingAdvice: "可與Duo或Uno系列搭配，組成全號角家庭劇院系統。單獨使用時，可作為超高品質的中置聲道，提升電影對白的清晰度。",
    physicsNote: "與Duo XD相同的中高音號角單體，搭配主動式低音模組。可彈性配置，滿足各種客製化需求。",
    novashinVerdict: "家庭劇院的終極武器。用Solo當中置，你會聽到以前從沒聽過的電影音效細節。對白清晰到像演員在你耳邊說話。當然，價格也是終極的。這是給追求極致的影音狂熱份子的奢侈品。"
  },
  {
    id: "avg-triog3",
    brand: "Avantgarde",
    model: "Trio G3",
    type: "speaker",
    sonicSignature: "號角喇叭的極致，聲音輕鬆、直接、規模感龐大無比，動態對比驚人，彷彿現場演奏。效率極高，微小細節清晰可聞。",
    pairingAdvice: "對前端器材極度敏感，擴大機的質比瓦數重要得多。小功率、高品質的單端直熱三極管(SET)擴大機是其天作之合。前端的任何一絲雜訊都會被無情放大。",
    physicsNote: "三音路全號角設計，搭配主動式低音柱。效率高達109dB/W/m。G3版本導入iTRON全主動技術，由擴大機直接電流驅動，無需被動分音器。",
    novashinVerdict: "音響界的航空母艦，視覺與聽覺的雙重奇觀。聲音就是『活生』兩個字，閉上眼睛，樂團就在你家客廳。這是富人玩具，更是藝術品。能駕馭它的人，非富即貴，而且品味絕佳。"
  },
  {
    id: "avg-unoxd",
    brand: "Avantgarde",
    model: "Uno XD",
    type: "speaker",
    sonicSignature: "Avantgarde的入門號角，以相對小巧的體積，提供號角喇叭獨有的直接、活生與高效率特性。聲音明快、活潑。",
    pairingAdvice: "對擴大機非常友善，即便是小功率的綜擴也能推出好聲。是體驗號角魅力的最佳起點。內建主動低音，擺位更為靈活。",
    physicsNote: "二音路號角設計，搭配一顆10吋主動式超低音。效率107dB。箱體設計更為簡潔，適合融入現代居家裝潢。",
    novashinVerdict: "年輕人的第一對號角喇叭。聲音充滿活力，聽流行、聽爵士，氣氛絕佳。雖然沒有老大哥們的氣勢與密度，但那種輕鬆活生的感覺，絕對會讓你愛上號角。CP值極高，是窮人的號角福音。"
  },
  {
    id: "avg-zero1xd",
    brand: "Avantgarde",
    model: "Zero 1 XD",
    type: "speaker",
    sonicSignature: "結合號角、主動、無線與DSP於一身的次世代音響系統。聲音精準、乾淨，細節豐富，是現代音響美學的代表。",
    pairingAdvice: "All-in-one設計，幾乎不需要搭配。只需連接訊源即可開聲。可透過無線傳輸，打造極簡的Hi-End系統。",
    physicsNote: "三音路全主動式設計，高音與中音採用號角負載，低音則由一顆12吋單體負責。內建DAC與擴大機，並由FPGA進行數位分音與訊號處理。",
    novashinVerdict: "來自未來的音響。把所有Hi-End音響的複雜元素，全部塞進一個簡潔的箱體裡。聲音就是『準』，沒有任何音染。這不是傳統發燒友的菜，但絕對是科技新貴的最愛。是音響界的特斯拉。"
  },
  {
    id: "bw-702s3",
    brand: "B&W",
    model: "702 S3",
    type: "speaker",
    sonicSignature: "承襲800系列的技術與美學，聲音開闊、細膩，高頻飄逸，中頻飽滿，是700系列的新旗艦。",
    pairingAdvice: "對擴大機有一定要求，建議搭配100W以上的優質綜擴或前後級。適合在中大空間中，營造寬鬆、細膩的音場。",
    physicsNote: "首次將實心頂置高音單體下放到700系列，並採用了類似800系列的弧形前障板與獨立中音單體設計。",
    novashinVerdict: "B&W的『次旗艦』殺手。外型跟聲音都越來越像800系列了，但價格只要一半。高音的空氣感與細膩度，在同價位中無出其右。CP值爆表，買了它，你可能會覺得買800系列的人是盤子。"
  },
  {
    id: "bw-703s3",
    brand: "B&W",
    model: "703 S3",
    type: "speaker",
    sonicSignature: "700系列的中堅力量，聲音平衡、流暢，兼具解析力與音樂性，是全面的中高階落地喇叭。",
    pairingAdvice: "相對容易搭配，歐美系的綜擴都能推出不錯的聲音。適合多數家庭的客廳空間，是可靠的音樂伴侶。",
    physicsNote: "搭載碳膜高音、Continuum FST中音與Aerofoil Profile低音單體，都是從800系列下放的技術。",
    novashinVerdict: "700系列的『水桶機』，沒有明顯的優點，但也沒有任何缺點。聲音就是四平八穩，聽什麼都OK。如果你不想花太多心思在音響上，只想好好聽音樂，703 S3是個不會錯的選擇。"
  },
  {
    id: "bw-705s3",
    brand: "B&W",
    model: "705 S3",
    type: "speaker",
    sonicSignature: "搭載頂置高音的書架喇叭，聲音開闊、透明，細節豐富，音場表現遠超其體積。",
    pairingAdvice: "需要優質的擴大機來發揮其實力，腳架的搭配也同樣重要。是小空間追求高品質聲音的絕佳選擇。",
    physicsNote: "將800系列的招牌『Solid Body Tweeter-on-Top』設計下放到書架喇叭上，是S3世代的最大亮點。",
    novashinVerdict: "書架喇叭的『顏值擔當』。那個頂置高音，看起來就是高級。聲音也確實對得起它的外觀，開闊又細膩。放在客廳，絕對是目光的焦點。是品味與聲音兼具的選擇。"
  },
  {
    id: "bw-706s3",
    brand: "B&W",
    model: "706 S3",
    type: "speaker",
    sonicSignature: "傳統設計的書架喇叭，聲音飽滿、有力，中頻溫暖，是聽人聲、流行樂的好選擇。",
    pairingAdvice: "容易驅動，搭配入門級的綜擴也能有好聲音。適合在書房或臥室，組建一套溫暖耐聽的小系統。",
    physicsNote: "採用碳膜高音與Continuum中低音單體，分音器也經過升級，用料紮實。",
    novashinVerdict: "700系列的『暖男』。聲音不像其他兄弟那麼冷靜、理性，多了一點溫度。聽人聲特別有感情。如果你覺得B&W的聲音太Hi-Fi，聽聽706 S3，可能會讓你改觀。"
  },
  {
    id: "bw-800d3",
    brand: "B&W",
    model: "800 D3",
    type: "speaker",
    sonicSignature: "D3世代的王者，聲音宏大、權威，動態對比極強，是B&W現代聲的奠基之作。",
    pairingAdvice: "極度考驗擴大機的驅動力，是標準的『擴大機殺手』。唯有頂級的大功率後級，才能讓它發出全面的聲音。",
    physicsNote: "D3世代的旗艦，首次採用Continuum中音與Aerofoil低音單體，並搭配渦輪頭與優化的Matrix箱體。",
    novashinVerdict: "一個時代的巨人。800 D3的出現，重新定義了Hi-End喇叭的標準。它的聲音，就是權威的代名詞。雖然D4世代在細膩度上更進一步，但D3的經典地位無可動搖。"
  },
  {
    id: "bw-801d4",
    brand: "B&W",
    model: "801 D4",
    type: "speaker",
    sonicSignature: "新世代旗艦的王者之聲，聲音精準、開闊、權威，低頻的下潛與控制力無可匹敵，音場的還原極度真實。",
    pairingAdvice: "對擴大機的控制力與質素要求極高，需要大電流、高阻尼的後級才能馴服。搭配中性、通透的前端，能展現其錄音室鑑聽的本色。",
    physicsNote: "搭載鑽石高音、Continuum Cone FST中音，以及Aerofoil低音單體。全新的Matrix矩陣結構與Turbine Head渦輪頭設計，將箱體共振降至最低。",
    novashinVerdict: "錄音室的最終標準，Abbey Road的御用喇叭。聲音就是『準』，沒有任何妥協。低頻不是多，而是深不見底。這是科學的聲音，不是浪漫的聲音。能擁有801 D4，代表你的音響之路已經畢業了。"
  },
  {
    id: "bw-802d3",
    brand: "B&W",
    model: "802 D3",
    type: "speaker",
    sonicSignature: "D3世代最受歡迎的型號，聲音精準、平衡，兼具規模感與細膩度，是全面的Hi-End喇叭。",
    pairingAdvice: "相較於800 D3，對擴大機稍稍友善一些，但依然需要高品質的大功率後級伺候。是能夠在多數家庭空間中發揮實力的旗艦級喇叭。",
    physicsNote: "與800 D3採用相同的技術，但低音單體尺寸較小。是D3系列中，最早獲得市場巨大成功的型號。",
    novashinVerdict: "D3世代的『全民情人』。聲音夠水準，體型又不會太誇張，價格也相對『合理』。它的成功，證明了B&W的技術實力與市場眼光。在二手市場上，至今依然是搶手貨。"
  },
  {
    id: "bw-802d4",
    brand: "B&W",
    model: "802 D4",
    type: "speaker",
    sonicSignature: "僅次於801的次旗艦，聲音同樣精準、開闊，但體型更為纖細，更適合一般居家空間。中高頻的細膩度與透明感是其強項。",
    pairingAdvice: "同樣需要大功率、高控制力的後級驅動。相較於801，對空間的要求稍低一些，但在大空間中依然能展現驚人的規模感。",
    physicsNote: "與801 D4採用相同的鑽石高音與渦輪頭中音，但低音單體尺寸較小(8吋)。箱體結構與技術完全看齊旗艦。",
    novashinVerdict: "如果801是坦克，那802就是戰鬥機。更靈活、更快速，但殺傷力同樣驚人。聲音的精準度與透明感，會讓你聽到錄音中的所有細節。是能在真實世界中擁有的Hi-End夢想。"
  },
  {
    id: "bw-803d3",
    brand: "B&W",
    model: "803 D3",
    type: "speaker",
    sonicSignature: "D3世代中，體型最纖細的渦輪頭型號。聲音快速、精準，中高頻表現亮眼。",
    pairingAdvice: "適合追求精準聲音，但家中空間有限的發燒友。搭配控制力好的擴大機，能發出乾淨、俐落的聲音。",
    physicsNote: "D3世代中，最小的搭載渦輪頭中音的型號。是B&W將旗艦技術下放的代表作。",
    novashinVerdict: "B&W的『技術展示機』。告訴你，我們可以在相對小的箱體裡，塞進跟旗艦一樣的渦輪頭。聲音很Hi-Fi，但可能少了一點點音樂的溫度。是理性派發燒友的菜。"
  },
  {
    id: "bw-803d4",
    brand: "B&W",
    model: "803 D4",
    type: "speaker",
    sonicSignature: "800系列中，首款採用渦輪頭中音的『瘦高』型號。聲音兼具802的精準與傳統落地喇叭的優雅身形，音場表現出色。",
    pairingAdvice: "對擴大機的要求依然不低，但相較於大哥們更為友善。適合在中大空間中，追求精準、全面的聲音表現。",
    physicsNote: "首次將渦輪頭設計下放到這個尺寸的型號，搭載5吋Continuum中音與兩顆7吋Aerofoil低音單體。",
    novashinVerdict: "800系列的『甜點』型號。既有旗艦的技術與聲音特徵，又有更為優雅、更容易融入居家環境的體型。聲音全面、平衡，聽什麼都像樣。是理性發燒友的明智之選。"
  },
  {
    id: "bw-804d4",
    brand: "B&W",
    model: "804 D4",
    type: "speaker",
    sonicSignature: "傳統箱體設計的800系列成員，聲音精準、凝聚，音像定位清晰，是標準的B&W現代聲。",
    pairingAdvice: "相對容易驅動，搭配優質的歐美綜擴就能有不錯的表現。適合在中小空間中，追求高解析、高透明度的聲音。",
    physicsNote: "採用反向環繞箱體設計，將分音器安裝在堅固的鋁製背板上。搭載鑽石高音、Continuum FST中音與雙Aerofoil低音。",
    novashinVerdict: "穿著西裝的紳士，骨子裡卻是個精算師。聲音非常理性、非常精準，不帶一絲贅肉。如果你喜歡聽錄音的細節，分析樂器的質感，804 D4會是你的好夥伴。但如果你想找溫暖的人情味，可能要考慮別家。"
  },
  {
    id: "bw-805d3",
    brand: "B&W",
    model: "805 D3",
    type: "speaker",
    sonicSignature: "D3世代的頂級書架喇叭，聲音通透、解析力高，音像凝聚，是現代書架喇叭的標竿。",
    pairingAdvice: "非常考驗前端器材的質素，是系統的放大鏡。搭配優質的腳架與擴大機，能發出令人驚訝的聲音。",
    physicsNote: "搭載鑽石高音與Continuum中低音單體，是D3世代技術精華的濃縮。",
    novashinVerdict: "小鋼炮的始祖之一。告訴你，書架喇叭不是只能聽聽人聲、弦樂，它也可以很猛、很全面。805 D3的聲音，就是標準的現代聲，快、準、狠。"
  },
  {
    id: "bw-805d4",
    brand: "B&W",
    model: "805 D4",
    type: "speaker",
    sonicSignature: "書架喇叭的巔峰之作，擁有超乎體積的規模感與解析力。聲音精準、通透，音場開闊，是小空間的王者。",
    pairingAdvice: "對擴大機的質素要求很高，需要搭配控制力好、音質純淨的擴大機。腳架的選擇也至關重要，原廠腳架是最佳選擇。",
    physicsNote: "搭載實心鋁製頂置高音單體外殼，以及與落地大哥們相同的Continuum中低音單體。箱體結構極為紮實。",
    novashinVerdict: "書架喇叭的『照妖鏡』。體積雖小，但聲音的密度與解析力，足以讓許多落地喇叭汗顏。前端給它什麼，它就給你什麼，絕不添油加醋。是小空間追求極致聲音的終極答案，也是富人書房裡的奢侈品。"
  },
  {
    id: "bw-db1d",
    brand: "B&W",
    model: "DB1D",
    type: "subwoofer",
    sonicSignature: "極致的低頻控制力與下潛深度，速度快、解析力高，能與主喇叭完美融合，彷彿隱形。",
    pairingAdvice: "B&W 800系列的絕配超低音，透過專屬APP進行DSP校正，能達到最佳的銜接效果。也適用於任何追求極致低頻表現的Hi-End系統。",
    physicsNote: "搭載兩顆12吋Aerofoil低音單體，採背對背平衡式配置，由2000瓦的D類擴大機驅動。內建強大的DSP與動態EQ。",
    novashinVerdict: "超低音的『忍者』。你感覺得到它，但你看不到它。它不會給你滿屋子的轟隆聲，而是給你有質、有量、有層次的低頻。它能讓你的系統往下再挖三尺，聽到錄音中最深沉的秘密。價格也是忍者級的，殺人於無形。"
  },
  {
    id: "bw-db2d",
    brand: "B&W",
    model: "DB2D",
    type: "subwoofer",
    sonicSignature: "承襲DB1D的技術與聲音哲學，提供快速、乾淨、有力的低頻，能有效提升系統的規模感與衝擊力。",
    pairingAdvice: "適合搭配700系列或同等級的喇叭，能有效補足落地喇叭的極低頻延伸，或讓書架喇叭變身全頻段系統。",
    physicsNote: "搭載兩顆10吋Aerofoil低音單體，背對背平衡配置，由1000瓦D類擴大機驅動。同樣具備DSP校正功能。",
    novashinVerdict: "DB1D的『小弟』。威力雖然沒大哥那麼恐怖，但對付一般家庭空間已經是綽綽有餘。同樣是走快速、乾淨的路線，不是那種電影院的暴力低頻。是提升音樂系統質感的利器，而不是製造地震的工具。"
  },
  {
    id: "bm-ahb2",
    brand: "Benchmark",
    model: "AHB2",
    type: "poweramp",
    sonicSignature: "極致的透明與寂靜，訊噪比高到破表，聲音無色無味，完全忠實呈現前端訊號，是鑑聽級後級的典範。",
    pairingAdvice: "系統的終極放大鏡，前端的任何優劣都會被纖毫畢現地呈現。適合搭配同樣中性、高解析的喇叭與前級，追求最真實的聲音還原。",
    physicsNote: "採用THX的AAA (Achromatic Audio Amplifier) 技術，失真與噪音低至測量儀器的極限。D類與AB類的混合設計，兼具效率與音質。橋接後可輸出強大的單聲道功率。",
    novashinVerdict: "聲音的『無塵室』。背景黑到讓你懷疑器材到底有沒有開機。這不是一台拿來『聽音樂』的後級，這是一台拿來『檢驗錄音』的儀器。聲音極度理性，不帶一絲情感，是終極的聲音照妖鏡。"
  },
  {
    id: "bm-dac3b",
    brand: "Benchmark",
    model: "DAC3 B",
    type: "dac",
    sonicSignature: "DAC3 HGC的純DAC版本，移除了前級與耳擴功能，專注於提供最純淨的數位類比轉換。聲音同樣精準、中性。",
    pairingAdvice: "適合系統中已有獨立前級與耳擴的發燒友，作為純粹的數位訊源升級。搭配自家HPA4前級，能達到最佳的匹配效果。",
    physicsNote: "與DAC3 HGC相同的核心DAC電路，但移除了音量控制與耳機放大線路，讓訊號路徑更為簡潔。僅提供固定電平輸出。",
    novashinVerdict: "純粹主義者的選擇。如果你相信『專注才能專業』，那DAC3 B就是你的菜。它只做一件事，就是把數位訊號變成最精準的類比訊號。聲音沒有驚喜，但絕對可靠。是系統中沉默但穩定的基石。"
  },
  {
    id: "bm-dac3hgc",
    brand: "Benchmark",
    model: "DAC3 HGC",
    type: "dac",
    sonicSignature: "錄音室標準的數位類比轉換器，聲音精準、中性、細節豐富。HGC版本整合了前級與耳擴功能，是一台功能強大的數位核心。",
    pairingAdvice: "可直入後級AHB2，組成一套極簡的Hi-End系統。其耳擴輸出品質極高，足以驅動多數高階耳機。是數位訊源系統的中樞。",
    physicsNote: "採用ESS Sabre ES9028PRO DAC晶片，具備先進的時基誤差抑制技術。多重的穩壓與濾波線路，確保數位與類比電路的電源純淨度。",
    novashinVerdict: "Benchmark的經典代表作，一台搞定DAC、前級、耳擴。聲音就是標準的Benchmark風格：誠實、精準、不討好。這不是一台會讓你聽到『感動』的DAC，但它會讓你聽到『真相』。是專業人士的工具，也是發燒友的參考標準。"
  },
  {
    id: "bm-hpa4",
    brand: "Benchmark",
    model: "HPA4",
    type: "preamp",
    sonicSignature: "與AHB2同樣的設計哲學，極致的透明與無音染。同時也是一台頂級的耳機擴大機，能驅動市面上最難搞的耳機。",
    pairingAdvice: "與AHB2是天作之合的西裝組合，能構成一套從訊源到喇叭都極度透明的鑑聽系統。作為耳擴使用時，能釋放高階耳機的全部潛力。",
    physicsNote: "同樣採用THX-888 AAA放大技術，具備繼電器控制的音量與輸入選擇，確保最高的訊號純淨度。具備平衡與單端的前級與耳機輸出。",
    novashinVerdict: "前級與耳擴的『雙料冠軍』。無論是驅動後級還是耳機，它都只有一個目標：絕對的透明。如果你想知道你的耳機或後級真正的聲音是什麼樣子，接上HPA4就對了。是退燒的終點，也是發燒的起點。"
  },
  {
    id: "bm-la4",
    brand: "Benchmark",
    model: "LA4",
    type: "preamp",
    sonicSignature: "HPA4的純前級版本，移除了耳機放大功能。聲音極度透明、安靜，是追求純粹兩聲道表現的發燒友的理想選擇。",
    pairingAdvice: "與AHB2後級是完美的搭配，能組成一套性能超凡的鑑聽級前後級。適合搭配任何高品質後級，忠實傳達訊源的樣貌。",
    physicsNote: "採用與HPA4相同的THX-888放大技術與繼電器音控，但專注於線路放大。具備兩組平衡與兩組單端輸入。",
    novashinVerdict: "為兩聲道純粹主義者而生的前級。如果你從來不用耳機，那LA4就是比HPA4更純粹、更發燒的選擇。聲音就是『無』，無音染、無噪音、無失真。它不會為你的音樂加分，但它也絕不會減分。是音響系統中的『空氣』。"
  },
  {
    id: "brm-032",
    brand: "Burmester",
    model: "032",
    type: "amp",
    sonicSignature: "經典系列的旗艦綜擴，聲音氣勢磅礡，驅動力強勁，音質醇厚，是標準的德系重砲。",
    pairingAdvice: "能輕鬆馴服市面上多數難搞的喇叭，是全面的實力派戰將。適合追求強大驅動力與飽滿音質的發燒友。",
    physicsNote: "AB類放大，具備極高的阻尼係數與電流輸出能力。全平衡、DC交連設計。巨大的散熱片確保其工作穩定性。",
    novashinVerdict: "綜擴界的『坦克』。外觀威武，聲音更是力大無窮。不管你的喇叭有多大食，032都能把它餵得飽飽的。聲音厚實、穩重，聽大編制交響樂，氣勢驚人。是暴力美學的代表。"
  },
  {
    id: "brm-061",
    brand: "Burmester",
    model: "061",
    type: "dac",
    sonicSignature: "經典系列的CD播放機，聲音溫暖、醇厚，音樂性極佳，是聆聽CD的絕佳選擇。",
    pairingAdvice: "可作為高品質的CD轉盤或獨立的DAC使用。搭配自家擴大機，能營造出溫暖、迷人的音樂氛圍。",
    physicsNote: "採用皮帶驅動的CD轉盤，能有效吸收震動。DAC部分可升頻至96kHz/24bit。具備平衡與單端輸出。",
    novashinVerdict: "CD時代的『留聲機』。在串流當道的今天，依然堅持為CD愛好者提供最好的聲音。它的聲音，會讓你重新愛上聽CD的感覺。溫暖、醇厚，充滿了人情味。是給念舊的發燒友的禮物。"
  },
  {
    id: "brm-077",
    brand: "Burmester",
    model: "077",
    type: "preamp",
    sonicSignature: "聲音細膩、通透，背景極黑，音場層次分明。在Burmester的華麗基底下，更添一分精準與寧靜。",
    pairingAdvice: "搭配自家後級是天作之合，也能為任何高品質後級錦上添花。內建的唱放模組與DAC模組都具備極高水準。",
    physicsNote: "採用Burmester獨家的X-Amp 2放大模組，全平衡設計。模組化設計，可依需求選配DAC或唱放模組。電源供應極為講究。",
    novashinVerdict: "系統的『大腦』。它不僅是前級，更是整個系統的核心。聲音就是又細又貴，把音樂中的所有細節都挖給你看，但又處理得非常悅耳。是理性與感性的完美結合。"
  },
  {
    id: "brm-082",
    brand: "Burmester",
    model: "082",
    type: "amp",
    sonicSignature: "承襲旗艦美學的入門綜擴，聲音同樣華麗、流暢，但更添一分活潑與親切感。音樂性極佳，是聆聽各類音樂的享受。",
    pairingAdvice: "驅動力不俗，搭配中高階的落地或書架喇叭都能有很好的表現。是體驗Burmester魅力的最佳入門磚。",
    physicsNote: "AB類放大，具備高阻尼係數。全平衡設計，並搭載了Burmester獨家的X-Amp放大技術。可選配DAC模組。",
    novashinVerdict: "年輕人的第一台Burmester。雖然是入門級，但那鍍鉻的外觀跟華麗的聲音，一看一聽就知道是名門出身。聲音好聽、耐聽，推力也夠用。是CP值很高的『裝B利器』。"
  },
  {
    id: "brm-088",
    brand: "Burmester",
    model: "088",
    type: "preamp",
    sonicSignature: "Reference Line的參考級前級，聲音飽滿、權威，兼具極高的解析力與溫潤的音樂性，是Burmester聲音美學的典範。",
    pairingAdvice: "為搭配911或909等旗艦後級而設計，能組成一套君臨天下的前後級組合。對前端訊源的品質要求極高。",
    physicsNote: "採用更高級的X-Amp放大模組，並具備外接電源供應器，徹底杜絕干擾。內部用料極盡奢華，是Burmester技術的結晶。",
    novashinVerdict: "前級中的『王者』。聲音就是大氣、從容、華貴。換上它，你的系統彷彿從轎車升級成了勞斯萊斯。任何音樂在它的詮釋下，都多了一分皇室的氣息。"
  },
  {
    id: "brm-111",
    brand: "Burmester",
    model: "111",
    type: "streamer",
    sonicSignature: "Reference Line的旗艦音樂中心，是數位訊源的終極型態。聲音的類比感、流暢度與真實感都達到巔峰，完全聽不出數位味。",
    pairingAdvice: "系統的數位心臟，為最頂級的Hi-End系統提供參考級的訊源。內建的前級功能也具備極高水準，可直入後級。",
    physicsNote: "具備頂級的DAC、前級與音樂伺服器功能。採用Burmester獨家的時脈產生器，將時基誤差降至最低。電源供應與避震結構都極為講究。",
    novashinVerdict: "數位訊源的『神主牌』。它告訴你，數位音樂可以聽起來跟最好的類比系統一樣好聽，甚至更好。聲音就是自然、流暢、真實。唯一的缺點就是價格，可以買一台很好的車了。是給神人級玩家的終極玩具。"
  },
  {
    id: "brm-151",
    brand: "Burmester",
    model: "151",
    type: "dac",
    sonicSignature: "多功能的音樂中心，結合了CD播放、串流、音樂伺服器與DAC於一身。聲音維持Burmester一貫的華麗、流暢與高密度。",
    pairingAdvice: "一台搞定所有數位訊源，只需搭配擴大機與喇叭。是打造極簡Hi-End系統的理想選擇。",
    physicsNote: "具備CD轉盤與SSD固態硬碟，可rip CD並儲存音樂檔案。支援Tidal、Qobuz與Roon Ready。DAC部分採用Burmester獨家技術，可升頻至24/192。",
    novashinVerdict: "數位時代的『瑞士刀』。功能齊全，聲音又好。有了它，你可以把家裡的CD、電腦、串流機通通丟掉。操作介面也非常人性化。是懶人發燒友的夢幻逸品，也是退燒的好選擇。"
  },
  {
    id: "brm-159",
    brand: "Burmester",
    model: "159",
    type: "poweramp",
    sonicSignature: "Burmester新世代的旗艦單聲道後級，聲音的控制力、速度感與透明度都達到前所未有的境界，是絕對的參考級標準。",
    pairingAdvice: "為驅動世界上最頂級的喇叭而設計，能釋放喇叭的全部潛力。需要搭配同等級的前端器材。",
    physicsNote: "採用全新的X-Amp 3放大電路，具備可變阻尼係數功能，可依據搭配的喇叭進行調整。電源供應極為龐大，確保無盡的能量。",
    novashinVerdict: "後級擴大機的『未來戰士』。它不僅僅是力大無窮，更是充滿智慧。可變阻尼係數的功能，讓它能與任何喇叭成為天作之合。聲音就是快、狠、準，同時又不失華麗。是Burmester技術實力的終極展現。"
  },
  {
    id: "brm-216",
    brand: "Burmester",
    model: "216",
    type: "poweramp",
    sonicSignature: "新世代的後級擴大機，承襲911的華麗音色，但更添透明度與速度感，聲音更為現代、活生。",
    pairingAdvice: "驅動力強勁，能搭配各類喇叭。與自家218前級是西裝一套，能展現Burmester新世代的聲音美學。",
    physicsNote: "繼承自旗艦159單聲道後級的X-Amp 3放大電路，全平衡DC交連設計。外觀更為簡潔、現代。",
    novashinVerdict: "Burmester的『年輕力作』。聲音保留了傳統的貴氣，但速度更快、更透明。聽流行、聽電子，節奏感十足。如果你覺得傳統Burmester有點『老派』，那216會讓你耳目一新。"
  },
  {
    id: "brm-218",
    brand: "Burmester",
    model: "218",
    type: "preamp",
    sonicSignature: "新世代的前級擴大機，聲音通透、精準，同時保有Burmester的華麗質感。音場開闊，細節豐富。",
    pairingAdvice: "與216後級是天作之合，能組成一套風格統一、實力堅強的新世代前後級。也適合搭配其他高品質後級。",
    physicsNote: "繼承自旗艦088的X-Amp放大電路，全平衡設計。外觀更為現代、簡潔，與216後級完美匹配。",
    novashinVerdict: "Burmester的『傳承者』。既有老大哥的貴氣，又有新世代的透明與速度。聲音更為中性、平衡，能適應更多類型的音樂。是Burmester走向新時代的代表作。"
  },
  {
    id: "brm-909mk5",
    brand: "Burmester",
    model: "909 MK5",
    type: "poweramp",
    sonicSignature: "Burmester的旗艦後級，聲音的權威感與規模感無可匹敵，低頻深沉穩重，音場龐大無邊，是君臨天下的王者之聲。",
    pairingAdvice: "為驅動世界上最頂級、最難推的喇叭而生。前端需要搭配同等級的旗艦前級與訊源，才能餵飽這頭猛獸。",
    physicsNote: "純A類工作，單聲道設計，重量驚人。內部採用大量的銀線與訂製零件，不計成本的製作。MK5版本在電源供應與線路上都進行了全面升級。",
    novashinVerdict: "後級擴大機的『神主牌』。體積、重量、價格、聲音都是頂天。開機時鄰居可能會以為地震。聲音就是絕對的權威，彷彿帝王出巡。這是給金字塔頂端1%的人的玩具，我們凡人看看就好。"
  },
  {
    id: "brm-911mk3",
    brand: "Burmester",
    model: "911 MK3",
    type: "poweramp",
    sonicSignature: "聲音高貴、華麗、流暢，兼具晶體機的驅動力與管機的潤澤感，高頻延伸如絲綢般順滑，音場開闊，氣勢磅礡。",
    pairingAdvice: "驅動力強大，能搭配市面上絕大多數喇叭，並為其增添一分華麗的貴氣。搭配自家前級，能展現出Burmester標誌性的聲音美學。",
    physicsNote: "純A類與AB類混合工作模式，具備極高的阻尼係數。全平衡、DC交連設計，確保訊號路徑上沒有任何電容，音染降至最低。巨大的散熱片是其標誌。",
    novashinVerdict: "音響界的賓士，聲音就是一個『貴』字。那種華麗的質感，聽什麼音樂都像在金色大廳。驅動力驚人，再難搞的喇叭都服服貼貼。是身份與品味的象徵，也是退燒的終極選擇之一。"
  },
  {
    id: "ca-cxa81",
    brand: "Cambridge Audio",
    model: "CXA81",
    type: "amp",
    sonicSignature: "速度快、解析高、動態強，是劍橋新世代聲音的標竿，充滿活力與衝擊力。",
    pairingAdvice: "80瓦AB類，阻尼係數高，對喇叭有很好的控制力。適合搭配需要速度與解析的喇叭，能讓聲音變得更『發燒』。",
    physicsNote: "AB類放大，每聲道80瓦(8歐姆)。採用大型環形變壓器與雙單聲道設計。內建ESS Sabre ES9016K2M DAC，支援藍牙aptX HD。",
    novashinVerdict: "萬元級綜擴的『聲音照妖鏡』，前端或喇叭有任何風吹草動它都能反映出來。體質精良，潛力十足，是發燒友練功的好夥伴。"
  },
  {
    id: "ca-cxn100",
    brand: "Cambridge Audio",
    model: "CXN100",
    type: "streamer",
    sonicSignature: "中性、乾淨、細節豐富，背景寧靜，忠實還原錄音本色。",
    pairingAdvice: "百搭型訊源，無論是搭配自家CXA系列還是其他擴大機，都能提供高品質的數位串流。可透過其前級功能直入後級。",
    physicsNote: "搭載最新一代StreamMagic Gen4模組，使用ESS ES9028Q2M DAC晶片。支援MQA、Roon Ready、Tidal Connect、Spotify Connect等主流串流服務。",
    novashinVerdict: "CXN V2的完美繼任者，介面更流暢，聲音更細膩。在這個價位帶，它的功能性與聲音表現幾乎沒有對手，堪稱串流機的『窮人福音』。"
  },
  {
    id: "ca-dacmagic200m",
    brand: "Cambridge Audio",
    model: "DacMagic 200M",
    type: "dac",
    sonicSignature: "聲音精準、細節多、音場開闊，帶有監聽風格的同時不失音樂性。",
    pairingAdvice: "適合想提升系統解析力與透明度的玩家。內建耳擴推力不俗，可作為桌上型系統的核心。",
    physicsNote: "採用雙ESS ES9028Q2M DAC晶片，左右聲道獨立處理。支援原生MQA解碼與DSD512。提供平衡(XLR)與非平衡(RCA)輸出。",
    novashinVerdict: "一台功能全面的小型解碼器，從MQA到DSD通吃，還送一個不錯的耳擴。聲音四平八穩，是系統升級的『萬金油』選項。"
  },
  {
    id: "ca-edgenq",
    brand: "Cambridge Audio",
    model: "Edge NQ",
    type: "preamp",
    sonicSignature: "極度透明、背景漆黑、音場深遠，幾乎感覺不到它的存在，完美傳遞訊源的訊息。",
    pairingAdvice: "Edge系列的旗艦前級，最佳拍檔是同系列Edge W或Edge M後級。其串流功能強大，也可作為頂級數位訊源使用。",
    physicsNote: "搭載StreamMagic平台，採用獨特的Solid State音量控制旋鈕。PCB設計極簡化，減少訊號路徑干擾。支援Tidal Connect、Roon Ready。",
    novashinVerdict: "劍橋50週年的巔峰之作，展現了『暴力美學』的設計理念。聲音純淨無染，是對『直線加增益』理念的極致追求，價格也是旗艦級的。"
  },
  {
    id: "ca-evo150",
    brand: "Cambridge Audio",
    model: "EVO 150",
    type: "amp",
    sonicSignature: "活生感十足，現代英國聲的代表，中性帶點微甜。",
    pairingAdvice: "內建Hypex NCore D類模組，推力充沛，適合搭配中高效率的書架或落地喇叭。避免搭配聲音過於冷硬的喇叭，可選音色溫潤者互補。",
    physicsNote: "採用Hypex NCore D類放大技術，提供150瓦(8歐姆)功率。內建StreamMagic串流平台與ESS Sabre ES9018K2M DAC晶片。",
    novashinVerdict: "串流、DAC、綜擴一體機，功能滿到溢出來的『現代人退燒機』。聲音對得起價格，外觀更是加分項，除了大食漢喇叭，基本上通吃。"
  },
  {
    id: "ca-evo75",
    brand: "Cambridge Audio",
    model: "EVO 75",
    type: "amp",
    sonicSignature: "與EVO 150聲底相似，但規模感與控制力略遜一籌，聲音更顯輕快。",
    pairingAdvice: "75瓦功率適合驅動高效率書架喇叭或小型落地喇叭，特別適合在中小空間使用。搭配建議同EVO 150。",
    physicsNote: "採用Hypex NCore D類放大技術，提供75瓦(8歐姆)功率。同樣搭載StreamMagic串流平台與ESS Sabre ES9016K2M DAC。",
    novashinVerdict: "如果你預算有限，喇叭又不難搞，EVO 75就是CP值之選。省下的錢可以多買幾張唱片，或是升級電源線，效果立竿見影。"
  },
  {
    id: "ce-2go",
    brand: "Chord Electronics",
    model: "2go",
    type: "streamer",
    sonicSignature: "為Hugo 2量身打造的串流模組，聲音乾淨直接，無添加。",
    pairingAdvice: "與Hugo 2合體後，變身為一台功能強大的串流DAC/耳擴。透過Wi-Fi或乙太網路播放，支援Tidal、Qobuz、Roon。",
    physicsNote: "搭載2.4GHz Wi-Fi與Gigabit乙太網路接口。內建雙Micro SD卡插槽，最高支援4TB儲存。電池供電，減少電源噪訊。",
    novashinVerdict: "Hugo 2的『黃金搭檔』，讓隨身DAC搖身一變成為家用串流核心。雖然價格不菲，但對於追求極致音質的Hugo 2用家來說，是不可或缺的配件。"
  },
  {
    id: "ce-2yu",
    brand: "Chord Electronics",
    model: "2yu",
    type: "streamer",
    sonicSignature: "純粹的數位界面，將2go的數位訊號轉換為標準輸出，聲音中性無染。",
    pairingAdvice: "必須與2go搭配使用。將2go/Hugo 2的組合擴展到家用Hi-Fi系統，可輸出USB、光纖、同軸訊號給任何DAC。",
    physicsNote: "提供USB-A、BNC同軸、RCA同軸與光纖數位輸出。內建升頻與時脈重整功能，可切換44.1kHz至768kHz取樣率。",
    novashinVerdict: "一個有點『繞』的產品，但對於已經擁有2go的玩家來說，是將其融入家用大系統的橋樑。展現了Chord對於數位訊號處理的執著與潔癖。"
  },
  {
    id: "ce-dave",
    brand: "Chord Electronics",
    model: "DAVE",
    type: "dac",
    sonicSignature: "極致的透明度與解析力，音場寬闊無邊，聲音密度感極強，彷彿置身錄音現場。",
    pairingAdvice: "作為頂級DAC，適合搭配任何旗艦級前後級與喇叭。其強大的解析力能揭示系統中任何短板，是系統的『試金石』。",
    physicsNote: "搭載Chord獨家開發的Spartan 6 FPGA晶片，使用WTA (Watts Transient Aligned)濾波演算法，擁有驚人的164,000個tap-length。是Delta-Sigma架構的極致展現。",
    novashinVerdict: "DAC之王，發燒友口中的『神物』。聲音極度精準，但也極度無情，前端錄音的任何瑕疵都無所遁形。是終極的『聲音照妖鏡』，也是無數發燒友的夢幻逸品。"
  },
  {
    id: "ce-hugo2",
    brand: "Chord Electronics",
    model: "Hugo 2",
    type: "dac",
    sonicSignature: "聲音充滿活力與動感，細節豐富，音色清甜，是Chord標誌性聲音的濃縮版。",
    pairingAdvice: "便攜式DAC/耳擴的標竿。適合搭配各種高階耳道式或耳罩式耳機。也可作為小型桌上系統的核心。",
    physicsNote: "搭載Xilinx Artix 7 FPGA，tap-length為49,152。具備4段數位濾波選擇。電池續航力約7小時。",
    novashinVerdict: "隨身領域的『小鋼炮』，把自家大哥們的技術濃縮到掌上型大小。聲音活潑討喜，推力驚人，是出差旅行時的發燒良伴。"
  },
  {
    id: "ce-hugott2",
    brand: "Chord Electronics",
    model: "Hugo TT2",
    type: "dac",
    sonicSignature: "承襲DAVE的透明與解析，但音色更為飽滿溫潤，音樂性與音響性兼具。",
    pairingAdvice: "可作為DAC、耳擴或數位前級。搭配自家TToby後級或M Scaler升頻器有加成效果。推力強大，能應付市面上多數難搞的耳機。",
    physicsNote: "搭載Artix 7 FPGA晶片，tap-length達到98,304。提供4段濾波與3段Crossfeed選擇。具備強大的前級與耳擴功能。",
    novashinVerdict: "如果說DAVE是冷酷的科學家，TT2就是熱情的藝術家。在提供頂級解析力的同時，注入了更多情感與溫度，是更『人性化』的旗艦選擇。"
  },
  {
    id: "ce-mojo2",
    brand: "Chord Electronics",
    model: "Mojo 2",
    type: "dac",
    sonicSignature: "聲音飽滿有力，低頻結實，音樂性佳，比前代更為通透自然。",
    pairingAdvice: "搭配手機或DAP，能大幅提升音質。新增的UHD DSP功能提供強大的EQ調整，可玩性極高。",
    physicsNote: "搭載Artix 7 FPGA，具備無損UHD DSP音調控制功能。新增USB-C輸入與選單系統。可搭配Poly串流模組使用。",
    novashinVerdict: "Mojo的傳奇續作，堪稱隨身DAC/耳擴的『CP值之王』。新增的EQ功能讓它從『發燒玩具』變成了『調音工具』，可玩性爆表。"
  },
  {
    id: "ce-qutest",
    brand: "Chord Electronics",
    model: "Qutest",
    type: "dac",
    sonicSignature: "中性、精準、乾淨，音場表現出色，忠實呈現錄音原貌。",
    pairingAdvice: "純DAC設計，適合連接串流機或CD轉盤，為系統提供高品質的解碼。可搭配自家Anni耳擴組成桌上西裝。",
    physicsNote: "同樣採用Artix 7 FPGA，tap-length為49,152。提供4種數位濾波選項。無內建耳擴或音量控制。",
    novashinVerdict: "Qutest是純粹主義者的選擇，專心做好解碼這一件事。聲音中正無染，是萬元級DAC的『守門員』，想越級打怪得先過它這關。"
  },
  {
    id: "ce-ultima2",
    brand: "Chord Electronics",
    model: "Ultima 2",
    type: "poweramp",
    sonicSignature: "極致的寧靜、純粹與控制力，聲音的質感動人心弦，細節描繪如臨畫境。",
    pairingAdvice: "Chord的次旗艦單聲道後級，750瓦功率，幾乎沒有推不動的喇叭。需要頂級的訊源與前級來匹配。",
    physicsNote: "單聲道設計，每台750瓦(8歐姆)輸出。搭載64個專利MOSFET功率管，電源供應部分再度強化。",
    novashinVerdict: "聲音的藝術品，將暴力與細膩完美結合。它不只是放大訊號，更是在重塑音樂的靈魂。價格高昂，是金字塔頂端玩家的收藏。"
  },
  {
    id: "ce-ultima3",
    brand: "Chord Electronics",
    model: "Ultima 3",
    type: "poweramp",
    sonicSignature: "Ultima 5的升級版，聲音更為從容、細膩，規模感與權威感更上一層樓。",
    pairingAdvice: "480瓦的巨無霸，專為對付最極端的喇叭負載而生。建議搭配旗艦級前級，方能發揮其實力。",
    physicsNote: "單聲道設計，每台480瓦(8歐姆)輸出。採用更先進的ULTIMA放大線路與電源供應。機箱更為巨大厚重。",
    novashinVerdict: "如果Ultima 5是特種部隊，Ultima 3就是重裝坦克。專治各種不服，讓你的喇叭知道誰才是老大。是『富人玩具』中的重兵器。"
  },
  {
    id: "ce-ultima5",
    brand: "Chord Electronics",
    model: "Ultima 5",
    type: "poweramp",
    sonicSignature: "速度飛快、力道萬鈞、控制力驚人，展現出『暴力美學』的聲音風格。",
    pairingAdvice: "300瓦大功率，能輕鬆馴服市面上絕大多數『大食漢』喇叭。與Ultima Pre 3是天作之合。",
    physicsNote: "採用Chord最新的ULTIMA雙前饋放大技術與高頻交換式電源。每聲道300瓦(8歐姆)輸出。搭載28個專利MOSFET功率管。",
    novashinVerdict: "標準的『西裝暴徒』，外表優雅，內心狂野。驅動力深不見底，能讓喇叭發出前所未有的聲音，體驗過的都說『回不去了』。"
  },
  {
    id: "ce-ultimaint",
    brand: "Chord Electronics",
    model: "Ultima Integrated",
    type: "amp",
    sonicSignature: "融合了Ultima前後級的精華，聲音快速、純淨、有力，同時不失細膩。",
    pairingAdvice: "125瓦功率，足以應付多數中高階落地喇叭。是一台功能完整、聲音出色的頂級合併機。",
    physicsNote: "採用ULTIMA前級技術與AB類後級放大。每聲道125瓦(8歐姆)。具備XLR平衡輸入。",
    novashinVerdict: "想體驗ULTIMA系列的魅力，但又不想搞前後級那麼複雜？這台合併機就是你的答案。聲音表現直逼自家前後級，是『懶人發燒』的終極方案。"
  },
  {
    id: "ce-ultimapre3",
    brand: "Chord Electronics",
    model: "Ultima Pre 3",
    type: "preamp",
    sonicSignature: "音色中性通透，動態寬廣，能精準傳遞訊源的細節與情感。",
    pairingAdvice: "專為搭配Ultima 5或Ultima 6後級設計，能組成一套聲音連貫、控制力強的西裝。也適合搭配其他中性聲底的後級。",
    physicsNote: "採用全新設計的類比電路，具備高頻交換式電源供應。提供5組類比輸入，包含XLR平衡。全航太級鋁合金機箱。",
    novashinVerdict: "承襲旗艦前級技術，價格更親民。設計簡潔，操作直觀，聲音表現超乎預期，是進入Chord前後級世界的絕佳敲門磚。"
  },
  {
    id: "cla-deltamono",
    brand: "Classe",
    model: "Delta MONO",
    type: "poweramp",
    sonicSignature: "Delta STEREO的終極形態，聲音更為從容、權威，規模感與動態對比無與倫比。",
    pairingAdvice: "單聲道300瓦，前35瓦純A類。專為最難驅動的喇叭而生，能榨出喇叭的每一分潛力。搭配Delta PRE，組成Classe的頂級參考系統。",
    physicsNote: "單聲道設計，前35瓦(8歐姆)為純A類，總功率300瓦(8歐姆)。採用更龐大的電源供應與散熱系統。全平衡設計。",
    novashinVerdict: "Classe的『重型武器』，展現了毫不妥協的驅動力。聲音大氣磅礴，細節絲絲入扣，是金字塔頂端玩家追求極致的選擇，標準的『富人玩具』。"
  },
  {
    id: "cla-deltapre",
    brand: "Classe",
    model: "Delta PRE",
    type: "preamp",
    sonicSignature: "極度透明、細節豐富、功能強大，聲音中性平衡，是系統的神經中樞。",
    pairingAdvice: "功能齊全的數位/類比前級，內建高品質DAC與串流功能。可調整的EQ與低音管理系統是其亮點，能針對空間進行優化。最佳拍檔是Delta系列後級。",
    physicsNote: "全平衡差動電路設計，提供豐富的數位(含USB, AES/EBU)與類比(含Phono)輸入。搭載AKM 4497 DAC晶片。支援串流與音調控制。",
    novashinVerdict: "一台『全能型』前級，從黑膠到串流，從兩聲道到家庭劇院，幾乎無所不能。聲音精準，功能強大，是解決系統疑難雜症的『瑞士刀』。"
  },
  {
    id: "cla-deltastereo",
    brand: "Classe",
    model: "Delta STEREO",
    type: "poweramp",
    sonicSignature: "聲音精準、中性、控制力強，音色純淨無染，兼具D類的效率與AB類的溫潤。",
    pairingAdvice: "前12.5瓦為純A類放大，適合搭配高靈敏度喇叭享受A類美聲。總功率250瓦，足以應付多數大型落地喇叭，抓喇叭能力一流。與Delta PRE是官方西裝。",
    physicsNote: "採用橫向MOSFET輸出級，前12.5瓦(8歐姆)為純A類工作，總功率達250瓦/聲道(8歐姆)。配備大型環形變壓器與ICTunnel主動散熱技術。",
    novashinVerdict: "新世代Classe的代表作，完美融合了A類的細膩與D類的蠻力。外觀的儀表板更是騷氣十足，是標準的『貴婦機』，聲音與顏值都在線。"
  },
  {
    id: "cla-sigma2200i",
    brand: "Classe",
    model: "Sigma 2200i",
    type: "amp",
    sonicSignature: "聲音乾淨、快速、有力，D類放大的優勢展露無遺，同時保有Classe一貫的精準與細膩。",
    pairingAdvice: "200瓦D類放大，適合搭配現代設計、需要高阻尼係數的喇叭。內建DAC與串流功能，是一台簡潔高效的All-in-One解決方案。",
    physicsNote: "採用交換式電源與D類放大技術，每聲道200瓦(8歐姆)。具備USB與網路串流輸入，並提供低音管理功能。",
    novashinVerdict: "Sigma系列是Classe對現代音響的詮釋，高效、簡潔、智慧。2200i的聲音表現超乎預期，證明了D類放大也能有好聲音，是『數位時代』的發燒利器。"
  },
  {
    id: "cla-sigmassp",
    brand: "Classe",
    model: "Sigma SSP",
    type: "preamp",
    sonicSignature: "多聲道版本的Sigma前級，聲音風格與兩聲道一致，精準、快速、透明。",
    pairingAdvice: "7.1聲道環繞處理前級，同時兼顧高品質的兩聲道播放。適合想在家庭劇院與Hi-End音響之間取得平衡的玩家。",
    physicsNote: "模組化設計，支援HDMI 2.0與HDCP 2.2。搭載觸控螢幕，操作直觀。具備USB與網路串流功能，並有完善的喇叭設定與EQ調整。",
    novashinVerdict: "一台能讓『劇院迷』與『發燒友』握手言和的機器。在多聲道處理上專業，兩聲道表現也不妥協，是整合兩大系統的智慧之選。"
  },
  {
    id: "creek-evolution100a",
    brand: "Creek",
    model: "Evolution 100A",
    type: "amp",
    sonicSignature: "聲音平衡、有力、動態好，比傳統英國聲更具衝擊力與現代感。",
    pairingAdvice: "110瓦功率，推力不俗，能應付多數中型落地喇叭。音色中性，搭配範圍廣泛。可加裝DAC或Phono模組。",
    physicsNote: "AB類放大，每聲道110瓦(8歐姆)。採用200VA環形變壓器。提供XLR平衡輸入。可選配Ruby DAC或Sequel MK4唱放模組。",
    novashinVerdict: "Evolution系列的中堅力量，在傳統與現代之間取得了很好的平衡。聲音有肉、有勁、有細節，是一台『雜食性』很高的綜擴。"
  },
  {
    id: "creek-evolution50a",
    brand: "Creek",
    model: "Evolution 50A",
    type: "amp",
    sonicSignature: "輕快、活潑、富有節奏感，聲音充滿年輕活力，是入門英國聲的絕佳選擇。",
    pairingAdvice: "55瓦功率，適合搭配高效率書架喇叭或小型落地喇叭，在中小空間能營造出很好的音樂氛圍。",
    physicsNote: "AB類放大，每聲道55瓦(8歐姆)。採用OLED顯示螢幕。同樣提供模組化升級選項，可加裝DAC或Phono卡。",
    novashinVerdict: "Creek的長青入門機，用實惠的價格提供了純正的英國聲體驗。聲音活潑討喜，是帶領新手進入Hi-Fi世界的『引路人』。"
  },
  {
    id: "creek-voyagei20",
    brand: "Creek",
    model: "Voyage i20",
    type: "amp",
    sonicSignature: "溫暖、流暢、音樂性佳，是英國聲的傳統美德，帶有現代的透明度與速度感。",
    pairingAdvice: "MOSFET推挽輸出，聲音甜潤，適合搭配音色中性或偏亮的喇叭，能增添音樂的韻味。可選配DAC模組，擴充數位訊源。",
    physicsNote: "AB類放大，每聲道120瓦(8歐姆)。採用大型環形變壓器與多組獨立電源。可選配Ruby DAC模組，支援USB、光纖、同軸輸入。",
    novashinVerdict: "Creek的旗艦合併機，堅守傳統AB類陣地，聲音溫潤耐聽，是『老派發燒友』的心頭好。在這個D類當道的時代，是一股清流。"
  },
  {
    id: "dali-callisto6c",
    brand: "DALI",
    model: "Callisto 6C",
    type: "speaker",
    sonicSignature: "承襲DALI的活生感與音樂性，聲音方便又好聽，是無線音響的標竿。",
    pairingAdvice: "主動式喇叭，內建D類擴大機。需搭配DALI Sound Hub或Sound Hub Compact進行無線串流。可選配BluOS模組，擴充串流功能。",
    physicsNote: "每支喇叭內建250瓦D類擴大機。採用混合高音模組與6.5吋木纖維中低音單體。透過5.8GHz頻道進行無線傳輸。",
    novashinVerdict: "DALI對未來音響的答案，擺脫了線材的束縛，但聲音品質毫不妥協。設定簡單，使用方便，是『現代懶人發燒』的最佳解決方案。"
  },
  {
    id: "dali-epicon6",
    brand: "DALI",
    model: "Epicon 6",
    type: "speaker",
    sonicSignature: "承襲Epicon 8的寬鬆與自然，但形體感更為凝聚，速度感更快，在中小型空間表現更均衡。",
    pairingAdvice: "比Epicon 8更容易驅動，但仍建議使用百瓦以上優質擴大機。適合搭配聲底乾淨、速度快的擴大機，展現其活生感。",
    physicsNote: "同樣採用混合高音模組與SMC磁鐵系統。雙6.5吋中低音單體設計，低頻延伸與量感依然出色。",
    novashinVerdict: "如果你的空間無法容納Epicon 8，Epicon 6就是完美的替代方案。聲音同樣高貴，但更為精實，是更『務實』的旗艦選擇。"
  },
  {
    id: "dali-epicon8",
    brand: "DALI",
    model: "Epicon 8",
    type: "speaker",
    sonicSignature: "聲音寬鬆、自然、規模感宏大，高頻空氣感十足，中頻飽滿有肉，低頻深沉而有彈性。",
    pairingAdvice: "旗艦落地喇叭，需要大功率、控制力好的擴大機來馴服。擴大機音色不宜過於厚重，以中性或略帶甜味者為佳，能展現其通透的本質。",
    physicsNote: "搭載DALI標誌性的混合高音模組(鋁帶+絲質軟半球)，以及SMC(軟磁性複合物)磁鐵系統的木纖維紙盆中低音單體，有效降低磁滯失真。",
    novashinVerdict: "DALI的技術力展現，SMC技術讓聲音的純淨度與細節表現提升到新的層次。聲音大氣開闊，是標準的『客廳霸主』，能輕鬆填滿大空間。"
  },
  {
    id: "dali-kore",
    brand: "DALI",
    model: "Kore",
    type: "speaker",
    sonicSignature: "極致的寬鬆、自然與真實感，聲音毫不費力，彷彿樂團就在眼前。是DALI聲音哲學的終極體現。",
    pairingAdvice: "DALI的史詩級旗艦，需要頂級中的頂級器材來搭配。空間、預算、器材缺一不可，是終極發燒的挑戰。",
    physicsNote: "搭載全新的EVO-K混合高音模組與第二代SMC技術。雙11.5吋低音單體，平衡驅動設計。重達148公斤。",
    novashinVerdict: "丹麥音響工業的驕傲，是DALI傾盡全力打造的『神獸』級產品。聲音表現已經超越了Hi-Fi的範疇，是對音樂的終極致敬。是真正的『富人玩具』，也是發燒友的夢想。"
  },
  {
    id: "dali-oberon5",
    brand: "DALI",
    model: "Oberon 5",
    type: "speaker",
    sonicSignature: "體積纖細，聲音卻不失飽滿與衝擊力，聲音快速而精準。",
    pairingAdvice: "適合小空間使用的落地喇叭，對擺位要求不高。搭配入門級串流一體機就能組成一套完整的系統。",
    physicsNote: "採用29mm絲質軟半球高音與兩顆5.25吋SMC木纖維中低音單體。",
    novashinVerdict: "專為現代居家環境設計的喇叭，體積小巧，外型時尚，聲音表現卻毫不妥協。是『顏值黨』與『音質黨』都能滿意的選擇。"
  },
  {
    id: "dali-oberon7",
    brand: "DALI",
    model: "Oberon 7",
    type: "speaker",
    sonicSignature: "聲音活潑、開放、音樂性佳，是DALI入門系列的超值之選。",
    pairingAdvice: "效率高，不挑擴大機，即使是小功率的管機或綜擴也能推出好聲音。適合初燒玩家或預算有限的用戶。",
    physicsNote: "採用29mm超輕量絲質軟半球高音與兩顆7吋SMC木纖維中低音單體。",
    novashinVerdict: "Oberon 7是『窮人的福音』，用入門級的價格提供了充滿樂感的聲音。搭配簡單，聲音討喜，是Hi-Fi世界的友善大使。"
  },
  {
    id: "dali-oberon9",
    brand: "DALI",
    model: "Oberon 9",
    type: "speaker",
    sonicSignature: "氣勢磅礡，低頻權威感十足，聲音充滿能量，是家庭劇院與搖滾樂的絕配。",
    pairingAdvice: "雙9吋低音單體，對擴大機的電流輸出有一定要求。適合搭配日系環繞擴大機或美式大功率後級，能營造出震撼的音效。",
    physicsNote: "系列旗艦，採用29mm絲質軟半球高音、7吋中音與兩顆9吋低音單體，均應用SMC技術。",
    novashinVerdict: "Oberon系列的『巨無霸』，專為追求低頻震撼與大動態的玩家而生。看電影、聽搖滾，爽度破表，是標準的『暴力美學』實踐者。"
  },
  {
    id: "dali-rubicon2",
    brand: "DALI",
    model: "Rubicon 2",
    type: "speaker",
    sonicSignature: "書架喇叭的體積，卻有著超乎預期的規模感與低頻量感，聲音溫暖飽滿。",
    pairingAdvice: "雖然是書架喇叭，但潛力十足，值得為它搭配一台優質的擴大機。適合近場聆聽或在小空間作為主喇叭。",
    physicsNote: "採用SMC技術的6.5吋中低音單體與絲質軟半球高音。低音反射孔後置。",
    novashinVerdict: "體積小，能量大，是書架喇叭中的『小巨人』。聲音溫暖討喜，中頻帶有『毒性』，聽人聲絕佳。"
  },
  {
    id: "dali-rubicon6",
    brand: "DALI",
    model: "Rubicon 6",
    type: "speaker",
    sonicSignature: "聲音平衡、流暢，兼具解析力與音樂性，是系列中最受歡迎的型號。",
    pairingAdvice: "對擴大機友善，百瓦左右的綜擴就能推得有聲有色。適合在20-30平方米的空間使用。",
    physicsNote: "同樣搭載SMC技術與混合高音模組。雙6.5吋中低音單體，分頻點經過優化，銜接更為順暢。",
    novashinVerdict: "Rubicon 6是『恰到好處』的典範，體積、價格、聲音表現都取得了絕佳的平衡。無論是入門還是升級，它都是一個不會錯的選擇。"
  },
  {
    id: "dali-rubicon8",
    brand: "DALI",
    model: "Rubicon 8",
    type: "speaker",
    sonicSignature: "聲音充滿活力與能量感，細節豐富，音場開闊，是DALI中階系列的性能標竿。",
    pairingAdvice: "三音路六單體設計，需要推力與控制力兼備的擴大機。搭配中性偏暖的擴大機能讓聲音更為悅耳耐聽。",
    physicsNote: "繼承了Epicon系列的SMC技術與混合高音模組，是技術下放的受益者。採用三顆獨立的6.5吋低音單體。",
    novashinVerdict: "Rubicon 8是DALI的『中流砥柱』，用更親民的價格提供了接近旗艦的聲音體驗。聲音全面，動靜皆宜，是CP值極高的選擇。"
  },
  {
    id: "dda-momentumhd",
    brand: "Dan D'Agostino",
    model: "Momentum HD",
    type: "preamp",
    sonicSignature: "極致的透明度與活生感，音色華麗而飽滿，聲音充滿貴氣。",
    pairingAdvice: "Momentum系列的靈魂，與Momentum M400MxV是天作之合。其獨特的音色能為任何系統增添一絲『貴氣』。",
    physicsNote: "全平衡、純A類、零負回授設計。採用獨立的電源供應機箱。音量控制旋鈕的設計靈感來自瑞士名錶。",
    novashinVerdict: "一件聲音的藝術品，從視覺到聽覺都散發著奢華的氣息。聲音高貴華麗，是標準的『貴婦機』，能讓任何音樂都聽起來更『好聽』。"
  },
  {
    id: "dda-momentumm400mxv",
    brand: "Dan D'Agostino",
    model: "Momentum M400MxV",
    type: "poweramp",
    sonicSignature: "力量與細膩的完美結合，聲音快速、有力，同時保有豐富的細節與溫潤的音色。",
    pairingAdvice: "400瓦單聲道後級，足以應付絕大多數難搞的喇叭。搭配Momentum HD前級，能展現出D'Agostino標誌性的聲音美學。",
    physicsNote: "採用Venturi散熱技術，機箱兩側的銅質散熱孔是其標誌。最新的MxV版本在驅動級與輸出級都進行了重大升級。",
    novashinVerdict: "D'Agostino最經典的型號，不斷進化的傳奇。M400MxV版本將其性能推向了新的高峰，是Hi-End音響史上不可繞過的名字。"
  },
  {
    id: "dda-progressionint",
    brand: "Dan D'Agostino",
    model: "Progression Integrated",
    type: "amp",
    sonicSignature: "充滿能量與動感，聲音開闊、直接，帶有美式音響的豪邁風格。",
    pairingAdvice: "200瓦(8歐姆)功率，驅動力充沛。可選配數位模組，增加串流與DAC功能，成為系統核心。適合搭配需要能量感的喇叭。",
    physicsNote: "承襲旗艦系列的設計理念，採用標誌性的Venturi散熱技術。可選配的數位模組支援Tidal、Qobuz、MQA與Roon。",
    novashinVerdict: "進入D'Agostino世界的入場券，用相對親民的價格提供了招牌的聲音與設計。是一台可以『文武雙全』的合併機，聽古典大氣，聽搖滾過癮。"
  },
  {
    id: "dda-progressionmono",
    brand: "Dan D'Agostino",
    model: "Progression Mono",
    type: "poweramp",
    sonicSignature: "Progression系列的終極力量展現，聲音規模感宏大，低頻控制力驚人，動態對比強烈。",
    pairingAdvice: "500瓦(8歐姆)的單聲道巨獸，能讓任何喇叭俯首稱臣。適合追求極致動態與衝擊力的玩家。",
    physicsNote: "全平衡設計，採用超大的電源供應與電容陣列。機箱比立體聲版本更深，散熱能力更強。",
    novashinVerdict: "Progression系列的『完全體』，展現了毫不妥協的『暴力美學』。聲音能量感爆棚，是家庭劇院與大編制古典樂的絕配。"
  },
  {
    id: "dda-relentlessmono",
    brand: "Dan D'Agostino",
    model: "Relentless Mono",
    type: "poweramp",
    sonicSignature: "無堅不摧的驅動力，極致的動態與權威感，聲音密度高得驚人，同時保有純A類的細膩與華麗。",
    pairingAdvice: "後級中的『核動力航母』，1500瓦(8歐姆)功率，專為挑戰最極端的喇叭而生。前端搭配必須是頂級中的頂級，否則只是曝其短。",
    physicsNote: "純A類、全平衡、直耦設計。巨大的散熱器與標誌性的銅質散熱片。每台重達258公斤。採用超大容量的電源供應。",
    novashinVerdict: "Dan D'Agostino的畢生功力展現，是音響史上最瘋狂的後級之一。聲音就是『無敵』的代名詞，是金字塔尖1%富豪的終極『富人玩具』。"
  },
  {
    id: "dda-relentlessstereo",
    brand: "Dan D'Agostino",
    model: "Relentless Stereo",
    type: "poweramp",
    sonicSignature: "繼承單聲道版本的皇者氣勢，聲音同樣充滿力量與美感，控制力無與倫比。",
    pairingAdvice: "立體聲版本，功率稍減但依然強悍。對於空間或預算略有限制的頂級玩家，是體驗Relentless威力的另一選擇。",
    physicsNote: "與單聲道版本相同的核心技術，但在單一機箱內實現立體聲放大。重量與體積依然驚人。",
    novashinVerdict: "『只』需要一台的Relentless，聲音的皇者風範絲毫不減。對於那些不想在家裡擺兩台『冰箱』的發燒友來說，是更『理性』的瘋狂。"
  },
  {
    id: "dcs-bartok",
    brand: "dCS",
    model: "Bartok",
    type: "dac",
    sonicSignature: "充滿活力與動感，聲音細節豐富，音色中性帶點甜美，是dCS家族中最具親和力的聲音。",
    pairingAdvice: "dCS的入門級產品，但聲音表現絕不入門。內建強大的耳擴功能，是頂級耳機玩家的夢幻逸品。",
    physicsNote: "搭載Ring DAC技術，可選配APEX升級。其耳擴部分採用獨特的A類放大線路，推力與音質兼備。",
    novashinVerdict: "Bartok的出現，讓更多人能一窺dCS的堂奧。尤其是它的耳擴版本，幾乎是市面上最強大的DAC/耳擴一體機，是耳機發燒友的『退燒機』。"
  },
  {
    id: "dcs-linadac",
    brand: "dCS",
    model: "Lina DAC",
    type: "dac",
    sonicSignature: "Lina系統的核心，聲音精準、中性、透明，專為耳機聆聽優化。",
    pairingAdvice: "專為頂級耳機系統設計，可搭配Lina Master Clock與Lina Headphone Amplifier組成西裝。",
    physicsNote: "採用dCS Ring DAC與Expanse耳機處理技術。小巧的機箱設計，適合桌上擺放。",
    novashinVerdict: "dCS為耳機發燒友打造的專屬系統，將旗艦技術濃縮在小巧的機箱內。聲音精準無比，是耳機系統的『手術刀』。"
  },
  {
    id: "dcs-linamasterclock",
    brand: "dCS",
    model: "Lina Master Clock",
    type: "dac",
    sonicSignature: "不產生聲音，但能讓聲音更『對』。加入後，音場更穩定，結像更清晰，背景更寧靜。",
    pairingAdvice: "為Lina DAC或Network DAC提供超高精度的時脈訊號，是升級系統的關鍵一步。",
    physicsNote: "採用雙晶體振盪器，分別提供44.1kHz與48kHz倍頻的時脈。",
    novashinVerdict: "時脈是數位音響的『靈魂』，Lina Master Clock就是為Lina系統注入靈魂的那個角色。雖然價格不菲，但效果立竿見影，是dCS玩家遲早要走上的『不歸路』。"
  },
  {
    id: "dcs-linanetworkdac",
    brand: "dCS",
    model: "Lina Network DAC",
    type: "streamer",
    sonicSignature: "在Lina DAC的基礎上增加了串流功能，聲音表現一致。",
    pairingAdvice: "對於以串流為主要訊源的Lina用家，是更方便的選擇。",
    physicsNote: "增加了網路串流模組，其餘規格與Lina DAC相同。",
    novashinVerdict: "讓Lina系統更為完整的『最後一塊拼圖』，實現了dCS在耳機領域的完整生態系。"
  },
  {
    id: "dcs-rossinidac",
    brand: "dCS",
    model: "Rossini DAC",
    type: "dac",
    sonicSignature: "承襲Vivaldi的精準與流暢，但音色更為飽滿熱情，音樂性與音響性兼備。",
    pairingAdvice: "dCS的中堅力量，可搭配Rossini Master Clock與Transport。內建串流功能，也可作為一體化的數位中心。",
    physicsNote: "同樣搭載Ring DAC APEX技術。具備網路串流功能，支援Roon Ready、Tidal Connect、Spotify Connect等。",
    novashinVerdict: "如果Vivaldi是高高在上的王者，Rossini就是更接地氣的王子。聲音同樣高貴，但多了一絲人性的溫度，是更『感性』的dCS之聲。"
  },
  {
    id: "dcs-rossiniplayer",
    brand: "dCS",
    model: "Rossini Player",
    type: "streamer",
    sonicSignature: "結合了Rossini DAC與高品質CD轉盤，聲音表現與DAC版本一致，方便實用。",
    pairingAdvice: "對於同時擁有大量CD收藏與串流需求的玩家，是一步到位的解決方案。",
    physicsNote: "在Rossini DAC的基礎上，加入了奧地利StreamUnlimited提供的CD轉盤機構。",
    novashinVerdict: "為『實體』與『虛擬』搭建的橋樑，讓傳統CD玩家也能無縫接軌串流時代。是dCS對市場需求的細膩回應。"
  },
  {
    id: "dcs-vivaldidac",
    brand: "dCS",
    model: "Vivaldi DAC",
    type: "dac",
    sonicSignature: "聲音極度透明、流暢、自然，細節描繪能力驚人，音場深邃而穩定。",
    pairingAdvice: "Vivaldi分體系統的核心，可搭配同系列的Master Clock、Upsampler與Transport，組成四件式的終極數位訊源。",
    physicsNote: "最新一代的Ring DAC APEX版本，大幅降低了失真與噪訊。全平衡設計，提供多種數位濾波選項。",
    novashinVerdict: "數位解碼的教科書，展現了dCS在數位領域的深厚功力。APEX版本的升級讓它再次站上頂點，是追求極致數位之聲的發燒友的終極目標。"
  },
  {
    id: "dcs-vivaldione",
    brand: "dCS",
    model: "Vivaldi One",
    type: "dac",
    sonicSignature: "極致的解析力、無邊的音場、完美的流暢感，聲音精準而自然，是數位訊源的巔峰。",
    pairingAdvice: "限量版的旗艦一體機，結合了Vivaldi系列的轉盤、DAC與升頻器。是系統的終極訊源，需要同樣頂級的後端器材來匹配。",
    physicsNote: "採用dCS獨家的Ring DAC架構與數位處理平台。支援升頻至DSD1024與DXD。機箱由航太級鋁合金切削而成。內建SACD/CD轉盤。",
    novashinVerdict: "dCS 25週年的紀念碑，將自家分體旗艦濃縮於一體。聲音表現無可挑剔，是數位時代的『終極答案』之一。擁有它，等於擁有了一段數位音響的歷史。是真正的『毒物』。"
  },
  {
    id: "den-ares15th",
    brand: "Denafrips",
    model: "Ares 15th",
    type: "dac",
    sonicSignature: "比標準版Ares II更為乾淨、快速，解析力與動態有所提升，聲音更為現代。",
    pairingAdvice: "15週年紀念版，聲音走向略有不同，提供了另一種風味的入門選擇。",
    physicsNote: "在Ares II的基礎上進行了優化，可能更換了部分關鍵元件。",
    novashinVerdict: "Ares的『特別版』，聲音更Hi-Fi，但原本的暖厚韻味略有減少。青菜蘿蔔，各有所好。"
  },
  {
    id: "den-aresii",
    brand: "Denafrips",
    model: "Ares II",
    type: "dac",
    sonicSignature: "溫暖、飽滿、富有樂感，聲音討喜耐聽，是入門R2R DAC的最佳選擇。",
    pairingAdvice: "體積小巧，適合桌上系統或小型兩聲道。其溫暖的聲底能為入門系統增添不少音樂味。",
    physicsNote: "真正的平衡R2R DAC，採用24-bit R2R電阻陣列。支援NOS(Non-Oversampling)模式。",
    novashinVerdict: "Ares II是『窮人的福音』，用極低的價格提供了真正的R2R體驗。聲音溫暖討喜，是無數新手進入R2R美妙世界的『引路人』。"
  },
  {
    id: "den-gaia",
    brand: "Denafrips",
    model: "Gaia",
    type: "streamer",
    sonicSignature: "Hermes的旗艦版本，淨化效果更上一層樓。聲音的寧靜度與安定感達到新的境界。",
    pairingAdvice: "專為Terminator系列DAC設計的頂級DDC，兩者搭配能發揮出1+1>2的效果。",
    physicsNote: "採用更高級的OCXO時脈與更複雜的FPGA處理線路。電源供應部分也進行了強化。",
    novashinVerdict: "DDC的『天花板』之一，價格高昂，但效果顯著。是Denafrips玩家攻頂的『最後一哩路』，也是『錢包的終結者』。"
  },
  {
    id: "den-hermes",
    brand: "Denafrips",
    model: "Hermes",
    type: "streamer",
    sonicSignature: "作為DDC(Digital to Digital Converter)，本身不發聲，但能顯著提升後端DAC的表現，使背景更黑、聲音更穩定。",
    pairingAdvice: "高階DDC，透過I2S(HDMI)接口連接Denafrips自家DAC效果最佳。能有效隔離來自電腦或串流機的數位噪訊。",
    physicsNote: "搭載飛秒級OCXO恆溫晶體振盪器，提供極高精度的時脈重整。具備豐富的數位輸入與輸出接口。",
    novashinVerdict: "數位系統的『淨水器』，能濾除數位訊號中的各種雜質。對於追求極致的數位玩家來說，是不可或缺的一環。"
  },
  {
    id: "den-iris",
    brand: "Denafrips",
    model: "Iris",
    type: "streamer",
    sonicSignature: "入門級DDC，能有效改善入門數位訊源的時基誤差與噪訊問題。",
    pairingAdvice: "適合搭配Ares或Pontus等級的DAC，能以較低的成本提升系統表現。",
    physicsNote: "採用TCXO(Temperature Compensated Crystal Oscillator)晶體振盪器，提供時脈重整與FIFO緩衝。",
    novashinVerdict: "Iris是DDC的『推廣大使』，讓更多人能以實惠的價格體驗到時脈重整帶來的好處。是入門數位系統升級的『聰明投資』。"
  },
  {
    id: "den-pontus15th",
    brand: "Denafrips",
    model: "Pontus 15th",
    type: "dac",
    sonicSignature: "在Pontus II的基礎上，聲音更為精緻、透明，背景更黑，兩端延伸更好。",
    pairingAdvice: "15週年紀念版，限量發行。是Pontus II的『完全體』，適合追求極致的Denafrips粉絲。",
    physicsNote: "升級了DSP處理器，採用更高級的電源供應與元件。外觀有15週年紀念銘牌。",
    novashinVerdict: "為粉絲準備的『收藏品』，聲音的提升清晰可聞。展現了Denafrips在既有架構下不斷優化的能力。"
  },
  {
    id: "den-pontusii",
    brand: "Denafrips",
    model: "Pontus II",
    type: "dac",
    sonicSignature: "聲音中性、均衡、動態好，是Denafrips家族中最為『標準』的聲音，雜食性高。",
    pairingAdvice: "萬元級R2R DAC的標竿，搭配範圍廣泛。無論是晶體機還是管機，都能很好地融入系統。",
    physicsNote: "搭載26-bit R2R解碼與6-bit DSD硬體解碼。採用線性電源供應與全平衡設計。",
    novashinVerdict: "Pontus II是Denafrips的『守門員』，在這個價位帶，它的聲音表現與用料幾乎沒有對手。是無數發燒友從入門邁向進階的『敲門磚』。"
  },
  {
    id: "den-terminatorii",
    brand: "Denafrips",
    model: "Terminator II",
    type: "dac",
    sonicSignature: "承襲Plus版本的宏大與醇厚，但聲音更為活潑，速度感與解析力略有提升。",
    pairingAdvice: "性價比極高的次旗艦，聲音表現非常接近Plus版本。適合預算有限但又想體驗頂級R2R之聲的玩家。",
    physicsNote: "同樣採用精選的R2R電阻陣列，但在時脈與電源供應部分略有簡化。依然保持了全平衡架構。",
    novashinVerdict: "Terminator II是Denafrips的『聰明之選』，用八折的價格提供了九成的旗艦體驗。聲音同樣出色，是Hi-End市場的『CP值之王』。"
  },
  {
    id: "den-terminatorplus",
    brand: "Denafrips",
    model: "Terminator Plus",
    type: "dac",
    sonicSignature: "聲音規模感宏大，音場深遠，音色飽滿醇厚，帶有R2R標誌性的自然與流暢感。",
    pairingAdvice: "旗艦R2R DAC，適合搭配任何中高階系統。其醇厚的聲底能為過於冷硬的系統增添韻味。建議搭配自家Gaia或Hermes DDC以獲得最佳效果。",
    physicsNote: "搭載重量級的R2R電阻陣列梯級網絡解碼。採用Oven-Controlled Crystal Oscillators (OCXO)恆溫晶體振盪器，時脈精度極高。全平衡設計。",
    novashinVerdict: "Denafrips的技術力展現，用料毫不手軟的『堆料王』。聲音大氣、穩重、耐聽，是R2R DAC中的『巨無霸』，也是萬元級DAC市場的『破壞者』。"
  },
  {
    id: "den-venusii",
    brand: "Denafrips",
    model: "Venus II",
    type: "dac",
    sonicSignature: "聲音平衡、細膩、富有光澤，中高頻表現尤其出色，人聲與弦樂帶有『毒性』。",
    pairingAdvice: "Denafrips的中堅力量，聲底比Terminator更為清麗。適合搭配需要提升細膩度與空氣感的系統。",
    physicsNote: "採用與旗艦同等級的R2R解碼技術，但在電阻精度與電源供應上有所區分。具備平衡與非平衡輸出。",
    novashinVerdict: "如果說Terminator是『大開大闔』的猛將，Venus就是『溫柔婉約』的才女。聲音細膩動人，尤其在人聲表現上，有讓人一聽中毒的魔力。"
  },
  {
    id: "dev-arch",
    brand: "Devialet",
    model: "Arch",
    type: "subwoofer",
    sonicSignature: "作為連接中樞，本身不發聲，但能將非Devialet的訊源無縫接入Phantom生態系。",
    pairingAdvice: "為你的黑膠唱盤、CD機或其他類比/數位訊源提供連接Phantom的橋樑。",
    physicsNote: "高品質的ADC與唱放模組，可將類比訊號轉換為高解析度數位訊號，再無線傳輸給Phantom。",
    novashinVerdict: "打通Phantom封閉生態系的『任督二脈』，讓你的傳統音響器材也能享受Phantom的便利與震撼。是老發燒友擁抱新科技的『翻譯機』。"
  },
  {
    id: "dev-expertpro130",
    brand: "Devialet",
    model: "Expert Pro 130",
    type: "amp",
    sonicSignature: "聲音風格一致，但規模感與驅動力略遜一籌，更顯精緻與細膩。",
    pairingAdvice: "130瓦功率，適合搭配高效率喇叭或在中小空間使用。是進入Devialet世界的『入門券』。",
    physicsNote: "入門級ADH放大器，核心技術一應俱全，但在功率與部分元件上有所簡化。",
    novashinVerdict: "最親民的Expert Pro，讓更多人能享受到ADH與SAM帶來的革命性體驗。聲音品質依然出色，CP值極高。"
  },
  {
    id: "dev-expertpro220",
    brand: "Devialet",
    model: "Expert Pro 220",
    type: "amp",
    sonicSignature: "承襲440 Pro的聲音特質，透明、快速、控制力強，聲音純淨無染。",
    pairingAdvice: "立體聲版本，220瓦功率，足以應付絕大多數喇叭。是體驗Devialet核心技術的絕佳起點。未來可再添購一台升級為440 Pro。",
    physicsNote: "單機箱立體聲ADH放大，同樣支援SAM、RAM(Record Active Matching)等核心技術。",
    novashinVerdict: "Expert Pro系列的『標準版』，性能強悍，功能完整。未來升級路徑明確，是『可成長』的投資。"
  },
  {
    id: "dev-expertpro440",
    brand: "Devialet",
    model: "Expert Pro 440",
    type: "amp",
    sonicSignature: "極致的透明、精準與控制力，聲音背景漆黑，動態深不見底，是D類放大的巔峰之作。",
    pairingAdvice: "雙單聲道設計，440瓦強大功率，能駕馭任何喇叭。其SAM(Speaker Active Matching)技術能針對特定喇叭進行優化，發揮喇叭120%的潛力。",
    physicsNote: "採用Devialet專利的ADH(Analog Digital Hybrid)放大技術，結合A類的電壓放大與D類的電流放大。內建高品質串流與唱放。",
    novashinVerdict: "來自法國的『黑科技』，一台機器解決所有問題。聲音精準如手術刀，外型優雅如藝術品。是Hi-End音響界的『蘋果』，重新定義了現代音響。"
  },
  {
    id: "dev-phantomi103db",
    brand: "Devialet",
    model: "Phantom I 103dB",
    type: "speaker",
    sonicSignature: "能量感稍減，但聲音更為均衡耐聽，同樣具備驚人的低頻表現。",
    pairingAdvice: "與108dB版本相比，更適合在一般居家空間使用。同樣支援立體聲配對與多房間串流。",
    physicsNote: "功率與最大音壓略低於108dB版本，但核心技術完全相同。",
    novashinVerdict: "更『文明』一點的Phantom，在震撼與耐聽之間取得了更好的平衡。對於多數用戶來說，是更理性的選擇。"
  },
  {
    id: "dev-phantomi108db",
    brand: "Devialet",
    model: "Phantom I 108dB",
    type: "speaker",
    sonicSignature: "極具衝擊力的低頻，超乎體積的能量感，聲音密度高，音場開闊。是主動式喇叭的『震撼彈』。",
    pairingAdvice: "單支即可享受音樂，兩支組立體聲效果更佳。透過Devialet App進行控制與串流。適合追求極簡與震撼音效的現代玩家。",
    physicsNote: "搭載ADH放大技術與HBI(Heart Bass Implosion)低音技術。球形箱體設計，同軸單體結構。最大音壓達108dB。",
    novashinVerdict: "一顆來自外太空的『蛋』，徹底顛覆了人們對喇叭的想像。低頻表現完全不科學，是標準的『暴力美學』產物。派對神器，鄰居的惡夢。"
  },
  {
    id: "dev-phantomii95db",
    brand: "Devialet",
    model: "Phantom II 95dB",
    type: "speaker",
    sonicSignature: "Phantom家族中最入門的型號，聲音風格一致，但極低頻的延伸與量感有所節制。",
    pairingAdvice: "最適合近場聆聽的版本，在桌面上能提供精準的音場與飽滿的聲音。",
    physicsNote: "功率與最大音壓為系列最低，但依然遠超同體積喇叭。",
    novashinVerdict: "最親民的Phantom，讓更多人能以較低的預算體驗Devialet的魅力。是『年輕人的第一顆蛋』。"
  },
  {
    id: "dev-phantomii98db",
    brand: "Devialet",
    model: "Phantom II 98dB",
    type: "speaker",
    sonicSignature: "體積更小，但聲音能量感依然驚人。聲音快速、乾淨、充滿活力。",
    pairingAdvice: "適合桌上近場聆聽或在臥室、書房等小空間使用。可搭配腳架或壁掛架。",
    physicsNote: "Phantom的縮小版，同樣採用ADH、HBI、SAM等核心技術。最大音壓98dB。",
    novashinVerdict: "小一號的『震撼蛋』，可愛的外型下隱藏著巨大的能量。是頂級電腦喇叭或床頭音響的終極選擇。"
  },
  {
    id: "dyn-confidence20",
    brand: "Dynaudio",
    model: "Confidence 20",
    type: "speaker",
    sonicSignature: "書架喇叭的巔峰之作，聲音的透明度、細節、動態都遠超其體積所能想像。",
    pairingAdvice: "潛力極深的書架喇叭，值得為它投資頂級的擴大機與腳架。驅動得當，聲音表現不輸許多落地喇叭。",
    physicsNote: "搭載Esotar3高音與18cm NeoTec MSP中低音單體。DDC Lens技術同樣應用其上。",
    novashinVerdict: "Confidence 20是書架喇叭的『天花板』，重新定義了書架喇叭的可能性。聲音精準、全面，是『富人』的書房玩具。"
  },
  {
    id: "dyn-confidence30",
    brand: "Dynaudio",
    model: "Confidence 30",
    type: "speaker",
    sonicSignature: "Confidence系列最小的落地喇叭，聲音精準、活生，音場定位極佳，低頻質感出色。",
    pairingAdvice: "對擴大機要求相對寬鬆，百瓦以上的優質綜擴即可。適合在中小型空間追求極致音質的玩家。",
    physicsNote: "三音路四單體設計，同樣搭載Esotar3高音與DDC Lens。",
    novashinVerdict: "Confidence 30證明了小落地也能有大氣魄。聲音的精準度與音樂性完美結合，是小空間的『終極解決方案』。"
  },
  {
    id: "dyn-confidence50",
    brand: "Dynaudio",
    model: "Confidence 50",
    type: "speaker",
    sonicSignature: "承襲旗艦的透明與細膩，體型更為勻稱，聲音更為凝聚、快速，在中大型空間表現出色。",
    pairingAdvice: "比Confidence 60更容易驅動，但依然考驗擴大機的控制力。適合搭配優質的合併機或前後級。",
    physicsNote: "與Confidence 60相同的核心技術，但採用了較小的中音與低音單體。",
    novashinVerdict: "Confidence 50是更『實際』的選擇，在多數居家空間能獲得比60更均衡的表現。聲音同樣高貴，但更具親和力。"
  },
  {
    id: "dyn-confidence60",
    brand: "Dynaudio",
    model: "Confidence 60",
    type: "speaker",
    sonicSignature: "新一代Confidence的旗艦，聲音極度透明、細膩，音場表現驚人，低頻控制力一流。",
    pairingAdvice: "需要大電流、高阻尼係數的擴大機來伺候。搭配聲底純淨、速度快的擴大機，能展現其驚人的解析力。",
    physicsNote: "搭載全新的Esotar3高音與DDC Lens(聲學透鏡)技術。NeoTec MSP低音單體，Compex複合材料障板。",
    novashinVerdict: "Confidence 60是Dynaudio技術力的結晶，從單體到箱體設計都充滿創新。聲音表現全面進化，是新時代Dynaudio的聲音標竿。"
  },
  {
    id: "dyn-contour20i",
    brand: "Dynaudio",
    model: "Contour 20i",
    type: "speaker",
    sonicSignature: "經典的Dynaudio書架喇叭之聲，中性、精準、動態強勁，中頻飽滿，人聲富有感染力。",
    pairingAdvice: "潛力深厚，擴大機越強，聲音越好。是考驗前端器材實力的『試金石』。",
    physicsNote: "搭載Esotar 2i高音與18cm MSP中低音單體。箱體內部有額外的補強結構。",
    novashinVerdict: "Contour 20i是書架喇叭的『標竿』之一，無數喇叭都以它為追趕目標。聲音中正，潛力無窮，是發燒友練功的好夥伴。"
  },
  {
    id: "dyn-contour30i",
    brand: "Dynaudio",
    model: "Contour 30i",
    type: "speaker",
    sonicSignature: "聲音平衡、流暢，兼具力量感與細膩度，是系列中最均衡的型號。",
    pairingAdvice: "對擴大機相對友善，優質的百瓦綜擴就能推得不錯。適合多數居家空間，音樂類型雜食。",
    physicsNote: "搭載Esotar 2i高音與雙18cm MSP中低音單體。",
    novashinVerdict: "Contour 30i是Dynaudio的『甜點』型號，各方面表現都恰到好處。聲音耐聽，搭配靈活，是升級路上的『安全牌』。"
  },
  {
    id: "dyn-contour60i",
    brand: "Dynaudio",
    model: "Contour 60i",
    type: "speaker",
    sonicSignature: "聲音大氣、飽滿、能量感十足，中頻厚實，低頻深沉有力，是Contour系列的王者。",
    pairingAdvice: "需要大功率擴大機來釋放其全部潛力。適合在大空間聆聽大編制音樂或作為家庭劇院主喇叭。",
    physicsNote: "搭載頂級的Esotar 2i高音單體。雙23cm MSP低音單體，採用鋁質音圈。分音器經過全面優化。",
    novashinVerdict: "Contour 60i是Dynaudio的『重砲手』，聲音充滿力量與權威感。聽交響、看電影，氣勢磅礡，爽度一流。"
  },
  {
    id: "dyn-evidenceplatinum",
    brand: "Dynaudio",
    model: "Evidence Platinum",
    type: "speaker",
    sonicSignature: "極致的中性、精準與動態，聲音毫不費力，規模感龐大，是Dynaudio聲音哲學的最高體現。",
    pairingAdvice: "Dynaudio的旗艦，對擴大機的質與量都有極高要求。需要頂級大功率後級才能發揮其實力，是系統的『照妖鏡』。",
    physicsNote: "採用DDC(Dynaudio Directivity Control)技術，減少空間反射音干擾。搭載著名的Esotar²高音單體與MSP中低音單體。箱體結構極為複雜堅固。",
    novashinVerdict: "丹拿的『神主牌』，Hi-End音響界的傳奇型號。聲音精準無比，動態大到沒有邊際。是錄音室監聽標準的終極延伸，也是發燒友的夢幻逸品。"
  },
  {
    id: "dyn-evoke50",
    brand: "Dynaudio",
    model: "Evoke 50",
    type: "speaker",
    sonicSignature: "Evoke系列的旗艦，聲音開闊、輕鬆、能量充沛，是進入Dynaudio世界的絕佳選擇。",
    pairingAdvice: "對擴大機友善，容易推出好聲音。適合想體驗Dynaudio之聲，但預算有限的玩家。",
    physicsNote: "搭載全新的Cerotar高音(源於Esotar Forty)與Hexis內置半球。雙18cm Esotec+低音單體。",
    novashinVerdict: "Evoke 50是『窮人的Contour』，用更實惠的價格提供了接近高階系列的聲音體驗。CP值極高，是入門落地喇叭的優質之選。"
  },
  {
    id: "dyn-focus50",
    brand: "Dynaudio",
    model: "Focus 50",
    type: "speaker",
    sonicSignature: "Dynaudio對無線音響的終極詮釋，聲音精準、有力、方便，是新時代的Hi-End。",
    pairingAdvice: "主動式喇叭，內建Pascal D類擴大機。支援WiSA無線傳輸，也支援Dirac Live空間校正。串流功能完整。",
    physicsNote: "每支喇叭內建總功率670瓦的擴大機。搭載Esotar 3等級的高音與MSP單體。內建DSP進行分音與校正。",
    novashinVerdict: "Focus 50是『未來的Dynaudio』，將旗艦級的單體、強大的擴大機與智慧的DSP整合在一起。擺脫了器材搭配的煩惱，是『一步到位』的終極懶人發燒方案。"
  },
  {
    id: "dyn-heritagespecial",
    brand: "Dynaudio",
    model: "Heritage Special",
    type: "speaker",
    sonicSignature: "融合了經典外觀與最新技術，聲音溫暖、醇厚，充滿懷舊氣息，同時不失現代音響的解析力。",
    pairingAdvice: "限量生產，向經典致敬之作。適合搭配聲底溫潤的擴大機，更能凸顯其音樂韻味。",
    physicsNote: "搭載頂級的Esotar 3高音與Evidence Platinum等級的18W75 XL中低音單體。箱體採用手工配對的胡桃木皮。",
    novashinVerdict: "Heritage Special是寫給老丹拿粉絲的『一封情書』。聲音充滿情懷，做工精緻如藝術品。是收藏與聆聽價值兼備的『毒物』。"
  },
  {
    id: "dyn-specialforty",
    brand: "Dynaudio",
    model: "Special Forty",
    type: "speaker",
    sonicSignature: "聲音活潑、甜美、充滿光澤，高頻華麗，中頻迷人，是Dynaudio聲音中最討喜的一款。",
    pairingAdvice: "40週年紀念型號，不難驅動，但潛力十足。搭配優質擴大機能發出令人驚豔的聲音。",
    physicsNote: "搭載專為其開發的Esotar Forty高音與17W75 MSP中低音單體。採用一階分音，相位更為精準。",
    novashinVerdict: "Special Forty是Dynaudio的『慶生蛋糕』，聲音甜美可口，讓人欲罷不能。是書架喇叭中『人聲毒物』的代表。"
  },
  {
    id: "elac-alchemy-ddp-2",
    brand: "ELAC",
    model: "Alchemy DDP-2",
    type: "dac",
    sonicSignature: "聲音乾淨，背景漆黑，解析力高且帶有類比味",
    pairingAdvice: "功能齊全，可當DAC、前級、串流機，搭配同系列PPA-2後級是官方西裝",
    physicsNote: "雙AKM4493 DAC晶片，可選數位濾波，支援MQA解碼",
    novashinVerdict: "一台機器解決所有數位需求，聲音還不賴，適合想簡化系統的數位流玩家。"
  },
  {
    id: "elac-alchemy-ppa-2",
    brand: "ELAC",
    model: "Alchemy PPA-2",
    type: "preamp",
    sonicSignature: "中性、透明、驅動力強",
    pairingAdvice: "可切換JFET或電晶體輸入，唱放功能強大，搭配DDP-2是絕配",
    physicsNote: "全平衡設計，分體式電源，唱放增益與阻抗可調",
    novashinVerdict: "黑膠玩家的恩物，調整選項多到讓你玩不完，聲音對得起它的價格。"
  },
  {
    id: "elac-carina-bs-243.4",
    brand: "ELAC",
    model: "Carina BS 243.4",
    type: "speaker",
    sonicSignature: "聲音開放，細節豐富，音樂性佳",
    pairingAdvice: "易於驅動，適合入門級擴大機，但搭配更高階器材也能反映前端實力",
    physicsNote: "JET氣動式高音下放，全新開發的鋁振膜中低音",
    novashinVerdict: "Andrew Jones大神操刀，CP值之王，讓你在有限預算內體驗JET高音的魅力。"
  },
  {
    id: "elac-concentro",
    brand: "ELAC",
    model: "Concentro",
    type: "speaker",
    sonicSignature: "音場深遠，動態對比強烈，高頻空氣感十足",
    pairingAdvice: "需要大電流後級驅動，建議搭配暖厚聲底的前端，能有效馴服其略帶侵略性的高頻",
    physicsNote: "同軸中高音單體(JET 5c氣動式高音)，側邊四顆10吋低音，可調整的聲學特性",
    novashinVerdict: "旗艦大波蘿，不只是炫技，更是聲音的藝術品。沒錢沒空間的，洗洗睡吧。"
  },
  {
    id: "elac-concentro-s-507",
    brand: "ELAC",
    model: "Concentro S 507",
    type: "speaker",
    sonicSignature: "活生感十足，中頻飽滿有肉，低頻速度快",
    pairingAdvice: "對擴大機友善，但潛力極大，搭配高質素前後級能發揮驚人實力",
    physicsNote: "StepX-JET同軸單體，下方三顆150mm AS-XR低音，向下發射低音反射孔",
    novashinVerdict: "Concentro的親民版？別傻了，它只是比較不那麼貴的怪物。"
  },
  {
    id: "elac-debut-reference-dbr62",
    brand: "ELAC",
    model: "Debut Reference DBR62",
    type: "speaker",
    sonicSignature: "溫暖飽滿，中頻富有韻味，耐聽不刺激",
    pairingAdvice: "非常適合搭配日系環繞擴大機，組成兩聲道系統也很有味道",
    physicsNote: "全新設計的導波管與單體，加強的箱體結構",
    novashinVerdict: "窮人福音！用料和聲音都超越了它的價格，是入門發燒友的不二之選。"
  },
  {
    id: "elac-navis-arf-51",
    brand: "ELAC",
    model: "Navis ARF-51",
    type: "speaker",
    sonicSignature: "精準、中性、能量感強",
    pairingAdvice: "主動式喇叭，內建擴大機，只需要搭配優質的串流前級或DAC即可",
    physicsNote: "三音路主動式設計，純A類與BASH擴大機混合驅動，同軸中高音",
    novashinVerdict: "一套搞定，懶人救星。別以為主動式就沒搞頭，它的聲音絕對能打趴一堆亂配的系統。"
  },
  {
    id: "elac-vela-bs-403",
    brand: "ELAC",
    model: "Vela BS 403",
    type: "speaker",
    sonicSignature: "精準的結像，活潑的音色，超越體積的低頻能量",
    pairingAdvice: "書架箱的標竿之一，搭配50-100W的綜合擴大機即可，但前端越好，驚喜越多",
    physicsNote: "JET 5高音，150mm AS-XR中低音，低音反射孔後置",
    novashinVerdict: "書架箱的價格，落地箱的氣勢。小空間的發燒友，這就是你們的毒物。"
  },
  {
    id: "elac-vela-fs-407",
    brand: "ELAC",
    model: "Vela FS 407",
    type: "speaker",
    sonicSignature: "甜美飄逸的高頻，中頻溫潤，音場開闊",
    pairingAdvice: "不挑食，但搭配英國系暖聲擴大機能取得很好的平衡",
    physicsNote: "JET 5高音，兩顆150mm AS-XR低音，底座懸浮設計",
    novashinVerdict: "小一號的409，客廳黨的福音，在有限空間榨出最大CP值的選擇。"
  },
  {
    id: "elac-vela-fs-409",
    brand: "ELAC",
    model: "Vela FS 409",
    type: "speaker",
    sonicSignature: "透明度高，解析力強，聲音線條感清晰",
    pairingAdvice: "適合搭配解析力高的訊源，擴大機控制力要好，否則高頻容易刮耳",
    physicsNote: "JET 5氣動式高音，AS-XR水晶振膜中低音，梯形箱體設計減少駐波",
    novashinVerdict: "外型美，聲音也美，標準的德國現代聲，但沒搞好就是聲音照妖鏡。"
  },
  {
    id: "emm-da2v2",
    brand: "EMM Labs",
    model: "DA2 V2",
    type: "dac",
    sonicSignature: "極致的透明度與解析力，聲音如水晶般純淨，瞬態反應快如閃電。音場寬闊深遠，定位精準，是DSD之父的代表作。",
    pairingAdvice: "參考級的數位類比轉換器，是檢視系統其他環節的照妖鏡。對前端數位訊源的純淨度要求極高，搭配同樣中性、快速的後端能獲得鑑聽級的聲音。",
    physicsNote: "Ed Meitner的旗艦DAC，採用16xDSD MDAC2™ 獨家解碼技術，並搭載MFAST™高速非同步鎖定技術，能完全消除時基誤差。從USB輸入到類比輸出皆為自家開發。",
    novashinVerdict: "DSD格式的終極詮釋者。DA2 V2的聲音精準到冷酷，能讓你聽到錄音中最細微的動態與細節。這是科學家的工具，不是藝術家的畫筆，追求絕對真實的發燒友會愛死它。"
  },
  {
    id: "emm-mtrx2",
    brand: "EMM Labs",
    model: "MTRX2",
    type: "poweramp",
    sonicSignature: "力量與速度的極致展現，聲音如火山爆發般充滿能量，同時保有驚人的解析力與控制力。低頻下潛深不見底，權威感十足。",
    pairingAdvice: "專為馴服世界上最難搞的喇叭而設計的怪獸後級。無論是極低效率還是複雜阻抗的喇叭，在它面前都只能乖乖就範。搭配自家PRE前級是天作之合。",
    physicsNote: "參考級單聲道後級，每聲道可輸出驚人的1000瓦(4歐姆)。採用全平衡、零負回授設計，從輸入到輸出皆為最短路徑。",
    novashinVerdict: "後級擴大機的核子武器。MTRX2的存在就是為了挑戰物理極限，它的驅動力已經超出了正常發燒友的想像。這是真正的暴力美學，也是富人玩具中的王者。"
  },
  {
    id: "emm-ns1",
    brand: "EMM Labs",
    model: "NS1",
    type: "streamer",
    sonicSignature: "作為純串流轉盤，本身無音色，但能提供極度純淨、低噪訊的數位串流訊號，為後端DAC打下完美基礎。",
    pairingAdvice: "專為自家DAC（如DA2 V2、MA3）設計的串流橋接器，透過獨家Optilink光纖介面連接，能達到最佳的電氣隔離效果。也支援標準的UPnP/DLNA。",
    physicsNote: "網路串流橋接器，支援Roon、Tidal、Qobuz、Spotify等主流串流服務。其核心價值在於與EMM Labs DAC之間的Optilink連接，能傳輸純淨的DSD訊號。",
    novashinVerdict: "為自家DAC量身打造的西裝。NS1的存在就是為了讓EMM Labs的DAC發揮120%的實力。如果你已經擁有EMM的DAC，那NS1就是你非買不可的最後一塊拼圖。"
  },
  {
    id: "emm-pre",
    brand: "EMM Labs",
    model: "PRE",
    type: "preamp",
    sonicSignature: "極致的中性與透明，幾乎感受不到它的存在。動態範圍寬廣無比，背景寧靜如深海，能讓音樂的細節與情感毫無保留地呈現。",
    pairingAdvice: "參考級系統的指揮官，能完美匹配任何頂級後級，特別是自家的MTRX2。它是標準的聲音照妖鏡，對系統中任何環節的變化都極為敏感。",
    physicsNote: "參考級前級擴大機，採用全平衡、雙單聲道設計。音量控制採用高精度、無損的切換電阻陣列。所有線路板都採用航太級的陶瓷基板。",
    novashinVerdict: "前級的終極理想：一條帶增益的直線。EMM Labs PRE無限趨近於這個理想，它不為聲音添加任何色彩，只做最忠實的傳遞。這是科學家追求真理的產物，冷酷而完美。"
  },
  {
    id: "esoteric-f-03a",
    brand: "Esoteric",
    model: "F-03A",
    type: "amp",
    sonicSignature: "溫潤、甜美、富有音樂性",
    pairingAdvice: "純A類綜合擴大機，適合搭配高效率喇叭，聽人聲弦樂是絕配",
    physicsNote: "純A類30W+30W (8Ω)，大型環形變壓器",
    novashinVerdict: "純A類的魅力，聽過就中毒。雖然瓦數不大，但那種溫暖的包圍感，是AB類無法取代的。"
  },
  {
    id: "esoteric-f-05",
    brand: "Esoteric",
    model: "F-05",
    type: "amp",
    sonicSignature: "中性、精準、驅動力佳",
    pairingAdvice: "AB類綜合擴大機，適合搭配各種歐美系喇叭",
    physicsNote: "全平衡前級，雙單聲道後級設計，120W+120W (8Ω)",
    novashinVerdict: "Esoteric的入門磚，讓你一窺Hi-End堂奧，但小心，這坑很深。"
  },
  {
    id: "esoteric-grandioso-c1x",
    brand: "Esoteric",
    model: "Grandioso C1X",
    type: "preamp",
    sonicSignature: "極致的透明度，背景寧靜如深海，細節再生能力驚人",
    pairingAdvice: "搭配M1X後級是天作之合，能完美傳達前端訊源的一切訊息",
    physicsNote: "分體式電源，全平衡設計，IDAS動態類比音量控制系統",
    novashinVerdict: "前級的終極目標就是消失，C1X做到了。它不會給你任何音染，只會給你最真實的音樂。"
  },
  {
    id: "esoteric-grandioso-d1x",
    brand: "Esoteric",
    model: "Grandioso D1X",
    type: "dac",
    sonicSignature: "聲音精準、中性、解析力達到鑑聽級水準",
    pairingAdvice: "單聲道DAC，需要兩台才能組成兩聲道，是追求極致分離度的發燒友的選擇",
    physicsNote: "Master Sound Discrete DAC，分體式單聲道設計，電流傳輸ES-LINK5",
    novashinVerdict: "錢不是問題，問題是沒錢。這對DAC是音響系統的終極夢想之一。"
  },
  {
    id: "esoteric-grandioso-k1x",
    brand: "Esoteric",
    model: "Grandioso K1X",
    type: "dac",
    sonicSignature: "聲音華麗、能量充沛、音場寬闊宏大",
    pairingAdvice: "SACD/CD唱盤兼DAC，搭配自家串流轉盤或直接當作數位核心皆可",
    physicsNote: "VRDS-ATLAS轉盤機構，Master Sound Discrete DAC，64bit解析度",
    novashinVerdict: "數位訊源的王者，聽過就回不去了。那種華麗又真實的聲音，就是所謂的毒物。"
  },
  {
    id: "esoteric-grandioso-m1x",
    brand: "Esoteric",
    model: "Grandioso M1X",
    type: "poweramp",
    sonicSignature: "低頻權威感，驅動力無遠弗屆，聲音密度感極強",
    pairingAdvice: "天生神力，專治各種難搞喇叭，搭配同廠C1X前級能達到聲音的巔峰",
    physicsNote: "超級電容陣列供電，5,096μF/63V x 60，純A類300W(8Ω)輸出",
    novashinVerdict: "暴力美學的極致展現，能把任何喇叭的潛力榨到一滴不剩。這是富人的玩具，也是聲音的終點。"
  },
  {
    id: "esoteric-grandioso-n-01xd",
    brand: "Esoteric",
    model: "Grandioso N-01XD",
    type: "streamer",
    sonicSignature: "流暢、自然、兼具解析與音樂性",
    pairingAdvice: "內建旗艦級DAC，可直入後級，是簡化系統的頂級方案",
    physicsNote: "Master Sound Discrete DAC，網路串流與DAC結合，支援Roon Ready",
    novashinVerdict: "一台機器就攻頂，Esoteric告訴你什麼叫做頂級的數位流。"
  },
  {
    id: "esoteric-grandioso-p1x",
    brand: "Esoteric",
    model: "Grandioso P1X",
    type: "streamer",
    sonicSignature: "極致的時脈精度，聲音穩定如山，背景漆黑",
    pairingAdvice: "SACD/CD轉盤，需搭配同廠DAC，是Esoteric數位系統的核心",
    physicsNote: "VRDS-ATLAS轉盤機構，分體式電源，多重時脈同步選項",
    novashinVerdict: "轉盤之王，專注做好一件事，就是把CD上的0與1完美地讀取出來。"
  },
  {
    id: "esoteric-k-01xd",
    brand: "Esoteric",
    model: "K-01XD",
    type: "dac",
    sonicSignature: "華麗、高貴、充滿空氣感",
    pairingAdvice: "僅次於Grandioso的旗艦，擁有極高的聲音密度與質感",
    physicsNote: "高階VRDS-ATLAS轉盤，Master Sound Discrete DAC",
    novashinVerdict: "準畢業級的器材，除了價格，沒什麼好挑剔的了。"
  },
  {
    id: "esoteric-k-03xd",
    brand: "Esoteric",
    model: "K-03XD",
    type: "dac",
    sonicSignature: "穩重、大氣、兼具厚度與解析",
    pairingAdvice: "中堅主力機種，表現全面，搭配各種系統都不易出錯",
    physicsNote: "VRDS-ATLAS轉盤機構，雙單聲道DAC設計",
    novashinVerdict: "不知道怎麼選？選K-03XD就對了。它是音響系統中的定海神針。"
  },
  {
    id: "esoteric-k-05xd",
    brand: "Esoteric",
    model: "K-05XD",
    type: "dac",
    sonicSignature: "活潑、明快、充滿躍動感",
    pairingAdvice: "SACD/CD唱盤，聲音走向較年輕，適合流行樂與爵士樂",
    physicsNote: "VRDS-ATLAS轉盤機構，Master Sound Discrete DAC下放",
    novashinVerdict: "Esoteric家族中最具活力的成員，聽了會讓人想跟著搖擺。"
  },
  {
    id: "esoteric-n-05xd",
    brand: "Esoteric",
    model: "N-05XD",
    type: "streamer",
    sonicSignature: "聲音細膩，音質純淨，功能全面",
    pairingAdvice: "內建前級與耳擴，搭配主動式喇叭或後級即可，玩法多樣",
    physicsNote: "承襲Grandioso技術的Master Sound Discrete DAC，全平衡前級線路",
    novashinVerdict: "次旗艦的價格，旗艦的靈魂。對於想一步到位的玩家，這是個聰明的選擇。"
  },
  {
    id: "focal-aria-936",
    brand: "Focal",
    model: "Aria 936",
    type: "speaker",
    sonicSignature: "聲音直接，能量感足，CP值高",
    pairingAdvice: "入門級落地箱，易於驅動，適合搭配環繞擴大機或入門綜擴",
    physicsNote: "Flax三明治振膜，TNF鋁鎂凹盆高音",
    novashinVerdict: "Focal的入門磚，用有限的預算給你滿滿的Focal味，是家庭劇院的好夥伴。"
  },
  {
    id: "focal-diablo-utopia-evo",
    brand: "Focal",
    model: "Diablo Utopia Evo",
    type: "speaker",
    sonicSignature: "速度飛快，解析力驚人，結像精準如刀切",
    pairingAdvice: "頂級書架箱的代表，對腳架要求極高，需要大電流擴大機才能榨出低頻",
    physicsNote: "鈹高音，Power Flower中音，W-cone振膜",
    novashinVerdict: "書架箱的法拉利，聲音快、狠、準。沒搞好會變成聲音的照妖鏡，系統缺點無所遁形。"
  },
  {
    id: "focal-grande-utopia-em-evo",
    brand: "Focal",
    model: "Grande Utopia EM Evo",
    type: "speaker",
    sonicSignature: "極致的動態，權威的低頻，音場規模感龐大",
    pairingAdvice: "需要怪獸級的後級才能完全駕馭，空間不夠大只會是災難",
    physicsNote: "鈹高音(IHL)，電磁鐵低音(EM)，可調式關節箱體(Focus Time)",
    novashinVerdict: "喇叭的終極型態之一，不只是音響，更是現代藝術。能在你家發出好聲的，不是富豪就是神人。"
  },
  {
    id: "focal-kanta-no.2",
    brand: "Focal",
    model: "Kanta No.2",
    type: "speaker",
    sonicSignature: "活潑、明亮、中頻帶有特殊韻味",
    pairingAdvice: "最受歡迎的Kanta型號，搭配中性或略帶暖意的擴大機都很適合",
    physicsNote: "IAL3 鈹高音，Flax三明治振膜中低音",
    novashinVerdict: "外型時尚，顏色多變，聲音好聽，是現代居家音響的完美選擇。所謂的貴婦機。"
  },
  {
    id: "focal-kanta-no.3",
    brand: "Focal",
    model: "Kanta No.3",
    type: "speaker",
    sonicSignature: "溫暖、寬鬆、音樂性佳",
    pairingAdvice: "Kanta系列的頂級型號，適合大空間，搭配暖聲擴大機聽感極佳",
    physicsNote: "鈹高音與Flax麻纖維振膜的結合，雙8吋低音",
    novashinVerdict: "結合了科技與生活風格，聲音溫暖耐聽，是Focal家族中獨樹一格的存在。"
  },
  {
    id: "focal-maestro-utopia-evo",
    brand: "Focal",
    model: "Maestro Utopia Evo",
    type: "speaker",
    sonicSignature: "活生感強，中頻感染力十足，低頻 punchy",
    pairingAdvice: "驅動門檻更低，但依然需要優質前端，搭配歐美系擴大機相得益彰",
    physicsNote: "鈹高音，TMD中音懸邊，NIC磁力穩定技術，MDS低音單體",
    novashinVerdict: "Utopia系列的中堅，聲音充滿活力與熱情，是聽搖滾與古典樂的利器。"
  },
  {
    id: "focal-scala-utopia-evo",
    brand: "Focal",
    model: "Scala Utopia Evo",
    type: "speaker",
    sonicSignature: "精緻、細膩、高頻延伸華麗",
    pairingAdvice: "相對容易搭配，適合中型空間，搭配A類或真空管擴大機能展現迷人韻味",
    physicsNote: "鈹高音，Power Flower中音，W-cone三明治振膜",
    novashinVerdict: "最受歡迎的Utopia型號，在體積、價格、聲音之間取得了絕佳的平衡。"
  },
  {
    id: "focal-sopra-no.1",
    brand: "Focal",
    model: "Sopra No.1",
    type: "speaker",
    sonicSignature: "精緻、甜美、超越體積的規模感",
    pairingAdvice: "頂級書架箱，潛力深不見底，前端給多少，它就回報多少",
    physicsNote: "鈹高音，TMD中音懸邊，NIC磁力穩定技術，IHL高音負載技術",
    novashinVerdict: "可能是市面上最好的書架箱之一，聲音的質感與密度都讓人驚艷。"
  },
  {
    id: "focal-sopra-no.2",
    brand: "Focal",
    model: "Sopra No.2",
    type: "speaker",
    sonicSignature: "聲音甜潤，中頻密度高，活生感好",
    pairingAdvice: "非常全能的喇叭，大小空間通吃，搭配彈性高，是系列中的銷售冠軍",
    physicsNote: "鈹高音，TMD中音懸邊，NIC磁力穩定技術，7吋低音",
    novashinVerdict: "Hi-End音響的模範生，各方面都表現優異，沒什麼惡癖，是退燒的好選擇。"
  },
  {
    id: "focal-sopra-no.3",
    brand: "Focal",
    model: "Sopra No.3",
    type: "speaker",
    sonicSignature: "飽滿、大氣、能量感源源不絕",
    pairingAdvice: "Sopra系列的旗艦，需要較大的空間，擴大機功率與控制力都要足夠",
    physicsNote: "鈹高音，TMD中音懸邊，NIC磁力穩定技術，雙8吋低音",
    novashinVerdict: "次旗艦的價格，直逼旗艦的氣勢。對於想體驗Focal魅力又不想賣房的人來說，是個好選擇。"
  },
  {
    id: "focal-stella-utopia-em-evo",
    brand: "Focal",
    model: "Stella Utopia EM Evo",
    type: "speaker",
    sonicSignature: "能量充沛，聲音密度高，兼具氣勢與細膩",
    pairingAdvice: "比大哥好搞定一些，但依然是擴大機殺手，建議搭配200W以上大電流後級",
    physicsNote: "鈹高音，電磁鐵低音，TMD中音懸邊，NIC磁力穩定技術",
    novashinVerdict: "如果說Grande是神，那Stella就是天使。在多數豪宅裡，它比大哥更容易發出好聲音。"
  },
  {
    id: "focal-sub-utopia-em",
    brand: "Focal",
    model: "Sub Utopia EM",
    type: "subwoofer",
    sonicSignature: "低頻下潛深不見底，速度與控制力兼備",
    pairingAdvice: "搭配Utopia系列喇叭，組成終極全頻段系統",
    physicsNote: "13吋電磁鐵低音(EM)，600W BASH擴大機",
    novashinVerdict: "這不是超低音，這是地震產生器。能讓你的褲管跟著音樂一起擺動。"
  },
  {
    id: "fyne-audio-f1-10",
    brand: "Fyne Audio",
    model: "F1-10",
    type: "speaker",
    sonicSignature: "聲音精準，動態凌厲，中頻密度高",
    pairingAdvice: "比F1-12更緊湊，適合中大型空間，對擴大機控制力有要求",
    physicsNote: "10吋IsoFlare同軸單體，鋁合金底座與BassTrax擴散器",
    novashinVerdict: "現代版的Tannoy，保留了同軸的優點，同時注入了更快的速度與解析。"
  },
  {
    id: "fyne-audio-f1-12s",
    brand: "Fyne Audio",
    model: "F1-12S",
    type: "speaker",
    sonicSignature: "音場宏大，聲音寬鬆自然，充滿貴氣",
    pairingAdvice: "旗艦型號，需要大空間與大功率後級，搭配真空管機有奇效",
    physicsNote: "12吋IsoFlare同軸單體，BassTrax Tractrix擴散器",
    novashinVerdict: "前Tannoy團隊的野心之作，骨子裡流著貴族的血液。聽古典樂的權威之選。"
  },
  {
    id: "fyne-audio-f1-5",
    brand: "Fyne Audio",
    model: "F1-5",
    type: "speaker",
    sonicSignature: "精緻靈動，音場開闊，超越體積的驚喜",
    pairingAdvice: "小型書架箱，適合近場聆聽或小空間，對擴大機友善",
    physicsNote: "5吋IsoFlare同軸單體，手工打造的曲面箱體",
    novashinVerdict: "小小的身體裡蘊藏著巨大的音樂能量，是桌面發燒友的夢幻逸品。"
  },
  {
    id: "fyne-audio-f1-8s",
    brand: "Fyne Audio",
    model: "F1-8S",
    type: "speaker",
    sonicSignature: "結像清晰，聲音甜美，音樂性極佳",
    pairingAdvice: "書架箱的體積，落地箱的氣勢，搭配優質綜擴即可發出好聲",
    physicsNote: "8吋IsoFlare同軸單體，樺木積層板箱體",
    novashinVerdict: "可能是市面上最好的大型書架箱之一，完美繼承了Tannoy的音樂靈魂。"
  },
  {
    id: "fyne-audio-f501",
    brand: "Fyne Audio",
    model: "F501",
    type: "speaker",
    sonicSignature: "溫順、耐聽、音樂性好",
    pairingAdvice: "入門級落地箱，不挑食，適合搭配各種入門級擴大機",
    physicsNote: "6吋IsoFlare同軸單體，向下發射的低音反射孔",
    novashinVerdict: "Fyne Audio的敲門磚，讓你用最少的預算體驗到同軸單體的魅力。"
  },
  {
    id: "fyne-audio-f502sp",
    brand: "Fyne Audio",
    model: "F502SP",
    type: "speaker",
    sonicSignature: "聲音清晰，動態對比強，CP值極高",
    pairingAdvice: "F502的特別版，承襲旗艦技術，對擴大機更友善",
    physicsNote: "8吋IsoFlare同軸單體，FyneFlute懸邊，BassTrax擴散器",
    novashinVerdict: "用中階的價格，給你高階的享受。Fyne Audio的CP值之王。"
  },
  {
    id: "fyne-audio-vintage-classic-xii",
    brand: "Fyne Audio",
    model: "Vintage Classic XII",
    type: "speaker",
    sonicSignature: "大開大闔，氣勢磅礡，聲音充滿戲劇張力",
    pairingAdvice: "大型落地箱，適合大空間，需要大功率擴大機來驅動",
    physicsNote: "12吋同軸單體，大型方正箱體，高音能量可調",
    novashinVerdict: "老派的外觀，全新的靈魂。喜歡Tannoy老聲底但又想要現代音響性，這就是答案。"
  },
  {
    id: "fyne-audio-vintage-twelve",
    brand: "Fyne Audio",
    model: "Vintage Twelve",
    type: "speaker",
    sonicSignature: "溫暖、醇厚、充滿懷舊的類比味",
    pairingAdvice: "復古系列，搭配真空管擴大機是絕配，特別適合人聲與爵士樂",
    physicsNote: "12吋IsoFlare同軸單體，手工製作的胡桃木箱體，可調式分音器",
    novashinVerdict: "向經典致敬，不只外型復古，聲音也充滿了那個黃金年代的韻味。"
  },
  {
    id: "goldmund-eidos-36u+",
    brand: "Goldmund",
    model: "Eidos 36U+",
    type: "streamer",
    sonicSignature: "聲音精準，細節豐富，帶有類比的質感",
    pairingAdvice: "多功能播放機，可播CD/SACD/藍光，也可當作串流播放機",
    physicsNote: "承盤機構經過特殊強化，Alize 6 DAC，AC-Curator電源處理",
    novashinVerdict: "數位訊源的瑞士刀，功能強大，聲音表現也是頂級水準。"
  },
  {
    id: "goldmund-mimesis-37s-nextgen",
    brand: "Goldmund",
    model: "Mimesis 37S Nextgen",
    type: "preamp",
    sonicSignature: "極致的透明度，忠實還原錄音本色",
    pairingAdvice: "搭配自家Telos後級是標準答案，能將系統的透明度推向極致",
    physicsNote: "全平衡設計，分體式電源，超低噪音水平",
    novashinVerdict: "前級的最高境界就是沒有自己的聲音，Mimesis做到了。"
  },
  {
    id: "goldmund-telos-2500+",
    brand: "Goldmund",
    model: "Telos 2500+",
    type: "poweramp",
    sonicSignature: "精準、中性、毫無音染",
    pairingAdvice: "驅動力強大，能應付市面上絕大多數難搞的喇叭",
    physicsNote: "單聲道後級，Job 5電路，超高頻寬設計",
    novashinVerdict: "Goldmund的經典型號，雖然價格不菲，但它的表現絕對值回票價。"
  },
  {
    id: "goldmund-telos-5500-nextgen-ii",
    brand: "Goldmund",
    model: "Telos 5500 Nextgen II",
    type: "poweramp",
    sonicSignature: "快如閃電，透明如水，控制力無人能及",
    pairingAdvice: "天價後級，專門用來搭配最頂級的喇叭，如Goldmund自家的Apologue",
    physicsNote: "單聲道後級，額定功率1250W (8Ω)，極高的阻尼係數",
    novashinVerdict: "瑞士國寶，音響界的超級跑車。它的存在就是為了告訴你，錢真的可以買到最好的聲音。"
  },
  {
    id: "goldmund-telos-590-nextgen-ii",
    brand: "Goldmund",
    model: "Telos 590 Nextgen II",
    type: "amp",
    sonicSignature: "高貴、華麗、充滿光澤感",
    pairingAdvice: "綜合擴大機，內建DAC，是簡化系統的頂級選擇",
    physicsNote: "NextGen放大技術，內建Alize 7 DAC，數位音量控制",
    novashinVerdict: "一台機器就讓你體驗Goldmund的魅力，除了貴，沒毛病。"
  },
  {
    id: "gryphon-antileon-evo",
    brand: "Gryphon",
    model: "Antileon EVO",
    type: "poweramp",
    sonicSignature: "溫暖、醇厚、中頻毒性強",
    pairingAdvice: "Gryphon的經典純A類後級，搭配歐美系喇叭都有很好的效果",
    physicsNote: "純A類150W (8Ω)，可選擇偏壓大小，全平衡設計",
    novashinVerdict: "純A類的經典之作，那種溫暖又迷人的中頻，聽過就中毒，是所謂的饅頭中音。"
  },
  {
    id: "gryphon-apex",
    brand: "Gryphon",
    model: "Apex",
    type: "poweramp",
    sonicSignature: "兼具力量與細膩，音場寬深，質感高貴",
    pairingAdvice: "Gryphon新一代旗艦，全面超越Mephisto，是擴大機的巔峰之作",
    physicsNote: "純A類輸出，極高偏壓，巨大的電容陣列",
    novashinVerdict: "擴大機的盡頭，聲音的統治者。擁有它，你就可以在音響的世界裡橫著走。"
  },
  {
    id: "gryphon-commander",
    brand: "Gryphon",
    model: "Commander",
    type: "preamp",
    sonicSignature: "絕對的控制力，極致的透明度，聲音的指揮官",
    pairingAdvice: "Gryphon的現役旗艦前級，搭配Apex後級是音響的終極型態",
    physicsNote: "分體式雙單聲道，零負回授，極致的屏蔽與避震",
    novashinVerdict: "音響系統的總司令，它發出的不是聲音，是命令。"
  },
  {
    id: "gryphon-diablo-120",
    brand: "Gryphon",
    model: "Diablo 120",
    type: "amp",
    sonicSignature: "精準、快速、聲音乾淨俐落",
    pairingAdvice: "Gryphon的入門綜擴，但骨子裡依然是Gryphon的靈魂",
    physicsNote: "120W(8Ω)輸出，零負回授設計，可選配DAC或唱放",
    novashinVerdict: "最便宜的Gryphon，但別小看它，它的驅動力與聲音品質絕對能讓你驚艷。"
  },
  {
    id: "gryphon-diablo-300",
    brand: "Gryphon",
    model: "Diablo 300",
    type: "amp",
    sonicSignature: "厚實、有力、充滿熱情",
    pairingAdvice: "上一代綜擴之王，至今依然是市場上的熱門機種，驅動力強大",
    physicsNote: "300W(8Ω)輸出，可選配DAC模組，雙單聲道架構",
    novashinVerdict: "經典不敗，二手市場的搶手貨。它的力量與熱情，能讓任何音樂都活起來。"
  },
  {
    id: "gryphon-diablo-333",
    brand: "Gryphon",
    model: "Diablo 333",
    type: "amp",
    sonicSignature: "力量、速度與解析力的完美結合",
    pairingAdvice: "超級綜擴，驅動力超越許多前後級組合，可選配DAC與唱放模組",
    physicsNote: "承襲Apex與Commander技術，333W(8Ω)輸出，雙單聲道設計",
    novashinVerdict: "綜擴之王，一台機器打天下。如果你想簡化系統又不想妥協聲音，這就是答案。"
  },
  {
    id: "gryphon-ethos",
    brand: "Gryphon",
    model: "Ethos CD/DAC",
    type: "dac",
    sonicSignature: "溫暖、類比、充滿音樂性",
    pairingAdvice: "頂級CD唱盤兼DAC，可升頻至DSD，聲音走向與自家擴大機互補",
    physicsNote: "頂掀式設計，ESS Sabre ES9038PRO DAC晶片，全平衡類比輸出",
    novashinVerdict: "數位訊源的類比心臟，讓冰冷的0與1充滿了溫暖的人性。聽人聲是絕品。"
  },
  {
    id: "gryphon-mephisto",
    brand: "Gryphon",
    model: "Mephisto",
    type: "poweramp",
    sonicSignature: "低頻權威感，聲音厚實飽滿，充滿力量",
    pairingAdvice: "純A類巨獸，驅動力驚人，專治各種大食量喇叭",
    physicsNote: "純A類175W (8Ω)，雙單聲道設計，零負回授",
    novashinVerdict: "來自丹麥的猛獸，暴力美學的代表。能給你源源不絕的力量感，聽交響樂爽度破表。"
  },
  {
    id: "gryphon-mirage",
    brand: "Gryphon",
    model: "Mirage",
    type: "preamp",
    sonicSignature: "聲音飄逸，空氣感十足，音場如幻似真",
    pairingAdvice: "Gryphon的夢幻前級，停產已久，是發燒友心中的神物",
    physicsNote: "電池供電，光耦合音量控制，極簡線路設計",
    novashinVerdict: "海市蜃樓，只聞其名，不見其蹤。能在市場上找到一台狀況好的，都是祖上積德。"
  },
  {
    id: "gryphon-pandora",
    brand: "Gryphon",
    model: "Pandora",
    type: "preamp",
    sonicSignature: "聲音中性，動態龐大，細節無所遁形",
    pairingAdvice: "搭配自家後級是絕配，能完美展現Gryphon的暴力美學",
    physicsNote: "分體式雙單聲道設計，零負回授，85級音量控制",
    novashinVerdict: "潘朵拉的盒子，一旦打開，你就會被它那無窮的細節與動態所吸引，無法自拔。"
  },
  {
    id: "harbeth-c7es3xd",
    brand: "Harbeth",
    model: "Compact 7ES-3 XD",
    type: "speaker",
    sonicSignature: "中頻甜潤、透明度高、音場表現優異",
    pairingAdvice: "建議搭配具有一定控制力的擴大機，以避免低頻失控。與英國系擴大機是絕配，能營造出迷人的英倫風情。",
    physicsNote: "同樣採用RADIAL2™中低音單體，箱體尺寸適中，更容易在一般居家空間中獲得平衡的聲音。",
    novashinVerdict: "Harbeth家族的中堅份子，人聲表現是其殺手鐧，聽女聲有觸電的感覺。雖然名為Compact，但實力不容小覷，是『中產階級的勞斯萊斯』。"
  },
  {
    id: "harbeth-hl5plus",
    brand: "Harbeth",
    model: "HL5plus",
    type: "speaker",
    sonicSignature: "寬鬆、自然、溫暖",
    pairingAdvice: "經典的HL5系列，對擴大機相當友善，搭配管機或英國聲的晶體機都有很好的效果，能輕鬆營造出舒適的聆聽氛圍。",
    physicsNote: "Super HL5plus的前代型號，同樣採用RADIAL™中低音單體與超高音設計，奠定了其寬鬆自然的聲音基調。",
    novashinVerdict: "老派英國聲的代表，雖然解析力不如現代喇叭，但那股溫暖迷人的韻味卻是無可取代的。是許多老燒友心中的『夢中情人』。"
  },
  {
    id: "harbeth-m30.2xd",
    brand: "Harbeth",
    model: "M30.2 XD",
    type: "speaker",
    sonicSignature: "精準、中性、解析力高",
    pairingAdvice: "作為監聽喇叭的後代，對前端器材的反映相當直接。搭配解析力高的訊源與擴大機，能聽到錄音中的所有細節。",
    physicsNote: "設計源自BBC LS5/9監聽喇叭，採用Harbeth RADIAL2™中低音單體與SEAS高音單體，追求錄音室等級的精準度。",
    novashinVerdict: "聲音的『照妖鏡』，前端有任何風吹草動都逃不過它的耳朵。適合追求原音重現的發燒友，但若系統搭配不當，也可能聽起來索然無味。"
  },
  {
    id: "harbeth-m30.2-40th",
    brand: "Harbeth",
    model: "Monitor 30.2 40th Anniversary",
    type: "speaker",
    sonicSignature: "更華麗的高頻、更凝聚的音像、音樂性更佳",
    pairingAdvice: "紀念版在分音器上進行了優化，對擴大機的要求更高。搭配高品質的前端，能展現出超越普通版的貴氣與細膩。",
    physicsNote: "採用WBT-nextgen白金喇叭端子、英國製音響級電容與超低耗損電感，並搭配特殊紀念版外觀。",
    novashinVerdict: "40週年的紀念版，聲音比普通版更添一分華麗與貴氣，是Harbeth粉絲必收的珍品。但價格也水漲船高，堪稱『貴婦機』。"
  },
  {
    id: "harbeth-m40.3xd",
    brand: "Harbeth",
    model: "Monitor 40.3 XD",
    type: "speaker",
    sonicSignature: "溫暖飽滿、中頻密度感強、活生感十足",
    pairingAdvice: "適合搭配推力足、音色溫潤的擴大機，例如純A類或高偏流AB類擴大機，能將其中頻的甜美與厚實感發揮到極致。對線材敏感，建議使用銅質線材。",
    physicsNote: "採用Harbeth獨家的RADIAL2™中低音單體，音箱設計承襲BBC監聽喇叭傳統，薄壁箱體結構造就獨特的共鳴音色。",
    novashinVerdict: "經典大書架的現代演繹，聽人聲弦樂有『饅頭中音』的毒性，但體積龐大，需要足夠的空間才能讓它呼吸，是標準的『富人玩具』。"
  },
  {
    id: "harbeth-p3esr-40th",
    brand: "Harbeth",
    model: "P3ESR 40th Anniversary",
    type: "speaker",
    sonicSignature: "精緻、甜美、高頻空氣感佳",
    pairingAdvice: "與P3ESR XD類似，但紀念版在細節與質感上更勝一籌。搭配小功率純A類擴大機或高品質管機，能發出令人融化的聲音。",
    physicsNote: "同樣在分音器與內部配線上進行了升級，使用了更高級的元件，並有獨特的橄欖木外觀選項。",
    novashinVerdict: "40週年紀念版的P3ESR，將這款小喇叭的潛力推向了極致。聲音精緻如藝術品，是書桌上的『終極奢侈品』，價格不菲但絕對值得。"
  },
  {
    id: "harbeth-p3esrxd",
    brand: "Harbeth",
    model: "P3ESR XD",
    type: "speaker",
    sonicSignature: "小體積大音場、中頻毒性強、聲音精緻",
    pairingAdvice: "小鋼炮類型，需要優質大電流擴大機才能榨出其潛力。在小空間中能營造出驚人的音場與規模感。",
    physicsNote: "傳承自BBC LS3/5A的經典設計，搭載110mm RADIAL2™中低音單體，在極小的箱體內容納了Harbeth的聲音哲學。",
    novashinVerdict: "音響界的『小毒物』，一旦愛上就無法自拔。雖然低頻有限，但那迷人的中頻足以讓人忘記一切。是書房音響的終極選擇之一。"
  },
  {
    id: "harbeth-shl5plusxd",
    brand: "Harbeth",
    model: "Super HL5plus XD",
    type: "speaker",
    sonicSignature: "自然、開闊、音樂性佳",
    pairingAdvice: "對擴大機友善，不需猛獸級後級也能推出好聲。搭配中性或略帶暖調的前端，更能凸顯其音樂性。注意腳架的選擇，對聲音影響甚鉅。",
    physicsNote: "搭載200mm RADIAL2™中低音單體與SEAS的鋁質高音、超高音單體，分頻點經過精心調校，實現了極為平順的頻率響應。",
    novashinVerdict: "退燒神器之一！聲音寬鬆耐聽，聽什麼像什麼，是讓人忘記音響、專注音樂的『窮人福音』。外觀古典，但聲音絕對跟得上時代。"
  },
  {
    id: "hegel-h120",
    brand: "Hegel",
    model: "H120",
    type: "amp",
    sonicSignature: "乾淨、透明、細節豐富",
    pairingAdvice: "Hegel的入門型號，但聲音一點也不入門。適合搭配高效率的書架喇叭或小型落地喇叭。前端搭配暖聲訊源可以讓聲音更飽滿。",
    physicsNote: "採用較小功率的SoundEngine 2模組，但依然保有Hegel一貫的低失真與高阻尼係數特性。DAC部分經過重新設計，聲音更為細膩。",
    novashinVerdict: "H120是踏入Hegel世界最親民的選擇，堪稱『窮人福音』。聲音乾淨透明，細節表現出色，在這個價位帶非常有競爭力。"
  },
  {
    id: "hegel-h190",
    brand: "Hegel",
    model: "H190",
    type: "amp",
    sonicSignature: "活生感十足、聲音甜美、控制力好",
    pairingAdvice: "Hegel的中堅機種，聲音帶有一絲甜味，不像高階型號那樣絕對中性。適合搭配歐系喇叭，能營造出活潑又有質感的聲音。",
    physicsNote: "搭載SoundEngine 2技術，內建高品質DAC與串流功能。阻尼係數超過2000，對喇叭的控制力在同級中名列前茅。",
    novashinVerdict: "H190是Hegel的『甜心』，在精準的基礎上多了一分討喜的韻味。驅動力與功能性兼備，是一部讓人可以輕鬆享受音樂的優質合併機。"
  },
  {
    id: "hegel-h30a",
    brand: "Hegel",
    model: "H30A",
    type: "poweramp",
    sonicSignature: "力大無窮、控制力驚人、聲音極度純淨",
    pairingAdvice: "Hegel的旗艦後級，可以單聲道或立體聲模式運作。搭配自家的P30A前級是天作之合，能將喇叭的潛力完全釋放。",
    physicsNote: "單聲道模式下在8歐姆負載可輸出1100瓦的驚人功率。採用Hegel專利的FET電晶體技術，確保聲音的純淨度與速度感。",
    novashinVerdict: "H30A是後級中的『核動力航母』，沒有它推不動的喇叭。聲音快、狠、準，是追求極致動態與控制力的發燒友的終極目標。"
  },
  {
    id: "hegel-h390",
    brand: "Hegel",
    model: "H390",
    type: "amp",
    sonicSignature: "平衡、流暢、高CP值",
    pairingAdvice: "被譽為『小H590』，擁有旗艦下放的技術與驅動力。搭配中高階落地喇叭或書架喇叭都有很好的表現，是一部非常全能的擴大機。",
    physicsNote: "採用與H590相同的DAC晶片，並搭載SoundEngine 2技術。雖然功率較小，但驅動力依然出色，阻尼係數高達4000以上。",
    novashinVerdict: "H390是Hegel家族的『CP值之王』，用一半的價格買到接近旗艦的聲音。功能齊全，聲音中性百搭，是許多發燒友從入門邁向高階的選擇。"
  },
  {
    id: "hegel-h590",
    brand: "Hegel",
    model: "H590",
    type: "amp",
    sonicSignature: "權威感十足、聲音密度高、場面宏大",
    pairingAdvice: "上一代旗艦，驅動力同樣驚人。適合搭配需要大電流驅動的低效率喇叭或靜電喇叭。由於聲音極度中性，搭配線材時可以選擇帶有音染的款式來調音。",
    physicsNote: "搭載SoundEngine 2技術，擁有巨大的環形變壓器與濾波電容，提供源源不絕的能量。支援MQA解碼與Roon Ready。",
    novashinVerdict: "H590是音響界的『巨無霸』，驅動力深不見底。聲音大開大闔，聽大編制交響樂有如親臨現場。雖然是舊旗艦，但實力依然頂尖，是二手市場的搶手貨。"
  },
  {
    id: "hegel-h600",
    brand: "Hegel",
    model: "H600",
    type: "amp",
    sonicSignature: "速度快解析高、低頻權威感、音場深遠",
    pairingAdvice: "驅動力極強，能輕鬆駕馭市面上絕大多數難推的喇叭。聲音中性精準，前端搭配暖聲訊源可以取得很好的平衡。內建的DAC和串流功能非常強大。",
    physicsNote: "採用Hegel獨家的SoundEngine 2前饋式修正技術，大幅降低失真。雙單聲道設計，具備強大的電流輸出能力。DAC部分採用R2R架構。",
    novashinVerdict: "Hegel的新一代旗艦，標準的『暴力美學』，推力猛、解析高、控制力一流。內建的串流功能讓它成為一部功能完整的『退燒機』，除了價格，沒什麼好挑剔的。"
  },
  {
    id: "hegel-hd30",
    brand: "Hegel",
    model: "HD30",
    type: "dac",
    sonicSignature: "音場開闊、解析力高、聲音自然",
    pairingAdvice: "Hegel的旗艦級DAC，聲音中性自然，能忠實還原錄音的原貌。可作為數位前級直入後級，系統可以非常簡潔。",
    physicsNote: "採用雙單聲道設計的AKM 4490 DAC晶片，並搭載Hegel獨家的時鐘同步技術，大幅降低時基誤差。",
    novashinVerdict: "HD30是數位訊源的『中樞』，聲音開闊大氣，解析力驚人。雖然是幾年前的產品，但實力依然堅強，在二手市場上是不可多得的逸品。"
  },
  {
    id: "hegel-p30a",
    brand: "Hegel",
    model: "P30A",
    type: "preamp",
    sonicSignature: "透明無染、細節再生能力強、動態寬廣",
    pairingAdvice: "Hegel的旗艦前級，設計理念是『消失』在音響系統中，不添加任何音染。與H30A後級是最佳拍檔，也適合搭配其他高素質後級。",
    physicsNote: "全平衡設計，採用Hegel獨家的SoundEngine技術與高品質音量控制晶片，確保訊號路徑的純淨。",
    novashinVerdict: "P30A是一部『隱形』的前級，它的存在就是為了讓使用者忘記它的存在。聲音極度透明，是系統中的『真相探測器』。"
  },
  {
    id: "hegel-v10",
    brand: "Hegel",
    model: "V10",
    type: "dac",
    sonicSignature: "聲音活生、富有類比味、音樂性佳",
    pairingAdvice: "Hegel首款獨立唱頭放大器，聲音溫暖活生。MM與MC唱頭皆可對應，並提供豐富的增益與阻抗調整選項，搭配彈性極高。",
    physicsNote: "採用超低噪訊的JFET晶體進行第一級放大，並有獨立的電源供應，確保訊號不受干擾。",
    novashinVerdict: "V10是黑膠迷的『新寵』，在Hegel一貫的精準之外，多了一分迷人的類比韻味。調整功能豐富，可玩性極高，是中高階唱放的強力競爭者。"
  },
  {
    id: "hegel-viking",
    brand: "Hegel",
    model: "Viking",
    type: "streamer",
    sonicSignature: "聲音精準、背景極黑、富有音樂性",
    pairingAdvice: "專為播放CD而生的CD轉盤，不具備DAC功能。搭配Hegel自家的DAC或其他高階DAC，能展現出CD播放的極致水準。",
    physicsNote: "採用專為CD讀取而設計的雷射拾取機構與伺服電路，並搭載Hegel獨家的Direct MasterClock技術，確保時基誤差降至最低。",
    novashinVerdict: "在串流當道的時代，Hegel反其道而行推出純CD轉盤，是對CD播放的終極致敬。Viking的聲音證明了CD依然是高品質的音樂載體，是CD收藏家的『最後一塊拼圖』。"
  },
  {
    id: "isotek-evo3aquarius",
    brand: "IsoTek",
    model: "EVO3 Aquarius",
    type: "power",
    sonicSignature: "背景寧靜、音像凝聚、音樂性佳",
    pairingAdvice: "非常全能的電源處理器，提供六個獨立濾波的插座，其中兩個為高電流輸出。適合整套系統使用，CP值極高。",
    physicsNote: "內部每個插座都有獨立的濾波線路，避免器材間的交叉感染。採用KERP©（Kirchoff’s Equal Resistance Path）技術確保每個插座的電阻與功率傳輸都相同。",
    novashinVerdict: "IsoTek家族的『萬金油』，從入門到中高階系統都能帶來全面性的提升。效果顯著且沒有明顯癖性，是音響系統的『最佳第六人』。"
  },
  {
    id: "isotek-evo3gemini",
    brand: "IsoTek",
    model: "EVO3 Gemini",
    type: "power",
    sonicSignature: "背景更黑、細節增加、入門級距首選",
    pairingAdvice: "與Polaris類似的入門級產品，但只有兩個插座。適合用在只有訊源與擴大機的極簡系統，或是專門給電腦音響系統使用。",
    physicsNote: "同樣採用Delta Filter濾波網路與突波保護功能，提供純淨且安全的電源。小巧的體積非常適合桌面系統。",
    novashinVerdict: "雙孔版的Polaris，專為小系統設計的『電源維他命』。對於預算有限的玩家，這是最經濟實惠的電源升級方案，效果立竿見影。"
  },
  {
    id: "isotek-evo3polaris",
    brand: "IsoTek",
    model: "EVO3 Polaris",
    type: "power",
    sonicSignature: "提升清晰度、降低毛邊感、改善影像品質",
    pairingAdvice: "入門級的電源排插，但效果遠超普通排插。適合給AV影音系統或入門兩聲道系統使用，能有效改善畫質與聲音的純淨度。",
    physicsNote: "採用獨家的Delta Filter濾波網路，能有效降低RFI（無線電頻率干擾）。內部配線採用鍍銀無氧銅，並提供突波保護。",
    novashinVerdict: "不要小看這個入門排插，它是系統升級的『敲門磚』。花小錢就能體驗到電源處理的重要性，是『窮人的福音』，也是踏入IsoTek世界的第一步。"
  },
  {
    id: "isotek-evo3sigmas",
    brand: "IsoTek",
    model: "EVO3 Sigmas",
    type: "power",
    sonicSignature: "動態寬廣、聲音密度高、音場穩定",
    pairingAdvice: "Aquarius的升級版，在高電流輸出的部分採用了Titan的Direct-Coupled©技術。適合對動態與電流供應有更高要求的系統。",
    physicsNote: "結合了Aquarius的獨立濾波與Titan的高電流技術，提供四個10A插座與兩個16A高電流插座。內部配線更為精良。",
    novashinVerdict: "如果說Aquarius是CP值之王，那Sigmas就是『性能之王』。它在Aquarius的基礎上，為後級提供了更強大的能量支援，讓系統的動態表現更上一層樓。"
  },
  {
    id: "isotek-evo3titanone",
    brand: "IsoTek",
    model: "EVO3 Titan One",
    type: "power",
    sonicSignature: "聲音純淨、細節浮現、瞬態反應提升",
    pairingAdvice: "Super Titan的單插座版本，適合用在獨立的單聲道後級、主動式喇叭或超低音。避免與訊源器材共用。",
    physicsNote: "是Titan GII的第三代版本，同樣採用Direct-Coupled©技術，能有效濾除共模與差模雜訊，並提供16A的純淨電流。",
    novashinVerdict: "給後級吃的『大力丸』，雖然只有一個插座，但效果顯著。對於已經擁有優質訊源電源處理的系統，這是升級後級電源的最佳捷徑。"
  },
  {
    id: "isotek-supertitan",
    brand: "IsoTek",
    model: "Super Titan",
    type: "power",
    sonicSignature: "背景極黑、動態對比強烈、低頻權威感",
    pairingAdvice: "專為大功率後級與怪獸級單聲道擴大機設計，能提供純淨且源源不絕的電流。使用在訊源或前級上反而可能過於猛烈。",
    physicsNote: "採用獨家的Direct-Coupled©技術，提供高達32A的連續電流，瞬間電流更高達70A。內部配線採用實心單晶銅鍍銀導體。",
    novashinVerdict: "電源處理界的『超級航母』，專治各種軟腳、動態不足的系統。接上後級彷彿從V8引擎升級成火箭推進器，是暴力美學的極致展現。"
  },
  {
    id: "jbl-4349",
    brand: "JBL",
    model: "4349",
    type: "speaker",
    sonicSignature: "音像精準、細節豐富、動態凌厲",
    pairingAdvice: "12吋低音的版本，比4367更容易在一般空間擺位。搭配中性或略帶暖調的擴大機，能獲得平衡又充滿活力的聲音。",
    physicsNote: "搭載12吋紙漿低音單體與D2壓縮驅動器，同樣使用HDI導波管。雙線分音設計提供了更多的可玩性。",
    novashinVerdict: "4349是現代JBL監聽系列的代表作，在精準的基礎上增添了幾分細膩。既能勝任專業監聽，也能在家中提供充滿樂趣的聆聽體驗，是『全能型選手』。"
  },
  {
    id: "jbl-4367",
    brand: "JBL",
    model: "4367",
    type: "speaker",
    sonicSignature: "音場寬闊、聲音直接、能量感強",
    pairingAdvice: "效率高，對擴大機功率要求不高，但質感要好。搭配A類或AB類擴大機，能獲得溫潤而有力的聲音。避免搭配聲音過於明亮的擴大機。",
    physicsNote: "採用15吋差動驅動低音單體與D2雙音圈、雙磁鐵壓縮驅動器，搭配專利的HDI（High-Definition Imaging）導波管技術。",
    novashinVerdict: "錄音室監聽喇叭的家用版本，聲音不加修飾，直接而真實。它能讓你清楚聽見錄音中的每一個細節，是名副其實的『聲音照妖鏡』。"
  },
  {
    id: "jbl-everestdd67000",
    brand: "JBL",
    model: "Everest DD67000",
    type: "speaker",
    sonicSignature: "動態龐大、氣勢磅礴、低頻權威感",
    pairingAdvice: "需要怪獸級的後級才能馴服這對巨獸。搭配大功率、高電流的擴大機是基本要求，前後級分離是必須的。空間不夠大請勿嘗試。",
    physicsNote: "採用雙15吋低音單體、4吋鎂合金中音壓縮驅動器與1吋鈹高音壓縮驅動器，全部安裝在專利的Bi-Radial®號角上。分音器用料極盡奢華。",
    novashinVerdict: "JBL的現代旗艦，聲音就是『暴力美學』的代名詞。聽交響樂有如置身音樂廳前排，看電影更是地動山搖。這是真正的『富人玩具』，也是終極的家庭劇院喇叭。"
  },
  {
    id: "jbl-hdi3800",
    brand: "JBL",
    model: "HDI-3800",
    type: "speaker",
    sonicSignature: "音場深遠、動態強勁、聲音密度高",
    pairingAdvice: "HDI系列的落地喇叭，驅動門檻不高，但給它越好的前端，回報也越大。適合用於家庭劇院或大空間的兩聲道系統。",
    physicsNote: "採用三個8吋鋁合金振膜低音單體與專利的2410H-2壓縮驅動器，搭配HDI導波管。箱體設計堅固，有效抑制諧振。",
    novashinVerdict: "HDI-3800是JBL將號角技術應用於家用市場的成功典範。聲音兼具衝擊力與細膩度，看電影、聽音樂兩相宜，是家庭娛樂的『中流砥柱』。"
  },
  {
    id: "jbl-k2s9900",
    brand: "JBL",
    model: "K2 S9900",
    type: "speaker",
    sonicSignature: "活生感十足、速度快解析高、衝擊力強",
    pairingAdvice: "同樣是難以駕馭的角色，但比DD67000稍微友善一些。建議搭配聲底厚實、控制力強的擴大機，以平衡其銳利的高頻。",
    physicsNote: "搭載15吋紙漿低音單體、4吋鎂合金中音壓縮驅動器與1.5吋鎂合金超高音，同樣使用Bi-Radial®號角。",
    novashinVerdict: "K2系列是JBL的經典，S9900是其現代的完美化身。聲音充滿活力與激情，聽搖滾樂或爵士樂爽快無比，是標準的『美國之聲』，讓人熱血沸騰。"
  },
  {
    id: "jbl-l100classic",
    brand: "JBL",
    model: "L100 Classic",
    type: "speaker",
    sonicSignature: "熱情奔放、節奏感強、中頻飽滿",
    pairingAdvice: "復古的外觀下藏著一顆狂野的心。對擴大機不挑剔，搭配NAD、Audiolab等英國品牌擴大機有不錯的效果，能營造出輕鬆愉快的氛圍。",
    physicsNote: "復刻自1970年代的經典型號L100，採用12吋白色紙漿低音、5吋中音與1吋鈦金屬高音。獨特的Quadrex泡棉面網是其標誌。",
    novashinVerdict: "L100 Classic是情懷的產物，也是聲音的『時光機』。它最適合播放70、80年代的搖滾樂與流行音樂，讓人重溫那個黃金年代。是『老靈魂』發燒友的最愛。"
  },
  {
    id: "kef-bladeonemeta",
    brand: "KEF",
    model: "Blade One Meta",
    type: "speaker",
    sonicSignature: "權威感、規模感宏大、全頻段無縫銜接",
    pairingAdvice: "比Blade Two更考驗擴大機的驅動力與控制力，也需要更大的空間。搭配旗艦級的前後級是必須的，才能展現其君臨天下的氣勢。",
    physicsNote: "Blade系列的旗艦型號，搭載四個9吋低音單體，同樣採用Uni-Q同軸單體與MAT技術。單點音源設計讓相位達到完美一致。",
    novashinVerdict: "Blade One Meta是音響界的『終極武器』之一，它重新定義了點音源喇叭的可能性。聲音精準、龐大且穩定，是追求極致原音重現的發燒友的夢幻逸品。"
  },
  {
    id: "kef-bladetwometa",
    brand: "KEF",
    model: "Blade Two Meta",
    type: "speaker",
    sonicSignature: "音場極度開闊、音像精準如針點、透明度高",
    pairingAdvice: "對擴大機的質要求很高，功率反而不是首要。搭配聲音純淨、速度快的擴大機，能展現出驚人的3D音場。空間處理是發揮其潛力的關鍵。",
    physicsNote: "採用第12代Uni-Q同軸單體與MAT™（Metamaterial Absorption Technology）吸音技術。四個6.5吋低音單體採力相抵消配置，完全消除箱體振動。",
    novashinVerdict: "Blade Two Meta是KEF的技術力結晶，聲音的『全像投影』。音場脫箱感極強，閉上眼睛彷彿樂團就在眼前。外型前衛，是聲音與視覺的雙重藝術品。"
  },
  {
    id: "kef-kc62",
    brand: "KEF",
    model: "KC62",
    type: "subwoofer",
    sonicSignature: "快速、乾淨、低頻下潛深",
    pairingAdvice: "體積小巧但能量驚人的超低音。搭載P-Flex懸邊與力抵消技術，讓它在極小的體積內發出乾淨且快速的低頻。適合搭配LS50 Meta或R3 Meta組成2.1聲道系統。",
    physicsNote: "採用雙6.5吋Uni-Core力抵消驅動單體，內建1000W D類擴大機。搭載KEF的Music Integrity Engine® DSP演算法，確保低頻的精準度。",
    novashinVerdict: "KC62是超低音界的『黑科技』，它的大小與它發出的聲音完全不成正比。是解決小空間低頻不足問題的『終極法寶』，也是一套西裝的KEF系統不可或缺的配件。"
  },
  {
    id: "kef-ls50meta",
    brand: "KEF",
    model: "LS50 Meta",
    type: "speaker",
    sonicSignature: "音像清晰、中頻甜美、高頻空氣感",
    pairingAdvice: "新一代的LS50，加入了MAT技術後聲音更為純淨。對擴大機的搭配比前代更友善，但給它好的前端，它也能給你驚喜。",
    physicsNote: "搭載第12代Uni-Q同軸單體與MAT技術，大幅吸收了單體背波的雜音，讓聲音背景更黑、細節更清晰。",
    novashinVerdict: "LS50 Meta是書架喇叭的『標竿』，在這個價位帶幾乎沒有對手。聲音精準又帶有甜味，是音響媒體的年度推薦常客，也是『CP值之王』。"
  },
  {
    id: "kef-ls50wirelessii",
    brand: "KEF",
    model: "LS50 Wireless II",
    type: "speaker",
    sonicSignature: "功能強大、聲音活潑、使用便利",
    pairingAdvice: "LS50 Meta的主動版本，內建擴大機與W2無線串流平台。聲音比上一代更為成熟，低頻表現也更好。是桌面系統或小空間的理想選擇。",
    physicsNote: "每個聲道由獨立的D類與AB類擴大機驅動，並搭載MAT技術。支援Roon Ready、AirPlay 2、Chromecast等各種串流方式。",
    novashinVerdict: "LS50 Wireless II是主動式喇叭的『完全體』。功能、聲音、外型三位一體，幾乎找不到缺點。是現代數位流玩家的『夢幻逸品』。"
  },
  {
    id: "kef-ls60wireless",
    brand: "KEF",
    model: "LS60 Wireless",
    type: "speaker",
    sonicSignature: "方便、全面、聲音能量感強",
    pairingAdvice: "內建擴大機與串流功能，只需要提供訊源即可。可透過App進行DSP調整，以適應不同空間。是『All-in-One』系統的典範。",
    physicsNote: "為慶祝KEF 60週年而生，採用單點音源技術，搭載第12代Uni-Q同軸單體與MAT，以及力相抵消的Uni-Core低音單體。",
    novashinVerdict: "LS60 Wireless是KEF對未來音響的想像。它集所有功能於一身，聲音表現卻不妥協。對於追求簡潔、時尚又不想犧牲音質的現代人來說，是『完美的懶人包』。"
  },
  {
    id: "kef-r11meta",
    brand: "KEF",
    model: "R11 Meta",
    type: "speaker",
    sonicSignature: "氣勢宏大、細節豐富、聲音平衡",
    pairingAdvice: "R系列的旗艦落地喇叭，承襲了Reference系列的諸多技術。需要一定的空間與驅動力才能發揮實力，適合中大型的聆聽空間。",
    physicsNote: "搭載第12代Uni-Q同軸單體（含MAT）與四個6.5吋混合式鋁合金低音單體。箱體內部結構經過強化，減少不必要的諧振。",
    novashinVerdict: "R11 Meta是KEF技術下放的最佳證明，用相對親民的價格，就能享受到接近旗艦的聲音。是中高階家庭劇院與兩聲道系統的『主力戰將』。"
  },
  {
    id: "kef-r3meta",
    brand: "KEF",
    model: "R3 Meta",
    type: "speaker",
    sonicSignature: "小鋼炮、動態強勁、音像紮實",
    pairingAdvice: "R系列的書架喇叭，但實力不容小覷。需要搭配電流充足的擴大機來控制其6.5吋的低音單體，才能發揮其『小鋼炮』的本色。",
    physicsNote: "三音路設計，搭載6.5吋鋁合金低音單體與第12代Uni-Q同軸單體（含MAT）。在書架喇叭中算是相當有份量的設計。",
    novashinVerdict: "R3 Meta是書架喇叭中的『肌肉男』，聲音紮實有力，動態表現出色。如果你想要一對能文能武的書架喇叭，R3 Meta絕對是值得考慮的對象。"
  },
  {
    id: "kef-r7meta",
    brand: "KEF",
    model: "R7 Meta",
    type: "speaker",
    sonicSignature: "優雅、流暢、音樂性豐富",
    pairingAdvice: "R系列的中型落地喇叭，體積更為纖細，更容易融入居家環境。對擴大機友善，搭配優質的合併機就能發出好聲。",
    physicsNote: "搭載兩個6.5吋低音單體與第12代Uni-Q同軸單體（含MAT）。同樣具備KEF標誌性的清晰度與平衡感。",
    novashinVerdict: "R7 Meta是R系列中最優雅的型號，聲音流暢自然，音樂性十足。在性能與體積之間取得了絕佳的平衡，是『都會雅痞』的首選。"
  },
  {
    id: "kef-reference1meta",
    brand: "KEF",
    model: "Reference 1 Meta",
    type: "speaker",
    sonicSignature: "書架箱的極致、音場深邃、細節驚人",
    pairingAdvice: "被譽為『超級書架喇叭』，對擴大機的電流輸出能力有較高要求。搭配優質腳架是必須的，能發出超越其體積的龐大音場。",
    physicsNote: "三音路書架喇叭設計，搭載一個6.5吋低音單體與第12代Uni-Q同軸單體（含MAT）。用料與作工完全比照落地大哥。",
    novashinVerdict: "Reference 1 Meta證明了書架喇叭也能有驚人的實力。聲音的密度感與細節表現堪比落地喇叭，是小空間玩家的『終極解決方案』。"
  },
  {
    id: "kef-reference3meta",
    brand: "KEF",
    model: "Reference 3 Meta",
    type: "speaker",
    sonicSignature: "精準、凝聚、活生感十足",
    pairingAdvice: "中型落地喇叭，比Reference 5更容易在一般居家空間中獲得好聲。搭配中高階合併機或前後級都能有很好的表現。",
    physicsNote: "搭載兩個6.5吋低音單體與第12代Uni-Q同軸單體（含MAT）。彈性低音反射管設計，可依據空間特性調整低頻量感。",
    novashinVerdict: "Reference 3 Meta是Reference系列的中堅力量，聲音精準而富有活力。在合理的體積下，提供了接近旗艦的聲音表現，是『理性發燒友』的理想選擇。"
  },
  {
    id: "kef-reference5meta",
    brand: "KEF",
    model: "Reference 5 Meta",
    type: "speaker",
    sonicSignature: "高貴、細膩、平衡、音樂性佳",
    pairingAdvice: "相較於Blade系列，Reference系列更著重音樂性。搭配聲底溫潤、推力充足的擴大機，能展現出高貴而迷人的音色。",
    physicsNote: "採用與Blade同級的第12代Uni-Q同軸單體與MAT技術，搭配四個6.5吋鋁合金低音單體。箱體設計典雅，做工精緻。",
    novashinVerdict: "Reference 5 Meta是KEF的『貴族』，聲音優雅而全面。它不像Blade那樣追求極致的解析，而是多了一分人文氣息，是讓人可以長時間沉浸在音樂中的好喇叭。"
  },
  {
    id: "kimber-12tc",
    brand: "Kimber Kable",
    model: "12TC",
    type: "cable",
    sonicSignature: "聲音飽滿、控制力好、CP值高",
    pairingAdvice: "Kimber的經典喇叭線，以其飽滿的聲音與出色的控制力而聞名。適合搭配需要較好驅動力的喇叭，能有效提升聲音的紮實度。",
    physicsNote: "採用24股獨立絕緣的Hyper-pure銅導體，以Kimber專利的Varistrand幾何結構絞繞而成。",
    novashinVerdict: "12TC是Kimber家族的『長青樹』，多年來一直是中高階喇叭線的熱門選擇。聲音飽滿有力，CP值極高，是系統升級的『有感補品』。"
  },
  {
    id: "kimber-8tc",
    brand: "Kimber Kable",
    model: "8TC",
    type: "cable",
    sonicSignature: "清晰、活潑、富有音樂性",
    pairingAdvice: "12TC的縮小版，聲音特性相似，但線身更細，更適合入門或中階系統。能為系統帶來更清晰的線條感與活生感。",
    physicsNote: "採用16股獨立絕緣的Hyper-pure銅導體，同樣使用Varistrand幾何結構。",
    novashinVerdict: "8TC是踏入Kimber世界最受歡迎的選擇之一。它以合理的價格，提供了Kimber標誌性的聲音特色，是許多發燒友的第一對發燒線，也是『窮人的補品』。"
  },
  {
    id: "kimber-ks1136",
    brand: "Kimber Kable",
    model: "KS 1136",
    type: "cable",
    sonicSignature: "背景極黑、音像凝聚、動態對比強烈",
    pairingAdvice: "Kimber的旗艦平衡訊號線，採用黑珍珠銀導體。聲音極度純淨，能讓音樂的細節與動態巨細靡遺地呈現。適合搭配頂級的訊源與前級。",
    physicsNote: "採用實心純銀導體與雙層屏蔽，並使用獨家的Constrained Matrix幾何結構，最大程度地減少失真與噪訊。",
    novashinVerdict: "KS 1136是訊號線中的『王者』，它的任務就是以最純粹、最無損的方式傳遞訊號。價格高昂，但對於頂級系統而言，是不可或缺的一環。"
  },
  {
    id: "kimber-ks3038",
    brand: "Kimber Kable",
    model: "KS 3038",
    type: "cable",
    sonicSignature: "高貴、華麗、細節豐富、聲音密度高",
    pairingAdvice: "Select系列的次旗艦喇叭線，聲音帶有銀線特有的華麗感與貴氣。適合用來提升系統的解析力與高頻延伸，但前端若過於骨感則需謹慎搭配。",
    physicsNote: "採用高純度的純銀導體，並使用Kimber專利的Varistrand幾何結構，不同線徑的導體絞繞在一起，以優化不同頻段的傳輸。",
    novashinVerdict: "KS 3038是Kimber Select系列中的『貴公子』，聲音華麗而細膩。它能為系統增添一抹迷人的光澤，是追求極致美聲的發燒友的選擇。"
  },
  {
    id: "kimber-ks6068",
    brand: "Kimber Kable",
    model: "KS 6068",
    type: "cable",
    sonicSignature: "極致的透明度、無邊際的音場、活生感十足",
    pairingAdvice: "Kimber的旗艦喇叭線，適合用在已經登頂的系統，作為最後一塊拼圖。它不會改變系統的音色，只會讓你聽到系統真正的實力。",
    physicsNote: "採用Kimber最頂級的Black Pearl純銀導體與獨家的Constrained Matrix幾何絞繞技術，並使用WBT的頂級連接器。",
    novashinVerdict: "KS 6068是線材界的『聖杯』，它的價格可以買一套不錯的音響。聲音表現無可挑剔，是終極的『富人玩具』，也是檢視系統潛力的『終極放大鏡』。"
  },
  {
    id: "kimber-selectks1136",
    brand: "Kimber Kable",
    model: "Select KS-1136",
    type: "cable",
    sonicSignature: "透明、平衡、音樂性佳",
    pairingAdvice: "Select系列的頂級平衡線，聲音中性平衡，沒有過多的音染。能忠實反映前端器材的特色，是系統的『忠實傳令兵』。",
    physicsNote: "採用高純度銅銀混合導體，結合了銅線的溫潤與銀線的解析力。使用WBT的頂級XLR端子。",
    novashinVerdict: "Select KS-1136在解析力與音樂性之間取得了絕佳的平衡。它不像純銀線那樣華麗，但多了一分溫潤與耐聽，是『理性派』發燒友的頂級選擇。"
  },
  {
    id: "krell-connect",
    brand: "Krell",
    model: "Connect",
    type: "streamer",
    sonicSignature: "聲音飽滿、操作流暢、支援格式廣泛",
    pairingAdvice: "Krell推出的串流播放機，可搭配自家的DAC或擴大機。聲音飽滿有力，是標準的Krell聲底。支援Tidal、Spotify等主流服務。",
    physicsNote: "採用ESS Sabre DAC晶片，並具備XLR與RCA輸出。可透過專屬App或紅外線遙控器操作。",
    novashinVerdict: "Connect是Krell為了擁抱數位流而推出的產品。雖然在串流介面的精緻度上不如專業串流品牌，但其聲音表現依然是Krell等級的，是Krell粉絲的『數位訊源首選』。"
  },
  {
    id: "krell-duo175xd",
    brand: "Krell",
    model: "Duo 175 XD",
    type: "poweramp",
    sonicSignature: "活生感十足、聲音甜潤、驅動力佳",
    pairingAdvice: "Duo 300 XD的縮小版，每聲道175瓦輸出。聲音特性相似，但規模感略小。適合搭配效率中等的落地喇叭或高階書架喇叭。",
    physicsNote: "同樣採用Krell iBias Class A技術，只是功率與變壓器尺寸較小。但依然保有Krell一貫的強大驅動力與低阻抗輸出能力。",
    novashinVerdict: "Duo 175 XD讓更多人能以較低的代價享受到XD系列的魅力。它的驅動力與聲音品質在同級中依然是『資優生』，CP值相當高。"
  },
  {
    id: "krell-duo300xd",
    brand: "Krell",
    model: "Duo 300 XD",
    type: "poweramp",
    sonicSignature: "低頻權威感、控制力超群、聲音密度高",
    pairingAdvice: "XD系列是Krell iBias技術的進化版，聲音更為細膩、透明。Duo 300 XD提供每聲道300瓦的強大輸出，能輕鬆駕馭大型落地喇叭。",
    physicsNote: "採用Krell iBias Class A技術，在8歐姆負載下每聲道可輸出300瓦。搭載巨大的8環形變壓器與100,000μF的濾波電容。",
    novashinVerdict: "Duo 300 XD是Krell『溫柔的巨獸』，既有傳統Krell的無窮力量，又有新時代的細膩與質感。是驅動難搞喇叭的『終極解方』之一。"
  },
  {
    id: "krell-illusionii",
    brand: "Krell",
    model: "Illusion II",
    type: "preamp",
    sonicSignature: "聲音純淨、動態寬廣、功能豐富",
    pairingAdvice: "Krell的中階前級，聲音中性純淨，能忠實反映訊源的品質。內建DAC與串流功能，可作為系統的數位核心。搭配自家的XD系列後級效果最佳。",
    physicsNote: "全平衡設計，採用Krell Current Mode技術，提供極寬的頻寬。數位部分支援MQA與Roon。可選配唱放模組。",
    novashinVerdict: "Illusion II是一部功能強大的現代前級，它不僅是訊號的放大器，更是整個音響系統的中樞。聲音表現與功能性兼備，是『務實派』發燒友的選擇。"
  },
  {
    id: "krell-k300i",
    brand: "Krell",
    model: "K-300i",
    type: "amp",
    sonicSignature: "驅動力強勁、聲音飽滿、中性帶暖",
    pairingAdvice: "內建Krell招牌的iBias技術，在AB類工作下提供接近A類的聲音品質。驅動力強，能應對大部分喇叭。可選配數位模組，功能更全面。",
    physicsNote: "採用Krell iBias技術，能隨時監測並調整偏壓，讓擴大機在更長的功率範圍內以A類模式工作。數位模組採用ESS Sabre Pro DAC。",
    novashinVerdict: "K-300i是Krell新時代的代表作，在傳統的暴力美學之上，增添了幾分細膩與智慧。是想要體驗Krell之聲，又不想搞前後級的發燒友的『最佳捷徑』。"
  },
  {
    id: "krell-solo575",
    brand: "Krell",
    model: "Solo 575",
    type: "poweramp",
    sonicSignature: "力拔山河、動態無壓縮、聲音穩定如山",
    pairingAdvice: "Krell的單聲道後級，每聲道在8歐姆下可輸出575瓦。是驅動極低效率、極低阻抗喇叭的終極武器。需要頂級的前級與訊源來匹配。",
    physicsNote: "採用iBias技術與Krell Current Mode拓樸，並搭載巨大的3,000VA變壓器與188,000μF濾波電容，確保電流供應的穩定。",
    novashinVerdict: "Solo 575是Krell暴力美學的極致展現，它的存在就是為了征服一切難以驅動的喇叭。是音響系統中的『核反應爐』，也是發燒友的終極夢想。"
  },
  {
    id: "krell-theater7",
    brand: "Krell",
    model: "Theater 7",
    type: "poweramp",
    sonicSignature: "衝擊力強、包圍感好、細節清晰",
    pairingAdvice: "專為頂級家庭劇院設計的七聲道後級，每聲道都具備Krell等級的驅動力與聲音品質。是打造終極沉浸式劇院體驗的核心。",
    physicsNote: "可透過網路監控各聲道狀態，並提供XLR與RCA輸入。巨大的散熱片確保長時間大功率輸出的穩定性。",
    novashinVerdict: "Theater 7將Krell的Hi-End精神帶入了家庭劇院領域。有了它，電影院的音效也不過如此。是頂級影音玩家的『必備神器』。"
  },
  {
    id: "krell-vanguard",
    brand: "Krell",
    model: "Vanguard",
    type: "amp",
    sonicSignature: "聲音直接、能量感強、富有活力",
    pairingAdvice: "Krell的入門級合併擴大機，但依然保有Krell的聲音特色。驅動力在同級中名列前茅，適合搭配歐美系的喇叭。",
    physicsNote: "採用傳統的AB類放大，但在前級部分使用了Krell Current Mode技術。可選配數位模組，擴充串流與DAC功能。",
    novashinVerdict: "Vanguard是體驗Krell之聲最經濟的選擇。雖然沒有iBias技術，但那股充滿能量與活力的聲音，依然是純粹的Krell風格，是入門級的『肌肉車』。"
  },
  {
    id: "lum-d2",
    brand: "Lumin",
    model: "D2",
    type: "streamer",
    sonicSignature: "聲音溫暖、流暢，帶有討喜的音樂性。解析力不錯，但更強調整體的氛圍感與情感表達。",
    pairingAdvice: "入門Lumin世界的最佳敲門磚。聲音討喜，不容易出惡聲。搭配中性或偏解析的擴大機與喇叭，能為系統增添溫暖的音樂色彩。",
    physicsNote: "入門級網路串流播放機，採用Wolfson WM8741 DAC晶片，支援DSD128與PCM 192kHz。內建交換式電源，但聲音處理得相當不錯。",
    novashinVerdict: "Lumin的入門甜點。D2的聲音就像一杯溫暖的奶茶，雖然不夠刺激，但非常順口、耐聽。對於剛入門串流的發燒友來說，是個不會犯錯的安全選擇。"
  },
  {
    id: "lum-m1",
    brand: "Lumin",
    model: "M1",
    type: "amp",
    sonicSignature: "聲音乾淨、快速、直接，驅動力超乎預期。中性無染的音色，能忠實反映喇叭的特性。",
    pairingAdvice: "極簡系統的終極方案。一台M1加一對喇叭就是一套完整的系統。特別適合搭配效率中等偏高的書架喇叭，能推出令人驚訝的動態與細節。",
    physicsNote: "整合了串流播放機與D類擴大機的All-in-One產品。每聲道60瓦(8歐姆)輸出，採用獨特的數位音控與放大技術，維持訊號路徑的純淨。",
    novashinVerdict: "音響界的特斯拉。M1用最先進的數位技術，打造出一台極簡、高效、又好聲的機器。對於追求生活品味，又不想被一堆器材綁架的人來說，M1簡直是完美情人。"
  },
  {
    id: "lum-p1",
    brand: "Lumin",
    model: "P1",
    type: "streamer",
    sonicSignature: "承襲X1的透明純淨，但音色更為溫潤、飽滿，音樂性更佳。聲音流暢自然，兼具解析力與類比韻味。",
    pairingAdvice: "功能強大的系統整合核心，可直入後級。適合追求簡潔、高品質音響系統的玩家。搭配歐美系後級與喇叭，能展現出優雅又大氣的聲音風格。",
    physicsNote: "多功能網路串流播放機，整合了DAC、前級與串流功能。採用雙ES9028Pro DAC晶片，具備HDMI ARC輸入與類比輸入，可連接多種訊源。",
    novashinVerdict: "P1是Lumin的瑞士刀，什麼功能都有，而且聲音還做得非常好。對於想一步到位的懶人發燒友來說，這台簡直是窮人福音（雖然價格一點也不窮）。"
  },
  {
    id: "lum-p1mini",
    brand: "Lumin",
    model: "P1 Mini",
    type: "streamer",
    sonicSignature: "精準、快速、活潑的聲音，中高頻段明亮通透，低頻結實有力。整體聲音年輕化，充滿活力。",
    pairingAdvice: "小系統的完美核心，功能與P1看齊，但體積更小。搭配主動式喇叭或小功率後級，能組成一套極簡又好聲的桌面或書房系統。",
    physicsNote: "P1的縮小版，採用雙ES9028Q2M DAC晶片，同樣具備完整的前級與串流功能。在有限的空間內提供了最大的靈活性。",
    novashinVerdict: "麻雀雖小，五臟俱全。P1 Mini把Lumin的精華濃縮在一個小盒子裡，聲音表現完全不像是這個體積的器材該有的。CP值之王，小空間發燒友的救星。"
  },
  {
    id: "lum-t3",
    brand: "Lumin",
    model: "T3",
    type: "streamer",
    sonicSignature: "聲音平衡、細膩，質感極佳。在解析力與音樂性之間取得了絕佳的平衡，音色帶有一絲甜美與潤澤。",
    pairingAdvice: "中高階系統的理想訊源，聲音質感的提升非常明顯。搭配聲底厚實的擴大機，能讓整體聲音更為鮮活、細緻。",
    physicsNote: "承襲旗艦X1的諸多技術，採用雙ES9028Pro DAC晶片與全新的處理器，運算速度更快。全平衡設計，用料紮實。",
    novashinVerdict: "T3是Lumin家族的中堅份子，也是最聰明的選擇。它有著接近旗艦的聲音表現，但價格卻親民許多。標準的退燒機，買了它可以安穩聽好幾年音樂。"
  },
  {
    id: "lum-u2",
    brand: "Lumin",
    model: "U2",
    type: "streamer",
    sonicSignature: "作為純串流轉盤，本身沒有聲音特色，但能提供極為純淨、低時基誤差的數位訊號，讓外接DAC發揮最大潛力。",
    pairingAdvice: "適合已經擁有高階DAC，但想升級串流訊源的玩家。搭配不同風格的DAC，可以玩出各種聲音組合，可玩性極高。",
    physicsNote: "純網路串流轉盤(Bridge)，不含DAC功能。搭載與P1同等級的處理器，支援光纖網路輸入，提供USB、同軸、光纖、AES/EBU等多種數位輸出。",
    novashinVerdict: "專心做好一件事的典範。U2不搞花俏功能，就是要把最乾淨的數位訊號餵給你的DAC。對於手上已經有神兵利器的玩家來說，U2就是那個能讓你武器升級的磨刀石。"
  },
  {
    id: "lum-u2mini",
    brand: "Lumin",
    model: "U2 Mini",
    type: "streamer",
    sonicSignature: "同樣是純轉盤，聲音中性、乾淨。能為中階DAC系統帶來立竿見影的提升，背景更黑、細節更多。",
    pairingAdvice: "中階系統升級串流的最佳捷徑。搭配萬元級的DAC，能讓整體聲音表現越級挑戰更高價位的器材。是小資發燒友提升數位訊源品質的好選擇。",
    physicsNote: "U2的精簡版，同樣是純串流轉盤。採用四核心處理器，提供多種數位輸出介面。是Lumin最受歡迎的入門轉盤。",
    novashinVerdict: "花小錢辦大事的代表。U2 Mini證明了好的串流轉盤對聲音的影響有多大。別再用你的電腦當訊源了，買一台U2 Mini，你會發現一片新天地。"
  },
  {
    id: "lum-x1",
    brand: "Lumin",
    model: "X1",
    type: "streamer",
    sonicSignature: "聲音極致透明、純淨，背景極黑，細節揭示能力驚人，音場寬闊且層次分明，活生感十足。",
    pairingAdvice: "頂級系統的理想訊源，能完全展現後端器材的實力。搭配中性、高解析的擴大機與喇叭，能建構出鑑聽級的聲音表現。本身音色偏中性，可用線材微調。",
    physicsNote: "旗艦網路串流播放機，採用雙ES9038Pro DAC晶片，全平衡設計。支援DSD512與PCM 768kHz。創新的光纖網路輸入可完全隔離噪訊。獨立的線性電源供應器是好聲的基礎。",
    novashinVerdict: "串流機的標竿之一，聲音的純淨度與透明感無人能敵。根本是聲音的顯微鏡，錄音中的任何瑕疵都逃不過它的法眼。是個富人玩具，也是個會讓你不斷升級系統的毒物。"
  },
  {
    id: "lux-c10x",
    brand: "Luxman",
    model: "C-10X",
    type: "preamp",
    sonicSignature: "繼承C-900u的透明度，但增添了一絲華麗與潤澤感。聲音更具生命力，情感表達更為豐富，高頻空氣感絕佳。",
    pairingAdvice: "搭配自家M-10X後級是官方西裝。其細膩的音質也適合搭配聲音較為直接、陽剛的後級，達到互補的效果。",
    physicsNote: "新一代旗艦前級，搭載獨家LIFES放大技術與旋轉編碼器式LECUA-EX音控，追求更低的失真與更精準的控制。",
    novashinVerdict: "如果說C-900u是白開水，那C-10X就是加了檸檬片的氣泡水。在極致透明的基礎上，多了一份鮮活與靈動，是更具音樂性的旗艦之作。"
  },
  {
    id: "lux-c900u",
    brand: "Luxman",
    model: "C-900u",
    type: "preamp",
    sonicSignature: "極致中性、透明，幾乎感覺不到它的存在。聲音背景極黑，細節揭示能力超強，動態對比巨大。",
    pairingAdvice: "搭配自家M-900u後級是天作之合。也能作為聲音照妖鏡，檢視系統中其他器材的優缺點。千萬別拿來調音，它只會忠實反映前端的聲音。",
    physicsNote: "旗艦前級擴大機，採用全平衡放大設計，搭載4個獨立的ODNF 4.0放大模組與頂級LECUA1000-WM音控，實現訊號的完美傳輸。",
    novashinVerdict: "Hi-End音響的終極追求：消失的前級。C-900u就是這樣的存在，它不會為你的系統增添任何色彩，只會讓你更清楚地聽到音樂的本質。當然，前提是你的荷包夠深。"
  },
  {
    id: "lux-d05u",
    brand: "Luxman",
    model: "D-05u",
    type: "dac",
    sonicSignature: "聲音平衡、自然，帶有溫潤的質地。解析力與音樂性取得了很好的平衡，是耐聽型的好訊源。",
    pairingAdvice: "中階系統的百搭訊源。無論是搭配自家擴大機還是其他品牌，都能很好地融入系統，提供穩定而高品質的聲音表現。",
    physicsNote: "SACD/CD唱盤兼DAC，搭載兩顆Burr-Brown PCM1795解碼晶片，支援DSD 5.6MHz與PCM 192kHz/32bit。採用高剛性的LxDTM轉盤機構。",
    novashinVerdict: "中規中矩的優等生。D-05u沒有驚天動地的表現，但也沒有明顯的短板。它就是一個可靠、好聽的訊源，讓你安安靜靜地享受音樂。"
  },
  {
    id: "lux-d10x",
    brand: "Luxman",
    model: "D-10X",
    type: "dac",
    sonicSignature: "極致解析與豐富細節，音場寬闊，動態龐大。聲音中性、精準，同時不失音樂的流暢與活生感。",
    pairingAdvice: "頂級系統的訊源首選。能忠實呈現錄音中的所有細節，對前端與後端的品質要求極高，是標準的聲音照妖鏡。",
    physicsNote: "旗艦SACD/CD唱盤兼DAC，搭載自家開發的LxDTM-i轉盤系統與兩顆ROHM BD34301EKV解碼晶片，支援DSD 22.4MHz與PCM 768kHz/32bit。",
    novashinVerdict: "數位訊源的終極解答之一。D-10X把數位訊號處理到了一個新的高度，聲音的真實感與臨場感讓人驚嘆。唯一的缺點就是價格，這不是窮人能碰的玩具。"
  },
  {
    id: "lux-da06",
    brand: "Luxman",
    model: "DA-06",
    type: "dac",
    sonicSignature: "聲音溫暖、流暢，類比味十足。人聲與弦樂表現尤其迷人，帶有Luxman一貫的甜美音色。",
    pairingAdvice: "適合搭配聲音較為乾瘦、數位聲較重的系統，能有效增加音樂的厚度與情感。是為系統增添類比味的利器。",
    physicsNote: "搭載兩顆Burr-Brown PCM1792A解碼晶片，支援DSD 5.6MHz與PCM 384kHz/32bit。具備多種數位濾波模式可調。",
    novashinVerdict: "老派的浪漫。在追求高解析的時代，DA-06堅持著自己的類比美學。它的聲音不見得最Hi-Fi，但絕對是最有味道的之一。聽了會讓人想談戀愛。"
  },
  {
    id: "lux-l505uxii",
    brand: "Luxman",
    model: "L-505uXII",
    type: "amp",
    sonicSignature: "聲音活潑、明亮，充滿活力，中高頻段尤其出色，低頻量感適中，速度感好。",
    pairingAdvice: "入門Luxman的最佳選擇，搭配中高效率的書架喇叭或小型落地喇叭有驚喜。是日系美聲的典型代表，適合小資發燒友。",
    physicsNote: "AB類100瓦(8歐姆)合併擴大機，搭載ODNF 4.0電路與LECUA音控，是Luxman最暢銷的入門型號。",
    novashinVerdict: "CP值之王！用相對親民的價格就能享受到Luxman的招牌美聲。雖然沒有老大哥們那麼全面，但在這個價位帶，它的音樂性絕對是數一數二的。"
  },
  {
    id: "lux-l507z",
    brand: "Luxman",
    model: "L-507Z",
    type: "amp",
    sonicSignature: "新世代Luxman之聲，速度快、解析高、聲音透明度極佳，同時保有Luxman傳統的溫潤感，音場深遠。",
    pairingAdvice: "適合搭配現代高解析喇叭，能展現出系統的全部潛力。對於喜歡監聽風格，又不想聲音太過冷硬的玩家是個好選擇。",
    physicsNote: "搭載最新一代LIFES放大電路，取代了長久使用的ODNF。AB類110瓦(8歐姆)輸出，具備更低的失真與更快的反應速度。",
    novashinVerdict: "Luxman終於睡醒了，不再只是賣情懷。L-507Z的聲音更現代，更Hi-Fi，但骨子裡還是那個溫柔的Luxman。算是成功轉型的代表作。"
  },
  {
    id: "lux-l509x",
    brand: "Luxman",
    model: "L-509X",
    type: "amp",
    sonicSignature: "聲音中性、平衡、解析力高，兼具純A類的溫潤與AB類的驅動力，音場開闊，細節豐富。",
    pairingAdvice: "百搭型選手，對喇叭的適應性很強。無論是歐系、日系還是美系喇叭，都能推出不錯的聲音。特別適合需要驅動力與控制力的系統。",
    physicsNote: "AB類120瓦(8歐姆)旗艦合併擴大機，集自家前後級技術於一身。搭載ODNF 4.0電路與88級LECUA1000音控，規格相當豪華。",
    novashinVerdict: "合併機的王者之一，文武雙全。要音響性有音響性，要音樂性有音樂性。不知道怎麼選，選它準沒錯，標準的萬金油，但也是貴到靠北的萬金油。"
  },
  {
    id: "lux-l590axii",
    brand: "Luxman",
    model: "L-590AXII",
    type: "amp",
    sonicSignature: "暖厚飽滿，音樂性極佳，中頻密度感強，低頻Q彈有勁，是Luxman純A類美聲的代表。",
    pairingAdvice: "與歐系書架喇叭是絕配，特別是BBC監聽喇叭血統的品牌。能為聲音偏瘦或解析過強的系統注入溫暖的音樂靈魂。",
    physicsNote: "純A類30瓦(8歐姆)合併擴大機，搭載獨家ODNF 4.0放大電路與高精度LECUA音量控制系統，確保聲音純淨自然。",
    novashinVerdict: "標準的Luxman聲，暖暖的、甜甜的，聽了會讓人忘記音響二十要。雖然只有30瓦，但推起對的喇叭，那種音樂的感染力，絕對是退燒首選。"
  },
  {
    id: "lux-l595ase",
    brand: "Luxman",
    model: "L-595A SE",
    type: "amp",
    sonicSignature: "純A類經典之作，聲音溫潤甜美，中頻飽滿有肉感，高頻延伸自然華麗，活生感十足。",
    pairingAdvice: "適合搭配效率中等偏高的書架或落地喇叭，能完美展現其純A類魅力。不建議搭配低效率或阻抗變化大的怪獸喇叭，會軟腳給你看。",
    physicsNote: "限量版純A類合併擴大機，繼承L-590AXII的精髓再進化。搭載獨家ODNF-u電路，提供極低的失真與寬闊的頻寬。外觀復刻經典，情懷滿分。",
    novashinVerdict: "復古味十足的貴婦機，聲音甜到出蜜，聽人聲弦樂會讓人中毒。推力不大，別想著用它來推什麼難搞的喇叭，乖乖搭對喇叭，讓你上天堂。"
  },
  {
    id: "lux-m10x",
    brand: "Luxman",
    model: "M-10X",
    type: "poweramp",
    sonicSignature: "新世代旗艦之聲，兼具M-900u的驅動力與純A類的溫潤感。聲音更為開闊、活生，低頻下潛深不見底，質感一流。",
    pairingAdvice: "搭配C-10X前級，能呈現Luxman最新的聲音美學。其強大的驅動力與細膩的音質，使其成為搭配頂級喇叭的理想選擇。",
    physicsNote: "新一代旗艦單聲道後級，搭載LIFES放大技術，實現純A類工作至12瓦，最大輸出達300瓦(8歐姆)。巨大的電源供應是其好聲的保證。",
    novashinVerdict: "Luxman的核武器。M-10X告訴你什麼叫做毫不妥協的驅動力與音樂性。推任何喇叭都游刃有餘，聲音的從容與貴氣，是富人玩具的極致展現。"
  },
  {
    id: "lux-m900u",
    brand: "Luxman",
    model: "M-900u",
    type: "poweramp",
    sonicSignature: "驅動力與控制力驚人，低頻權威感十足。聲音密度感強，質感紮實，同時保有Luxman的溫潤與細膩。",
    pairingAdvice: "能馴服市面上絕大多數難搞的喇叭，是喇叭的終極考驗者。搭配C-900u前級，能展現出極致的平衡與控制力。",
    physicsNote: "旗艦立體聲後級，AB類150瓦(8歐姆)，可橋接為單聲道600瓦(8歐姆)。搭載4個並聯推挽的ODNF 4.0放大模組，阻尼係數高達710。",
    novashinVerdict: "暴力美學的代表。穿著西裝的肌肉猛男，既有紳士的風度，又有無窮的力量。不管你的喇叭有多難推，M-900u都能讓它服服貼貼。"
  },
  {
    id: "mar-cinema30",
    brand: "Marantz",
    model: "Cinema 30",
    type: "amp",
    sonicSignature: "劇院王者，聲音包圍感、動態、衝擊力皆為頂級水準。同時在兩聲道音樂表現上，依然保有Marantz的細膩與音樂性。",
    pairingAdvice: "頂級家庭劇院系統的核心，能驅動各種多聲道喇叭系統。在兩聲道模式下，其實力也不輸同價位的Hi-Fi擴大機。",
    physicsNote: "11.4聲道旗艦環繞擴大機，每聲道140瓦輸出。搭載最新的Dolby Atmos、DTS:X Pro等環繞音效格式，並具備Audyssey MultEQ XT32空間校正功能。",
    novashinVerdict: "家庭劇院的畢業器材。Cinema 30把所有你能想到的功能都塞進去了，而且還做得非常好。看電影爽度破表，聽音樂也毫不含糊。唯一的挑戰是你的信用卡額度。"
  },
  {
    id: "mar-model30",
    brand: "Marantz",
    model: "Model 30",
    type: "amp",
    sonicSignature: "新世代Marantz之聲，溫暖、細膩、富有光澤感，音樂性極佳，同時具備優異的解析力與速度感。",
    pairingAdvice: "與同系列的SACD 30n是天作之合。適合搭配歐系喇叭，特別是聲底較為溫潤的品牌，能展現出優雅又活生的聲音。",
    physicsNote: "採用Hypex Ncore D類放大模組，但前級部分使用Marantz獨家的HDAM-SA3類比電路，結合了D類的效率與Marantz的傳統美聲。",
    novashinVerdict: "Marantz的華麗轉身，外觀設計騷到不行，聲音也擺脫了過去那種溫吞的印象。這台機器證明了D類放大也能做得很有音樂味，是標準的貴婦機。"
  },
  {
    id: "mar-model40n",
    brand: "Marantz",
    model: "Model 40n",
    type: "amp",
    sonicSignature: "活潑、有力、充滿動感。聲音比傳統Marantz更為直接、現代，但依然保有溫潤的底聲。低頻的衝擊力與控制力相當不錯。",
    pairingAdvice: "功能齊全的All-in-One擴大機，內建串流功能，接上一對喇叭就能唱歌。適合搭配美系或需要較強驅動力的喇叭。",
    physicsNote: "AB類70瓦(8歐姆)合併擴大機，內建HEOS串流功能與HDMI ARC，可連接電視。採用HDAM-SA3電路，確保Marantz的招牌音色。",
    novashinVerdict: "Marantz的客廳佔領計畫。Model 40n把發燒音響跟日常生活做了完美的結合。聲音夠Hi-Fi，功能夠方便，外觀夠漂亮，讓老婆也能點頭的音響器材。"
  },
  {
    id: "mar-nd8006",
    brand: "Marantz",
    model: "ND8006",
    type: "streamer",
    sonicSignature: "Marantz的入門美聲，聲音溫暖、順暢，帶有討喜的韻味。解析力與動態表現中規中矩，但音樂性十足。",
    pairingAdvice: "中階系統的數位訊源中心。一台搞定CD、串流、DAC，非常方便。適合搭配聲音較為中性或理性的擴大機，增添音樂的溫度。",
    physicsNote: "結合了CD播放與網路串流功能，採用ESS9016 DAC晶片，並搭載HEOS串流平台。具備Marantz獨家的HDAM電路。",
    novashinVerdict: "CP值爆表的數位瑞士刀。ND8006用相對親民的價格，提供了非常完整的功能與悅耳的聲音。對於預算有限，又想體驗Marantz美聲的玩家來說，是個窮人福音。"
  },
  {
    id: "mar-pm10",
    brand: "Marantz",
    model: "PM-10",
    type: "amp",
    sonicSignature: "旗艦之聲，大氣、從容、控制力絕佳。聲音密度極高，音場寬闊深遠，低頻權威感十足，同時不失Marantz的細膩與華麗感。",
    pairingAdvice: "能駕馭市面上絕大多數難推的喇叭。與自家旗艦訊源SA-10搭配，能呈現出Marantz的終極聲音美學。是大型系統的理想選擇。",
    physicsNote: "旗艦合併擴大機，採用全平衡橋接D類放大設計，每聲道可輸出200瓦(8歐姆)的強大功率。從前級到後級皆為雙單聲道設計。",
    novashinVerdict: "Marantz的火力展示，告訴你他們不只會做溫柔書生，也能做出肌肉猛男。PM-10的驅動力與聲音規模感，完全是旗艦級的表現，當然價格也是。"
  },
  {
    id: "mar-pm12se",
    brand: "Marantz",
    model: "PM-12 Special Edition",
    type: "amp",
    sonicSignature: "承襲PM-10的技術，但聲音更為精緻、活潑。中高頻的透明感與甜美度更上一層樓，音樂的表情更為豐富。",
    pairingAdvice: "適合搭配高解析的書架或中小型落地喇叭，能展現出系統的精緻美感。是追求音質細膩度的發燒友的好選擇。",
    physicsNote: "PM-10的精簡版，同樣採用D類放大，但功率較小(100瓦/8歐姆)。由Marantz的聲音大師石渡健(Ken Ishiwata)親自調音，用料更為發燒。",
    novashinVerdict: "石渡健的最後遺作之一，充滿了他個人的聲音品味。PM-12SE的聲音就是那種很精緻、很有格調的類型，聽起來特別有氣質。是向大師致敬的收藏品。"
  },
  {
    id: "mar-sa10",
    brand: "Marantz",
    model: "SA-10",
    type: "dac",
    sonicSignature: "極致的類比味，聲音溫潤、流暢、密度感高。數位訊號經過獨家Marantz Musical Mastering處理後，呈現出非常自然、無壓力的聲音。",
    pairingAdvice: "頂級系統的參考級訊源。能為過於解析或冷硬的系統注入溫暖的類比靈魂。搭配PM-10擴大機，是官配的西裝組合。",
    physicsNote: "旗艦SACD/CD唱盤兼DAC，不使用現成的DAC晶片，而是採用獨家的MMM-Stream與MMM-Conversion技術，將所有PCM訊號升頻為DSD再進行解碼。",
    novashinVerdict: "Marantz的黑科技展示。SA-10用最複雜的數位技術，去追求最純粹的類比聲。這種偏執狂的精神，正是Hi-End音響的魅力所在。是個會讓人忘記數位存在的毒物。"
  },
  {
    id: "mar-sacd30n",
    brand: "Marantz",
    model: "SACD 30n",
    type: "streamer",
    sonicSignature: "溫暖、甜美、富有情感。承襲了Marantz高階機的聲音韻味，同時具備現代串流機的方便性與解析力。",
    pairingAdvice: "與Model 30是外觀與聲音上的絕配。其討喜的音色也適合搭配各種中性或偏解析的系統，為數位串流增添音樂性。",
    physicsNote: "結合了SACD/CD播放、串流、DAC與前級功能。同樣搭載Marantz Musical Mastering (MMM)技術，並內建HEOS多房間串流平台。",
    novashinVerdict: "數位時代的Marantz美聲代表。一台機器解決了所有數位訊源的需求，而且聲音還調得那麼好聽。對於追求美聲與方便性的現代人來說，這台簡直是完美解答。"
  },
  {
    id: "ml-no5101",
    brand: "Mark Levinson",
    model: "No.5101",
    type: "streamer",
    sonicSignature: "承襲Mark Levinson一貫的精準、中性風格。聲音細節豐富，背景寧靜，音場穩定，是標準的鑑聽級訊源。",
    pairingAdvice: "適合搭配自家擴大機，組成一套風格一致的西裝。也能為聲音較糊、韻味過濃的系統帶來更高的解析度與透明感。",
    physicsNote: "結合了SACD/CD播放、串流與DAC功能。搭載最新的Precision-Link II DAC，採用全平衡、純A類輸出的類比級。",
    novashinVerdict: "一台搞定所有數位播放需求，聲音還很Hi-End。No.5101的出現讓Mark Levinson的數位版圖更加完整。但那精美的價格，也註定它只是少數人的玩具。"
  },
  {
    id: "ml-no519",
    brand: "Mark Levinson",
    model: "No.519",
    type: "streamer",
    sonicSignature: "集大成之作，聲音精準、大氣、細節豐富。在Mark Levinson的鑑聽基礎上，增添了一絲類比的溫潤感與流暢度。",
    pairingAdvice: "功能最全面的旗艦訊源，可直入後級。適合追求一步到位的頂級玩家。其內建的純A類耳擴也是一大亮點。",
    physicsNote: "旗艦級數位播放機，整合了CD播放、串流、DAC、數位前級與耳擴功能。搭載Precision-Link DAC與全平衡、純A類類比輸出級。",
    novashinVerdict: "Mark Levinson的數位軍火庫。No.519把所有你想得到的數位功能都做到了極致。聲音無可挑剔，功能強大無比，價格也同樣驚人。是個會讓人口水流滿地的夢幻逸品。"
  },
  {
    id: "ml-no5206",
    brand: "Mark Levinson",
    model: "No.5206",
    type: "preamp",
    sonicSignature: "極致的中性與透明，動態對比強烈，聲音背景漆黑如墨。能讓音樂中的所有細節無所遁形。",
    pairingAdvice: "頂級系統的中樞，能忠實傳達前端訊源的品質，並完美控制後級。搭配自家後級是標準答案，但也能讓任何高品質後級發揮最大潛力。",
    physicsNote: "雙單聲道、全平衡、純A類前級。搭載獨特的級聯式音控架構與多達12組輸入，包含MM/MC唱放與Precision-Link II DAC。",
    novashinVerdict: "前級的終極目標就是消失，No.5206幾乎做到了。它不帶任何音染，只做最精準的訊號放大與控制。是個冷酷的法官，審判著你系統中的每一個環節。"
  },
  {
    id: "ml-no5302",
    brand: "Mark Levinson",
    model: "No.5302",
    type: "poweramp",
    sonicSignature: "力量與速度的結合，驅動力強悍，低頻控制力一流。聲音中性、直接，能將喇叭的潛力完全釋放。",
    pairingAdvice: "可以橋接成單聲道，驅動力倍增。適合搭配大型落地喇叭或對電流需求大的怪獸級喇叭。與No.5206前級是完美的搭檔。",
    physicsNote: "AB類135瓦(8歐姆)立體聲後級，可橋接為550瓦(4歐姆)單聲道。採用全平衡、直耦設計，巨大的環形變壓器是其力量的泉源。",
    novashinVerdict: "標準的美式肌肉車，力量大到嚇死人。No.5302能讓你的喇叭發出從未聽過的聲音，特別是低頻的部分。暴力美學的信徒會愛死它。"
  },
  {
    id: "ml-no5312",
    brand: "Mark Levinson",
    model: "No.5312",
    type: "poweramp",
    sonicSignature: "聲音快速、有力，控制力出色，是Mark Levinson較為入門的後級，但依然保有家族的聲音特徵：中性、精準、高解析。",
    pairingAdvice: "適合搭配中小型落地喇叭或高階書架喇叭，能提供充足的驅動力。與No.5206前級搭配，是一套性價比很高的前後級組合。",
    physicsNote: "AB類125瓦(8歐姆)立體聲後級，與No.5805合併機共享相同的放大線路架構。採用全平衡設計與大量的表面貼裝元件。",
    novashinVerdict: "想體驗Mark Levinson後級的威力，但預算又有限？No.5312是你的最佳入場券。雖然不是最頂級的型號，但那種拳拳到肉的力道與控制力，絕對能讓你對美國聲有全新的認識。"
  },
  {
    id: "ml-no534",
    brand: "Mark Levinson",
    model: "No.534",
    type: "poweramp",
    sonicSignature: "No.536的雙聲道版本，聲音同樣是極致的純淨、強大的驅動力與無與倫比的控制力。音場穩定如山，細節無所遁形。",
    pairingAdvice: "適合驅動對稱分頻設計的頂級喇叭，能提供極高的聲道分離度。搭配No.526或No.523前級，能組成一套參考級的系統。",
    physicsNote: "純A類電壓增益級與AB類輸出級結合，每聲道輸出250瓦(8歐姆)。全平衡、雙單聲道設計，從輸入到輸出都各自獨立。",
    novashinVerdict: "一台機器裡塞了兩台No.536，這就是No.534。聲音的純淨度與驅動力都是頂級水準，能讓你的喇叭完全消失在空間中。是個會讓人忘記器材存在的毒物。"
  },
  {
    id: "ml-no536",
    brand: "Mark Levinson",
    model: "No.536",
    type: "poweramp",
    sonicSignature: "毫不妥協的旗艦之聲。聲音純淨無染，背景極黑，動態範圍深不見底。驅動力與控制力已達化境，能讓任何喇叭俯首稱臣。",
    pairingAdvice: "Hi-End系統的終極驅動核心，專為最頂級、最難搞的喇叭而生。搭配自家旗艦前級No.52，是金錢能買到的最佳聲音之一。",
    physicsNote: "旗艦單聲道後級，純A類電壓增益級，AB類輸出級可提供400瓦(8歐姆)的強大功率。內部採用全平衡、模組化設計，用料不計成本。",
    novashinVerdict: "Mark Levinson的核彈頭。No.536的存在就是為了告訴你，什麼叫做絕對的控制力。不管你的喇叭有多麼難搞，在它面前都只是小菜一碟。這是富人玩具中的戰鬥機。"
  },
  {
    id: "ml-no5802",
    brand: "Mark Levinson",
    model: "No.5802",
    type: "amp",
    sonicSignature: "與5805聲底相似，但更為精簡。聲音同樣是中性、快速、高解析的路線，驅動力與控制力在同級中表現突出。",
    pairingAdvice: "純數位輸入的合併擴大機，適合系統純淨化的玩家。搭配各種喇叭都能展現其優異的控制力，但要小心整體聲音過於理性。",
    physicsNote: "純數位合併擴大機，基本上是No.5805拿掉類比輸入的版本。同樣搭載Precision-Link II DAC與AB類放大線路。",
    novashinVerdict: "對於只有數位訊源的玩家來說，No.5802是個更純粹、更具CP值的選擇。但少了類比輸入，也少了很多可玩性。是個為特定族群打造的偏執狂產品。"
  },
  {
    id: "ml-no5805",
    brand: "Mark Levinson",
    model: "No.5805",
    type: "amp",
    sonicSignature: "精準、中性、控制力強，聲音乾淨俐落，速度快解析高，音場描繪如臨現場，低頻權威感十足。",
    pairingAdvice: "標準的美國聲，適合搭配聲底厚實、韻味較濃的喇叭，能帶來平衡、高解析的聲音。是個聲音照妖鏡，前端的任何變化都能忠實反映。",
    physicsNote: "AB類125瓦(8歐姆)合併擴大機，採用全平衡、雙單聲道設計。搭載獨家Precision-Link II R2R DAC與PureDirect訊號路徑，確保訊號純淨。",
    novashinVerdict: "錄音室鑑聽風格的代表，聲音不帶一絲贅肉，精準到有點冷酷。喜歡這種風格的人會愛死，但想找溫暖人情味的人可以左轉出門了。是個專業的工具，不是溫柔的情人。"
  },
  {
    id: "ml-no5909",
    brand: "Mark Levinson",
    model: "No.5909",
    type: "dac",
    sonicSignature: "Mark Levinson首款耳機，聲音走向令人意外。並非全然的監聽風格，而是帶有溫潤、飽滿的中頻與華麗的高頻，低頻深沉有力，音樂性十足。",
    pairingAdvice: "作為一款藍牙降噪耳機，它的主要搭配對象是你的手機。但在有線模式下，搭配高品質耳擴能展現其真正的潛力。",
    physicsNote: "豪華無線降噪耳機，採用40mm鈹振膜單體，支援LDAC、AptX Adaptive等高音質藍牙編碼。具備ANC主動降噪與環境音模式。",
    novashinVerdict: "當所有人都以為Mark Levinson只會做方方正正的黑盒子時，他們推出了這款耳機，跌破了所有人的眼鏡。聲音好聽到不像藍牙耳機，價格也貴到不像藍牙耳機。是個掛著Mark Levinson金字招牌的奢侈品。"
  },
  {
    id: "mbl-101emk2",
    brand: "MBL",
    model: "101 E MK2",
    type: "speaker",
    sonicSignature: "360度全方位發聲，音場如臨現場，寬鬆、自然、規模感龐大。聲音活生感十足，細節無所不在，彷彿置身音樂廳。",
    pairingAdvice: "對擴大機的電流輸出能力是極致考驗，需要大電流、高阻尼係數的後級才能馴服。空間要求極高，小空間無法發揮其實力，只會駐波滿天飛。",
    physicsNote: "傳奇的360度全指向喇叭(Radialstrahler)，高、中、低音單體皆為獨家設計的葫蘆形單體，能向四面八方均勻發聲，創造出獨一無二的音場。",
    novashinVerdict: "音響界的藝術品，也是最難搞的喇叭之一。搞得好，聲音讓你上天堂；搞不好，聲音讓你下地獄。是個終極的富人玩具，需要錢、空間、技術三位一體才能駕馭。"
  },
  {
    id: "mbl-116f",
    brand: "MBL",
    model: "116 F",
    type: "speaker",
    sonicSignature: "承襲101E的寬鬆自然，但能量感更為集中。聲音同樣活生、開闊，中頻飽滿甜美，低頻快速有力。",
    pairingAdvice: "相較於101E，對擴大機的要求稍低，但依然是個硬骨頭。建議搭配自家擴大機，或電流輸出充沛的美系後級。空間適應性比101E好一些。",
    physicsNote: "採用混合式設計，中高音使用MBL獨家的Radialstrahler全向單體，低音部分則使用傳統動圈單體，兼顧了音場與衝擊力。",
    novashinVerdict: "聰明的妥協。116F讓你用相對（仍然很貴）親民的代價，體驗到MBL全向喇叭的魅力。聲音同樣毒性強烈，是個會讓人中毒的尤物。"
  },
  {
    id: "mbl-120",
    brand: "MBL",
    model: "120",
    type: "speaker",
    sonicSignature: "精緻、甜美、充滿光澤感。音場開闊，細節豐富，中高頻的空氣感與穿透力尤其迷人。是標準的MBL美聲。",
    pairingAdvice: "書架型全向喇叭，適合中小型空間。對擴大機的推力有一定要求，搭配聲底溫潤、控制力好的擴大機能展現其精緻美感。",
    physicsNote: "搭載MBL最新的中高音全向單體，並可選配專屬腳架。其獨特的同軸中高音設計，讓點音源的定位更為精準。",
    novashinVerdict: "桌面上的音樂寶石。120的聲音精緻到不像話，聽弦樂與人聲會讓人起雞皮疙瘩。雖然低頻有限，但那種中高頻的毒性，絕對是小空間的發燒首選。"
  },
  {
    id: "mbl-126",
    brand: "MBL",
    model: "126",
    type: "speaker",
    sonicSignature: "120的進化版，聲音更為飽滿、紮實。保有原本的精緻甜美，但中低頻的能量感與權威感更強，音場更為穩定。",
    pairingAdvice: "同樣是書架型全向喇叭，但對空間與擴大機的要求更高。需要給它足夠的呼吸空間，以及驅動力更強的後級，才能發揮全部實力。",
    physicsNote: "在120的基礎上，強化了箱體結構與低音單體，創造出更低的延伸與更高的承受功率。是MBL書架喇叭的旗艦型號。",
    novashinVerdict: "書架喇叭的極致。126證明了小喇叭也能發出龐大的聲音規模感。當然，前提是你的荷包跟你的後級都夠給力。是個小而美的奢侈品。"
  },
  {
    id: "mbl-c11",
    brand: "MBL",
    model: "Corona C11",
    type: "preamp",
    sonicSignature: "Corona系列的入門前級，聲音清澈、甜美，帶有MBL一貫的華麗感。解析力與動態表現皆有水準。",
    pairingAdvice: "搭配同系列的C21或C15後級是標準組合。其優美的音色也適合為中性、理性的系統增添一絲貴氣。",
    physicsNote: "Corona Line前級擴大機，採用與高階系列下放的技術，具備多組輸入與選配的唱放模組。外觀設計典雅，有黑、白兩色可選。",
    novashinVerdict: "MBL的入門邀請函。C11讓你用相對親民的價格，一窺MBL美聲的堂奧。雖然沒有老大哥們那麼驚天動地，但那份獨特的華麗感，已經足以讓人中毒。"
  },
  {
    id: "mbl-n11",
    brand: "MBL",
    model: "N11",
    type: "preamp",
    sonicSignature: "極致的純淨與活生感。聲音背景極黑，動態寬廣，細節揭示能力驚人。音色華麗而真實，充滿生命力。",
    pairingAdvice: "Noble Line系列的核心，搭配自家N15或N21後級是天作之合。其優異的性能也能作為任何頂級後級的參考級前級。",
    physicsNote: "Noble Line旗艦前級，搭載MBL獨家的Unity Gain技術，能提供極低的噪訊與失真。具備獨特的音量旋鈕手感與顯示螢幕。",
    novashinVerdict: "來自未來的指揮中心。N11的外觀設計充滿科技感，聲音表現也同樣前衛。它能讓你的系統發出前所未有的活生感與透明度，是個會讓人上癮的毒物。"
  },
  {
    id: "mbl-n15",
    brand: "MBL",
    model: "N15",
    type: "poweramp",
    sonicSignature: "力量與美感的完美結合。驅動力強悍，能輕鬆駕馭MBL自家喇叭。聲音高貴、華麗，同時充滿了活生感與音樂的熱情。",
    pairingAdvice: "MBL喇叭的官方指定駕駛。一對N15驅動101E MK2是許多MBL玩家的夢想。其優美的音色也適合搭配其他歐系美聲喇叭。",
    physicsNote: "Noble Line旗艦單聲道後級，採用獨家LASA 2.0放大技術，結合了D類的高效率與AB類的線性，在各種負載下都能維持穩定的聲音表現。",
    novashinVerdict: "馴服MBL喇叭的終極武器。N15用優雅的方式，提供了無窮盡的力量。聲音既有德國的精準，又有MBL的華麗，是個文武雙全的紳士。"
  },
  {
    id: "mbl-n31",
    brand: "MBL",
    model: "N31",
    type: "dac",
    sonicSignature: "類比味十足的數位訊源。聲音溫潤、流暢，充滿了水分與光澤感。細節豐富但毫不刺耳，音樂性極佳。",
    pairingAdvice: "為冰冷的數位系統注入溫暖類比靈魂的良藥。搭配自家前後級，能組成一套聲音極為高貴、華麗的系統。",
    physicsNote: "Noble Line旗艦CD/DAC，搭載獨家的32-bit/384kHz R2R解碼階梯，並具備USB、光纖、同軸等多種數位輸入，可對應高解析串流。",
    novashinVerdict: "數位時代的類比心臟。N31用最複雜的R2R技術，去還原最自然的音樂感動。它的聲音會讓你忘記正在聽的是數位檔案，是個會讓人中毒的音樂製造機。"
  },
  {
    id: "mbl-n51",
    brand: "MBL",
    model: "N51",
    type: "amp",
    sonicSignature: "Noble Line的入門磚，聲音同樣華麗、活生，充滿能量感。驅動力與控制力在同級中表現優異，能展現MBL喇叭的魅力。",
    pairingAdvice: "驅動MBL 126或116F的理想選擇。其全面的表現也使其成為搭配各種中高階喇叭的百搭好手。",
    physicsNote: "Noble Line合併擴大機，搭載LASA 2.0放大技術，提供每聲道380瓦(4歐姆)的強大輸出。具備多樣化的輸入與選配的唱放模組。",
    novashinVerdict: "進入MBL世界的最佳捷徑。N51讓你用一台機器的代價，享受到MBL前後級的精髓。聲音的活生感與驅動力，絕對能讓你的喇叭脫胎換骨。"
  },
  {
    id: "mbl-n21",
    brand: "MBL",
    model: "Noble N21",
    type: "poweramp",
    sonicSignature: "N15的立體聲版本，聲音同樣高貴、華麗、充滿活力。驅動力稍遜於N15，但對大多數喇叭而言已是綽綽有餘。",
    pairingAdvice: "適合不需要極致驅動力的系統，或用作雙擴大機系統中的中高音驅動。搭配N11前級，能以較低的成本組成一套Noble Line西裝。",
    physicsNote: "Noble Line立體聲後級，同樣採用LASA 2.0放大技術，提供每聲道380瓦(4歐姆)的輸出。內部用料與N15看齊。",
    novashinVerdict: "聰明的選擇。N21提供了接近N15的聲音品質，但價格更為親民，體積也更友善。對於不是追求極致的玩家來說，N21是個更理性、更具CP值的選擇。"
  },
  {
    id: "mci-c12000",
    brand: "McIntosh",
    model: "C12000",
    type: "preamp",
    sonicSignature: "雙重人格的旗艦前級。真空管輸出溫潤甜美，晶體輸出中性精準。無論哪種模式，聲音都極為純淨、背景漆黑，動態龐大。",
    pairingAdvice: "McIntosh的終極指揮中心，搭配自家旗艦後級是標準答案。其雙輸出設計也讓搭配不同風格的後級成為可能，可玩性極高。",
    physicsNote: "兩件式旗艦前級，將控制與電源部分完全獨立。類比放大線路提供真空管與晶體兩種輸出選擇，且兩者完全獨立。",
    novashinVerdict: "選擇困難症的終極解藥。C12000讓你不用再煩惱要膽機還是晶體機，因為它兩種都給你，而且都做到了極致。唯一的煩惱是你的銀行存款。"
  },
  {
    id: "mci-c2600",
    brand: "McIntosh",
    model: "C2600",
    type: "preamp",
    sonicSignature: "C2700的前代，聲音同樣是溫潤甜美的真空管聲，但解析力與透明度略遜一籌。音色更為濃郁，類比味更重。",
    pairingAdvice: "在二手市場上是CP值很高的選擇。搭配晶體後級，能輕鬆獲得迷人的膽味。其內建的DAC在當時也算高規格。",
    physicsNote: "真空管前級，具備獨立的真空管唱放線路。數位部分支援DSD與DXD解碼，在當時相當先進。",
    novashinVerdict: "老派的浪漫。C2600的聲音就像一杯陳年的威士忌，雖然不夠清澈，但韻味十足。對於追求濃郁類比味的玩家來說，是個不可多得的寶物。"
  },
  {
    id: "mci-c2700",
    brand: "McIntosh",
    model: "C2700",
    type: "preamp",
    sonicSignature: "經典的McIntosh真空管前級之聲，溫暖、飽滿、甜美。聲音充滿了水分與光澤感，人聲毒性強烈。",
    pairingAdvice: "搭配自家晶體後級，能組成一套兼具膽味與驅動力的完美組合。也能為聲音過於冷硬的系統帶來溫暖的音樂性。",
    physicsNote: "真空管前級，採用5支12AX7A與1支12AT7真空管。搭載最新的DA2數位模組，可對應各種高解析數位訊源。",
    novashinVerdict: "McIntosh的膽味製造機。C2700的聲音就是那種很傳統、很溫暖的美國聲，聽爵士樂跟老歌特別有味道。是個會讓人沉醉在音樂中的溫柔鄉。"
  },
  {
    id: "mci-ma12000",
    brand: "McIntosh",
    model: "MA12000",
    type: "amp",
    sonicSignature: "王者風範，聲音飽滿、權威、能量感十足。前管後晶的設計，兼具了真空管的溫潤與晶體的驅動力，音場深遠，低頻氣勢磅礡。",
    pairingAdvice: "驅動力巨獸，能馴服市面上任何難搞的喇叭。特別適合搭配大型落地喇叭，能展現出無與倫比的規模感與動態。空間不夠大請勿輕易嘗試。",
    physicsNote: "旗艦合併擴大機，前級為真空管放大，後級為每聲道350瓦的晶體放大。搭載DA2數位模組與Autoformer輸出變壓器，確保在任何阻抗下都能提供足額功率。",
    novashinVerdict: "McIntosh的終極武器，一台抵三台。聲音就是標準的美國派，大開大闔，拳拳到肉。那對藍眼睛在黑暗中亮起時，你的靈魂也會跟著燃燒。標準的富人玩具，也是退燒神器。"
  },
  {
    id: "mci-ma352",
    brand: "McIntosh",
    model: "MA352",
    type: "amp",
    sonicSignature: "前管後晶的甜美與力道。聲音溫潤、流暢，人聲與弦樂表現尤其迷人。同時保有晶體機的驅動力與低頻控制力。",
    pairingAdvice: "外型與聲音同樣騷包，適合搭配聲底較為中性或偏瘦的喇叭，能為系統注入溫暖的膽味。推力不俗，對付一般落地喇叭綽綽有餘。",
    physicsNote: "前級採用12AX7A與12AT7真空管，後級為每聲道200瓦(8歐姆)的晶體放大。外觀設計復古，致敬經典的MC275。",
    novashinVerdict: "McIntosh的顏值擔當。MA352不只聲音好聽，長得更是漂亮。開機時那綠色的燈光亮起，儀式感滿滿。是個會讓老婆也愛上的音響器材。"
  },
  {
    id: "mci-ma7900",
    brand: "McIntosh",
    model: "MA7900",
    type: "amp",
    sonicSignature: "聲音活潑、有力，帶有McIntosh一貫的飽滿底聲。相較於老大哥們，聲音更為年輕化，速度感與衝擊力不錯。",
    pairingAdvice: "適合搭配效率中等偏高的喇叭，能營造出充滿活力的聲音。內建五段等化器，可玩性很高，能根據空間與喜好調整音色。",
    physicsNote: "AB類200瓦(8歐姆)合併擴大機，搭載DA1數位模組。是McIntosh少數具備EQ等化功能的合併機。",
    novashinVerdict: "McIntosh家族裡的搖滾小子。MA7900的聲音充滿了熱情與活力，聽流行、搖滾樂特別對味。那個五段EQ更是調音神器，手癢的玩家會愛死。"
  },
  {
    id: "mci-ma8950",
    brand: "McIntosh",
    model: "MA8950",
    type: "amp",
    sonicSignature: "經典麥氏之聲，溫暖、飽滿、充滿力量感。聲音不追求極致的解析，但音樂性十足，聽起來非常舒服、耐聽。",
    pairingAdvice: "中堅主力，驅動力充足，適合搭配各種中大型喇叭。是體驗經典McIntosh聲音魅力的最佳入門磚之一。",
    physicsNote: "AB類200瓦(8歐姆)合併擴大機，同樣具備Autoformer輸出變壓器與DA2數位模組。動態餘裕度比前代提升50%。",
    novashinVerdict: "CP值最高的McIntosh合併機之一。MA8950提供了滿滿的McIntosh元素：藍眼睛、Autoformer、溫暖飽滿的聲音，但價格卻相對親民。是個會讓人中毒的入門毒物。"
  },
  {
    id: "mci-ma9500",
    brand: "McIntosh",
    model: "MA9500",
    type: "amp",
    sonicSignature: "MA12000的純晶體版本，聲音更為直接、快速、解析。保有McIntosh的權威感與飽滿度，但音色更為中性、現代。",
    pairingAdvice: "同樣是驅動力猛獸，對喇叭的適應性極廣。適合喜歡McIntosh的力道，但又希望聲音更中性、更Hi-Fi的玩家。",
    physicsNote: "純晶體旗艦合併擴大機，每聲道300瓦輸出。濾波電容容量比前代增加一倍，提供了更好的動態餘裕。同樣搭載DA2數位模組與Autoformer。",
    novashinVerdict: "如果說MA12000是穿著天鵝絨的拳王，那MA9500就是穿著運動服的短跑冠軍。速度更快，線條更清晰，但同樣充滿力量。是McIntosh家族裡的理性派。"
  },
  {
    id: "mci-mc1502",
    brand: "McIntosh",
    model: "MC1502",
    type: "poweramp",
    sonicSignature: "經典真空管之聲，聲音甜美、溫潤、充滿空氣感。人聲與弦樂的表現極為迷人，帶有金黃色的光澤。",
    pairingAdvice: "MC275的立體聲加強版，推力更大。適合搭配高效率喇叭，特別是號角或全音域單體喇叭，能展現出極致的膽味魅力。",
    physicsNote: "真空管立體聲後級，每聲道輸出150瓦。採用8支KT88功率管，並搭載獨家的Unity Coupled Circuit輸出變壓器。",
    novashinVerdict: "膽機迷的夢幻逸品。MC1502的聲音就是那種會讓人中毒的類型，甜到心坎裡。雖然沒有晶體機的暴力美學，但那種溫柔的撫摸，同樣讓人無法自拔。"
  },
  {
    id: "mci-mc275vii",
    brand: "McIntosh",
    model: "MC275 VII",
    type: "poweramp",
    sonicSignature: "音響史上的傳奇，聲音溫暖、甜美、富有傳奇色彩的饅頭中音。第七代在維持經典音色的基礎上，提升了頻寬與解析力。",
    pairingAdvice: "搭配BBC監聽喇叭(如LS3/5a)是天作之合。不追求極致的音響性，而是專注於音樂性的表達。是小空間聽人聲、弦樂的絕佳選擇。",
    physicsNote: "經典真空管立體聲後級，每聲道輸出75瓦。最新一代採用LED燈指示真空管狀態，並改進了線路佈局，信噪比更高。",
    novashinVerdict: "活著的傳奇。MC275的聲音已經成為一種標準，一種情懷。不管音響技術如何進步，它總有自己的一席之地。是每個發燒友都應該擁有一次的經典。"
  },
  {
    id: "mci-mc312",
    brand: "McIntosh",
    model: "MC312",
    type: "poweramp",
    sonicSignature: "MC462的縮小版，聲音同樣飽滿有力，但規模感與權威感略遜一籌。聲音更為活潑、輕快一些。",
    pairingAdvice: "適合中大型系統，驅動一般的落地喇叭綽綽有餘。是進入McIntosh後級世界的最佳入門選擇。",
    physicsNote: "立體聲後級，每聲道輸出300瓦。與MC462共享相同的技術，但在變壓器與電容容量上有所精簡。",
    novashinVerdict: "聰明的選擇。MC312提供了接近MC462的聲音體驗，但價格更為親民。對於大多數人來說，它的力量已經完全足夠了。是個高CP值的肌肉男。"
  },
  {
    id: "mci-mc462",
    brand: "McIntosh",
    model: "MC462",
    type: "poweramp",
    sonicSignature: "McIntosh最受歡迎的後級，聲音飽滿、有力、控制力絕佳。在經典的麥氏聲底上，增添了更高的解析度與更快的速度感。",
    pairingAdvice: "百搭型的大功率後級，能應付市面上絕大多數的喇叭。搭配自家前級是標準組合，搭配其他品牌前級也能展現其強悍的實力。",
    physicsNote: "立體聲後級，每聲道輸出450瓦。濾波電容容量比前代增加50%，動態表現更為出色。同樣搭載Autoformer輸出變壓器。",
    novashinVerdict: "後級的萬金油。MC462什麼都能推，什麼都推得好。聲音大氣、穩重，又不失細膩。不知道怎麼選後級，選它準沒錯。唯一的缺點是重到靠北。"
  },
  {
    id: "mci-mc901",
    brand: "McIntosh",
    model: "MC901",
    type: "poweramp",
    sonicSignature: "雙驅動的怪獸。真空管推中高音，甜美細膩；晶體推低音，權威有力。聲音兼具了兩種放大的優點，規模感與細膩度並存。",
    pairingAdvice: "專為大型、難搞的喇叭而生的終極解決方案。特別適合需要雙擴大機驅動的喇叭，一台MC901就搞定。需要兩台才能組成一套立體聲系統。",
    physicsNote: "獨特的雙單聲道單體後級，內含一個300瓦的真空管放大器與一個600瓦的晶體放大器，可分別驅動喇叭的中高音與低音單體。",
    novashinVerdict: "McIntosh的科學怪人。MC901的設計理念前無古人，把兩種最好的放大技術塞在一個機箱裡。聲音表現也同樣驚人，是個不計成本的瘋狂之作。"
  },
  {
    id: "mci-mcd600",
    brand: "McIntosh",
    model: "MCD600",
    type: "dac",
    sonicSignature: "聲音飽滿、穩重，帶有類比的韻味。解析力與動態表現皆有水準，是標準的McIntosh聲底。",
    pairingAdvice: "適合搭配自家前後級，組成一套風格統一的西裝。其溫潤的聲底也能為過於解析的系統帶來平衡。",
    physicsNote: "SACD/CD唱盤兼DAC，採用8聲道、32-bit的ESS DAC晶片，並以Quad Balanced模式運作，提供極高的動態範圍與低失真。",
    novashinVerdict: "穩重如山的訊源。MCD600的聲音不花俏，但非常紮實、耐聽。是個可以讓你安安穩穩聽一輩子CD的可靠夥伴。"
  },
  {
    id: "mci-mcd85",
    brand: "McIntosh",
    model: "MCD85",
    type: "dac",
    sonicSignature: "復古外觀下的現代靈魂。聲音活潑、直接，解析力不錯。與傳統McIntosh的厚重聲底相比，更顯年輕化。",
    pairingAdvice: "與MA8950或MA352在視覺上是絕配。適合喜歡McIntosh的設計，但希望聲音更現代、更具活力的玩家。",
    physicsNote: "SACD/CD唱盤，採用開放式設計，外觀致敬經典。搭載與MCD600相同等級的8聲道DAC晶片與Quad Balanced技術。",
    novashinVerdict: "McIntosh的潮牌單品。MCD85的設計感十足，聲音也跟得上時代。是個擺在客廳能彰顯品味的發燒逸品。"
  },
  {
    id: "mei-ma3",
    brand: "Meitner",
    model: "MA3",
    type: "dac",
    sonicSignature: "承襲EMM Labs的透明與解析，但增添了一絲溫潤與音樂性。聲音同樣快速、精準，但更具情感與流暢度，是Meitner的代表作。",
    pairingAdvice: "整合了串流與DAC功能，可直入後級，是簡潔系統的理想核心。聲音中性百搭，能忠實反映擴大機與喇叭的特性，同時提供頂級的訊源品質。",
    physicsNote: "採用與EMM Labs DA2 V2同級的16xDSD MDAC2™ 與 MFAST™ 技術。內建網路串流功能，支援Roon Ready，功能非常完整。",
    novashinVerdict: "窮人的EMM Labs（雖然一點也不窮）。MA3enza提供了接近頂級旗艦的聲音表現，但價格更為親民，還多了串流功能。CP值爆表，是內行人的選擇，標準的退燒機。"
  },
  {
    id: "msb-discretedac",
    brand: "MSB Technology",
    model: "Discrete DAC",
    type: "dac",
    sonicSignature: "MSB的入門級產品，聲音乾淨、直接、細節豐富。保有MSB一貫的精準與低時基誤差特性，但音色的溫潤度與規模感有所精簡。",
    pairingAdvice: "小系統或耳機系統的理想訊源。其純淨的聲底能讓後端器材的特色完全發揮。是體驗MSB R2R魅力的最低門檻。",
    physicsNote: "採用兩個MSB自家開發的Prime DAC模組，為MSB最精簡的DAC設計。搭載Femto 140時鐘，確保了優異的數位性能。",
    novashinVerdict: "窮人的MSB（但可能還是比你的車貴）。Discrete DAC證明了MSB即使做入門產品也毫不含糊。聲音的純淨度與精準度，在同價位無人能敵。是個小而美的毒物。"
  },
  {
    id: "msb-premierdac",
    brand: "MSB Technology",
    model: "Premier DAC",
    type: "dac",
    sonicSignature: "MSB家族的中堅力量，聲音精準、活生、充滿能量感。在真實的基礎上，增添了一絲年輕的活力與衝擊力。",
    pairingAdvice: "功能強大的數位核心，可選配前級輸出模組直入後級。適合追求高解析、高動態的現代音響系統。",
    physicsNote: "採用4個Prime DAC模組，但為單端架構。搭載Femto 140時鐘。同樣是全模組化設計，未來升級潛力巨大。",
    novashinVerdict: "進入MSB世界的最佳敲門磚。Premier DAC讓你用相對（依然很貴）合理的價格，體驗到MSB的核心技術與聲音美學。CP值極高，是內行人的聰明選擇。"
  },
  {
    id: "msb-referencedac",
    brand: "MSB Technology",
    model: "Reference DAC",
    type: "dac",
    sonicSignature: "承襲Select DAC的真實與自然，但規模感與極致的寬鬆度略有收斂。聲音同樣極為純淨、透明，音樂的流動感與活生感一流。",
    pairingAdvice: "僅次於Select DAC的次旗艦，同樣是參考級的訊源。適合各種頂級系統，能為系統帶來無與倫比的真實感與音樂性。",
    physicsNote: "採用4個獨立的Prime DAC模組，同樣為全平衡設計。搭載Femto 93時鐘，時基誤差93飛秒。與Select DAC共享許多核心技術與模組。",
    novashinVerdict: "如果說Select是神，那Reference就是神的使者。它帶來了同樣的福音，但門檻稍低一些（雖然還是高得嚇人）。聲音同樣是讓人中毒的類型，是退燒的終極選擇之一。"
  },
  {
    id: "msb-s202",
    brand: "MSB Technology",
    model: "S202",
    type: "poweramp",
    sonicSignature: "聲音極度中性、透明、快速。驅動力與控制力驚人，能讓喇叭完全消失在空間中。音色不帶任何渲染，只做最忠實的放大。",
    pairingAdvice: "MSB DAC的最佳拍檔。S202的設計理念就是為了完美匹配自家DAC，將訊源的資訊量毫無損失地傳遞給喇叭。是個標準的聲音照妖鏡。",
    physicsNote: "立體聲後級，每聲道輸出200瓦(8歐姆)。採用零負回授、全平衡設計。其獨特的輸入級設計能與MSB DAC直接匹配，無需前級。",
    novashinVerdict: "為自家DAC而生的終極僕人。S202本身沒有個性，它的個性就是MSB DAC的個性。這種絕對的忠實，正是Hi-End精神的體現。是個冷酷但完美的放大機器。"
  },
  {
    id: "msb-selectdac",
    brand: "MSB Technology",
    model: "Select DAC",
    type: "dac",
    sonicSignature: "數位音訊的終極形態，聲音極度寬鬆、自然、真實，完全擺脫了數位聲的束縛。音場規模感龐大無比，細節與微動態表現如臨現場。",
    pairingAdvice: "Hi-End系統的頂點，也是錢包的終點。它的表現完全取決於系統的其他部分，任何瓶頸都會被無情地放大。需要最頂級的前後級與喇叭才能匹配。",
    physicsNote: "MSB的旗艦DAC，採用8個獨立的Hybrid DAC模組，為全平衡設計。搭載自家開發的Femto 33時鐘，時基誤差低至33飛秒。全模組化設計，可不斷升級。",
    novashinVerdict: "這不是DAC，這是時光機。Select DAC的聲音真實到令人毛骨悚然，它能帶你回到錄音的當下。這是音響的終極夢想，也是一個會讓人傾家蕩產的無底洞。"
  },
  {
    id: "mf-m6si",
    brand: "Musical Fidelity",
    model: "M6si",
    type: "amp",
    sonicSignature: "Musical Fidelity的中堅主力，聲音平衡、流暢、音樂性好。解析力與驅動力皆有水準，是耐聽型的好機器。",
    pairingAdvice: "百搭型合併機，對喇叭的適應性很廣。無論是書架還是落地喇叭，都能推出不錯的聲音。是中階系統的萬金油選擇。",
    physicsNote: "雙單聲道設計的合併擴大機，每聲道輸出220瓦(8歐姆)。內建非同步USB DAC與MM/MC唱放，功能非常完整。",
    novashinVerdict: "音響界的水桶機，沒有明顯的優點，但也沒有任何缺點。M6si就是這樣一台樸實無華但非常可靠的機器。不知道怎麼選，選它準沒錯，是個讓人安心的退燒選擇。"
  },
  {
    id: "mf-m6xdac",
    brand: "Musical Fidelity",
    model: "M6x DAC",
    type: "dac",
    sonicSignature: "聲音乾淨、細膩，帶有英國聲的溫潤感。解析力高但不刮耳，音樂的流暢度與情感表達是其強項。",
    pairingAdvice: "為數位系統增添類比味的利器。其多樣的數位濾波模式可玩性很高，能根據喜好微調音色。搭配自家擴大機有加成效果。",
    physicsNote: "採用兩顆最新的ES9038Q2M DAC晶片，並以雙單聲道差動模式運作。搭載16核心的XMOS處理器，支援MQA與DSD解碼。",
    novashinVerdict: "Musical Fidelity的數位技術大躍進。M6x DAC的規格與聲音表現都完全跟上了時代。用合理的價格提供了非常高品質的聲音，CP值很高。"
  },
  {
    id: "mf-m8dac",
    brand: "Musical Fidelity",
    model: "M8 DAC",
    type: "dac",
    sonicSignature: "聲音大氣、穩重，解析力與動態表現皆為旗艦水準。音場寬闊，細節豐富，同時保有Musical Fidelity的音樂性與溫潤感。",
    pairingAdvice: "頂級系統的數位中樞。其平衡、無染的聲底能忠實反映系統其他器材的實力。具備前級功能，可直入後級，玩法多樣。",
    physicsNote: "旗艦級DAC，內部為真正的雙單聲道設計。每聲道使用一顆高階的Burr-Brown DSD1792晶片，並具備升頻功能。用料極為發燒。",
    novashinVerdict: "低調的實力派。M8 DAC的外觀樸實無華，但內在用料與聲音表現都是頂級水準。它不追求花俏的功能，只專注在把聲音做好。是內行人才懂的好東西。"
  },
  {
    id: "mf-m8xi",
    brand: "Musical Fidelity",
    model: "M8xi",
    type: "amp",
    sonicSignature: "標準的英國大力士，聲音飽滿、有力、控制力佳。音色略帶暖意，音樂性十足，聽流行、搖滾樂非常過癮。",
    pairingAdvice: "驅動力驚人，適合搭配需要大電流驅動的低效率喇叭。能為系統帶來紮實的下盤與龐大的規模感。是暴力美學的信徒。",
    physicsNote: "雙單聲道合併擴大機，每聲道可輸出驚人的550瓦(8歐姆)。內建DAC功能，採用兩顆Burr-Brown PCM1795晶片。",
    novashinVerdict: "後級擴大機的價格，買到一台合併機還送你DAC。M8xi的CP值簡直突破天際。聲音就是拳拳到肉，聽起來爽度破表。是窮人的大力神。"
  },
  {
    id: "mf-nuvista8002",
    brand: "Musical Fidelity",
    model: "Nu-Vista 800.2",
    type: "amp",
    sonicSignature: "膽石混血的極致，聲音兼具真空管的甜美、華麗與晶體機的強大驅動力。音場寬闊，細節豐富，音樂性與音響性完美結合。",
    pairingAdvice: "驅動力巨獸，能輕鬆駕馭市面上絕大多數喇叭。其獨特的Nuvistor管音色能為任何系統增添一絲貴氣與華麗感，是系統的調味大師。",
    physicsNote: "旗艦合併擴大機，前級採用軍規級的Nuvistor真空管，後級為每聲道超過300瓦的強大晶體放大。雙單聲道設計，用料不計成本。",
    novashinVerdict: "穿著燕尾服的綠巨人浩克。Nu-Vista 800.2的聲音既有紳士的優雅，又有無窮的力量。那幾根發著微光的Nuvistor管，更是毒性滿點的銷魂物。是個會讓人中毒的富人玩具。"
  },
  {
    id: "nad-c3050",
    brand: "NAD",
    model: "C 3050",
    type: "amp",
    sonicSignature: "復古的暖厚飽滿聲底，中頻韻味十足，音樂性佳。",
    pairingAdvice: "搭配老JBL或Tannoy喇叭，重現70年代的經典風華。",
    physicsNote: "復古造型，搭載HybridDigital UcD放大技術，可選配BluOS串流模組。",
    novashinVerdict: "賣的是情懷，聲音也是老派的溫暖。拿來聽老搖滾跟爵士，那股氛圍無可取代。"
  },
  {
    id: "nad-c399",
    brand: "NAD",
    model: "C 399",
    type: "amp",
    sonicSignature: "中性均衡，帶點溫暖的厚度，CP值之王。",
    pairingAdvice: "百搭型選手，從書架到中小型落地都能應付。搭配金屬高音的喇叭可以柔化刺激感。",
    physicsNote: "採用HybridDigital nCore放大技術，並可選配MDC2 BluOS-D模組。",
    novashinVerdict: "標準的退燒機，該有的都有，聲音四平八穩。沒啥激情，但也挑不出大毛病，適合不想折騰的懶人。"
  },
  {
    id: "nad-c700",
    brand: "NAD",
    model: "C 700",
    type: "streamer",
    sonicSignature: "乾淨、直接，解析力不錯，但稍微偏冷。",
    pairingAdvice: "適合搭配暖聲底的書架喇叭，組成一套簡潔的串流系統。",
    physicsNote: "BluOS串流平台，HybridDigital UcD放大技術。",
    novashinVerdict: "M10的窮人版，功能相似，但聲音的精緻度跟驅動力差一截。一分錢一分貨，沒毛病。"
  },
  {
    id: "nad-m10-v2",
    brand: "NAD",
    model: "M10 V2",
    type: "streamer",
    sonicSignature: "精緻、細膩，聲音密度感強，小體積大能量。",
    pairingAdvice: "搭配高效率書架喇叭，組成一套高顏值的桌面系統。建議加上超低音補足下盤。",
    physicsNote: "BluOS串流核心，HybridDigital nCore放大，支援Dirac Live。",
    novashinVerdict: "貴婦機的代表，擺在客廳就是一件藝術品。聲音對得起價格，但千萬別想用它推倒大食怪喇叭。"
  },
  {
    id: "nad-m32",
    brand: "NAD",
    model: "M32",
    type: "amp",
    sonicSignature: "溫潤耐聽，中頻飽滿，保有NAD傳統的音樂性。",
    pairingAdvice: "適合搭配英系書架喇叭，能營造出溫暖的音樂氛圍。",
    physicsNote: "採用DirectDigital™放大技術，從輸入到輸出皆為數位處理。",
    novashinVerdict: "老NAD粉絲會喜歡的聲音，雖然解析力不是頂尖，但那股音樂味就是毒物。"
  },
  {
    id: "nad-m33",
    brand: "NAD",
    model: "M33",
    type: "amp",
    sonicSignature: "活生感十足，速度快解析高，聲音乾淨俐落。",
    pairingAdvice: "驅動力強，能抓緊大部分落地喇叭。搭配鑑聽性格的喇叭，能聽到錄音的真實面貌。",
    physicsNote: "採用Purifi Eigentakt D類放大技術，提供極低的失真與噪音。",
    novashinVerdict: "D類擴大機的暴力美學代表，把喇叭控制得服服貼貼，聽大編制交響樂爽度破表。"
  },
  {
    id: "nad-m50-2",
    brand: "NAD",
    model: "M50.2",
    type: "streamer",
    sonicSignature: "極度中性、透明，如同白開水般無色無味，忠實還原錄音。",
    pairingAdvice: "系統的照妖鏡，前端錄音好壞一覽無遺。適合搭配鑑聽風格的系統。",
    physicsNote: "純數位串流轉盤，內建CD播放與RIP功能，BluOS核心。",
    novashinVerdict: "為數據狂人而生的數位訊源，只負責把0與1完美傳輸。聲音太過理性，喜歡濃厚韻味的發燒友可以跳過。"
  },
  {
    id: "nad-m66",
    brand: "NAD",
    model: "M66",
    type: "preamp",
    sonicSignature: "中性、透明度高，帶有現代感的活生感，背景極黑。",
    pairingAdvice: "適合搭配後級，特別是自家M系列後級，能展現極佳的控制力。搭配暖聲底的喇叭可取得平衡。",
    physicsNote: "搭載Dirac Live空間校正與BluOS串流功能，採用HybridDigital放大技術。",
    novashinVerdict: "功能滿到溢出來的數位前級，Dirac Live是拯救空間的窮人福音，聲音比過去的NAD更Hi-Fi。"
  },
  {
    id: "naim-nac-552",
    brand: "Naim",
    model: "NAC 552",
    type: "preamp",
    sonicSignature: "Naim之聲的精髓，獨特的PRaT（Pace, Rhythm, and Timing）節奏感，音樂性極佳。",
    pairingAdvice: "標準搭配是NAP 500後級，分體電源供應器是必須的。",
    physicsNote: "分體式設計，前級主機與552 PS電源供應器，懸浮式電路板避震。",
    novashinVerdict: "聽過就中毒的聲音，那股活生生的節奏感會讓你忍不住跟著打拍子。是Naim味最濃的毒物。"
  },
  {
    id: "naim-nait-xs-3",
    brand: "Naim",
    model: "Nait XS 3",
    type: "amp",
    sonicSignature: "輕快、活潑，充滿Naim的招牌節奏感，中頻帶有甜味。",
    pairingAdvice: "搭配反應快速的書架喇叭，如ProAc, Spendor，能得到非常迷人的組合。",
    physicsNote: "內建MM唱放，純A類耳擴輸出，優化的功率放大級。",
    novashinVerdict: "Naim的入門敲門磚，用相對實惠的價格體驗到最純正的PRaT。驅動力有限，別想不開去推大喇叭。"
  },
  {
    id: "naim-nap-500",
    brand: "Naim",
    model: "NAP 500",
    type: "poweramp",
    sonicSignature: "強大的控制力與速度感，聲音充滿能量與熱情。",
    pairingAdvice: "與NAC 552是天作之合，能將Naim的PRaT發揮到極致。",
    physicsNote: "橋接式放大設計，分體式電源供應器，提供穩定且純淨的電流。",
    novashinVerdict: "Naim的肌肉棒子，驅動力十足但又不失音樂性，是驅動PMC或ATC這類鑑聽喇叭的絕配。"
  },
  {
    id: "naim-nd555",
    brand: "Naim",
    model: "ND555",
    type: "streamer",
    sonicSignature: "極致的活生感與解析力，音場深遠，細節豐富。",
    pairingAdvice: "必須搭配555 PS DR電源供應器，這是釋放它全部潛能的唯一鑰匙。",
    physicsNote: "Naim串流技術的旗艦，採用40-bit SHARC處理器，懸浮式黃銅底座隔離振動。",
    novashinVerdict: "數位訊源的終點之一，聲音的活生感與類比味讓人忘記這是在聽數位檔案。當然，價格也是終點級的。"
  },
  {
    id: "naim-ndx2",
    brand: "Naim",
    model: "NDX2",
    type: "streamer",
    sonicSignature: "充滿活力的聲音，節奏感強烈，中頻帶有迷人的溫度。",
    pairingAdvice: "可外接XPS DR或555 PS DR電源升級，聲音會三級跳。搭配自家擴大機最對味。",
    physicsNote: "採用Naim自家的串流平台，低噪聲設計，搭載Burr-Brown PCM1792A DAC晶片。",
    novashinVerdict: "Naim串流機的中堅主力，不升級電源也能聽得很開心，但升級後會讓你發現錢沒有不見，只是變成你喜歡的樣子。"
  },
  {
    id: "naim-statement-nac-s1",
    brand: "Naim",
    model: "Statement NAC S1",
    type: "preamp",
    sonicSignature: "權威感、活生感與音樂性三者兼備的巔峰。",
    pairingAdvice: "唯一選擇就是自家Statement NAP S1後級，任何更動都是妥協。",
    physicsNote: "垂直分體式設計，電源與訊號處理完全隔離，懸浮式內部結構。",
    novashinVerdict: "富人玩具的終極型態，買的不是音響，是Naim的品牌信仰跟一座聲音的紀念碑。"
  },
  {
    id: "naim-statement-nap-s1",
    brand: "Naim",
    model: "Statement NAP S1",
    type: "poweramp",
    sonicSignature: "無窮盡的驅動力，兼具速度感與厚重感，低頻權威感驚人。",
    pairingAdvice: "搭配NAC S1前級，可以馴服地球上任何難搞的喇叭。",
    physicsNote: "單聲道設計，橋接式放大線路，巨大的環形變壓器提供穩定電源。",
    novashinVerdict: "暴力美學的極致展現，聲音像是開著坦克輾過你的聽覺神經，爽，但需要一個足球場大的空間。"
  },
  {
    id: "naim-supernait-3",
    brand: "Naim",
    model: "Supernait 3",
    type: "amp",
    sonicSignature: "更成熟、穩重的Naim之聲，兼具活生感與驅動力。",
    pairingAdvice: "可外接HiCap DR電源升級，推力與聲音密度會大幅提升。適合搭配中小型落地喇叭。",
    physicsNote: "純A類前級輸出級，加大的環形變壓器，優化的唱放線路。",
    novashinVerdict: "一台可以聽到退燒的合併機，升級潛力巨大。不加電源是好學生，加了電源變模範生。"
  },
  {
    id: "naim-uniti-atom",
    brand: "Naim",
    model: "Uniti Atom",
    type: "streamer",
    sonicSignature: "精緻、活潑，聲音充滿光澤感，超出體積的能量感。",
    pairingAdvice: "搭配高質感的書架喇叭，組成一套高顏值的臥室或書房系統。",
    physicsNote: "Naim串流核心，AB類放大，大型彩色LCD顯示螢幕。",
    novashinVerdict: "音響界的Apple，設計、質感、操作體驗都是頂級。聲音表現絕對對得起它的身價，是貴婦機的典範。"
  },
  {
    id: "naim-uniti-star",
    brand: "Naim",
    model: "Uniti Star",
    type: "streamer",
    sonicSignature: "更全面的Uniti，驅動力更強，聲音更飽滿，功能更多元。",
    pairingAdvice: "可以驅動一些小型落地喇叭，內建CD播放與RIP功能，一機搞定所有事。",
    physicsNote: "AB類放大，內建CD光碟機，支援HDMI ARC。",
    novashinVerdict: "懶人發燒友的終極解決方案，從CD到串流無所不包。聲音比Atom更全面，是客廳影音系統的核心。"
  },
  {
    id: "nordost-blue-heaven",
    brand: "Nordost",
    model: "Blue Heaven",
    type: "cable",
    sonicSignature: "明亮、活潑，聲音線條感好，入門級的好選擇。",
    pairingAdvice: "適合入門級系統，能為平淡的聲音增添一些色彩與活力。",
    physicsNote: "Micro Mono-Filament技術，鍍銀4N OFC導體。",
    novashinVerdict: "音響界的維他命C，為你的系統補充活力。雖然不是什麼神丹妙藥，但絕對有感。"
  },
  {
    id: "nordost-heimdall-2",
    brand: "Nordost",
    model: "Heimdall 2",
    type: "cable",
    sonicSignature: "乾淨、通透，聲音背景寧靜，CP值高。",
    pairingAdvice: "入門Nordost世界的最佳選擇，能有效提升系統的清晰度與細節。",
    physicsNote: "Micro Mono-Filament技術，鍍銀6N OFC導體。",
    novashinVerdict: "窮人的福音！用相對合理的價格，讓你的系統彷彿擦乾淨玻璃一樣，整個清澈起來。"
  },
  {
    id: "nordost-odin-2",
    brand: "Nordost",
    model: "Odin 2",
    type: "cable",
    sonicSignature: "極致的透明度與速度感，音場寬闊無邊，細節多到嚇人。",
    pairingAdvice: "系統的終極放大鏡，任何優缺點都會被無情地揭露。適合已經調整到極致的頂級系統。",
    physicsNote: "Dual Mono-Filament技術，鍍銀8N OFC導體，HOLO:PLUG®端子。",
    novashinVerdict: "線材界的照妖鏡，也是富人玩具的巔峰。換上它，你會懷疑以前聽的到底是什麼。價格可以買一台國產車。"
  },
  {
    id: "nordost-qrt-qbase",
    brand: "Nordost",
    model: "QRT QBase",
    type: "power",
    sonicSignature: "提升背景寧靜度，讓聲音更凝聚、紮實。",
    pairingAdvice: "音響系統的地基，從這裡開始改善電源，效果顯著。",
    physicsNote: "星形接地設計，避免器材間的接地迴路干擾。",
    novashinVerdict: "電源處理的入門磚，看似只是個排插，但效果立竿見影。用了就拿不下來的毒物。"
  },
  {
    id: "nordost-qrt-qkore",
    brand: "Nordost",
    model: "QRT QKore",
    type: "power",
    sonicSignature: "大幅降低底噪，讓音樂的微動態與細節浮現。",
    pairingAdvice: "提供一個獨立、乾淨的接地點，徹底解決接地污染問題。",
    physicsNote: "被動式接地系統，利用低電阻路徑將雜訊導出。",
    novashinVerdict: "解決接地問題的終極武器，對於住在老舊公寓的發燒友來說，簡直是救世主。"
  },
  {
    id: "nordost-qrt-qpoint",
    brand: "Nordost",
    model: "QRT QPoint",
    type: "power",
    sonicSignature: "活化聲音，讓音場更立體，樂器分離度更好。",
    pairingAdvice: "放在器材下方或上方，一次用兩顆效果更佳。",
    physicsNote: "發射特定頻率的電磁場，與器材內部元件產生共振，優化時序。",
    novashinVerdict: "音響界的黑科技，看起來像個小飛碟，原理玄學，但效果驚人。是調整聲音的最後一哩路。"
  },
  {
    id: "nordost-tyr-2",
    brand: "Nordost",
    model: "Tyr 2",
    type: "cable",
    sonicSignature: "清晰、直接，聲音凝聚力強，動態對比鮮明。",
    pairingAdvice: "適合需要提升聲音線條感與速度感的系統。",
    physicsNote: "Mono-Filament技術，鍍銀7N OFC導體。",
    novashinVerdict: "Nordost家族的中堅力量，聲音走向清晰明確，是體驗Nordost高速美學的起點。"
  },
  {
    id: "nordost-valhalla-2",
    brand: "Nordost",
    model: "Valhalla 2",
    type: "cable",
    sonicSignature: "高速、高解析，聲音帶有華麗的光澤感與能量感。",
    pairingAdvice: "能為聲音偏慢、偏暗的系統注入活力，但搭配本身就偏亮的系統可能過於刺激。",
    physicsNote: "Dual Mono-Filament技術，鍍銀8N OFC導體，比Odin 2簡化。",
    novashinVerdict: "次旗艦的V2，擁有Odin 2約八成的功力，但價格只有一半不到。是許多發燒友的夢幻逸品。"
  },
  {
    id: "ortofon-reference-spk-bronze",
    brand: "Ortofon",
    model: "Reference SPK-Bronze",
    type: "cable",
    sonicSignature: "溫潤、厚實，中頻飽滿有肉，帶有模擬的韻味。",
    pairingAdvice: "適合搭配聲音偏瘦、偏亮的系統，能增加聲音的厚度與音樂性。",
    physicsNote: "採用高純度無氧銅(OFC)導體，針對中低頻優化。",
    novashinVerdict: "Ortofon的入門參考線，聲音走向溫暖，是日系線材中少有的厚聲底，適合喜歡聽人聲的發燒友。"
  },
  {
    id: "ortofon-reference-spk-silver",
    brand: "Ortofon",
    model: "Reference SPK-Silver",
    type: "cable",
    sonicSignature: "高頻華麗、延伸性佳，聲音細膩、解析高。",
    pairingAdvice: "適合需要提升高頻空氣感與細節的系統，但要小心過於明亮。",
    physicsNote: "採用鍍銀高純度銅導體，針對高頻響應優化。",
    novashinVerdict: "聲音帶有貴氣的銀線，高頻的空氣感與光澤是其最大特色。搭配得當是仙丹，搭配不當是砒霜。"
  },
  {
    id: "ortofon-spk-300",
    brand: "Ortofon",
    model: "SPK-300",
    type: "cable",
    sonicSignature: "中性、均衡，沒有太多癖性，忠實傳輸。",
    pairingAdvice: "入門級系統的好選擇，價格實惠，表現中規中矩。",
    physicsNote: "採用高純度無氧銅(OFC)導體。",
    novashinVerdict: "CP值之王，在這個價位帶沒有對手。聲音沒啥特色就是它最大的特色，不會為系統增添額外的音染。"
  },
  {
    id: "paradigm-defiance-x15",
    brand: "Paradigm",
    model: "Defiance X15",
    type: "subwoofer",
    sonicSignature: "低頻權威感十足，量感與下潛兼備，速度快。",
    pairingAdvice: "可透過App與ARC進行精準的空間校正，與主喇叭完美銜接。",
    physicsNote: "15吋大口徑單體，內建D類放大，支援ARC空間校正。",
    novashinVerdict: "家庭劇院的拆家神器，看電影爽度破表。調整得當的話，在兩聲道系統也能扮演好補足下盤的角色。"
  },
  {
    id: "paradigm-persona-3f",
    brand: "Paradigm",
    model: "Persona 3F",
    type: "speaker",
    sonicSignature: "聲音活潑，能量感十足，中高頻亮麗。",
    pairingAdvice: "相對容易驅動，適合中小型空間。搭配暖厚聲底的擴大機能取得平衡。",
    physicsNote: "搭載鈹高音與鈹中音單體，尺寸更緊湊。",
    novashinVerdict: "最容易親近的Persona，在較小的空間也能享受到鈹單體的魅力。是體驗Persona之聲的入場券。"
  },
  {
    id: "paradigm-persona-7f",
    brand: "Paradigm",
    model: "Persona 7F",
    type: "speaker",
    sonicSignature: "透明、快速，聲音密度感強，低頻乾淨俐落。",
    pairingAdvice: "對擴大機的控制力有要求，搭配不當低頻容易失控。",
    physicsNote: "被動式設計，搭載鈹高音與鈹中音單體。",
    novashinVerdict: "9H的窮人版，少了主動低音跟ARC，更考驗搭配功力。搞得好是天堂，搞不好是地獄。"
  },
  {
    id: "paradigm-persona-9h",
    brand: "Paradigm",
    model: "Persona 9H",
    type: "speaker",
    sonicSignature: "極致的透明度與解析力，音場深遠，動態龐大。",
    pairingAdvice: "內建Anthem Room Correction (ARC)，對空間適應性強。需要大電流後級才能完全發揮。",
    physicsNote: "搭載鈹高音與鈹中音單體，主動式低音，D類放大。",
    novashinVerdict: "Paradigm的技術力展示品，聲音像是用顯微鏡在看音樂。鈹中音是毒物，聽過就回不去了。"
  },
  {
    id: "paradigm-persona-b",
    brand: "Paradigm",
    model: "Persona B",
    type: "speaker",
    sonicSignature: "精準、凝聚，超出體積的音場與動態。",
    pairingAdvice: "書架喇叭的極致，需要高品質腳架。搭配優質擴大機，聲音會讓你忘記它的體積。",
    physicsNote: "書架型設計，搭載鈹高音與鈹中音單體。",
    novashinVerdict: "書架喇叭的性能怪獸，閉上眼睛聽會以為是落地喇叭在發聲。當然，價格也是怪獸級的。"
  },
  {
    id: "pass-labs-x150-8",
    brand: "Pass Labs",
    model: "X150.8",
    type: "poweramp",
    sonicSignature: "細膩、流暢，帶有A類的味道，音樂性佳。",
    pairingAdvice: "適合搭配高效率喇叭或書架喇叭，能展現出迷人的音樂性。",
    physicsNote: "立體聲AB類放大，偏A類工作點較高。",
    novashinVerdict: "入門Pass後級的最佳選擇，雖然功率不大，但聲音的細膩度與音樂性會讓你中毒。"
  },
  {
    id: "pass-labs-x250-8",
    brand: "Pass Labs",
    model: "X250.8",
    type: "poweramp",
    sonicSignature: "活潑、有力，聲音帶有熱情與能量感。",
    pairingAdvice: "立體聲後級，驅動力足，適合大部分中小型落地喇叭。",
    physicsNote: "立體聲AB類放大，Point 8系列的中堅。",
    novashinVerdict: "CP值很高的Pass後級，用相對實惠的價格享受到Pass的魅力。"
  },
  {
    id: "pass-labs-x260-8",
    brand: "Pass Labs",
    model: "X260.8",
    type: "poweramp",
    sonicSignature: "AB類的經典之聲，中性、均衡，驅動力強。",
    pairingAdvice: "Pass Labs的百搭款，能應付各種喇叭，表現穩定。",
    physicsNote: "單聲道AB類放大，Point 8系列的代表作。",
    novashinVerdict: "不知道怎麼選後級？選它準沒錯。聲音四平八穩，是系統裡最可靠的夥伴。"
  },
  {
    id: "pass-labs-xa160-8",
    brand: "Pass Labs",
    model: "XA160.8",
    type: "poweramp",
    sonicSignature: "比XA200.8更為凝聚、精煉的純A類之聲。",
    pairingAdvice: "適合對聲音質地有極致要求的發燒友。",
    physicsNote: "單聲道純A類放大，Point 8系列的純A類旗艦。",
    novashinVerdict: "純A類愛好者的夢幻逸品，聲音的密度感與質感無可挑剔。"
  },
  {
    id: "pass-labs-xa200-8",
    brand: "Pass Labs",
    model: "XA200.8",
    type: "poweramp",
    sonicSignature: "純A類的極致，溫潤、甜美，中頻毒性強。",
    pairingAdvice: "驅動力與細膩度兼備的純A類巨獸，但對散熱空間要求極高。",
    physicsNote: "單聲道純A類放大，巨大的散熱片是它的標誌。",
    novashinVerdict: "聽人聲的終極毒物，那種溫潤甜美的中頻會讓人欲罷不能。夏天開機需要無比的勇氣。"
  },
  {
    id: "pass-labs-xa25",
    brand: "Pass Labs",
    model: "XA25",
    type: "poweramp",
    sonicSignature: "活潑、直接，最有活力的Pass純A類後級。",
    pairingAdvice: "入門純A類後級的CP值之王，搭配高效率書架喇叭有驚喜。",
    physicsNote: "立體聲純A類放大，無負回授設計。",
    novashinVerdict: "最不像Pass的Pass，聲音年輕有活力。是體驗Nelson Pass設計哲學的最好起點。"
  },
  {
    id: "pass-labs-xa60-8",
    brand: "Pass Labs",
    model: "XA60.8",
    type: "poweramp",
    sonicSignature: "甜美、細膩，充滿音樂性的純A類之聲。",
    pairingAdvice: "單聲道60瓦，適合驅動高效率喇叭，能得到極為迷人的聲音。",
    physicsNote: "單聲道純A類放大，相對容易入手的XA系列。",
    novashinVerdict: "Pass Labs XA60.8，實力派選手，值得發燒友細細品味。"
  },
  {
    id: "pass-labs-xp-12",
    brand: "Pass Labs",
    model: "XP-12",
    type: "preamp",
    sonicSignature: "乾淨、直接，聲音帶有淡淡的甜味。",
    pairingAdvice: "入門Pass前級的最佳選擇，CP值極高。",
    physicsNote: "單機箱設計，線路簡潔高效。",
    novashinVerdict: "窮人的福音！用最少的預算，享受到Pass前級的精髓。聲音乾淨，搭配性廣。"
  },
  {
    id: "pass-labs-xp-22",
    brand: "Pass Labs",
    model: "XP-22",
    type: "preamp",
    sonicSignature: "中性、均衡，解析力與音樂性兼備。",
    pairingAdvice: "承襲旗艦技術，是搭配Pass後級的理想選擇。",
    physicsNote: "兩分體設計，主機與電源分離。",
    novashinVerdict: "XP-32的精華版，擁有旗艦八成的功力，但價格更為親民。是理性的發燒友的最佳選擇。"
  },
  {
    id: "pass-labs-xp-32",
    brand: "Pass Labs",
    model: "XP-32",
    type: "preamp",
    sonicSignature: "極致的中性與透明，音場開闊，細節豐富。",
    pairingAdvice: "Pass Labs的旗艦前級，搭配自家後級能達到最佳的協同效應。",
    physicsNote: "三分體設計，主機與左右聲道電源各自獨立。",
    novashinVerdict: "前級的終極目標之一，它不會為聲音添加任何色彩，只會忠實地放大訊源的品質。"
  },
  {
    id: "pass-labs-xs-150",
    brand: "Pass Labs",
    model: "XS 150",
    type: "poweramp",
    sonicSignature: "與XS 300一脈相承的溫暖厚實，規模感略小。",
    pairingAdvice: "如果你的喇叭不是那麼難搞，XS 150是更理性的選擇。",
    physicsNote: "單聲道設計，比XS 300小一號，但依然是個暖爐。",
    novashinVerdict: "繼承了大哥的優良血統，聲音同樣迷人。省下的錢可以多買很多唱片。"
  },
  {
    id: "pass-labs-xs-300",
    brand: "Pass Labs",
    model: "XS 300",
    type: "poweramp",
    sonicSignature: "溫暖、厚實，兼具純A類的細膩與大功率的驅動力。",
    pairingAdvice: "驅動任何大食怪喇叭都遊刃有餘，是後級的終極選擇之一。",
    physicsNote: "單聲道設計，巨大的散熱片，工作時是個大暖爐。",
    novashinVerdict: "Nelson Pass的巔峰之作，聲音溫暖到可以融化你的心。冬天還可以順便取暖，一舉兩得。"
  },
  {
    id: "primare-a35-2",
    brand: "Primare",
    model: "A35.2",
    type: "poweramp",
    sonicSignature: "強大的驅動力與控制力，聲音快速、乾淨。",
    pairingAdvice: "可以橋接成單聲道，提供更恐怖的驅動力。",
    physicsNote: "採用UFPD 2 D類放大技術，提供200瓦的強大輸出。",
    novashinVerdict: "D類放大的優等生，力大無窮且聲音不粗糙。是馴服大食怪喇叭的高CP值選擇。"
  },
  {
    id: "primare-i15-prisma",
    brand: "Primare",
    model: "I15 Prisma",
    type: "amp",
    sonicSignature: "精緻、小巧，聲音乾淨，超出體積的能量。",
    pairingAdvice: "3/4尺寸的機箱，適合組成小巧的桌面或書房系統。",
    physicsNote: "採用UFPD 2 D類放大技術，功率更小，但同樣高效。",
    novashinVerdict: "小鋼炮的代表，在小空間能發揮出驚人的實力。設計簡約，充滿北歐風格。"
  },
  {
    id: "primare-i25-prisma",
    brand: "Primare",
    model: "I25 Prisma",
    type: "amp",
    sonicSignature: "與I35類似的聲底，但規模感與驅動力略小。",
    pairingAdvice: "適合中小型空間與書架喇叭，同樣內建Prisma模組。",
    physicsNote: "採用UFPD 2 D類放大技術，功率較I35小。",
    novashinVerdict: "I35的縮小版，聲音同樣維持高水準，是預算有限時的明智之選。"
  },
  {
    id: "primare-i35-prisma",
    brand: "Primare",
    model: "I35 Prisma",
    type: "amp",
    sonicSignature: "乾淨、快速、解析高，帶有北歐的冷靜與精準。",
    pairingAdvice: "驅動力強，適合搭配中性或偏暖的喇叭。內建Prisma串流與DAC模組。",
    physicsNote: "採用Primare自家的UFPD 2 D類放大技術，提供強大功率與低失真。",
    novashinVerdict: "瑞典的聲音美學，冷靜、理性、精準。功能齊全，一機搞定，是現代音響的典範。"
  },
  {
    id: "primare-pre35-prisma",
    brand: "Primare",
    model: "PRE35 Prisma",
    type: "preamp",
    sonicSignature: "極度透明、中性，背景寧靜，細節豐富。",
    pairingAdvice: "搭配自家A35.2後級是標準組合，能展現Primare的完整實力。",
    physicsNote: "全平衡設計，搭載Prisma串流與DAC模組。",
    novashinVerdict: "系統的神經中樞，功能強大，聲音中性無染。是追求高還原度發燒友的菜。"
  },
  {
    id: "ps-audio-bhk-signature-300",
    brand: "PS Audio",
    model: "BHK Signature 300",
    type: "poweramp",
    sonicSignature: "膽石混合的極致，兼具膽機的甜美與石機的驅動力。",
    pairingAdvice: "驅動力強大，能應付各種難搞喇叭，同時保有細膩的音樂性。",
    physicsNote: "單聲道設計，輸入級採用真空管，輸出級為晶體放大。",
    novashinVerdict: "由大師Bascom H. King操刀設計，聲音結合了膽與石的優點，是後級中的夢幻逸品。"
  },
  {
    id: "ps-audio-directstream-dac-mk2",
    brand: "PS Audio",
    model: "DirectStream DAC MK2",
    type: "dac",
    sonicSignature: "聲音開闊、自然，帶有模擬的流暢感，音樂性佳。",
    pairingAdvice: "可以透過更換韌體來調整聲音，可玩性極高。",
    physicsNote: "採用FPGA進行數位處理，將所有輸入訊號升頻至DSD。",
    novashinVerdict: "不像在聽數位訊源的DAC，聲音充滿類比味。不斷更新的韌體像是在開福袋，充滿驚喜。"
  },
  {
    id: "ps-audio-p15",
    brand: "PS Audio",
    model: "P15",
    type: "power",
    sonicSignature: "與P20類似的效果，但供應功率較小。",
    pairingAdvice: "適合中小型系統，同樣能大幅改善電源品質。",
    physicsNote: "電源再生工場，P20的縮小版。",
    novashinVerdict: "如果你的系統不是那麼耗電，P15是更具CP值的選擇。效果同樣驚人，是系統升級的大補丸。"
  },
  {
    id: "ps-audio-p20",
    brand: "PS Audio",
    model: "P20",
    type: "power",
    sonicSignature: "提供純淨、穩定的電源，讓系統背景更黑，聲音更紮實。",
    pairingAdvice: "音響系統的終極電源解決方案，效果全面提升。",
    physicsNote: "電源再生工場，將市電轉換為直流再重新生成完美的交流電。",
    novashinVerdict: "從源頭解決電源問題，效果比換任何線材都來得顯著。是富人玩具，但用了就回不去了。"
  },
  {
    id: "ps-audio-perfectwave-sacd-transport",
    brand: "PS Audio",
    model: "PerfectWave SACD Transport",
    type: "streamer",
    sonicSignature: "聲音紮實、穩定，細節與動態表現出色。",
    pairingAdvice: "透過I2S介面連接自家DAC，可以得到最佳的聲音表現。",
    physicsNote: "純SACD/CD轉盤，具備數位輸出與I2S介面。",
    novashinVerdict: "實體唱片黨的救贖，將CD與SACD的潛力完全釋放。聲音比普通藍光機改的轉盤好上不只一個檔次。"
  },
  {
    id: "ps-audio-stellar-strata",
    brand: "PS Audio",
    model: "Stellar Strata",
    type: "amp",
    sonicSignature: "溫暖、流暢，帶有PS Audio一貫的音樂性。",
    pairingAdvice: "功能齊全的合併機，內建串流與DAC，適合組成簡潔的系統。",
    physicsNote: "前級採用A類放大，後級採用D類放大，混合式設計。",
    novashinVerdict: "PS Audio的入門全能機，聲音溫暖耐聽，功能應有盡有。是體驗PS Audio之聲的敲門磚。"
  },
  {
    id: "quad-arterapre",
    brand: "Quad",
    model: "Artera Pre",
    type: "preamp",
    sonicSignature: "中性、透明，細節豐富且音場開闊",
    pairingAdvice: "搭配同系列Artera Stereo後級是原廠標準答案，能維持聲音的一致性。也可搭配聲底較暖的後級，為系統注入一絲清泉。",
    physicsNote: "全平衡電路設計，搭載高品質的ESS Sabre32 9018 DAC，支援DSD檔案播放。",
    novashinVerdict: "Quad現代聲的代表作，解析力與透明度都做得不錯，但少了一點老Quad的『味道』，適合追求高解析度的發燒友。"
  },
  {
    id: "quad-arterasolusplay",
    brand: "Quad",
    model: "Artera Solus Play",
    type: "amp",
    sonicSignature: "溫潤醇厚，音樂性佳，帶有英國老派的優雅感",
    pairingAdvice: "適合搭配中高效率、音色偏中性的書架喇叭，能帶出溫暖的人聲與弦樂。不建議搭配本身就濃郁的喇叭，避免聲音過於肥厚。",
    physicsNote: "內建DTS Play-Fi無線串流功能，ESS Sabre32 ES9018K2M DAC晶片，AB類放大提供每聲道75瓦功率。",
    novashinVerdict: "一台搞定的懶人福音，聲音溫暖耐聽，串流功能齊全，但別指望它能推動大食喇叭，算是『英國紳士的溫柔』。"
  },
  {
    id: "quad-arterastereo",
    brand: "Quad",
    model: "Artera Stereo",
    type: "poweramp",
    sonicSignature: "驅動力扎實，聲音飽滿有力，兼具速度感與重量感",
    pairingAdvice: "與Artera Pre是天作之合。驅動力不俗，能應付多數中大型落地喇叭，展現良好的控制力。",
    physicsNote: "採用Quad獨家的Current Dumping技術，結合A類與B類放大的優點，提供每聲道140瓦的穩定輸出。",
    novashinVerdict: "標準的英國大力士，推力足、聲音穩，沒什麼脾氣，就是忠實放大訊號。外觀簡潔，但內力深厚，是台『扮豬吃老虎』的後級。"
  },
  {
    id: "quad-esl2812",
    brand: "Quad",
    model: "ESL-2812",
    type: "speaker",
    sonicSignature: "與2912一脈相承的透明感，但規模感稍小，中高頻同樣迷人",
    pairingAdvice: "比2912稍微友善一點，但依然考驗擴大機的驅動力。適合中小型空間，能營造出精緻的音場。",
    physicsNote: "與ESL-2912相同的靜電技術，但振膜面積較小，低頻延伸略遜一籌。",
    novashinVerdict: "如果你房間不大，又對靜電喇叭的聲音念念不忘，ESL-2812就是你的『窮人福音』。雖然低頻下潛有限，但那迷人的中頻足以讓人忘記一切。"
  },
  {
    id: "quad-esl2912",
    brand: "Quad",
    model: "ESL-2912",
    type: "speaker",
    sonicSignature: "極度透明、音場深邃、中頻人聲真實到令人毛骨悚然",
    pairingAdvice: "對擴大機的電流輸出要求高，需要大電流後級才能餵飽。搭配聲底乾淨、速度快的擴大機，能發揮其透明的本質。",
    physicsNote: "採用多片靜電振膜單體，點音源發聲，擁有極低的失真與超快的反應速度。",
    novashinVerdict: "靜電喇叭的標竿之一，聽過就回不去了。人聲和弦樂的真實感是『毒物』等級，但擺位和擴大機搭配極為挑剔，是個需要細心伺候的『貴婦』。"
  },
  {
    id: "rel-212sx",
    brand: "REL",
    model: "212/SX",
    type: "subwoofer",
    sonicSignature: "兼具量感與速度，能文能武，電影音樂兩相宜",
    pairingAdvice: "非常全能的超低音，無論是兩聲道音樂或家庭劇院都能勝任。搭配中大型落地喇叭效果絕佳。",
    physicsNote: "搭載兩顆12吋主動單體與兩顆12吋被動輻射器，內建1000瓦擴大機。",
    novashinVerdict: "如果你只能買一顆超低音，212/SX可能是最佳解。它在音樂上的質感與電影上的爆發力之間取得了絕佳的平衡，是超低音界的『瑞士刀』。"
  },
  {
    id: "rel-ht1510",
    brand: "REL",
    model: "HT/1510 Predator",
    type: "subwoofer",
    sonicSignature: "暴力美學，地動山搖的極低頻衝擊力",
    pairingAdvice: "專為家庭劇院而生，追求的就是極致的爆發力與下潛。多顆使用效果更佳，能打造出真正的『地震系統』。",
    physicsNote: "15吋長衝程碳纖維單體，內建1000瓦D類擴大機。",
    novashinVerdict: "這不是超低音，這是『對鄰居的終極武器』。HT/1510 Predator就是為了電影裡那些爆炸、撞擊場景而生的，看電影沒它，爽度少一半。"
  },
  {
    id: "rel-no25",
    brand: "REL",
    model: "No.25",
    type: "subwoofer",
    sonicSignature: "快速、精準、衝擊力強，為系統注入活生感",
    pairingAdvice: "適合追求速度與衝擊力的發燒友，能為反應快速的喇叭（如靜電或陶瓷單體）提供扎實的低頻基礎。",
    physicsNote: "15吋長衝程單體，1000瓦D類擴大機，可多顆堆疊成陣列，稱為『REL 3D』。",
    novashinVerdict: "No. 25是REL家族的『速度之王』，它的低頻不是用『噸』來計算，而是用『G力』。多顆堆疊起來的陣仗更是暴力美學的極致展現。"
  },
  {
    id: "rel-no32",
    brand: "REL",
    model: "No.32",
    type: "subwoofer",
    sonicSignature: "權威感十足的低頻，速度快、下潛深、層次分明",
    pairingAdvice: "適合搭配任何大型Hi-End系統，能完美融入主喇叭，提供無縫的低頻延伸。建議使用REL自家的High-Level連接方式。",
    physicsNote: "搭載15吋碳纖維長衝程單體，內建1000瓦D類擴大機，全密閉式箱體設計。",
    novashinVerdict: "REL的旗艦，根本是低頻的『神主牌』。它不是那種轟隆作響的電影院超低音，而是能讓音樂更完整、更具規模感的『樂器』。富人玩具無誤。"
  },
  {
    id: "rel-s510",
    brand: "REL",
    model: "S/510",
    type: "subwoofer",
    sonicSignature: "精巧、快速，為書架喇叭提供完美的低頻延伸",
    pairingAdvice: "書架喇叭的救星。體積不大，但能提供令人驚訝的低頻量感與下潛，讓小系統也能有落地喇叭的氣勢。",
    physicsNote: "10吋主動單體與12吋被動輻射器，內建500瓦D類擴大機。",
    novashinVerdict: "不要被它的體積騙了，S/510是個小鋼炮。它能讓你的書架喇叭瞬間『轉大人』，是小空間發燒友的『低頻解藥』。"
  },
  {
    id: "rel-s812",
    brand: "REL",
    model: "S/812",
    type: "subwoofer",
    sonicSignature: "飽滿、Q彈，富有音樂性的低頻",
    pairingAdvice: "Serie S的中堅份子，適合多數中型系統，能有效提升整體的聲音厚度與規模感。",
    physicsNote: "12吋長衝程單體，前方主動，下方被動，內建800瓦D類擴大機。",
    novashinVerdict: "S/812的低頻像是高級牛筋丸，Q彈有勁，嚼勁十足。它讓音樂的下盤更穩，聽起來更過癮，是提升系統『肉感』的良方。"
  },
  {
    id: "rel-t7x",
    brand: "REL",
    model: "T/7x",
    type: "subwoofer",
    sonicSignature: "均衡、自然，恰如其分的低頻點綴",
    pairingAdvice: "適合中小型書架喇叭或小型落地喇叭，能在不破壞平衡感的前提下，補足低頻的最後一里路。",
    physicsNote: "8吋主動單體與10吋被動輻射器，內建200瓦AB類擴大機。",
    novashinVerdict: "T/7x就像是菜餚裡的鹽，加一點點就能提味，但又不會搶走主菜的風采。它是系統中『最懂事的配角』。"
  },
  {
    id: "rel-t9x",
    brand: "REL",
    model: "T/9x",
    type: "subwoofer",
    sonicSignature: "溫暖、寬鬆，營造出舒適的聽感氛圍",
    pairingAdvice: "T/x系列的旗艦，適合搭配聲底偏瘦或偏亮的系統，能增加聲音的暖度與厚實感。",
    physicsNote: "10吋主動單體與10吋被動輻射器，內建300瓦AB類擴大機。",
    novashinVerdict: "T/9x是REL家族的『暖男』，它的低頻不具侵略性，而是像一張溫暖的毛毯，輕柔地包圍著你。CP值之王，入門首選。"
  },
  {
    id: "revel-f226be",
    brand: "Revel",
    model: "PerformaBe F226Be",
    type: "speaker",
    sonicSignature: "精準、快速，中高頻細節豐富，音像聚焦清晰",
    pairingAdvice: "適合中型空間，對擴大機的推力有一定要求。搭配控制力好的AB類或D類擴大機，能發揮其速度快的優勢。",
    physicsNote: "1吋鈹高音，搭配兩顆6.5吋DCC低音單體，箱體比F328Be更為纖細。",
    novashinVerdict: "F226Be是PerformaBe系列的『中量級拳王』，身手矯健，出拳快狠準。雖然低頻量感不如老大哥，但那精準的音像和速度感，聽流行樂和電子樂非常過癮。"
  },
  {
    id: "revel-f328be",
    brand: "Revel",
    model: "PerformaBe F328Be",
    type: "speaker",
    sonicSignature: "活生感十足，高頻空氣感強烈，動態對比鮮明",
    pairingAdvice: "搭載鈹高音，高頻延伸極佳，需避免搭配聲底過於光輝的擴大機。搭配推力足、聲底厚實的擴大機，能展現其全面的實力。",
    physicsNote: "1吋鈹高音單體，搭配陶瓷複合鋁質振膜（DCC）中音與低音單體，高音導波管設計。",
    novashinVerdict: "F328Be是Revel家族的『搖滾巨星』，聲音充滿活力與激情。那個鈹高音，又甜又亮，聽金屬樂的鈸聲爽度破表。是會讓人忍不住開大聲的『毒物』。"
  },
  {
    id: "revel-m126be",
    brand: "Revel",
    model: "PerformaBe M126Be",
    type: "speaker",
    sonicSignature: "小體積大能量，聲音密度感強，高頻華麗延伸",
    pairingAdvice: "頂級書架喇叭的代表之一。需要優質的腳架與大功率擴大機才能發揮實力。搭配暖聲的擴大機可以中和鈹高音的銳利感。",
    physicsNote: "1吋鈹高音，6.5吋DCC中低音單體，書架喇叭中少見的高規格配置。",
    novashinVerdict: "M126Be證明了『書架喇叭也能頂天立地』。它的聲音密度和動態完全不像這個體積的喇叭該有的表現，是標準的『小鋼炮』，也是一對會讓人中毒的『書架毒物』。"
  },
  {
    id: "revel-salon2",
    brand: "Revel",
    model: "Ultima Salon2",
    type: "speaker",
    sonicSignature: "極度中性、精準、解析力超高，音場寬闊如臨現場",
    pairingAdvice: "標準的『聲音照妖鏡』，前端給它什麼，它就放出什麼。需要搭配控制力好、音質純淨的擴大機，否則缺點會被放大檢視。",
    physicsNote: "搭載鈹高音、鈦中音與鋁合金低音單體，所有單體均為Revel自行設計製造。",
    novashinVerdict: "Salon2是音響界的『法官』，鐵面無私，極度公正。它不美化錄音，只呈現真實。能駕馭它的人，才算真正的高手。富人玩具的典範。"
  },
  {
    id: "revel-studio2",
    brand: "Revel",
    model: "Ultima Studio2",
    type: "speaker",
    sonicSignature: "承襲Salon2的中性與解析力，但規模感稍小，更適合一般居家空間",
    pairingAdvice: "比Salon2更容易驅動，但依然考驗擴大機的質地。搭配中性或略帶暖意的擴大機，能取得很好的平衡。",
    physicsNote: "與Salon2相同的單體技術，但箱體與低音單體尺寸較小。",
    novashinVerdict: "如果說Salon2是穿著燕尾服的指揮家，Studio2就是穿著西裝的樂團首席。同樣專業，但更接地氣一些。是『理科男的夢中情人』。"
  },
  {
    id: "shunyata-alphav2nr",
    brand: "Shunyata Research",
    model: "Alpha v2 NR",
    type: "cable",
    sonicSignature: "均衡、自然，有效降低數位器材的毛躁感",
    pairingAdvice: "非常適合用在DAC或串流播放機等數位訊源上，能讓聲音更為滑順、耐聽。",
    physicsNote: "中階型號，同樣具備NR噪訊抑制技術，CP值相對較高。",
    novashinVerdict: "Alpha v2 NR是數位訊源的『柔焦鏡』，能撫平數位聲的稜角，讓音樂聽起來更有人味。在Shunyata家族裡算是CP值之王。"
  },
  {
    id: "shunyata-deltav2nr",
    brand: "Shunyata Research",
    model: "Delta v2 NR",
    type: "cable",
    sonicSignature: "提升聲音的清晰度與分離度，效果立竿見影",
    pairingAdvice: "入門Shunyata NR技術的最佳選擇，適用於系統的各個環節，是全面性的提升。",
    physicsNote: "入門級NR電源線，採用OFE銅導體。",
    novashinVerdict: "Delta v2 NR是音響系統的『維他命』，雖然不是什麼驚天動地的改變，但確實能讓整體聲音更健康、更有活力。窮人的福音。"
  },
  {
    id: "shunyata-denaliv2",
    brand: "Shunyata Research",
    model: "Denali v2",
    type: "power",
    sonicSignature: "大幅改善動態對比與聲音的活生感，背景寧靜度顯著提升",
    pairingAdvice: "高階系統的理想電源處理器，特別適合對付電流需求大的後級擴大機。",
    physicsNote: "採用醫療級濾波器與專利的噪訊隔離技術。",
    novashinVerdict: "Denali是『電源排插界的超級英雄』，專門解決各種疑難雜症。無論你的系統有什麼毛病，插上它，通常都能改善一大半。"
  },
  {
    id: "shunyata-everest8000",
    brand: "Shunyata Research",
    model: "Everest 8000",
    type: "power",
    sonicSignature: "提供極度純淨的電源，讓系統背景靜如深海，動態毫無壓縮",
    pairingAdvice: "頂級系統的電源中樞。能同時供應給大電流後級與敏感的前端器材，且互不干擾。",
    physicsNote: "專利QR/BB技術能供應瞬間大電流，CGS共模接地系統，多區獨立噪訊隔離。",
    novashinVerdict: "Everest 8000是音響系統的『心臟』，提供最純淨的血液。用了它，你會懷疑以前聽的到底是什麼。價格也像聖母峰一樣高不可攀。"
  },
  {
    id: "shunyata-hydradeltad6",
    brand: "Shunyata Research",
    model: "Hydra Delta D6",
    type: "power",
    sonicSignature: "提升系統的解析力與透明度，讓音樂的細節更為豐富",
    pairingAdvice: "適合中階系統全面升級，能為所有器材提供更乾淨的電源。",
    physicsNote: "提供6個插座，具備基本的噪訊抑制與突波保護功能。",
    novashinVerdict: "Delta D6是Shunyata的『入門磚』，讓你一窺電源處理的奧妙。雖然效果不如師兄們那麼驚天動地，但絕對是物有所值，CP值相當高。"
  },
  {
    id: "shunyata-omegaqr",
    brand: "Shunyata Research",
    model: "Omega QR",
    type: "cable",
    sonicSignature: "極致寧靜的背景，動態範圍大幅提升，聲音如水晶般通透",
    pairingAdvice: "系統的『最後一塊拼圖』。適合用在訊源或前級，能最大程度地降低底噪，讓所有細節浮現。",
    physicsNote: "採用VTX-Ag純銀導體，結合Shunyata獨家的QR/BB和NIC噪訊抑制技術。",
    novashinVerdict: "這不是線，這是『黑洞』。它會把系統裡所有的雜訊都吸光，讓你聽到錄音裡最深層的秘密。價格也是黑洞等級，標準的富人玩具。"
  },
  {
    id: "shunyata-sigmav2nr",
    brand: "Shunyata Research",
    model: "Sigma v2 NR",
    type: "cable",
    sonicSignature: "背景漆黑，音像凝聚，低頻更為扎實且具權威感",
    pairingAdvice: "適合用在後級或排插上，能顯著提升系統的動態與衝擊力。NR系列對於抑制電源噪訊效果顯著。",
    physicsNote: "搭載NR噪訊抑制濾波線路，採用ArNi-Ag鍍銀銅導體。",
    novashinVerdict: "Sigma v2 NR是系統的『大力丸』，一接上去，整個聲音都變得更猛、更結實。對於改善大功率後級的電源供應有奇效，是暴力美學的信徒必備。"
  },
  {
    id: "shunyata-venomnrv16",
    brand: "Shunyata Research",
    model: "Venom NR-V16",
    type: "power",
    sonicSignature: "降低底噪，增加聲音的厚實感",
    pairingAdvice: "適合入門級系統或AV環繞擴大機，是升級原廠小黑線最有感的選擇。",
    physicsNote: "採用16 AWG OFE導體，具備基本的NR噪訊抑制功能。",
    novashinVerdict: "Venom NR-V16是『小黑線的終結者』，花小錢就能讓聲音有感升級，是發燒友『敗家之路』的起點。"
  },
  {
    id: "siltech-classiclegend380i",
    brand: "Siltech",
    model: "Classic Legend 380i",
    type: "cable",
    sonicSignature: "清晰、通透，為系統注入活力與光澤",
    pairingAdvice: "入門Classic Legend系列的敲門磚，適合搭配聲音偏暗或厚重的系統，能有效提升聲音的明亮度與活生感。",
    physicsNote: "入門級G9金銀合金導體。",
    novashinVerdict: "380i是Siltech的『開胃菜』，讓你一嚐金銀合金的美味。雖然沒有大哥們那麼濃郁，但那獨特的貴氣已經嶄露無遺。是條會讓人想『繼續攻頂』的毒物。"
  },
  {
    id: "siltech-classiclegend680i",
    brand: "Siltech",
    model: "Classic Legend 680i",
    type: "cable",
    sonicSignature: "均衡、滑順，帶有Siltech招牌的貴氣與光澤感",
    pairingAdvice: "系列中的中堅力量，適用於各種系統，能在解析力與音樂性之間取得很好的平衡。",
    physicsNote: "同樣採用G9金銀合金導體，但導體截面積比880i小。",
    novashinVerdict: "680i是Classic Legend系列的『甜點』，恰到好處的甜度，讓人回味無窮。CP值比880i高，是體驗Siltech金銀合金魅力的最佳途徑。"
  },
  {
    id: "siltech-classiclegend880i",
    brand: "Siltech",
    model: "Classic Legend 880i",
    type: "cable",
    sonicSignature: "飽滿、溫潤，中頻帶有迷人的甜味，音樂性極佳",
    pairingAdvice: "Classic Legend系列的頂級型號，非常百搭，能為多數系統增添溫暖與韻味。特別適合人聲與弦樂的表現。",
    physicsNote: "採用G9金銀合金導體，結合Teflon與Kapton絕緣。",
    novashinVerdict: "880i是Siltech的『蜂蜜』，能讓聲音變得甜美誘人。它的中頻有毒，聽人聲會讓人上癮。是追求『音樂味』的發燒友的終極目標之一。"
  },
  {
    id: "siltech-explorer45i",
    brand: "Siltech",
    model: "Explorer 45i",
    type: "cable",
    sonicSignature: "平順、自然，CP值高的入門選擇",
    pairingAdvice: "適合入門級系統，能取代原廠線，帶來全面的提升。",
    physicsNote: "採用高純度銅導體。",
    novashinVerdict: "Explorer 45i是Siltech送給窮人的福音，讓預算有限的玩家也能體驗到Siltech的工藝。雖然沒有金銀合金的貴氣，但聲音的完成度遠超同價位產品。"
  },
  {
    id: "siltech-explorer90i",
    brand: "Siltech",
    model: "Explorer 90i",
    type: "cable",
    sonicSignature: "中性、均衡，聲音乾淨且細節豐富",
    pairingAdvice: "Explorer系列的入門型號，非常中性，不太會改變系統原有的音色，只是單純地提升清晰度。",
    physicsNote: "採用6N單晶銅導體。",
    novashinVerdict: "Explorer 90i是Siltech家族的『乖乖牌』，不搞怪、不加料，忠實傳輸。如果你喜歡系統原本的聲音，只想單純升級線材，這條很適合。"
  },
  {
    id: "siltech-royalcrownprince",
    brand: "Siltech",
    model: "Royal Crown Prince",
    type: "cable",
    sonicSignature: "極致的滑順、高貴、華麗，高頻延伸如絲綢般柔滑",
    pairingAdvice: "適合搭配任何頂級系統，能為聲音鍍上一層『貴氣』。尤其能讓聲音偏硬或偏亮的系統變得圓潤悅耳。",
    physicsNote: "採用Siltech最新的S10單結晶銀導體，搭配頂級的絕緣材料與屏蔽結構。",
    novashinVerdict: "線材界的『勞斯萊斯』，它的聲音就是『高貴』的代名詞。一開聲，整個空間都瀰漫著金錢的味道。標準的富人玩具，聽了會讓人產生『階級焦慮』。"
  },
  {
    id: "siltech-royalsinglecrown",
    brand: "Siltech",
    model: "Royal Single Crown",
    type: "cable",
    sonicSignature: "華麗、流暢，聲音充滿光澤感與能量感",
    pairingAdvice: "介於Triple Crown與Classic Legend之間，兼具解析力與音樂性。適合追求高貴音色的發燒友。",
    physicsNote: "採用單結晶銀導體，技術承襲自旗艦系列。",
    novashinVerdict: "Single Crown是Siltech的『輕珠寶』，沒有旗艦那麼遙不可及，但同樣能讓你閃閃發光。它的聲音華麗而精緻，是『貴婦機』的好搭檔。"
  },
  {
    id: "siltech-triplecrown",
    brand: "Siltech",
    model: "Triple Crown",
    type: "cable",
    sonicSignature: "極高的透明度與解析力，音場寬闊無邊，聲音密度感極強",
    pairingAdvice: "Siltech的前代旗艦，聲音中性、精準，能反映系統的真實面貌。適合搭配本身質地就很好的頂級器材。",
    physicsNote: "採用X-Balanced Micro Technology，單結晶銀導體，結構極為複雜。",
    novashinVerdict: "Triple Crown是Siltech的『科學怪人』，極度追求技術的極致。聲音精準到有點不近人情，是標準的聲音照妖鏡，系統有任何缺點都逃不過它的法眼。"
  },
  {
    id: "sonusfaber-aidaii",
    brand: "Sonus Faber",
    model: "Aida II",
    type: "speaker",
    sonicSignature: "極致華麗、規模宏大、音場深遠，兼具力量與美感",
    pairingAdvice: "對擴大機的推力與控制力要求極高，需要頂級的前後級才能馴服。搭配聲底厚實、驅動力強的擴大機是必須的。",
    physicsNote: "搭載『箭簇』高音(H28 XTR-04)、M18 XTR-04中音，以及多項專利技術如Z.V.T.、Stealth Ultraflex等。",
    novashinVerdict: "Aida II是義大利美學的極致展現，不只是喇叭，更是藝術品。聲音華麗無比，聽歌劇和古典樂有如置身現場。標準的『富人玩具』，而且是需要一個大『皇宮』才能擺得下的那種。"
  },
  {
    id: "sonusfaber-amatig5",
    brand: "Sonus Faber",
    model: "Amati G5",
    type: "speaker",
    sonicSignature: "優雅、細膩，弦樂表現如絲綢般滑順，充滿光澤",
    pairingAdvice: "第五代Amati，聲音更為精鍊。搭配質地細膩、音色優美的擴大機，能展現其高貴的氣質。",
    physicsNote: "搭載全新的中音單體與相位錐，箱體結構也經過優化。",
    novashinVerdict: "Amati是Sonus Faber的『首席小提琴手』，那弦樂的質感和延伸，真的會讓人聽到流淚。它是古典樂迷的夢幻逸品。"
  },
  {
    id: "sonusfaber-electaamatorii",
    brand: "Sonus Faber",
    model: "Electa Amator III",
    type: "speaker",
    sonicSignature: "濃郁、溫暖，中頻密度感極強，充滿復古情懷",
    pairingAdvice: "傳奇型號的復刻版，對擴大機的電流要求不低。搭配暖聲的真空管機或A類擴大機，能發揮其『饅頭中音』的魅力。",
    physicsNote: "搭載DAD高音與纖維紙漿中低音單體，實木與大理石底座的結合，用料奢華。",
    novashinVerdict: "Electa Amator III是Sonus Faber的『時光機』，一開聲就把你帶回那個美好的年代。它的中頻飽滿到不行，聽蔡琴簡直是絕配。是老派發燒友的『夢幻逸品』。"
  },
  {
    id: "sonusfaber-gravisvi",
    brand: "Sonus Faber",
    model: "Gravis VI",
    type: "subwoofer",
    sonicSignature: "深沉、有力，與主喇叭的銜接完美無瑕",
    pairingAdvice: "專為搭配Sonus Faber自家喇叭而設計，能完美融入，提供兼具質感與量感的低頻。",
    physicsNote: "搭載18吋長衝程單體，內建1800瓦D類擴大機，具備DSP與App控制功能。",
    novashinVerdict: "Gravis VI是低頻的『藝術家』，它不只是發出『轟轟』聲，而是能描繪出低頻的輪廓與層次。當然，價格也是藝術品等級的。"
  },
  {
    id: "sonusfaber-ilcremonese",
    brand: "Sonus Faber",
    model: "Il Cremonese",
    type: "speaker",
    sonicSignature: "精準、凝聚、動態強烈，同時保有義大利式的熱情與韻味",
    pairingAdvice: "相較於Aida和Lilium，Il Cremonese對擴大機的控制力要求更高，追求的是更精準的聲音。搭配速度快、解析高的擴大機更能發揮其實力。",
    physicsNote: "五角形箱體設計，搭載獨立的超低音模組，技術含金量極高。",
    novashinVerdict: "Il Cremonese是Sonus Faber家族的『劍客』，身手不凡，劍法精準。它的聲音既有義大利的熱情，又有德國的嚴謹，是文武雙全的代表。"
  },
  {
    id: "sonusfaber-lilium",
    brand: "Sonus Faber",
    model: "Lilium",
    type: "speaker",
    sonicSignature: "聲音甜美、寬鬆、充滿光澤，中高頻段尤其迷人",
    pairingAdvice: "同樣需要大功率擴大機伺候，但個性比Aida II稍微溫柔一些。搭配歐系暖聲擴大機，能營造出非常迷人的聽感。",
    physicsNote: "設計理念與Aida II一脈相承，但體積略小，更適合一般豪宅的客廳。",
    novashinVerdict: "如果Aida II是皇后，Lilium就是貴妃。同樣雍容華貴，但多了一絲嬌媚。它的聲音會讓人融化，是標準的『貴婦機』。"
  },
  {
    id: "sonusfaber-olympicanovai",
    brand: "Sonus Faber",
    model: "Olympica Nova I",
    type: "speaker",
    sonicSignature: "精緻、甜美，人聲與小編制器樂表現出色",
    pairingAdvice: "漂亮的書架喇叭，需要品質好的腳架。搭配中階綜合擴大機即可，能營造出迷人的小品風情。",
    physicsNote: "系列中最小的型號，但同樣擁有家族的優良血統。",
    novashinVerdict: "Nova I是書架喇叭界的『甜心』，外型美、聲音甜。雖然低頻有限，但那迷人的中高頻足以讓人忽略一切。擺在房間裡，光看著也開心。"
  },
  {
    id: "sonusfaber-olympicanovaiii",
    brand: "Sonus Faber",
    model: "Olympica Nova III",
    type: "speaker",
    sonicSignature: "均衡、流暢，兼具細節與音樂性，非常耐聽",
    pairingAdvice: "適合中大型空間，對擴大機的搭配相對寬容，是系列中非常受歡迎的型號。",
    physicsNote: "與Nova V相同的技術，但尺寸較小，更適合一般家庭。",
    novashinVerdict: "Nova III是Olympica Nova系列的『模範生』，各方面表現都很均衡，沒什麼明顯的缺點。如果你不知道該選哪對，選它通常不會錯。"
  },
  {
    id: "sonusfaber-olympicanovav",
    brand: "Sonus Faber",
    model: "Olympica Nova V",
    type: "speaker",
    sonicSignature: "大氣、開闊，聲音充滿能量感與活生感",
    pairingAdvice: "Olympica Nova系列的旗艦，需要一定的空間與推力才能發揮。搭配美系大功率後級，能展現其動態與氣勢。",
    physicsNote: "不對稱的魯特琴箱體造型，獨特的Stealth Ultraflex低音反射系統。",
    novashinVerdict: "Olympica Nova V是系列中的『大哥大』，氣勢十足。它的聲音開闊奔放，聽大編制交響樂和搖滾樂都非常過癮。"
  },
  {
    id: "sonusfaber-serafinog2",
    brand: "Sonus Faber",
    model: "Serafino G2",
    type: "speaker",
    sonicSignature: "溫潤、飽滿，人聲表現極具感染力，是標準的『美聲派』",
    pairingAdvice: "Homage系列的二當家，相對容易驅動，搭配中高階的綜合擴大機或前後級都能有不錯的表現。",
    physicsNote: "第二代Homage Tradition系列，搭載DAD箭簇高音與釹磁鐵中音單體。",
    novashinVerdict: "Serafino是『情歌王子』，唱起情歌來會讓人心碎。它的人聲有毒，聽了會上癮。如果你是人聲愛好者，這對喇叭絕對是你的菜。"
  },
  {
    id: "sonusfaber-sonettov",
    brand: "Sonus Faber",
    model: "Sonetto V",
    type: "speaker",
    sonicSignature: "活潑、明快，聲音富有節奏感",
    pairingAdvice: "比Sonetto VIII更為靈活，適合中型空間。搭配中性的綜合擴大機，能營造出輕快的音樂氛圍。",
    physicsNote: "2.5音路設計，反應速度更快。",
    novashinVerdict: "Sonetto V是系列中的『舞者』，節奏感明快，聽流行樂和爵士樂很對味。CP值很高，是入門Sonus Faber落地喇叭的好選擇。"
  },
  {
    id: "sonusfaber-sonettoviii",
    brand: "Sonus Faber",
    model: "Sonetto VIII",
    type: "speaker",
    sonicSignature: "聲音直接、有力，衝擊力強，帶有現代感",
    pairingAdvice: "Sonetto系列的旗艦，適合家庭劇院與兩聲道共用。搭配日系或美系環繞擴大機，能展現其全面的性能。",
    physicsNote: "搭載三顆180mm低音單體，能量感十足。",
    novashinVerdict: "Sonetto VIII是Sonus Faber家族的『動作巨星』，看電影、聽搖滾，拳拳到肉。它的聲音比較現代，少了點傳統義大利的韻味，但多了分爽快。"
  },
  {
    id: "soulnote-a2",
    brand: "Soulnote",
    model: "A-2",
    type: "amp",
    sonicSignature: "驅動力強勁、速度飛快、聲音充滿能量與活生感",
    pairingAdvice: "驅動力驚人，能把許多難推的喇叭伺候得服服貼貼。搭配D-2 DAC，能組成一套極具生命力的系統。",
    physicsNote: "全平衡無負回授設計，大型環形變壓器，提供每聲道100瓦（8歐姆）的扎實功率。",
    novashinVerdict: "A-2是擴大機界的『過動兒』，精力旺盛，活潑好動。它的驅動力和速度感會讓你大吃一驚，是標準的『喇叭挖掘機』，能榨出喇叭的所有潛力。"
  },
  {
    id: "soulnote-a3",
    brand: "Soulnote",
    model: "A-3",
    type: "amp",
    sonicSignature: "聲音更為從容、大氣，兼具A-2的力道與更上一層樓的細膩度",
    pairingAdvice: "Soulnote的旗艦綜合擴大機，能應付更大食的喇叭，展現出更全面的控制力。",
    physicsNote: "承襲A-2的設計理念，但在電源供應與元件用料上更為發燒。",
    novashinVerdict: "如果A-2是拳擊手，A-3就是武術宗師。同樣力道十足，但招式更為圓融、老練。是Soulnote暴力美學的極致展現。"
  },
  {
    id: "soulnote-d2",
    brand: "Soulnote",
    model: "D-2",
    type: "dac",
    sonicSignature: "活生感十足、音場開闊、聲音密度高且極度自然",
    pairingAdvice: "搭配同廠的A-2擴大機是絕配。其NOS模式下的聲音非常獨特，能讓數位訊源聽起來像類比。",
    physicsNote: "搭載四顆ES9038PRO DAC晶片，獨創的NOS（Non-Over Sampling）模式，無負回授分砌式放大電路。",
    novashinVerdict: "D-2是Soulnote的『靈魂之作』，它的NOS模式有劇毒，聽過就回不去了。它讓數位聲不再冰冷，充滿了生命力。是追求『類比味』的數位玩家的終極解藥。"
  },
  {
    id: "soulnote-e2",
    brand: "Soulnote",
    model: "E-2",
    type: "preamp",
    sonicSignature: "極高的透明度與豐富的細節，唱頭放大的品質極佳",
    pairingAdvice: "黑膠玩家的夢幻逸品。其唱頭放大線路非常強大，能對應各種MM/MC唱頭，並可透過面板調整負載曲線。",
    physicsNote: "全平衡無負回授設計，內建高品質的唱頭放大器，支援多種EQ曲線。",
    novashinVerdict: "E-2是黑膠系統的『瑞士刀』，功能強大，調整彈性極高。它的唱放部分就值回票價了，是黑膠迷的『退燒機』之一。"
  },
  {
    id: "soulnote-s3",
    brand: "Soulnote",
    model: "S-3",
    type: "dac",
    sonicSignature: "精準、透明、細節豐富，聲音的質感動人",
    pairingAdvice: "Soulnote的旗艦SACD/DAC，聲音走向比D-2更為中性、精準。適合搭配各種高階系統，作為參考級訊源。",
    physicsNote: "搭載ES9038PRO晶片，內建高精度時鐘，支援SACD播放。",
    novashinVerdict: "S-3是Soulnote的『科學家』，追求的是極致的精準與還原。它的聲音非常誠實，但也少了一點D-2的『野性』。適合喜歡『聽細節』的發燒友。"
  },
  {
    id: "spendor-a4",
    brand: "Spendor",
    model: "A4",
    type: "speaker",
    sonicSignature: "活潑、明快，聲音的節奏感很好",
    pairingAdvice: "A系列的中堅落地喇叭，同樣易於驅動。適合搭配聲底中性的擴大機，能營造出輕鬆愉快的聽感。",
    physicsNote: "比A7小一號，但同樣採用了Spendor的核心技術。",
    novashinVerdict: "A4是Spendor的『年輕人』，聲音充滿活力。雖然規模感和厚度不如老大哥們，但那活潑的個性很討喜。是年輕發燒友的『第一對好喇叭』。"
  },
  {
    id: "spendor-a7",
    brand: "Spendor",
    model: "A7",
    type: "speaker",
    sonicSignature: "流暢、甜美，音樂性佳，體積小但聲音不小",
    pairingAdvice: "A系列的旗艦落地喇叭，非常容易驅動，搭配中階的綜合擴大機就能有很好的聲音。CP值極高。",
    physicsNote: "纖細的箱體設計，搭載Spendor自行開發的中低音單體。",
    novashinVerdict: "A7是『小資族的勝利』。用不貴的價格，就能買到純正的英國聲和優雅的外型。它的聲音甜美耐聽，是入門Hi-End的好選擇。"
  },
  {
    id: "spendor-classic100",
    brand: "Spendor",
    model: "Classic 100",
    type: "speaker",
    sonicSignature: "傳奇的『饅頭中音』，中頻飽滿厚實，人聲極具感染力",
    pairingAdvice: "BBC LS3/6的直系後裔，對擴大機的推力有一定要求。搭配A類或真空管擴大機，能將其中頻的魅力發揮到極致。",
    physicsNote: "經典的三音路設計，12吋的低音單體提供了寬鬆的低頻基礎。",
    novashinVerdict: "Classic 100是活的傳奇。那個中頻，聽過的人都說是『毒品』。雖然高低兩端的延伸不是很出現代喇叭，但光是那個中頻就足以名留青史。"
  },
  {
    id: "spendor-classic200ti",
    brand: "Spendor",
    model: "Classic 200Ti",
    type: "speaker",
    sonicSignature: "溫暖、飽滿、寬鬆自然，充滿經典英國聲的魅力",
    pairingAdvice: "經典的『BBC監聽喇叭』風格，適合搭配英國系的擴大機，如Naim或Sugden，能營造出非常迷人的音樂氛圍。",
    physicsNote: "三音路四單體設計，搭載鈦金屬高音單體，箱體採用薄壁高阻尼設計。",
    novashinVerdict: "Classic 200Ti是『老派英國紳士』，聲音溫文儒雅，不慍不火。聽人聲和古典樂非常有味道，是會讓人想坐下來好好聽音樂的喇叭。"
  },
  {
    id: "spendor-d7.2",
    brand: "Spendor",
    model: "D7.2",
    type: "speaker",
    sonicSignature: "均衡、精準，聲音富有活力與細節",
    pairingAdvice: "非常全能的喇叭，對擴大機的適應性很高。無論是英國聲或美國聲的擴大機，都能搭配出不錯的效果。",
    physicsNote: "承襲D9.2的技術，但箱體更為纖細，更容易融入居家環境。",
    novashinVerdict: "D7.2是Spendor的『資優生』，各方面表現都很出色。它的聲音不像傳統英國聲那麼溫吞，也不像某些現代喇叭那麼有侵略性，一切都恰到好處。"
  },
  {
    id: "spendor-d9.2",
    brand: "Spendor",
    model: "D9.2",
    type: "speaker",
    sonicSignature: "清晰、開闊、動態凌厲，是Spendor的現代聲代表",
    pairingAdvice: "D系列的旗艦，聲音走向與Classic系列截然不同。適合搭配解析力高、速度快的擴大機，展現其現代的一面。",
    physicsNote: "搭載LPZ高音單體，第五代線性流動反射孔，聲音更為乾淨快速。",
    novashinVerdict: "D9.2證明了Spendor也能做出現代聲。它的聲音解析力高、動態好，聽流行樂和電影音效都很不錯。但總覺得少了一點老Spendor的『韻味』。"
  },
  {
    id: "svs-pb16ultra",
    brand: "SVS",
    model: "PB-16 Ultra",
    type: "subwoofer",
    sonicSignature: "地動山搖的極致量感，專為電影爆棚場景而生",
    pairingAdvice: "開放式設計，追求最大的低頻輸出。家庭劇院的終極武器，一顆就能讓你的沙發跟著震動。",
    physicsNote: "16吋Ultra單體，搭配三個大型低音反射孔，1500瓦D類擴大機。",
    novashinVerdict: "PB-16 Ultra是『拆房神器』。它的存在就是為了讓你鄰居來抗議。看電影時那種褲管被風吹的感覺，只有它能給你。純粹的暴力美學。"
  },
  {
    id: "svs-pb4000",
    brand: "SVS",
    model: "PB-4000",
    type: "subwoofer",
    sonicSignature: "量感驚人，氣勢磅礡，CP值超高的劇院猛獸",
    pairingAdvice: "開放式設計，追求極致的電影效果。體積巨大，需要足夠的空間才能容納。",
    physicsNote: "13.5吋單體，三個反射孔，1200瓦擴大機。",
    novashinVerdict: "PB-4000是『平民版的拆房神器』。它的效果直逼老大哥PB-16 Ultra，但價格便宜了一大截。是預算有限的劇院玩家的『夢幻逸品』。"
  },
  {
    id: "svs-sb16ultra",
    brand: "SVS",
    model: "SB-16 Ultra",
    type: "subwoofer",
    sonicSignature: "快速、乾淨、下潛極深，音樂與電影表現俱佳",
    pairingAdvice: "密閉式設計，速度快，適合對低頻質感有要求的音樂愛好者。搭配App可以進行精細的DSP調整。",
    physicsNote: "搭載16吋Ultra長衝程單體，內建1500瓦D類擴大機，具備功能強大的DSP控制。",
    novashinVerdict: "SB-16 Ultra是超低音界的『技術宅』，用強大的DSP功能，讓你在任何空間都能調出好聲音。它的低頻又快又沉，是兼顧音樂與電影的『全能選手』。"
  },
  {
    id: "svs-sb3000",
    brand: "SVS",
    model: "SB-3000",
    type: "subwoofer",
    sonicSignature: "小體積大能量，快速、精準的低頻",
    pairingAdvice: "體積相對小巧，但實力不容小覷。非常適合中小型空間或書架喇叭系統。",
    physicsNote: "13吋高振幅單體，800瓦D類擴大機，同樣支援App控制。",
    novashinVerdict: "SB-3000是超低音界的『小鋼炮』，在小小的體積裡塞進了驚人的能量。它證明了超低音不一定要像冰箱那麼大才能有好效果。是小空間玩家的『救星』。"
  },
  {
    id: "svs-sb4000",
    brand: "SVS",
    model: "SB-4000",
    type: "subwoofer",
    sonicSignature: "精準、有力，兼具速度與衝擊力",
    pairingAdvice: "承襲16-Ultra系列的技術，CP值極高。密閉式設計，適合音樂與電影的平衡型玩家。",
    physicsNote: "13.5吋長衝程單體，1200瓦D類擴大機，同樣具備App控制的DSP功能。",
    novashinVerdict: "SB-4000是SVS的『中流砥柱』，用更親民的價格，提供了旗艦八成的實力。如果你覺得16-Ultra太貴，買它就對了。CP值之王。"
  },
  {
    id: "tan-ardengr",
    brand: "Tannoy",
    model: "Arden GR",
    type: "speaker",
    sonicSignature: "氣勢與規模感直逼 Prestige 系列，低頻權威感十足，動態龐大，非常適合大編制交響樂與電影音效。",
    pairingAdvice: "需要大電流、大功率的擴大機來馴服這頭猛獸。空間不夠大，低頻駐波會讓你頭痛不已。",
    physicsNote: "Legacy 系列的旗艦，搭載 15 吋 HPD 同軸單體，重現經典的錄音室監聽喇叭之聲。",
    novashinVerdict: "家庭劇院的暴力美學代表。看《侏羅紀公園》時，暴龍的腳步聲會讓你感受到地板在震動。鄰居可能會報警，請謹慎使用。"
  },
  {
    id: "tan-autominigr",
    brand: "Tannoy",
    model: "Autograph Mini GR",
    type: "speaker",
    sonicSignature: "小巧精緻，聲音甜美，中高頻極具魅力，人聲表現尤其「毒」，音場表現超乎其體積想像。",
    pairingAdvice: "適合搭配小功率的 A 類擴大機或管機，在書房或臥室近場聆聽，能獲得極大的滿足感。",
    physicsNote: "經典 Autograph 的迷你復刻版，採用 4 吋同軸單體，箱體雖小，但結構複雜，繼承了老大哥的設計精髓。",
    novashinVerdict: "書桌上的藝術品，聲音的甜點。雖然低頻有所欠缺，但那迷人的中高頻足以讓人忘記一切。標準的「貴婦機」，買它不只為了聽，更是為了看。"
  },
  {
    id: "tan-cantgr",
    brand: "Tannoy",
    model: "Canterbury GR",
    type: "speaker",
    sonicSignature: "比西敏寺更為內斂，但同樣充滿貴氣，音樂性極佳，弦樂表現絲絲入扣，人聲富有情感。",
    pairingAdvice: "適合搭配具有溫暖音色的擴大機，例如純 A 類或真空管機，能更凸顯其中頻的迷人魅力。對前端訊源的品質相當敏感。",
    physicsNote: "搭載 15 吋黃金參考級同軸單體，箱體採用樺木夾板與實木貼皮，兼具聲學考量與古典傢俱的美感。",
    novashinVerdict: "如果說西敏寺是帝王，那坎特伯里就是優雅的公爵。更適合在一般居家空間中享受音樂，但依然是個需要悉心服侍的貴族。"
  },
  {
    id: "tan-chevgr",
    brand: "Tannoy",
    model: "Cheviot GR",
    type: "speaker",
    sonicSignature: "復古而溫暖的聲音，中頻飽滿迷人，非常適合人聲與藍調音樂，帶有一種慵懶的舒適感。",
    pairingAdvice: "搭配英國系的擴大機，如 Naim 或 Sugden，能創造出非常有味道的英倫之聲。不太適合追求極致解析與速度感的系統。",
    physicsNote: "Legacy 系列的復刻型號，採用 12 吋同軸單體，回歸 70 年代的經典設計。",
    novashinVerdict: "穿上喇叭界的 Barbour 外套，聽著 Eric Clapton。這不是在追求 Hi-Fi，這是在品味一種生活態度。聲音照妖鏡的對立面。"
  },
  {
    id: "tan-eatongr",
    brand: "Tannoy",
    model: "Eaton GR",
    type: "speaker",
    sonicSignature: "精準、快速、解析力高，監聽喇叭的底子，聲音中性直接，沒有過多音染。",
    pairingAdvice: "前端給它什麼，它就給你什麼。搭配錯誤會顯得乾冷無情。適合搭配音色溫潤的訊源或擴大機，以增加音樂性。",
    physicsNote: "書架型的 Legacy 系列喇叭，採用 10 吋同軸單體，適合近場聆聽或小型空間。",
    novashinVerdict: "聲音的照妖鏡，系統的任何缺點都無所遁形。適合錄音師或喜歡分析音樂細節的發燒友，但如果你想輕鬆聽音樂，它可能會讓你有點精神緊張。"
  },
  {
    id: "tan-stirgr",
    brand: "Tannoy",
    model: "Stirling GR",
    type: "speaker",
    sonicSignature: "活潑輕快，充滿年輕氣息的聲音，高頻延伸亮麗，中頻密度感佳，非常適合聆聽小編制古典與爵士樂。",
    pairingAdvice: "對擴大機要求不高，容易搭配，但給它更好的前端，它也能給你驚喜。搭配速度感快的擴大機能展現其活潑的特性。",
    physicsNote: "Prestige GR 系列中尺寸最小的落地喇叭，採用 10 吋同軸單體，效率高，易於驅動。",
    novashinVerdict: "年輕人的第一對 Tannoy，CP 值相當高。雖然沒有老大哥們的權威感，但那股青春活力的音樂感染力，足以讓人中毒。"
  },
  {
    id: "tan-turngr",
    brand: "Tannoy",
    model: "Turnberry GR",
    type: "speaker",
    sonicSignature: "均衡大器，兼具 Stirling 的活潑與 Canterbury 的穩重，音場表現出色，能輕鬆填充中大型空間。",
    pairingAdvice: "擴大機的選擇範圍寬廣，晶體機或管機皆有不錯的表現。建議選擇推力稍大，音色中性的擴大機，更能發揮其實力。",
    physicsNote: "採用 10 吋黃金參考級同軸單體，箱體設計比 Stirling 更深，低頻延伸更佳。",
    novashinVerdict: "Prestige 系列的中堅份子，進可攻退可守的選擇。不上不下的價格有點尷尬，但聲音表現絕對對得起它的身價。"
  },
  {
    id: "tan-wroyalgr",
    brand: "Tannoy",
    model: "Westminster Royal GR",
    type: "speaker",
    sonicSignature: "王者風範，氣勢磅礴，音場寬闊如親臨現場，中頻溫潤醇厚，帶有獨特的號角韻味。",
    pairingAdvice: "對擴大機的電流輸出和控制力有極高要求，建議搭配大功率、高阻尼係數的後級，前後級搭配上可選擇聲音較為細膩的前級以平衡其大氣的風格。",
    physicsNote: "採用 15 吋黃金參考級雙同軸單體（Dual Concentric™），搭配大型複合式號角音箱，效率極高。",
    novashinVerdict: "音響界的聖母峰，能駕馭它的人非富即貴。空間不夠大、擴大機不夠力，千萬別自取其辱，否則只是買個昂貴的傢俱。"
  },
  {
    id: "tec-sbc600",
    brand: "Technics",
    model: "SB-C600",
    type: "speaker",
    sonicSignature: "小體積大音場，聲音凝聚而富有能量感，超乎預期的低頻表現，同樣具備精準的音場定位。",
    pairingAdvice: "非常適合在書房或小型客廳使用。搭配 SU-G700M2 合併機，就是一套非常有競爭力的西裝組合。",
    physicsNote: "SB-G90M2 的書架版本，同樣採用同軸單體設計，並透過特殊的低音反射孔設計來優化低頻延伸。",
    novashinVerdict: "小鋼炮的代表，看起來不起眼，但一開聲絕對嚇你一跳。在小空間裡，它能給你非常完整的音樂體驗。窮人福音再添一例。"
  },
  {
    id: "tec-sbg90m2",
    brand: "Technics",
    model: "SB-G90M2",
    type: "speaker",
    sonicSignature: "點音源的精準定位，音場深邃，結像清晰，聲音快速直接，有著監聽喇叭的影子，但更具音樂性。",
    pairingAdvice: "搭配自家擴大機的 LAPD 功能有奇效。若搭配其他品牌擴大機，建議選擇推力足、音色略帶暖意的款式，能讓聲音更為飽滿。",
    physicsNote: "採用同軸單體設計，將中音與高音單體置於同一軸心，達成點音源發聲。箱體結構經過電腦輔助分析，有效抑制共振。",
    novashinVerdict: "手術刀般的精準度，讓你清楚看見錄音中的每一個細節。喜歡聽大編制交響樂，要求樂器定位分明的人會愛死它。但如果你喜歡的是濃郁的人聲，它可能會讓你覺得有點「不夠毒」。"
  },
  {
    id: "tec-ser1",
    brand: "Technics",
    model: "SE-R1",
    type: "poweramp",
    sonicSignature: "龐大的驅動力與權威感，聲音密度極高，音場穩如泰山，同時保有 Technics 標誌性的高解析與透明度。",
    pairingAdvice: "專為驅動大型、低效率或阻抗變化劇烈的喇叭而生。搭配同廠 SU-R1 前級是天作之合，能展現最完整的 Technics 之聲。",
    physicsNote: "旗艦立體聲後級，同樣採用 JENO Engine 與 GaN-FET 技術，並具備 LAPD 功能。巨大的指針錶頭是其標誌，既復古又充滿科技感。",
    novashinVerdict: "暴力美學的極致展現。西裝鼻挺的肌肉猛男，用絕對的力量告訴你什麼是控制力。那個超大的 VU 錶頭，光是看著就值回票價了。"
  },
  {
    id: "tec-slg700",
    brand: "Technics",
    model: "SL-G700",
    type: "streamer",
    sonicSignature: "中性、均衡、細節豐富，聲音底子非常乾淨，沒有太多自身染色，忠實呈現錄音的原貌。",
    pairingAdvice: "作為數位訊源，其百搭的特性讓它能輕易融入各種系統。若系統聲音偏冷，可搭配音色較暖的線材或擴大機來調音。",
    physicsNote: "多功能數位播放機，集 SACD/CD 播放、網路串流、MQA 解碼、USB-DAC 於一身。DAC 晶片採用 AKM AK4497，並以雙單聲道架構處理數位類比轉換。",
    novashinVerdict: "數位時代的瑞士刀，功能齊全到令人髮指。聲音表現四平八穩，或許少了點驚喜，但絕對不會犯錯。適合什麼都想玩一點的發燒友。"
  },
  {
    id: "tec-sug700m2",
    brand: "Technics",
    model: "SU-G700M2",
    type: "amp",
    sonicSignature: "承襲旗艦機的純淨與高速感，但音色上多了一絲圓潤與討喜的韻味，在精準與音樂性之間取得良好平衡。",
    pairingAdvice: "非常適合搭配歐系書架喇叭或中小型落地喇叭，能為喇叭注入活力與透明度。對於入門玩家來說，是一台可以安心退燒的合併機。",
    physicsNote: "SU-R1000 的技術下放版本，同樣具備 JENO Engine 與 LAPD，但功率與用料稍作簡化。是體驗 Technics 核心技術的絕佳入門。",
    novashinVerdict: "CP 值之王。用不到大哥一半的價格，買到八成的功力。外觀低調，但內心狂野。如果你想體驗現代音響的魅力，又不想花大錢，這台是窮人的福音。"
  },
  {
    id: "tec-sur1000",
    brand: "Technics",
    model: "SU-R1000",
    type: "amp",
    sonicSignature: "極度安靜的背景，聲音純淨透明，解析力驚人，速度感飛快，是一種現代、精準、高科技的聲音美學。",
    pairingAdvice: "搭配任何喇叭都能展現其強大的控制力。內建 LAPD™ 技術能自動校正喇叭的相位與阻抗特性，堪稱百搭。但若搭配本身聲音偏冷的喇叭，可能會覺得缺少暖度。",
    physicsNote: "純數位擴大機，搭載 JENO Engine 解決數位擴大機的時基誤差問題，並使用 GaN-FET 氮化鎵功率晶體，實現高速開關與低失真。ADCT (Active Distortion Cancelling Technology) 主動失真消除技術是其核心。",
    novashinVerdict: "黑科技的勝利，數位擴大機的教科書。它告訴你，Hi-End 不只有暖厚類比聲，還有這種極致精準的路線。聲音的照妖鏡，前端訊源的任何瑕疵都一覽無遺。"
  },
  {
    id: "tra-opus",
    brand: "Transparent Audio",
    model: "Opus",
    type: "cable",
    sonicSignature: "極致的透明度與寂靜的背景，聲音的細節與微動態鉅細靡遺地呈現，音場深遠且層次分明，彷彿移除系統中最後一層紗。",
    pairingAdvice: "適合用在已經登峰造極的頂級系統中，作為最後一塊拼圖。它不會改變系統的音色，只會將其潛力完全釋放。搭配任何器材都是一種提升。",
    physicsNote: "旗艦系列，採用最精密的網路盒（Network Box）技術，針對線材的電感、電容特性進行最精準的補償，確保訊號在全頻段的相位一致性。",
    novashinVerdict: "富人的終極玩具，線材界的聖杯。它的價格可以買一台車，但它帶來的聲音提升，對於追求極致的發燒友來說是無價的。窮人看看就好，聽了會懷疑人生。"
  },
  {
    id: "tra-plus",
    brand: "Transparent Audio",
    model: "Plus",
    type: "cable",
    sonicSignature: "比原廠附贈的線材有明顯的提升，聲音更為乾淨，背景更黑，毛邊感減少，是升級的第一步。",
    pairingAdvice: "任何入門系統都適用。將隨機附贈的線材換成 Plus，是花小錢大升級的典範。",
    physicsNote: "最入門的系列，雖然沒有複雜的網路盒，但線材本身的結構與屏蔽依然遵循 Transparent 的設計哲學。",
    novashinVerdict: "發燒之路的敲門磚。它讓你第一次體驗到，原來換一條線真的有差。雖然很快你就會想升級 Super 或 Ultra，但這第一步的感動是無可取代的。"
  },
  {
    id: "tra-reference",
    brand: "Transparent Audio",
    model: "Reference",
    type: "cable",
    sonicSignature: "高度透明，聲音均衡自然，音樂性與音響性兼備。能忠實傳達前端器材的特色，同時為聲音注入一股安定感。",
    pairingAdvice: "高階系統的標準配備。它的中性特質使其非常百搭，無論是晶體機或管機，都能起到很好的橋樑作用。是檢視器材實力的參考標準。",
    physicsNote: "高階系列，網路盒的設計比 Opus 稍作簡化，但依然能提供非常精準的相位與抗噪聲處理。是 Transparent 技術的經典代表。",
    novashinVerdict: "退燒線材的選擇之一。聲音沒有明顯的癖性，但就是好聽、耐聽。價格依然不菲，但相較於 Opus，算是「理性」的投資。"
  },
  {
    id: "tra-super",
    brand: "Transparent Audio",
    model: "Super",
    type: "cable",
    sonicSignature: "溫暖、流暢，帶有討喜的音樂性。能柔化數位聲的尖銳感，讓人聲聽起來更為圓潤悅耳。",
    pairingAdvice: "適合入門及中階系統，特別是數位訊源為主的系統。能有效提升系統的耐聽度，是升級有感的好選擇。",
    physicsNote: "入門級別中較高的型號，網路盒的設計更為簡潔，主要針對常見的噪聲頻段進行濾波。",
    novashinVerdict: "音響系統的味精。灑一點，聲音就變得更美味。雖然不是什麼驚天動地的改變，但足以讓你嘴角上揚。是從「線材無用論」畢業的第一堂課。"
  },
  {
    id: "tra-ultra",
    brand: "Transparent Audio",
    model: "Ultra",
    type: "cable",
    sonicSignature: "聲音飽滿且富有活生感，中頻帶有微微的甜潤感，高頻延伸自然，低頻控制力佳，能讓系統的聲音更具形體感。",
    pairingAdvice: "非常適合用於聲音偏瘦或解析過強的系統，能為其增添肉感與音樂性。搭配歐美系的喇叭與擴大機都有很好的效果。",
    physicsNote: "中階系列，網路盒的複雜度與元件等級較 Reference 低，但核心的濾波與相位校正理念一脈相承。",
    novashinVerdict: "中產階級的發燒友的好朋友。它不像頂級線材那樣讓你驚艷，但會默默地讓你的系統更好聽。CP 值開始浮現的系列。"
  },
  {
    id: "ush-be10dmd",
    brand: "Usher",
    model: "BE-10 DMD",
    type: "speaker",
    sonicSignature: "相較於 BE-20，規模感稍小，但更為均衡細膩，中高頻的甜美與細節表現更為突出，音樂性更佳。",
    pairingAdvice: "同樣需要大功率擴大機伺候，但對控制力的要求稍緩。適合在中大型空間中追求均衡與細節的發燒友。",
    physicsNote: "次旗艦型號，同樣搭載 DMD 鑽石高音，但中音與低音單體的尺寸較小。箱體設計同樣極為講究，重量驚人。",
    novashinVerdict: "如果 BE-20 是戰神，那 BE-10 就是優雅的劍客。在多數家庭環境中，BE-10 可能是比 BE-20 更明智的選擇。CP 值爆表的富人玩具。"
  },
  {
    id: "ush-be20dmd",
    brand: "Usher",
    model: "BE-20 DMD",
    type: "speaker",
    sonicSignature: "動態龐大，氣勢恢宏，低頻權威感十足，音場開闊，DMD 鑽石高音帶來極致的解析力與空氣感。",
    pairingAdvice: "對擴大機的推力與控制力是嚴峻的考驗。需要大電流、高阻尼的後級才能讓它貼貼服服。空間不夠大，它的低頻會是場災難。",
    physicsNote: "旗艦落地喇叭，採用 Usher 自家的 DMD (Diamond-Metal-Diamond) 鑽石中高音單體，兼具鈹高音的輕盈與鑽石高音的剛性。低音單體為 Eton 製品。",
    novashinVerdict: "台灣之光，用料與聲音表現完全是世界頂級水準，但價格只有歐美同級產品的一半不到。暴力美學的代表，能文能武，但武的成分更多一些。"
  },
  {
    id: "ush-cp8872ii",
    brand: "Usher",
    model: "CP-8872 II",
    type: "speaker",
    sonicSignature: "這是BE-20 DMD的前身型號，同樣是氣勢磅礡，動態驚人，但高音採用的是鈹高音，聲音更為直接、剛猛。",
    pairingAdvice: "擴大機搭配的難度比BE-20 DMD更高，需要極致的控制力才能避免高頻過於刺激。是標準的「喇叭挑擴大機」。",
    physicsNote: "早期的旗艦型號，採用D'Appolito點音源排列，兩只8吋低音單體夾著一顆鈹高音與一顆中音單體。是Usher奠定其Hi-End地位的經典之作。",
    novashinVerdict: "一代經典，當年的夢幻逸品。現在看來，它的聲音或許不夠精緻，但那股拳拳到肉的衝擊力與能量感，依然讓人熱血沸騰。是音響發展史上的重要里程碑。"
  },
  {
    id: "ush-dancerminidmd",
    brand: "Usher",
    model: "Dancer Mini-Two DMD",
    type: "speaker",
    sonicSignature: "優雅而精緻的聲音，DMD高音帶來華麗的空間感與細節，同時保有Dancer系列一貫的音樂性與美感。",
    pairingAdvice: "比Mini-X DMD更容易驅動，對擴大機的選擇更為寬容。搭配音色細膩的A類或AB類擴大機，能展現其優雅迷人的一面。",
    physicsNote: "Dancer系列中的小型落地喇叭，搭載DMD高音與兩只7吋中低音單體，傾斜的箱體設計兼具美觀與聲學考量。",
    novashinVerdict: "客廳裡的藝術品，聲音與外型兼備的「貴婦機」。它不像BE系列那樣霸氣外露，而是用一種更溫柔、更細膩的方式來征服你的耳朵。"
  },
  {
    id: "ush-minixdmd",
    brand: "Usher",
    model: "Mini-X DMD",
    type: "speaker",
    sonicSignature: "精準、快速、透明，書架喇叭的體積，卻有著落地喇叭的氣勢與音場。DMD 高音的優勢展露無遺。",
    pairingAdvice: "不要被它的體積所欺騙，它對擴大機的渴求不亞於小型落地喇叭。給它足夠的推力，它會給你超乎想像的聲音。",
    physicsNote: "Dancer 系列中的高性能書架喇叭，搭載 DMD 鑽石高音與 7 吋中低音單體，是技術下放的典範。",
    novashinVerdict: "書架喇叭中的小鋼炮，聲音的密度感與能量感非常驚人。在書房或小客廳使用，幾乎沒有對手。窮人的福音，用相對實惠的價格體驗鑽石高音的魅力。"
  },
  {
    id: "ush-td10",
    brand: "Usher",
    model: "TD-10",
    type: "speaker",
    sonicSignature: "TD系列是BE系列的進化版，聲音更為精緻、透明，音場的層次感與3D感更為出色，DMD高音的表現更上一層樓。",
    pairingAdvice: "對前端器材的品質極為敏感，系統的任何一點瑕疵都會被放大。需要搭配同樣是頂級水準的訊源與擴大機。",
    physicsNote: "取代BE-10的次旗艦型號，箱體、分音器、單體都經過重新設計，特別是中音單體的改進，讓中頻的銜接更為順暢自然。",
    novashinVerdict: "青出於藍而勝於藍，TD-10 全面超越了經典的 BE-10。它不再只是暴力美學，更多了幾分貴氣與細膩。是 Usher 邁向世界頂級的宣言。"
  },
  {
    id: "ush-v604",
    brand: "Usher",
    model: "V-604",
    type: "speaker",
    sonicSignature: "清亮、活潑，速度感快，解析力不錯，是一款現代聲底的落地喇叭，非常適合流行音樂與家庭劇院。",
    pairingAdvice: "建議搭配聲音較為厚實的擴大機，以平衡其較為明亮的高頻。在家庭劇院系統中擔任主聲道非常稱職。",
    physicsNote: "V 系列是 Usher 的入門級落地喇叭，追求高性價比。採用兩只 6.5 吋中低音單體與 1 吋高音單體。",
    novashinVerdict: "家庭劇院的好夥伴，流行音樂的嗨咖。用它來看電影、聽演唱會，效果一流。但如果你想聽古典樂的細膩質感，它可能會讓你覺得有點「衝」。"
  },
  {
    id: "ush-x718",
    brand: "Usher",
    model: "X-718",
    type: "speaker",
    sonicSignature: "溫暖飽滿，中頻富有厚度，人聲表現討喜，是一款非常具有音樂性的書架喇叭。",
    pairingAdvice: "對擴大機友善，容易搭配。搭配英國系的擴大機，能營造出溫潤耐聽的聲音。是入門發燒友的絕佳選擇。",
    physicsNote: "經典的 X 系列書架喇叭，採用 7 吋中低音單體與 1 吋蠶絲軟半球高音，是 Usher 長期熱銷的型號。",
    novashinVerdict: "入門級的CP值之王。在這個價位帶，很難找到比它更全面、更好聽的喇叭。雖然沒有鑽石高音的華麗，但那樸實溫暖的聲音，更能打動人心。"
  },
  {
    id: "wa-alexiav",
    brand: "Wilson Audio",
    model: "Alexia V",
    type: "speaker",
    sonicSignature: "在 Wilson 的龐大家族中，以其均衡、細膩且富有音樂性的聲音而著稱。動態與解析力依然是頂級水準，但更多了幾分溫潤與情感。",
    pairingAdvice: "對擴大機的搭配更具彈性，不僅需要推力，也講究音質。搭配高品質的 A 類或 AB 類擴大機，能展現其迷人的音樂性。",
    physicsNote: "高階落地喇叭，同樣具備中音與高音模組的獨立時相調整功能。是 Wilson 將極致音響性與高度音樂性完美結合的代表作。",
    novashinVerdict: "Wilson 家族裡的詩人。它不只會秀肌肉，更會跟你談心。在多數的豪宅客廳裡，Alexia V 可能是比它兩位大哥更適合的選擇。是理性與感性的完美平衡點。"
  },
  {
    id: "wa-alexxv",
    brand: "Wilson Audio",
    model: "Alexx V",
    type: "speaker",
    sonicSignature: "承襲旗艦 XVX 的時相精準與動態表現，但體型更為「友善」。聲音的能量感與衝擊力依然驚人，音場的描繪能力堪稱典範。",
    pairingAdvice: "依然需要頂級的擴大機與空間來伺候，但相較於 XVX，門檻稍降。是追求極致聲音，但空間與預算略有限制的發燒友的夢幻逸品。",
    physicsNote: "次旗艦型號，同樣採用模組化可調式設計，並導入了許多 XVX 的新技術，例如 V-Material 複合材料與全新的 Alnico QuadraMag 中音單體。",
    novashinVerdict: "如果 XVX 是核動力航母，那 Alexx V 就是神盾級驅逐艦。威力依然毀天滅地，但至少你家的港口還停得進去。聲音的權威感會讓你對所有錄音重新評價。"
  },
  {
    id: "wa-chrxvx",
    brand: "Wilson Audio",
    model: "Chronosonic XVX",
    type: "speaker",
    sonicSignature: "極致的動態、精準的時相、龐大的音場，聲音的真實感與臨場感達到前所未有的高度，彷彿樂團就在眼前。",
    pairingAdvice: "只為最頂級的系統而生。需要怪獸級的擴大機、最頂級的訊源以及經過專業聲學處理的巨大空間。任何一個環節的短板都會讓它的表現大打折扣。",
    physicsNote: "Wilson Audio 的旗艦之作，採用模組化設計，每個單體模組的角度與前後位置皆可獨立調整，以達到最精準的時相校正 (Aspherical Group Delay)。單體材質包含絲質軟半球、紙漿、以及獨家的『X-Material』與『S-Material』複合材料。",
    novashinVerdict: "音響界的終極聖杯，金錢與空間的雙重炫耀。擁有它，你擁有的不只是一對喇叭，而是一個能召喚音樂家靈魂的傳送門。這是真正的富人玩具，凡人只能仰望。"
  },
  {
    id: "wa-pedestal",
    brand: "Wilson Audio",
    model: "Pedestal",
    type: "speaker",
    sonicSignature: "提升喇叭的穩定性，讓聲音背景更黑，音像更凝聚，低頻更清晰。它本身沒有聲音，但能讓聲音更好。",
    pairingAdvice: "專為 Wilson Audio 各型號喇叭設計的抑振基座，特別是 TuneTot。",
    physicsNote: "採用與喇叭箱體相同的複合材料與抑振技術打造，能有效阻絕來自地面的振動傳導至喇叭。",
    novashinVerdict: "連腳錐都要做成 Hi-End 精品的，大概也只有 Wilson 了。這不是配件，這是器材。它的價格可能比你家的喇叭還貴，但對於 Wilson 用家來說，這是必要的投資。"
  },
  {
    id: "wa-sabrinax",
    brand: "Wilson Audio",
    model: "SabrinaX",
    type: "speaker",
    sonicSignature: "在小巧的體積中，蘊含著驚人的能量與規模感。聲音甜美、凝聚，音場表現遠超其體型，是 Wilson 聲音美學的濃縮精華。",
    pairingAdvice: "雖然體積小，但對擴大機的質與量都有要求。給它好的擴大機，它會給你超乎想像的回報。非常適合在中小空間中追求極致音質的玩家。",
    physicsNote: "Wilson 最小的落地喇叭，箱體全面採用 X-Material 打造，剛性極高。單體則是承襲自旗艦 XVX 的技術。",
    novashinVerdict: "小巨人。第一眼看不起它，一開聲嚇死你。它證明了 Wilson 不只會做大喇叭，做小喇叭一樣是世界頂級。是「小空間、大野心」的最佳解答。"
  },
  {
    id: "wa-sashadaw",
    brand: "Wilson Audio",
    model: "Sasha DAW",
    type: "speaker",
    sonicSignature: "充滿能量感與活生感，聲音直接而純粹，低頻衝擊力強勁，是 Wilson 經典 WATT/Puppy 系列的直系傳承。",
    pairingAdvice: "需要控制力良好的大功率擴大機來抓穩它的低頻。搭配速度感快的擴大機，能展現其搖滾魂。",
    physicsNote: "向已故創辦人 Dave A. Wilson 致敬的型號。箱體材料與結構都經過全面升級，採用與旗艦相同的單體技術，是 Wilson 中堅力量的代表。",
    novashinVerdict: "音響界的保時捷 911。經典的傳承，不斷進化的性能。它能讓你感受到音樂的脈搏與熱情。聽搖滾、聽流行，爽度破錶。是每個熱血發燒友心中的夢。"
  },
  {
    id: "wa-subsonic",
    brand: "Wilson Audio",
    model: "Subsonic",
    type: "subwoofer",
    sonicSignature: "提供極致下潛、快速、乾淨的超低頻。它不是那種轟隆作響的低音，而是能與主喇叭完美融合，擴展音場的基礎。",
    pairingAdvice: "可與 Wilson 全系列喇叭搭配，透過專屬的控制器 (ActivXO) 進行精準的分頻與銜接。",
    physicsNote: "Wilson 的旗艦超低音之一，採用雙單體推挽式設計，內建強大的擴大機與 DSP 校正功能。",
    novashinVerdict: "低音界的核潛艇，無聲無息，但一發射就撼動天地。它的任務不是製造地震，而是補全音樂金字塔最底層的那一塊基石。價格同樣是核彈級。"
  },
  {
    id: "wa-tunetot",
    brand: "Wilson Audio",
    model: "TuneTot",
    type: "speaker",
    sonicSignature: "精準、中性、解析力高，有著專業監聽喇叭的底蘊。在近場聆聽時，能提供極為清晰的音像與細節。",
    pairingAdvice: "專為書桌、層架等「非理想」擺位而設計。可搭配專屬的 ISOBase 抑振底座，進一步提升聲音的純淨度。",
    physicsNote: "Wilson 唯一的書架喇叭，同樣採用 X-Material 箱體與高階單體。是將 Wilson 技術應用於桌面系統的嘗試。",
    novashinVerdict: "史上最昂貴的桌面喇叭，沒有之一。在書桌上放一對 TuneTot，比開一台跑車去上班更顯品味。這是給那些在辦公室也絕不妥協的發燒狂人準備的毒物。"
  },
  {
    id: "wa-yvette",
    brand: "Wilson Audio",
    model: "Yvette",
    type: "speaker",
    sonicSignature: "聲音流暢、自然、音樂性極佳，是 Wilson 家族中聲音最為溫和討喜的型號之一。",
    pairingAdvice: "對擴大機的搭配相當友善，不追求極致的大電流，更看重音色的匹配。搭配管機或英國聲的擴大機，會有非常迷人的表現。",
    physicsNote: "單件式箱體的落地喇叭，定位介於 SabrinaX 與 Sasha DAW 之間。是 Wilson 為了滿足更多不同聽覺偏好而推出的產品。",
    novashinVerdict: "穿著晚禮服的 Wilson。它收起了拳頭，用更優雅、更溫柔的方式來詮釋音樂。如果你覺得傳統的 Wilson 太過剛猛，那 Yvette 絕對會讓你改觀。"
  },
  {
    id: "wir-elec7",
    brand: "Wireworld",
    model: "Electra 7",
    type: "power",
    sonicSignature: "為系統帶來更寧靜的背景與更紮實的低頻。聲音的動態對比更為強烈，音像的凝聚力有所提升。",
    pairingAdvice: "適合用於系統中的源頭設備，如 DAC、串流機或前級，能從根本上改善音質。用於後級也能提升控制力。",
    physicsNote: "採用 OCC 銅導體，並具備 Fluxfield 幾何結構與 Composilex 2 絕緣，能有效吸收與抑制電源噪聲。",
    novashinVerdict: "電源是好聲之本，而 Electra 7 就是那個穩固的基礎。換上它，你會發現原來你的系統潛力還不止於此。這是花小錢辦大事的典型，CP 值極高。"
  },
  {
    id: "wir-equi8",
    brand: "Wireworld",
    model: "Equinox 8",
    type: "cable",
    sonicSignature: "均衡、飽滿、富有韻味。聲音溫暖而流暢，能很好地表現音樂的感情與張力，是一款非常耐聽的線材。",
    pairingAdvice: "百搭型的線材，適用於各種中階系統。能為數位聲過重的系統帶來類比的溫暖感，也能讓偏瘦的聲音更為飽滿。",
    physicsNote: "採用 OCC-7N 銅導體，搭配 DNA Helix 絞繞技術，是 Wireworld 銅線系列中的高階型號。",
    novashinVerdict: "音響系統的萬用藥。不知道該換什麼線時，換上 Equinox 8 通常都不會錯。它可能不會給你驚天動地的改變，但會讓音樂更好聽、更耐聽。是退燒的好選擇。"
  },
  {
    id: "wir-golecl8",
    brand: "Wireworld",
    model: "Gold Eclipse 8",
    type: "cable",
    sonicSignature: "在 Platinum 的中性基礎上，增添了一絲華麗與溫潤的金色光澤。聲音飽滿、富有能量感，同時保持極高的解析力。",
    pairingAdvice: "非常適合聲音偏向解析、偏瘦的系統，能為其注入貴氣與厚度。搭配頂級的晶體機或管機，都能展現出高貴的質感。",
    physicsNote: "採用 OCC-7N 實心銀導體，結構與 Platinum 相似，但在導體尺寸與 Composilex 3 的配方上略有不同，創造出獨特的音色。",
    novashinVerdict: "如果 Platinum 是純水，那 Gold 就是頂級的香檳。它不僅僅是傳遞訊號，更是在美化音樂。對於喜歡聲音帶點貴氣與華麗感的發燒友來說，這可能是比 Platinum 更好的選擇。"
  },
  {
    id: "wir-plecl8",
    brand: "Wireworld",
    model: "Platinum Eclipse 8",
    type: "cable",
    sonicSignature: "極致的中性、透明，幾乎感覺不到線材的存在。聲音的動態、細節、頻寬都達到頂峰，背景漆黑如墨。",
    pairingAdvice: "適用於任何頂級系統，作為最終的參考標準。它不會為系統增添任何色彩，只會忠實地反映前端器材的真實面貌。",
    physicsNote: "採用 OCC-7N 實心銀導體，搭配 Wireworld 獨家的 DNA Helix 幾何絞繞技術與 Composilex 3 絕緣材料，將電磁干擾降至最低。",
    novashinVerdict: "線材界的隱形人，貴到沒有天理，但也強到沒有朋友。當你不知道系統該如何調整時，換上它，答案就會浮現。這是給追求絕對真實的發燒友的終極答案，也是富人玩具的極致。"
  },
  {
    id: "wir-silecl8",
    brand: "Wireworld",
    model: "Silver Eclipse 8",
    type: "cable",
    sonicSignature: "明亮、通透、速度感快，細節表現非常出色。能讓系統的聲音更為鮮活、開揚，高頻的空氣感十足。",
    pairingAdvice: "適合聲音偏暗、偏慢的系統，能有效提升整體的活生感與解析力。是升級感非常明顯的一款線材。",
    physicsNote: "採用 OCC-7N 實心銀導體，是 Wireworld 高階系列的中堅力量。DNA Helix 結構與 Composilex 3 絕緣同樣是標準配備。",
    novashinVerdict: "CP 值最高的純銀線之一。它擁有純銀線標誌性的華麗高頻與解析力，但又不會過於刺激刮耳。是從銅線升級到銀線的最佳橋樑，讓你一窺高階線材的堂奧。"
  },
  {
    id: "yam-as1200",
    brand: "Yamaha",
    model: "A-S1200",
    type: "amp",
    sonicSignature: "聲音清澈、有力，帶有 Yamaha 獨特的自然音色。雖然沒有大哥們的華麗與厚度，但那份純粹與直接更能打動人心。",
    pairingAdvice: "入門發燒友的絕佳選擇，容易搭配，不易出惡聲。搭配高效率的書架喇叭，在中小空間能獲得非常好的效果。",
    physicsNote: "入門級合併擴大機，但依然保留了 VU 錶頭與扎實的內部用料，誠意十足。",
    novashinVerdict: "年輕人的第一台 Hi-Fi 擴大機。它可能不是最完美的，但它會用最真誠的聲音，帶你走進發燒音響的大門。光是那對錶頭，就足以讓你跟朋友炫耀半天了。"
  },
  {
    id: "yam-as2200",
    brand: "Yamaha",
    model: "A-S2200",
    type: "amp",
    sonicSignature: "承襲 A-S3200 的溫暖與精緻感，但聲音更為年輕、活潑一些。在音樂性與音響性之間取得了絕佳的平衡。",
    pairingAdvice: "中階系統的百搭首選。無論是搭配書架喇叭或中小型落地喇叭，都能展現出超值的聲音表現。",
    physicsNote: "A-S3200 的次級型號，同樣採用全平衡設計與環形變壓器，但在用料與功率上略有簡化。",
    novashinVerdict: "中產階級的救星，CP 值之王。用不到大哥一半的價格，買到八成的聲音表現與九成的外觀滿足感。如果你想體驗高階音響的魅力，但預算有限，這台是你的最佳答案。"
  },
  {
    id: "yam-as3200",
    brand: "Yamaha",
    model: "A-S3200",
    type: "amp",
    sonicSignature: "聲音溫暖、飽滿、富有情感，驅動力與細節表現兼備，帶有傳統日系高階音響的精緻與華麗感。",
    pairingAdvice: "非常適合搭配歐美系的喇叭，能為其注入一股溫潤的音樂性。驅動中大型落地喇叭也游刃有餘。",
    physicsNote: "高階合併擴大機，採用全平衡放大設計，巨大的環形變壓器提供充沛的電源。前面板的 VU 錶頭是其標誌性設計。",
    novashinVerdict: "西裝筆挺的紳士，外觀復古，內心澎湃。那對在黑暗中發光的 VU 錶頭，光是看著就足以讓人中毒。聲音與外觀都充滿了儀式感，是退燒的好選擇。"
  },
  {
    id: "yam-c5000",
    brand: "Yamaha",
    model: "C-5000",
    type: "preamp",
    sonicSignature: "極致的純淨與透明，聲音背景漆黑，細節無所遁形。它不為聲音添加任何色彩，只為忠實傳遞訊號。",
    pairingAdvice: "搭配同廠 M-5000 後級是官方西裝。其高度中性的特質也使其成為檢視後級與喇叭實力的絕佳平台。",
    physicsNote: "旗艦前級擴大機，採用全平衡、雙單聲道設計，從訊號輸入到輸出都追求最短路徑與最低失真。",
    novashinVerdict: "音響系統裡的「絕對零度」。它冷靜、客觀、精準到令人敬畏。它不是用來「玩」音色的，而是用來「鑑聽」音樂的。這是給終極發燒友與錄音師的專業工具。"
  },
  {
    id: "yam-ns5000",
    brand: "Yamaha",
    model: "NS-5000",
    type: "speaker",
    sonicSignature: "精準、快速、解析力極高，聲音中性無染，擁有監聽喇叭的準確性，同時兼具高階音響的細膩質感與開闊音場。",
    pairingAdvice: "前端給它什麼，它就發出什麼聲音。搭配自家旗艦 5000 系列前後級是天作之合。若搭配其他品牌，建議選擇音色溫潤、推力充足的擴大機，以展現其音樂性。",
    physicsNote: "Yamaha 的旗艦書架喇叭，高、中、低音單體振膜全部採用 ZYLON™ 這種獨特的合成纖維，達到音色的高度一致性。箱體內部採用特殊的共振抑制管，消除箱體駐波。",
    novashinVerdict: "科學怪人的勝利，Yamaha 黑科技的結晶。它不像傳統 Hi-End 喇叭那樣充滿個性，而是用一種極度理性的方式告訴你錄音的真相。聲音的照妖鏡，系統的任何缺點都無所遁形。"
  },
  {
    id: "yam-rn2000a",
    brand: "Yamaha",
    model: "R-N2000A",
    type: "streamer",
    sonicSignature: "融合了傳統 Yamaha 的溫潤音色與現代串流機的便利性。聲音自然流暢，細節豐富，是一款非常耐聽的數位訊源。",
    pairingAdvice: "功能強大，內建擴大機，只需一對喇叭就能組成一套完整的系統。非常適合追求簡潔、高品質音樂生活的現代家庭。",
    physicsNote: "多功能串流擴大機，支援 Yamaha 的 MusicCast 多房間串流系統，並搭載 YPAO™ 空間校正技術，能根據房間聲學特性自動優化聲音。",
    novashinVerdict: "數位時代的音響中心，一台搞定所有事。外觀復古，功能先進，聲音好聽。對於不想折騰器材，只想好好聽音樂的人來說，這是窮人福音，也是懶人救星。"
  },
  {
    id: "yg-carmel2",
    brand: "YG Acoustics",
    model: "Carmel 2",
    type: "speaker",
    sonicSignature: "在小巧的落地箱體中，展現出驚人的聲音密度與動態。聲音凝聚、精準，音場的深度與寬度都遠超其體型。",
    pairingAdvice: "非常適合在中小空間中追求極致音質的發燒友。不要被它的體積所騙，它對擴大機的質與量依然有很高的要求。",
    physicsNote: "YG 最小的落地喇叭，但依然採用了全鋁合金箱體與 BilletCore™ 單體，技術上毫不妥協。",
    novashinVerdict: "音響界的小鋼炮，扮豬吃老虎的典型。它證明了小喇叭一樣可以有極致的Hi-End表現。是『小空間、大野心』的另一個完美解答。"
  },
  {
    id: "yg-hailey2.2",
    brand: "YG Acoustics",
    model: "Hailey 2.2",
    type: "speaker",
    sonicSignature: "在 YG 的精準與解析基礎上，多了一絲音樂的溫度與流暢感。音場表現依然是頂級水準，但聲音更具親和力。",
    pairingAdvice: "對擴大機的搭配略為寬容，除了追求極致解析，也可以嘗試搭配音色略帶溫暖的擴大機，以獲取更佳的音樂性。",
    physicsNote: "YG 的中堅主力，同樣採用全鋁合金箱體與 BilletCore™ 單體。是 YG 在極致音響性與音樂性之間取得平衡的嘗試。",
    novashinVerdict: "YG 家族裡的親善大使。它依然快如閃電、透明如水，但學會了微笑。對於那些覺得 YG 太過冷靜的發燒友，Hailey 會讓你重新認識這個品牌。"
  },
  {
    id: "yg-peaks",
    brand: "YG Acoustics",
    model: "Peaks",
    type: "speaker",
    sonicSignature: "這是YG新推出的系列，旨在用更低的價格提供YG的核心聲音美學。聲音同樣快速、乾淨、解析力高，但可能在極致的密度感與權威感上有所妥協。",
    pairingAdvice: "更容易驅動，對擴大機的要求相對較低，讓更多人有機會體驗YG之聲。是進入YG世界的第一張門票。",
    physicsNote: "Peaks系列採用混合式箱體，前面板是實心鋁材，箱體其他部分則是厚實的樹脂複合材料，單體技術則承襲自高階系列。",
    novashinVerdict: "YG的『窮人福音』系列，雖然這個『窮』是相對的。它讓YG不再是遙不可及的夢想。CP值在YG家族裡算是爆表了。"
  },
  {
    id: "yg-sonja2.3",
    brand: "YG Acoustics",
    model: "Sonja 2.3",
    type: "speaker",
    sonicSignature: "承襲旗艦的超高解析力與透明度，但規模感與低頻延伸略為收斂。聲音同樣是精準、快速、中性的路線。",
    pairingAdvice: "搭配難度絲毫不減，依然需要大功率、高控制力、音質純淨的擴大機來伺候。空間適應性比 XV 好一些。",
    physicsNote: "Sonja 系列的次旗艦，採用模組化設計，可以從 2.1 升級到 2.2 或 2.3。箱體與單體技術與旗艦一脈相承。",
    novashinVerdict: "如果 Sonja XV 是航空母艦，那 2.3 就是巡洋艦。體型小了點，但戰鬥力依然驚人。對於空間和預算都差那麼一點點的頂級玩家來說，這是個「相對」務實的選擇。"
  },
  {
    id: "yg-sonjaxv",
    brand: "YG Acoustics",
    model: "Sonja XV",
    type: "speaker",
    sonicSignature: "極致的解析力、驚人的瞬態反應、龐大而精準的音場。聲音極度透明，彷彿器材消失在空間中，只剩下音樂本身。",
    pairingAdvice: "對前端器材的要求是天文數字級別。任何一絲瑕疵都會被無情地放大。需要頂級中的頂級擴大機與訊源，以及完美的空間聲學處理。",
    physicsNote: "旗艦型號，箱體完全由航太級鋁合金經 CNC 精密加工而成，杜絕任何箱體諧振。採用獨家的 BilletCore™ 中低音單體與 ForgeCore™ 高音單體，振膜也是由實心鋁塊切削而成。",
    novashinVerdict: "音響界的 F-22 猛禽戰鬥機，技術力的極致展現。它的聲音沒有一絲贅肉，精準到令人髮指。這是富人中的富人才能擁有的玩具，也是聲音的終極照妖鏡。"
  },
  {
    id: "yg-vantage",
    brand: "YG Acoustics",
    model: "Vantage",
    type: "speaker",
    sonicSignature: "聲音能量充沛，動態對比強烈，低頻衝擊力十足，同時保有YG一貫的高解析與精準定位。",
    pairingAdvice: "需要大電流擴大機來滿足其對能量的渴求。非常適合大編制交響樂與動態強烈的電影音效。",
    physicsNote: "定位於Hailey與Sonja之間，三音路設計，搭載了更大尺寸的BilletCore™低音單體，以提供更強勁的低頻表現。",
    novashinVerdict: "YG家族裡的肌肉男。它不跟你囉嗦，直接用拳拳到肉的聲音衝擊你的感官。聽馬勒、聽搖滾、看《環太平洋》，爽度絕對破錶。"
  }
];

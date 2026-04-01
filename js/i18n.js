/* =========================================
   i18n.js - 国际化字典 (包含川农大本科学历)
   ========================================= */

const translations = {
    "en": {
        "nav-home": "Home", "nav-works": "Selected Works", "nav-about": "About Me", "nav-back": "← Back to Archive",
        "hero-label": "LANDSCAPE PORTFOLIO", "hero-subtitle": "SYSTEMIC ECOLOGIES & SPATIAL NARRATIVES",
        "footer-profile-label": "Profile / Milan & Xi'an",
        "footer-bio": "MSc. Landscape Architecture at Politecnico di Milano. Advancing parametric and computational design through ASA. Specializing in resilient environments that bridge ecological infrastructure with human-centric spatial experiences.",
        "footer-bio-link": "Full Biography →", "footer-edu-label": "Education", "footer-edu-text": "POLITECNICO DI MILANO<br>ASA ADVANCED COURSES",
        "footer-connect-label": "Connect", "footer-rights": "© 2026 WU HAIWEN. ALL RIGHTS RESERVED.",
        
        "arc-title": "Project Archive", "arc-sub": "Chronological Index 2021—2026",
        "arc-cat-selected": "Selected Works", "arc-cat-other": "Other Works",
        "type-eco": "Ecological Restoration", "type-urban": "Urban Public Space", "type-rural": "Rural Revitalization", "type-reuse": "Adaptive Reuse", "type-detail": "Detail & Materiality", "type-visual": "Visual Arts",
        "p-photo": "Photography", "p-sketch": "Sketches & Drawings",
        
        "about-manifesto": "Landscape is not a static backdrop, but a dynamic, living system. We design frameworks for nature and humanity to co-author the future.",
        "about-edu-title": "Education", "about-skill-title": "Core Expertise", "skill-digital": "Digital Craft", "skill-strategy": "Design Strategy", "skill-analog": "Analog & Communication",
        "next-label": "Next Project",

        /* 🌟 新增：教育背景的精准时间与描述翻译 */
        "about-edu-milan-date": "2024 — Present",
        "about-edu-milan-desc": "MSc. Landscape Architecture. Land Landscape Heritage.",
        "about-edu-sicau-date": "2019 — 2024",
        "about-edu-sicau-title": "SICHUAN AGRICULTURAL UNIVERSITY",
        "about-edu-sicau-desc": "Bachelor of Landscape Architecture.",
        
        "p1-meta": "Ecological Restoration / 2024", "p1-title": "Suzhou Creek Waterfront", "p1-loc-label": "Location", "p1-loc-val": "Shanghai, China", "p1-scale-label": "Scale", "p1-scale-val": "12 Hectares", "p1-type-label": "Typology", "p1-type-val": "Riparian Wetland", "p1-status-label": "Status", "p1-status-val": "Built (Phase I)", "p1-statement": "Reimagining the fragmented urban edge into a resilient wetland system. The design fosters ecological diversity while providing an immersive spatial narrative, turning neglected infrastructure into a vital urban lung.", "p1-h3-1": "Parametric Water Logic", "p1-p-1": "The topography is computationally generated to simulate historical flood patterns. By utilizing Grasshopper, the terrain steps are optimized to accommodate a 50-year storm event.", "p1-cap-1": "Fig 1. Sunken Boardwalk integrated with the tide cycle.", "p1-cap-2": "Fig 2. Algorithmic distribution of permeable paving.", "p1-cap-3": "Fig 3. Material articulation: Pre-cast concrete and weathered steel.", "p1-h3-2": "Ecological Transect", "p1-p-2": "A continuous section revealing the gradient from the dense urban fabric to the restorative riparian edge, highlighting soil bioengineering techniques.", "p1-cap-4": "Fig 4. Transverse ecological section.", "p1-next-title": "Plaza Regeneration →",

        "p2-meta": "Urban Public Space / 2023", "p2-title": "Plaza Regeneration", "p2-loc-val": "Milan, Italy", "p2-scale-val": "5 Hectares", "p2-type-val": "Urban Plaza", "p2-status-val": "Competition - 1st Prize", "p2-statement": "A tactical urbanism intervention that reclaims vehicle-dominated intersections for pedestrians, creating a fluid, multi-functional civic space driven by micro-climate analysis.", "p2-h3-1": "Climate-Responsive Canopy", "p2-p-1": "Using environmental simulation tools to map solar radiation and wind corridors, proposing a modular shading system that lowers surface temperatures by 4°C during summer.", "p2-cap-1": "Fig 1. Radiation analysis and shading optimization.", "p2-cap-2": "Fig 2. Civic gathering space under the parametric canopy.", "p2-cap-3": "Fig 3. Permeable urban furniture details.", "p2-h3-2": "Social Choreography", "p2-p-2": "The paving pattern acts as a subtle guide for movement, defining zones of transit and lingering without physical barriers.", "p2-cap-4": "Fig 4. Paving pattern generation mapping.", "p2-next-title": "Sustainable Camp →",

        "p3-meta": "Rural Revitalization / 2022", "p3-title": "Sustainable Camp", "p3-loc-val": "Xi'an, China", "p3-scale-val": "20 Hectares", "p3-type-val": "Eco-Tourism", "p3-status-val": "Concept Proposal", "p3-statement": "A low-impact eco-tourism framework nested in the Qinling Mountains. The project balances rural economic activation with strict ecological conservation boundaries.", "p3-h3-1": "Topographical Insertion", "p3-p-1": "Structures are delicately inserted into the steep terrain using stilt foundations, minimizing soil excavation and preserving the natural hydrological flows of the mountain.", "p3-cap-1": "Fig 1. Stilt cabins merging with the forest canopy.", "p3-cap-2": "Fig 2. Minimum-impact boardwalk construction.", "p3-cap-3": "Fig 3. Local timber tectonic joints.", "p3-h3-2": "Water Metabolism", "p3-p-2": "A closed-loop water system utilizing decentralized constructed wetlands to treat greywater on-site before releasing it back to the watershed.", "p3-cap-4": "Fig 4. Greywater treatment wetland diagram.", "p3-next-title": "Post-Industrial Park →",

        "p4-meta": "Adaptive Reuse / 2021", "p4-title": "Post-Industrial Park", "p4-loc-val": "Turin, Italy", "p4-scale-val": "15 Hectares", "p4-type-val": "Brownfield", "p4-status-val": "Built (Phase II)", "p4-statement": "Transforming a former automotive manufacturing plant into a post-industrial landscape. The design treats contamination through phytoremediation and preserves industrial ruins as cultural artifacts.", "p4-h3-1": "Phytoremediation Grid", "p4-p-1": "A grid of hyperaccumulator plants is deployed across the site to extract heavy metals from the soil, turning the cleanup process into a visible, educational landscape.", "p4-cap-1": "Fig 1. The remediation grid intersecting with factory ruins.", "p4-cap-2": "Fig 2. Seasonal changes of hyperaccumulator species.", "p4-cap-3": "Fig 3. Industrial steel repurposed as pedestrian bridges.", "p4-h3-2": "Ruin as Tectonics", "p4-p-2": "Retaining the concrete skeletons of the factory halls to frame new ecological successions, blurring the lines between nature and machine.", "p4-cap-4": "Fig 4. Succession planting within the concrete nave.", "p4-next-title": "Rooftop Garden Details →",

        "p5-meta": "Detail & Materiality / 2020", "p5-title": "Rooftop Garden Details", "p5-loc-val": "Shanghai, China", "p5-scale-val": "0.5 Hectares", "p5-type-val": "Commercial Roof", "p5-status-val": "Built", "p5-statement": "An intensive exploration of construction details in a constrained rooftop environment. The project focuses on lightweight soil substrates, precise water management, and bespoke material junctions.", "p5-h3-1": "Weight and Water", "p5-p-1": "Designing a layered substrate system that meets strict structural load limits while maximizing water retention capacity for intense summer storms.", "p5-cap-1": "Fig 1. Axonometric view of the lightweight planting substrate.", "p5-cap-2": "Fig 2. Invisible drainage channel details.", "p5-cap-3": "Fig 3. Custom corten steel planters meeting timber decking.", "p5-h3-2": "Sensory Materiality", "p5-p-2": "Selecting materials that weather gracefully—untreated timber, corten steel, and textured concrete—providing tactile richness to the urban oasis.", "p5-cap-4": "Fig 4. Material palette and aging process.", "p5-next-title": "Suzhou Creek Waterfront →",

        "photo-title": "Photography",
        "photo-desc": "Capturing spatial phenomenology, light, and the fleeting moments of urban metabolism.",
        "sketch-title": "Sketches & Drawings",
        "sketch-desc": "Analog explorations of form, tectonics, and the raw dialogue between hand and paper.",
        "series-1-title": "SERIES 01: URBAN METABOLISM",
        "series-2-title": "SERIES 02: SPATIAL PHENOMENOLOGY"
    },
    "cn": {
        "nav-home": "首页", "nav-works": "精选作品", "nav-about": "关于我", "nav-back": "← 返回作品集",
        "hero-label": "景观建筑作品集", "hero-subtitle": "系统化生态与空间叙事",
        "footer-profile-label": "个人简介 / 米兰 & 西安",
        "footer-bio": "米兰理工大学景观建筑学硕士。目前通过 ASA 进修参数化与计算化设计。专注于打造具有韧性的生态环境，在宏观生态基础设施与微观人类空间体验之间建立连结。",
        "footer-bio-link": "完整履历 →", "footer-edu-label": "教育背景", "footer-edu-text": "米兰理工大学 (POLIMI)<br>ASA 建筑与景观高级计算",
        "footer-connect-label": "联系方式", "footer-rights": "© 2026 吴海闻. 保留所有权利.",
        
        "arc-title": "作品档案库", "arc-sub": "作品编年索引 2021—2026",
        "arc-cat-selected": "日常作品", "arc-cat-other": "其他作品",
        "type-eco": "生态修复", "type-urban": "城市公共空间", "type-rural": "乡村振兴", "type-reuse": "适应性再利用", "type-detail": "构造与细节", "type-visual": "视觉艺术",
        "p-photo": "摄影", "p-sketch": "绘画草图",
        
        "about-manifesto": "景观并非静态的背景，而是一个动态的生命系统。我们为自然与人类共同书写未来而设计框架。",
        "about-edu-title": "教育背景", "about-skill-title": "核心专长", "skill-digital": "数字营造", "skill-strategy": "设计策略", "skill-analog": "模拟与沟通",
        "next-label": "下一个项目",
        
        /* 🌟 新增：教育背景的精准时间与描述翻译 */
        "about-edu-milan-date": "2024 — 至今",
        "about-edu-milan-desc": "景观建筑学硕士。土地景观遗产方向。",
        "about-edu-sicau-date": "2019 — 2024",
        "about-edu-sicau-title": "四川农业大学 (SICAU)",
        "about-edu-sicau-desc": "风景园林学士。",
        
        "p1-meta": "生态修复 / 2024", "p1-title": "苏州河滨水空间", "p1-loc-label": "项目地点", "p1-loc-val": "中国，上海", "p1-scale-label": "项目规模", "p1-scale-val": "12 公顷", "p1-type-label": "项目类型", "p1-type-val": "滨水湿地", "p1-status-label": "项目状态", "p1-status-val": "已建成 (一期)", "p1-statement": "重塑破碎的城市边缘，将其转化为极具韧性的湿地系统。该设计在培育生态多样性的同时，提供了沉浸式的空间叙事，将废弃的基础设施转化为至关重要的城市绿肺。", "p1-h3-1": "参数化水文逻辑", "p1-p-1": "地形通过计算生成，以模拟历史洪水模式。借助 Grasshopper，地形阶地经过优化以抵御 50 年一遇的暴雨。", "p1-cap-1": "图 1. 与潮汐周期相融合的下沉栈道。", "p1-cap-2": "图 2. 透水铺装的算法分布。", "p1-cap-3": "图 3. 材质表达：预制混凝土与耐候钢。", "p1-h3-2": "生态剖面", "p1-p-2": "连续的剖面展示了从高密度城市肌理到生态修复边缘的过渡，突出了土壤生物工程技术的应用。", "p1-cap-4": "图 4. 横向生态剖面图。", "p1-next-title": "广场空间更新 →",

        "p2-meta": "城市公共空间 / 2023", "p2-title": "广场空间更新", "p2-loc-val": "意大利，米兰", "p2-scale-val": "5 公顷", "p2-type-val": "城市广场", "p2-status-val": "竞赛 - 一等奖", "p2-statement": "一项战术性城市主义干预，将机动车主导的十字路口归还给行人，通过微气候分析驱动，打造出一个流动的、多功能的市民空间。", "p2-h3-1": "气候响应型雨篷", "p2-p-1": "利用环境模拟工具绘制太阳辐射和风道映射，提出了一种模块化遮阳系统，使夏季地表温度降低 4°C。", "p2-cap-1": "图 1. 辐射分析与遮阳优化图解。", "p2-cap-2": "图 2. 参数化雨篷下的市民聚集空间。", "p2-cap-3": "图 3. 透水性城市家具细部。", "p2-h3-2": "社会性空间编舞", "p2-p-2": "铺装图案充当了细微的动线向导，在没有物理障碍的情况下界定了通行区和停留区。", "p2-cap-4": "图 4. 铺装图案生成映射。", "p2-next-title": "可持续生态营地 →",

        "p3-meta": "乡村振兴 / 2022", "p3-title": "可持续生态营地", "p3-loc-val": "中国，西安", "p3-scale-val": "20 公顷", "p3-type-val": "生态旅游", "p3-status-val": "概念提案", "p3-statement": "镶嵌于秦岭山脉中的低影响生态旅游框架。该项目在乡村经济激活与严格的生态保护红线之间取得了平衡。", "p3-h3-1": "地形的低干预植入", "p3-p-1": "建筑结构通过高脚柱基础轻巧地植入陡峭的地形中，最大限度地减少了土壤挖掘，保护了山体自然的表面水文径流。", "p3-cap-1": "图 1. 融入森林冠层的高脚木屋。", "p3-cap-2": "图 2. 最低环境影响的栈道施工图解。", "p3-cap-3": "图 3. 本土木材的建构节点。", "p3-h3-2": "水文代谢", "p3-p-2": "一个闭环水系统，利用分散式人工湿地在场地内处理中水，然后再将其释放回自然流域。", "p3-cap-4": "图 4. 灰水处理湿地系统图解。", "p3-next-title": "后工业遗址公园 →",

        "p4-meta": "适应性再利用 / 2021", "p4-title": "后工业遗址公园", "p4-loc-val": "意大利，都灵", "p4-scale-val": "15 公顷", "p4-type-val": "棕地改造", "p4-status-val": "已建成 (二期)", "p4-statement": "将前汽车制造厂改造为后工业景观。该设计通过植物修复技术处理污染，并将工业废墟作为文化遗存加以保护。", "p4-h3-1": "植物修复网格", "p4-p-1": "在场地内部署了超富集植物网格，以提取土壤中的重金属，将清理过程转化为可见的、具有教育意义的景观。", "p4-cap-1": "图 1. 修复网格与工厂废墟的交汇。", "p4-cap-2": "图 2. 超富集植物物种的季节变化。", "p4-cap-3": "图 3. 工业钢材再利用改造为步行桥。", "p4-h3-2": "废墟即建构", "p4-p-2": "保留了工厂车间的混凝土骨架，以此来框定新的生态演替，模糊了自然与机器之间的界限。", "p4-cap-4": "图 4. 混凝土主厅内的自然演替种植。", "p4-next-title": "屋顶花园构造细节 →",

        "p5-meta": "构造与细节 / 2020", "p5-title": "屋顶花园构造细节", "p5-loc-val": "中国，上海", "p5-scale-val": "0.5 公顷", "p5-type-val": "商业屋顶", "p5-status-val": "已建成", "p5-statement": "在受限的屋顶环境中对构造细节的深入探索。该项目专注于轻质土壤基质、精确的水资源管理以及定制的材料连接节点。", "p5-h3-1": "重量与水文控制", "p5-p-1": "设计了一个多层基质系统，在满足严格的结构荷载限制的同时，最大限度地提高了应对夏季暴雨的蓄水能力。", "p5-cap-1": "图 1. 轻质种植基质轴测剖面。", "p5-cap-2": "图 2. 隐藏式排水沟构造细节。", "p5-cap-3": "图 3. 定制耐候钢种植池与木甲板的交接。", "p5-h3-2": "感官材料性", "p5-p-2": "选择能够优雅老化的材料——未经处理的木材、耐候钢和肌理混凝土——为这座城市绿洲提供了丰富的触觉体验。", "p5-cap-4": "图 4. 材料调色板及其岁月老化过程。", "p5-next-title": "苏州河滨水空间 →",

        "photo-title": "摄影记录",
        "photo-desc": "捕捉空间现象学、光影的流转，以及城市代谢的瞬间。",
        "sketch-title": "绘画与草图",
        "sketch-desc": "关于形态与建构的模拟探索，记录手与纸之间最原始的对话。",
        "series-1-title": "系列 01：城市代谢",
        "series-2-title": "系列 02：空间现象学"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('whw_lang') || 'en';
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
        const toggleBtns = document.querySelectorAll('.lang-toggle');
        toggleBtns.forEach(btn => {
            btn.textContent = lang === 'en' ? '中 / CN' : 'EN';
        });
    }
    applyTranslations(currentLang);
    const toggleBtns = document.querySelectorAll('.lang-toggle');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'cn' : 'en';
            localStorage.setItem('whw_lang', currentLang);
            window.location.reload();
        });
    });
});
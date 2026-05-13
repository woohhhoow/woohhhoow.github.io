/* =========================================
   i18n.js - 国际化字典 (全量项目：RSS + SOL + ISP + BOW)
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
        "about-edu-milan-date": "2024 — Present", "about-edu-milan-desc": "MSc. Landscape Architecture. Land Landscape Heritage.",
        "about-edu-sicau-date": "2019 — 2024", "about-edu-sicau-title": "SICHUAN AGRICULTURAL UNIVERSITY", "about-edu-sicau-desc": "Bachelor of Landscape Architecture.",
        "next-label": "Return to Journey",
        "home-next-title": "HOME →",

        // --- 🌟 Project 01: Riders' Supply Station (RSS) ---
        "rss-meta": "Urban Service Design / 2022",
        "rss-title": "RIDERS' SUPPLY STATION",
        "rss-loc-label": "Location", "rss-loc-val": "Chengdu, China",
        "rss-type-label": "Typology", "rss-type-val": "Urban Service / Infrastructure",
        "rss-user-label": "Target Users", "rss-user-val": "Riders, Residents, Pedestrians",
        "rss-status-label": "Status", "rss-status-val": "Academic Project / Concept",
        "rss-statement": "RIDERS' SUPPLY STATION responds to the lack of daily support infrastructure for riders in high-density urban environments. By transforming overlooked urban gaps into a modular network, the design provides spaces for rest, recharge, and community interaction through a smart digital-physical platform.",
        "rss-cap-1": "The cover presents the project’s core vision: creating a temporary urban refuge for delivery riders who constantly move through the city.",
        "rss-cap-2": "The mapping analyzes rider routes, pick-up areas, gathering points, rest locations, and surrounding urban conditions to identify suitable intervention sites.",
        "rss-cap-3": "This page defines riders’ behavioral, psychological, and spatial challenges, then translates them into modular strategies for rest, parking, charging, and communication.",
        "rss-cap-4": "The planning system organizes rider services through three spatial types: point nodes, linear corridors, and surface-based public spaces.",
        "rss-cap-5": "The final proposal combines physical supply stations with a smart platform, supporting riders through battery exchange, parking, rest, and daily service rewards.",

        // --- 🌟 Project 02: Subtraction of Land (SOL) ---
        "sol-meta": "Rural Renewal Design / 2023",
        "sol-title": "SUBTRACTION OF LAND",
        "sol-loc-val": "Xianyang, Shaanxi, China",
        "sol-type-val": "Rural Renewal / Heritage",
        "sol-user-val": "Villagers, Visitors, Communities",
        "sol-status-val": "Concept Proposal",
        "sol-statement": "SUBTRACTION OF LAND is a rural renewal design project based on the transformation of Dikeng village in Sanyuan County, Shaanxi. The project focuses on the preservation and reinterpretation of traditional pit courtyard dwellings, using spatial renovation, public space reorganization, and ecological improvement to reconnect rural heritage with contemporary living needs. By integrating the daily life of villagers with the experience of visitors, the design proposes a shared village model that supports cultural tourism, community interaction, and long-term rural vitality.",
        "sol-cap-1": "Fig 1. The cover introduces the project as a bridge between rural memory and contemporary village life.",
        "sol-cap-2": "Fig 2. Site Research & Village Evolution: Mapping the decline and transformation potential of the site.",
        "sol-cap-3": "Fig 3. Pit Courtyard Typology & Existing Issues: Identifying core spatial and structural challenges.",
        "sol-cap-4": "Fig 4. Renovation Strategies & Master Plan: Reorganizing the village through a shared model.",
        "sol-cap-5": "Fig 5. Architectural Space Transformation: Adapting traditional dwellings to contemporary needs.",
        "sol-cap-6": "Fig 6. Public Spatial Combing: Creating visitor routes, shared courtyards, and woodland rest areas.",
        "sol-cap-7": "Fig 7. Ecological Improvement & Shared Village Vision: A healthier and more sustainable living environment.",

        // --- 🌟 Project 03: Island Survival Program (ISP) ---
        "isp-meta": "Climate Adaptation Design / 2023",
        "isp-title": "ISLAND SURVIVAL PROGRAM",
        "isp-loc-val": "Pulau Poaboloki, Indonesia",
        "isp-type-val": "Speculative Spatial Design",
        "isp-user-val": "Island ecosystems, mariners, future communities",
        "isp-status-val": "Concept Proposal",
        "isp-statement": "ISLAND SURVIVAL PROGRAM is a speculative landscape and climate adaptation project based on Pulau Poaboloki Island in the Indonesian archipelago. Facing the long-term threat of sea-level rise, the project imagines the island as a living entity that seeks to protect itself, preserve its ecological value, and build a new relationship with human visitors before its gradual disappearance. Through coastal protection, ecological restoration, recreational routes, underwater experiences, and a memorial tower, the design transforms the island into a temporal landscape that records climate change, supports coexistence, and preserves collective memory.",
        "isp-cap-1": "Fig 1. The vision rendering presents the island as a fragile yet poetic landscape, where the lighthouse becomes a symbolic marker of survival.",
        "isp-cap-2": "Fig 2. The cover introduces the project as a monument to nature, imagining the island as both a carrier of time and a living landscape.",
        "isp-cap-3": "Fig 3. Site Research & Threat Mapping: Analyzing geographic position, risk areas, and potential routes for future intervention.",
        "isp-cap-4": "Fig 4. Sea-Level Rise Records & Design Aims: Visualizing gradual disappearance and defining aims of recognition, interaction, and memorization.",
        "isp-cap-5": "Fig 5. Master Plan & Intervention System: Organizing the island through protection, construction, and commemoration strategies.",
        "isp-cap-6": "Fig 6. Phased Sea-Level Adaptation: Showing how the island adapts across different future phases via elevated transport systems.",
        "isp-cap-7": "Fig 7. Future Experience Scenarios: Imagining human encounters with the island across time, including underwater discovery.",
        "isp-cap-8": "Fig 8. Tower of Memory: Preserving fragments of the island through viewing, storage, and memory collection as the final symbol of existence.",

        // --- 🌟 Project 04: Breath of the Wilderness (BOW) ---
        "bow-meta": "Environmental Installation / 2023",
        "bow-title": "BREATH OF THE WILDERNESS",
        "bow-loc-val": "Orick, California, USA",
        "bow-type-val": "Wilderness Shelter Design",
        "bow-user-val": "Explorers, hikers, wildlife",
        "bow-status-val": "Concept Proposal / Physical Model",
        "bow-statement": "BREATH OF THE WILDERNESS is an experiential shelter project designed for explorers and wildlife in Redwood National Park. The project proposes a lightweight vertical structure that offers hikers a place for short rest, observation, and immersion within the forest. Inspired by the geometric logic of traditional Chinese lanterns, the design develops a modular folded skin that combines enclosure, transparency, and environmental responsiveness. More than a resting space, the project imagines architecture as a medium of communication between humans and animals, creating a shared atmosphere of curiosity, coexistence, and discovery in the wilderness.",
        "bow-cap-1": "Fig 1. The cover introduces the project as a poetic meeting point between the explorer and the forest, presenting the shelter as a gift discovered in the wilderness.",
        "bow-cap-2": "Fig 2. Concept Research & Component Generation: From lantern geometry to a modular wilderness shelter.",
        "bow-cap-3": "Fig 3. Spatial Drawings & Experience Rendering: Highlighting stargazing, resting, and coexistence with animals.",
        "bow-cap-4": "Fig 4. Handmade Model & Assembly Process: Emphasizing the tactile construction process and folded modular system."
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
        "about-edu-milan-date": "2024 — 至今", "about-edu-milan-desc": "景观建筑学硕士。土地景观遗产方向。",
        "about-edu-sicau-date": "2019 — 2024", "about-edu-sicau-title": "四川农业大学 (SICAU)", "about-edu-sicau-desc": "风景园林学士。",
        "next-label": "返回旅程",
        "home-next-title": "返回首页 →",

        // --- 🌟 Project 01: Riders' Supply Station (RSS) ---
        "rss-meta": "城市服务设计 / 2022",
        "rss-title": "骑手补给站",
        "rss-loc-label": "项目地点", "rss-loc-val": "中国，成都",
        "rss-type-label": "项目类型", "rss-type-val": "城市服务 / 社区基础设施",
        "rss-user-label": "目标用户", "rss-user-val": "外卖骑手、居民、行人",
        "rss-status-label": "项目状态", "rss-status-val": "学术项目 / 概念提案",
        "rss-statement": "“骑手补给站”是一个面向外卖骑手与社区居民的公共服务设计。项目将被忽视的城市灰空间转化为模块化的补给网络，提供休息、换电与社交场所，并通过智慧平台构建更具包容性的城市支持系统。",
        "rss-cap-1": "封面呈现项目的核心愿景：为不断穿行于城市中的外卖骑手创造一个临时性的城市庇护所。",
        "rss-cap-2": "调研地图分析骑手路径、取餐区域、聚集点及休息位置，用于定位适合介入的空间节点。",
        "rss-cap-3": "归纳骑手在行为、心理与空间层面的主要问题，并将其转化为休息、停车、充电与交流等模块化设计策略。",
        "rss-cap-4": "空间规划系统通过点状节点、线性空间与面状公共空间三种类型，组织骑手服务网络。",
        "rss-cap-5": "最终方案将实体补给站与智慧平台结合，为骑手提供换电、停车、休息与日常服务奖励支持。",

        // --- 🌟 Project 02: Subtraction of Land (SOL) ---
        "sol-meta": "乡村更新设计 / 2023",
        "sol-title": "土地的减法",
        "sol-loc-val": "中国，陕西咸阳",
        "sol-type-val": "乡村更新 / 文旅规划",
        "sol-user-val": "村民、游客、社区",
        "sol-status-val": "概念提案",
        "sol-statement": "“土地的减法”是一个基于陕西三原地坑村改造的乡村更新设计项目。项目以传统地坑院居住形态的保护与再转译为核心，通过建筑空间更新、公共空间梳理与生态环境改善，将乡村遗产与当代生活需求重新连接。设计在保留村民日常生活的基础上，引入游客体验与文旅功能，提出一种兼具文化传承、社区互动与乡村持续活力的共享村庄模式。",
        "sol-cap-1": "图 1. 封面将项目呈现为乡村记忆与当代村庄生活之间的连接。",
        "sol-cap-2": "图 2. 场地调研与演变：分析村庄结构、人口变化与更新潜力。",
        "sol-cap-3": "图 3. 类型与现状问题：识别交通不便、建筑破损等核心矛盾。",
        "sol-cap-4": "图 4. 更新策略与总体规划：构建面向村民与游客共享使用的乡村更新模式。",
        "sol-cap-5": "图 5. 建筑空间转化：使传统居住空间适应当代使用需求。",
        "sol-cap-6": "图 6. 公共空间梳理：形成游览路径、共享院落与林下休憩区。",
        "sol-cap-7": "图 7. 生态改善与愿景：将村庄转化为更健康、可持续的生活环境。",

        // --- 🌟 Project 03: Island Survival Program (ISP) ---
        "isp-meta": "气候适应性设计 / 2023",
        "isp-title": "岛屿生存计划",
        "isp-loc-val": "印尼，Pulau Poaboloki 岛",
        "isp-type-val": "推测性空间设计",
        "isp-user-val": "生态系统、旅行者、滨海社区",
        "isp-status-val": "概念提案",
        "isp-statement": "“岛屿生存计划”是一个基于印度尼西亚群岛 Pulau Poaboloki 岛的推测性景观与气候适应设计项目。面对海平面上升带来的长期威胁，项目将岛屿想象为一个具有生命意识的主体：它希望在逐渐消失之前保护自身、保存生态价值，并与人类游客建立新的关系。设计通过海岸保护、生态修复、游览路径、水下体验与纪念塔系统，将岛屿转化为一个记录气候变化、支持共生关系并保存集体记忆的时间性景观。",
        "isp-cap-1": "图 1. 愿景图将岛屿呈现为一个脆弱而诗性的景观空间，灯塔成为生存与记忆的象征。",
        "isp-cap-2": "图 2. 封面将项目定义为一座献给自然的纪念碑，将岛屿想象为时间的载体。",
        "isp-cap-3": "图 3. 场地调研与风险：分析岛屿地理位置、海平面威胁与未来空间介入路径。",
        "isp-cap-4": "图 4. 海平面记录与目标：展示岛屿消失的过程，提出被认知、互动与记忆的目标。",
        "isp-cap-5": "图 5. 总体规划与系统：通过保护、建构与纪念三类策略组织岛屿空间。",
        "isp-cap-6": "图 6. 分阶段适应：展示岛屿在不同未来阶段的适应方式与架空交通系统。",
        "isp-cap-7": "图 7. 未来体验场景：想象人类在不同阶段与岛屿相遇的方式，包括水下发现。",
        "isp-cap-8": "图 8. 记忆之塔：通过观景与储存保存岛屿的碎片，并在海面上升中成为最终象征。",

        // --- 🌟 Project 04: Breath of the Wilderness (BOW) ---
        "bow-meta": "环境装置设计 / 2023",
        "bow-title": "荒野之息",
        "bow-loc-val": "美国加州，奥里克",
        "bow-type-val": "荒野庇护空间设计",
        "bow-user-val": "徒步者、访客、野生动物",
        "bow-status-val": "概念提案 / 实体模型",
        "bow-statement": "“荒野之息”是一个为探索者与野生动物而设计的体验式庇护空间项目，场地位于红木国家公园。项目提出一种轻型的垂直空间结构，为徒步者在森林中提供短暂停留、观察与沉浸体验的场所。设计受到传统中国灯笼几何逻辑的启发，发展出兼具围合感、通透性与环境回应性的折叠模块化表皮。它不仅是一个休息空间，也将建筑想象为人与动物之间的沟通媒介，在荒野中营造一种共处、好奇与发现的共享氛围。",
        "bow-cap-1": "图 1. 封面将项目定义为探索者与森林相遇的诗性场所，是在荒野中被发现的“礼物”。",
        "bow-cap-2": "图 2. 概念研究与构件：展示结构如何从灯笼几何演化为模块化的荒野庇护空间。",
        "bow-cap-3": "图 3. 空间图纸与体验：突出观星、沐光、停留与野生动物共处的空间特质。",
        "bow-cap-4": "图 4. 手工模型与组装：记录实体结构细节，突出项目具有触感的建构过程与模块系统。"
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
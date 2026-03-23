/* =========================================
   Wu Haiwen Portfolio - 高级交互脚本
   ========================================= */

// --- A. 滚动可见淡入 (Intersection Observer API) ---
const reveals = document.querySelectorAll('.reveal');
const observerOptions = { threshold: 0.15 }; // 视口内 15% 可见时触发

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 触发后停止观察，性能优化
        }
    });
}, observerOptions);

reveals.forEach(reveal => observer.observe(reveal));

// --- B. Hero 首屏鼠标跟随视差效果 ---
const hero = document.getElementById('hero');
if (hero) {
    const heroBg = document.getElementById('heroBg');
    const heroContent = document.getElementById('heroContent');

    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // 计算鼠标相对于屏幕中心的偏移量，范围: -1 ~ 1
        const moveX = (clientX - innerWidth / 2) / (innerWidth / 2);
        const moveY = (clientY - innerHeight / 2) / (innerHeight / 2);

        // 增强背景的偏移量 (增加深度空间感)
        const bgOffset = 30; // 偏移像素
        if (heroBg) {
            heroBg.style.transform = `translate(${moveX * bgOffset}px, ${moveY * bgOffset}px)`;
        }

        // 轻微偏移前景文字 (创造多层立体感)
        const contentOffset = -15; 
        if (heroContent) {
            heroContent.style.transform = `translate(${moveX * contentOffset}px, ${moveY * contentOffset}px)`;
        }
    });
}

// --- C. 磁性按钮交互 (Magnetic Button) ---
const magneticWrap = document.getElementById('magneticBtn');
if (magneticWrap) {
    const magneticBtn = magneticWrap.querySelector('.btn-magnetic');

    magneticWrap.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { offsetWidth, offsetHeight } = target;

        // 计算鼠标相对于按钮中心的相对位置
        const relX = (offsetX - offsetWidth / 2);
        const relY = (offsetY - offsetHeight / 2);

        // 移动整个包装器 (磁性吸附范围)
        const force = 0.3; // 吸附力度
        magneticWrap.style.transform = `translate(${relX * force}px, ${relY * force}px)`;

        // 稍微移动内部按钮文本 (增加动感)
        const textForce = 0.1;
        if (magneticBtn) {
            magneticBtn.style.transform = `translate(${relX * textForce}px, ${relY * textForce}px)`;
        }
    });

    // 鼠标离开时复位
    magneticWrap.addEventListener('mouseleave', () => {
        magneticWrap.style.transform = `translate(0px, 0px)`;
        if (magneticBtn) {
            magneticBtn.style.transform = `translate(0px, 0px)`;
        }
    });
}

// --- D. 智能导航栏滚动隐藏 ---
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (navbar) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动且超过100px -> 隐藏
            navbar.classList.add('nav-hidden');
        } else {
            // 向上滚动 -> 显示
            navbar.classList.remove('nav-hidden');
        }
    }
    lastScrollTop = scrollTop;
});
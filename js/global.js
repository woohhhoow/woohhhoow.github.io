/* =========================================
   global.js - 全局交互基建 (智能鼠标 & 呼吸导航监听)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 🌟 1. 极其严谨的设备嗅探：只在拥有精准鼠标的 PC 端开启自定义光标
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    const cursor = document.querySelector('.cursor');

    if (!isTouchDevice && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;
        const speed = 0.15; // 提高顺滑度

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            const distX = mouseX - cursorX;
            const distY = mouseY - cursorY;
            cursorX += distX * speed;
            cursorY += distY * speed;
            
            if (cursor) {
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            }
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // 悬停放大光圈效果
        const attachCursorHover = () => {
            // 注意：加入了 .lang-toggle 让语言按钮也能触发大光圈
            const hoverTargets = document.querySelectorAll('a, button, .project-row, .marquee-section, .lang-toggle');
            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => cursor && cursor.classList.add('active'));
                target.addEventListener('mouseleave', () => cursor && cursor.classList.remove('active'));
            });
        };
        attachCursorHover();
    } else {
        // 如果是触屏设备，彻底隐藏自定义光标并恢复原生交互
        if (cursor) cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }

    // 🌟 2. 导航栏呼吸式滚动监听逻辑 (Immersive Navbar)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            // 当页面向下滚动超过 60 像素时，触发“休眠吸附”状态
            if (window.scrollY > 60) {
                navbar.classList.add('is-scrolled');
            } else {
                // 回到顶部时，恢复常亮满尺寸状态
                navbar.classList.remove('is-scrolled');
            }
        }, { passive: true }); // passive: true 极大提升滚动帧率性能
    }
});
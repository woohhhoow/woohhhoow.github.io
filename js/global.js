/* =========================================
   global.js - 全局交互基建 (终极版)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 严谨的设备嗅探与智能光标
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    const cursor = document.querySelector('.cursor');

    if (!isTouchDevice && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;
        const speed = 0.15; 

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

        // 为全站的交互点绑定大光圈特效 (包括名字大门)
        const attachCursorHover = () => {
            const hoverTargets = document.querySelectorAll('a, button, .project-row, .marquee-section, .lang-toggle, .hero-name-link');
            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => cursor && cursor.classList.add('active'));
                target.addEventListener('mouseleave', () => cursor && cursor.classList.remove('active'));
            });
        };
        attachCursorHover();
    } else {
        if (cursor) cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }

    // 2. 导航栏呼吸式滚动监听逻辑
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('is-scrolled');
            } else {
                navbar.classList.remove('is-scrolled');
            }
        }, { passive: true }); 
    }
});
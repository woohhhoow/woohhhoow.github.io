/* =========================================
   global.js - 全局交互基建 (跨设备兼容版)
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
            const hoverTargets = document.querySelectorAll('a, button, .project-row, .marquee-section');
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
});
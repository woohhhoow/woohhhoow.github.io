/* =========================================
   archive.js - 手风琴逻辑与幽灵图片引擎
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    // 🌟 1. 手风琴展开/收起逻辑
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // 切换当前面板的状态 (高度由 CSS grid 动画接管)
            item.classList.toggle('active');
        });
    });

    // 🌟 2. 幽灵图片悬停逻辑
    const projectRows = document.querySelectorAll('.project-row');
    const hoverImage = document.querySelector('.hover-image-reveal');
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

    if (projectRows.length > 0 && hoverImage && !isTouchDevice) {
        
        document.addEventListener('mousemove', (e) => {
            hoverImage.style.left = e.clientX + 'px';
            hoverImage.style.top = e.clientY + 'px';
        });

        projectRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                const imgUrl = row.getAttribute('data-image');
                if (imgUrl) {
                    hoverImage.style.backgroundImage = `url(${imgUrl})`;
                    hoverImage.classList.add('visible');
                }
            });

            row.addEventListener('mouseleave', () => {
                hoverImage.classList.remove('visible');
            });
        });
    }
});
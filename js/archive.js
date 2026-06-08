/* =========================================
   archive.js - 图文画廊版逻辑引擎
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 硬件级无延迟滚动显影 (IntersectionObserver) ---
    const fadeElements = document.querySelectorAll('.fade-up');
    
    if (fadeElements.length > 0) {
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // 触发后立即取消观察，节省浏览器性能
                    observer.unobserve(entry.target); 
                }
            });
        }, { 
            threshold: 0.05, 
            rootMargin: "0px 0px -30px 0px" 
        });

        fadeElements.forEach(el => revealOnScroll.observe(el));
    }
    
});
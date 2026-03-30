/* =========================================
   project.js - 详情页视差与动效
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 滚动显现与图片高级收缩 (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal-fade, .img-wrap');
    
    const observerOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    revealElements.forEach(el => scrollObserver.observe(el));

    // --- 2. 巨幕视差滚动特效 (Parallax Scroll) ---
    const parallaxImg = document.querySelector('.parallax-img');
    
    if (parallaxImg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            // 图片缓慢位移，产生空间深度
            parallaxImg.style.transform = `translateY(${scrolled * 0.15}px)`;
        });
    }

});
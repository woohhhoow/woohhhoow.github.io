/* =========================================
   gallery.js - 横向滚动转化与渐显动画引擎
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    const horizontalTrack = document.querySelector('.horizontal-track-container');
    const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));

    // 只有在检测到横向画廊且为非触屏设备时，才开启滚轮劫持
    if (horizontalTrack && !isTouchDevice) {
        document.body.classList.add('horizontal-scroll-active');

        window.addEventListener('wheel', (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault(); 
                horizontalTrack.scrollBy({
                    left: evt.deltaY * 1.5,
                    behavior: 'auto'
                });
            }
        }, { passive: false }); 
    }

    const fadeElements = document.querySelectorAll('.fade-up');
    if (fadeElements.length > 0) {
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        fadeElements.forEach(el => revealOnScroll.observe(el));
    }
});
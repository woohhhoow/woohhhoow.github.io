/* =========================================
   about.js - 关于我页面专属交互 (滚动显现)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 获取所有需要滚动显现的元素
    const fadeElements = document.querySelectorAll('.fade-up');
    
    // 设置交叉观察器 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1, // 元素露出 10% 时触发
        rootMargin: "0px 0px -50px 0px" // 稍微提前一点触发
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 触发后取消观察，保证动画只执行一次，节省性能
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 绑定观察器
    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

});
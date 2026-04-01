/* =========================================
   gallery.js - 非对称网格与电影级灯箱引擎
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    // 🌟 1. 电影级灯箱 (Lightbox) 交互逻辑
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.editorial-item');

    if (lightbox && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const captionText = item.querySelector('.hover-caption').innerText;
                
                if (img) {
                    // 将被点击的图片和文字传入灯箱
                    lightboxImg.src = img.src;
                    lightboxCaption.innerText = captionText;
                    
                    // 显示灯箱并锁定底层滚动
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // 关闭灯箱逻辑
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // 恢复底层滚动
            // 延迟清空 src 以防动画穿帮
            setTimeout(() => { lightboxImg.src = ''; }, 400);
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            // 点击图片以外的空白区域也关闭
            if (e.target === lightbox) closeLightbox();
        });
    }

    // 🌟 2. 页面元素滚动渐显动画
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
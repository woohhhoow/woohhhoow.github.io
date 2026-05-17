/* =========================================
   project.js - 项目页高清灯箱与无延迟显影引擎
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 硬件级无延迟滚动显影 (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal-fade');
    
    if (revealElements.length > 0) {
        const revealConfig = {
            threshold: 0.05, // 刚露头就平滑触发
            rootMargin: "0px 0px -40px 0px"
        };

        const scrollRevealer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // 释放监听，省电省内存
                }
            });
        }, revealConfig);

        revealElements.forEach(el => scrollRevealer.observe(el));
    }

    // --- 2. 🌟 全量高清灯箱 (Lightbox) 交互引擎 ---
    const lightbox = document.getElementById('project-lightbox');
    const lightboxImg = document.getElementById('project-lightbox-img');
    const lightboxCaption = document.getElementById('project-lightbox-caption');
    const closeBtn = document.getElementById('project-lightbox-close');
    const clickableImages = document.querySelectorAll('.img-wrap img, .parallax-img');

    if (lightbox && clickableImages.length > 0) {
        clickableImages.forEach(img => {
            img.addEventListener('click', () => {
                // 1. 传入高清图片源
                lightboxImg.src = img.src;
                
                // 2. 向上寻找并捕获对应的图注文字
                const section = img.closest('.single-img-section, body');
                const captionEl = section.querySelector('.caption');
                if (captionEl) {
                    lightboxCaption.innerText = captionEl.innerText;
                } else {
                    lightboxCaption.innerText = img.alt || "";
                }
                
                // 3. 唤醒灯箱并锁死底层滚动，严防位移卡顿
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const deactivateLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // 解锁滚动
            setTimeout(() => { lightboxImg.src = ''; }, 350); // 干净清空
        };

        // 关闭事件绑定
        if (closeBtn) closeBtn.addEventListener('click', deactivateLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxImg) {
                deactivateLightbox();
            }
        });
        // 键盘 Esc 键退出
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                deactivateLightbox();
            }
        });
    }
});
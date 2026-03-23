/* =========================================
   Wu Haiwen Landscape Architecture - Advanced JS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 🌟 1. 定制鼠标特效 (Advanced Custom Cursor) --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const hoverTargets = document.querySelectorAll('.hover-target, a, button, .project-item');

    // 🌟 在电脑端且检测到鼠标移动时才显示定制鼠标
    let cursorActive = false;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // 首次移动时显示鼠标
        if(!cursorActive){
            if(cursorDot) cursorDot.style.display = 'block';
            if(cursorOutline) cursorOutline.style.display = 'block';
            cursorActive = true;
        }

        // 小圆点紧跟鼠标，使用GSAP可实现平滑，这里用简单的CSS设置
        if(cursorDot){
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
        }

        // 🌟 外圈圆带有延迟和平滑动画 (现代JS做法，性能优于直接操作 style)
        if(cursorOutline){
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 400, fill: "forwards", easing: "ease-out" });
        }
    });

    // 🌟 监听悬停放大状态，增加毛玻璃交互细节HOOK
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        target.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    // 鼠标移出屏幕时隐藏
    document.addEventListener('mouseleave', () => {
        if(cursorDot) cursorDot.style.display = 'none';
        if(cursorOutline) cursorOutline.style.display = 'none';
        cursorActive = false;
    });


    /* --- 🌟 2. 首屏景深视差跟随特效 (Hero Cinematic Parallax) --- */
    const hero = document.getElementById('hero');
    const heroBg = document.querySelector('.hero-bg');

    if (hero && heroBg) {
        hero.addEventListener('mousemove', (e) => {
            // 计算偏移量，强度降低以增加高级感
            const intensity = 70; // 数字越小强度越大
            const x = (window.innerWidth - e.pageX * 2) / intensity;
            const y = (window.innerHeight - e.pageY * 2) / intensity;
            // 🌟 加入轻微缩放以消除边缘黑边
            heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
        });
        // 鼠标移出恢复居中
        hero.addEventListener('mouseleave', () => {
            heroBg.style.transform = `translate(0px, 0px) scale(1.02)`;
        });
    }

    /* --- 🌟 3. 优化后的滚动渐显 (Intersection Observer) --- */
    const revealElements = document.querySelectorAll('.reveal-elem');
    
    // 🌟 根据设备屏幕高度动态调整阈值，性能更佳
    const isMobile = window.innerWidth < 900;
    const revealOptions = {
        threshold: isMobile ? 0.05 : 0.15, // 移动端更灵敏
        rootMargin: "0px 0px -60px 0px" // 底部预留空间以防闪烁
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 只执行一次，节省性能
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* --- 🌟 4. 智能导航栏滚动变色 (Smart Scroll) --- */
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // 向下滚动超过50px
        if (currentScrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            if (navbar) navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });

});
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. 定制鼠标特效 (Custom Cursor) --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const hoverTargets = document.querySelectorAll('.hover-target, a, button');

    // 监听鼠标移动
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // 小圆点紧跟鼠标
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // 外圈圆带有延迟动画 (使用 requestAnimationFrame 会更平滑，这里用简写)
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // 监听悬停放大状态
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        target.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });

    /* --- 2. 首屏景深视差跟随特效 (Hero Parallax) --- */
    const hero = document.getElementById('hero');
    const heroBg = document.querySelector('.hero-bg');

    if (hero && heroBg) {
        hero.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 90;
            const y = (window.innerHeight - e.pageY * 2) / 90;
            heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        });
        // 鼠标移出恢复居中
        hero.addEventListener('mouseleave', () => {
            heroBg.style.transform = `translate(0px, 0px) scale(1)`;
        });
    }

    /* --- 3. 滚动渐显特效 (Intersection Observer) --- */
    const revealElements = document.querySelectorAll('.reveal-elem');
    
    const revealOptions = {
        threshold: 0.15, // 元素进入视口 15% 时触发
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 只执行一次
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* --- 4. 导航栏滚动变色 --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});
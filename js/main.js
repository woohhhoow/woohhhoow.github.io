document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. 定制反转光标 --- */
    const cursor = document.querySelector('.cursor');
    
    // 平滑跟随逻辑
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    const speed = 0.2; // 值越小跟随越顺滑/延迟感越强

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

    // 交互元素的 Hover 放大光圈效果
    const hoverTargets = document.querySelectorAll('a, .project-row');
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('active'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    /* --- 2. 首屏 名字与图片 弹性互动 (Elastic Parallax) --- */
    const hero = document.getElementById('hero');
    const heroImg = document.querySelector('.hero-image-wrapper');
    const heroTitle = document.querySelector('.hero-title-wrapper');

    if (hero && heroImg && heroTitle) {
        hero.addEventListener('mousemove', (e) => {
            // 计算鼠标相对屏幕中心的百分比 (-1 到 1)
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            // 图片与文字的反向移动 (产生深度与拉扯感)
            // 图片缓慢向鼠标反方向移动
            heroImg.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
            
            // 文字向鼠标正方向移动（速度更快，产生漂浮感）
            heroTitle.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        });

        // 鼠标离开恢复原位
        hero.addEventListener('mouseleave', () => {
            heroImg.style.transform = `translate(0px, 0px)`;
            heroTitle.style.transform = `translate(0px, 0px)`;
        });
    }

    /* --- 3. 项目列表：幽灵悬停图片展示 (Hover Image Reveal) --- */
    const projectRows = document.querySelectorAll('.project-row');
    const hoverImgReveal = document.querySelector('.hover-image-reveal');
    let revealImgX = window.innerWidth / 2;
    let revealImgY = window.innerHeight / 2;

    function animateRevealImg() {
        // 让图片容器也带有顺滑的物理跟随感
        const distX = mouseX - revealImgX;
        const distY = mouseY - revealImgY;
        revealImgX += distX * 0.1;
        revealImgY += distY * 0.1;

        if (hoverImgReveal) {
            // 注意：因为 CSS 里已经有 translate(-50%, -50%) 居中处理了
            hoverImgReveal.style.left = `${revealImgX}px`;
            hoverImgReveal.style.top = `${revealImgY}px`;
        }
        requestAnimationFrame(animateRevealImg);
    }
    animateRevealImg();

    projectRows.forEach(row => {
        row.addEventListener('mouseenter', (e) => {
            const imgUrl = row.getAttribute('data-image');
            if (hoverImgReveal) {
                hoverImgReveal.style.backgroundImage = `url(${imgUrl})`;
                hoverImgReveal.classList.add('visible');
            }
        });
        
        row.addEventListener('mouseleave', () => {
            if (hoverImgReveal) {
                hoverImgReveal.classList.remove('visible');
            }
        });
    });

    /* --- 4. 滚动检测触发动画 (Scroll Reveal) --- */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-line');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
});
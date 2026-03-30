/* =========================================
   archive.js - 作品总览页专属交互
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    const projectRows = document.querySelectorAll('.project-row');
    const hoverImgReveal = document.querySelector('.hover-image-reveal');
    
    if (hoverImgReveal && projectRows.length > 0) {
        let revealImgX = window.innerWidth / 2;
        let revealImgY = window.innerHeight / 2;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateRevealImg() {
            const distX = mouseX - revealImgX;
            const distY = mouseY - revealImgY;
            revealImgX += distX * 0.1; // 延迟跟随感
            revealImgY += distY * 0.1;

            hoverImgReveal.style.left = `${revealImgX}px`;
            hoverImgReveal.style.top = `${revealImgY}px`;
            
            requestAnimationFrame(animateRevealImg);
        }
        animateRevealImg();

        projectRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                const imgUrl = row.getAttribute('data-image');
                hoverImgReveal.style.backgroundImage = `url(${imgUrl})`;
                hoverImgReveal.classList.add('visible');
            });
            
            row.addEventListener('mouseleave', () => {
                hoverImgReveal.classList.remove('visible');
            });
        });
    }
});
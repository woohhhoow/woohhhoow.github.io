/* =========================================
   home.js - 高斯海浪 (Retina高清) & 走马灯 (2行缓速版)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- WHW 剧场开场 ---
    const preloader = document.querySelector('.preloader');
    const revealElements = document.querySelectorAll('.reveal-on-load');

    setTimeout(() => {
        if(preloader) preloader.classList.add('fade-out');
        setTimeout(() => { revealElements.forEach(el => el.classList.add('visible')); }, 500);
    }, 800);

    // --- 高斯平滑海浪 (Retina 高清版) ---
    const canvas = document.getElementById('particle-canvas');
    const heroContainer = document.querySelector('.hero-canvas-container');

    if (canvas && heroContainer) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let time = 0; 
        
        let logicalWidth = 0;
        let logicalHeight = 0;
        
        let mouse = { x: null, y: null };
        let smoothMouse = { x: -1000, y: -1000 }; 

        const updateMousePosition = (x, y) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = x - rect.left;
            mouse.y = y - rect.top;
        };

        heroContainer.addEventListener('mousemove', (e) => updateMousePosition(e.clientX, e.clientY));
        heroContainer.addEventListener('touchmove', (e) => {
            if(e.touches.length > 0) updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
        }, {passive: true});

        const resetMouse = () => { mouse.x = null; mouse.y = null; };
        heroContainer.addEventListener('mouseleave', resetMouse);
        heroContainer.addEventListener('touchend', resetMouse);

        function resizeCanvas() {
            const rect = heroContainer.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1; 
            
            logicalWidth = rect.width;
            logicalHeight = rect.height;

            canvas.width = logicalWidth * dpr;
            canvas.height = logicalHeight * dpr;
            
            canvas.style.width = `${logicalWidth}px`;
            canvas.style.height = `${logicalHeight}px`;

            ctx.scale(dpr, dpr);
            initSystem();
        }
        window.addEventListener('resize', resizeCanvas);

        const waveLayers = [
            { yBase: 0.55, color: '160, 210, 240', speed: 0.5, waves: [{freq: 0.002, amp: 40}, {freq: 0.005, amp: 15, speedMult: -0.5}] },
            { yBase: 0.65, color: '130, 190, 230', speed: 0.7, waves: [{freq: 0.0015, amp: 50}, {freq: 0.004, amp: 20, speedMult: 0.8}] },
            { yBase: 0.75, color: '100, 170, 220', speed: 0.9, waves: [{freq: 0.003, amp: 30}, {freq: 0.006, amp: 10, speedMult: -1.2}] }
        ];

        function getWaveY(x, t, layerIndex) {
            const layer = waveLayers[layerIndex];
            let y = logicalHeight * layer.yBase; 
            
            layer.waves.forEach(w => {
                const phase = t * layer.speed * (w.speedMult || 1);
                y += Math.sin(x * w.freq + phase) * w.amp;
            });

            let dx = x - smoothMouse.x;
            let dy = y - smoothMouse.y;
            let distSq = dx * dx + dy * dy;

            if (distSq < 100000) { 
                let force = Math.exp(-distSq / 25000); 
                y += force * 45; 
            }
            return y;
        }

        class WaveParticle {
            constructor(layerIndex) {
                this.layerIndex = layerIndex;
                this.x = Math.random() * logicalWidth; 
                this.offsetY = (Math.random() - 0.5) * 40; 
                this.size = Math.random() * 1.5 + 0.8; 
                this.speed = Math.random() * 0.3 + 0.15; 
                
                const layerColor = waveLayers[layerIndex].color;
                this.color = Math.random() > 0.5 
                    ? `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})` 
                    : `rgba(${layerColor}, ${Math.random() * 0.7 + 0.3})`; 
            }
            update() {
                this.x += this.speed;
                if (this.x > logicalWidth + 50) this.x = -50; 
                this.y = getWaveY(this.x, time, this.layerIndex) + this.offsetY;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initSystem() {
            particles = [];
            const pCount = window.innerWidth < 768 ? 300 : 600;
            for (let i = 0; i < pCount; i++) {
                const layer = i % 3; 
                particles.push(new WaveParticle(layer));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, logicalWidth, logicalHeight); 
            time += 0.003; 

            if (mouse.x != null) {
                smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
                smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;
            } else {
                smoothMouse.x += (-1000 - smoothMouse.x) * 0.05;
                smoothMouse.y += (-1000 - smoothMouse.y) * 0.05;
            }

            waveLayers.forEach((layer, i) => {
                ctx.beginPath();
                ctx.moveTo(0, logicalHeight); 
                for (let x = 0; x <= logicalWidth + 10; x += 10) {
                    ctx.lineTo(x, getWaveY(x, time, i));
                }
                ctx.lineTo(logicalWidth, logicalHeight); 
                
                let waveTop = logicalHeight * layer.yBase - 60; 
                let gradient = ctx.createLinearGradient(0, waveTop, 0, logicalHeight);
                gradient.addColorStop(0, `rgba(${layer.color}, 0.15)`); 
                gradient.addColorStop(1, `rgba(${layer.color}, 0.0)`);  

                ctx.fillStyle = gradient;
                ctx.fill();
                
                ctx.beginPath();
                for (let x = 0; x <= logicalWidth + 10; x += 10) {
                    let y = getWaveY(x, time, i);
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.strokeStyle = `rgba(${layer.color}, 0.5)`; 
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animate);
        }
        
        resizeCanvas(); 
        animate();
    }

    // --- 🌟 精调：双语支持的高级走马灯 (精简为 2 行，大幅降速) ---
    const marqueeSection = document.getElementById('dynamic-marquee');
    
    if (marqueeSection) {
        const currentLang = localStorage.getItem('whw_lang') || 'en';
        
        const wordsEn = [
            'URBAN RESILIENCE', 'SPATIAL EMPATHY', 'BLUE-GREEN INFRASTRUCTURE', 
            'CLIMATE ADAPTATION', 'ECOLOGICAL RESTORATION', 'BUFFERING THE PULSE',
            'SYSTEMIC ECOLOGIES', 'SPATIAL NARRATIVES'
        ];
        const wordsCn = [
            '城市韧性', '空间共情', '蓝绿基础设施', 
            '气候适应', '生态修复', '缓冲脉动',
            '系统化生态', '空间叙事'
        ];
        const words = currentLang === 'cn' ? wordsCn : wordsEn;

        // 🌟 核心改动：仅保留 row-layer-0 和 row-layer-1 两行，且调低 baseSpeed 确保缓速
        const rows = [
            { layerClass: 'row-layer-0', direction: -1, baseSpeed: 0.35, wordsCount: 16 },
            { layerClass: 'row-layer-1', direction: 1, baseSpeed: 0.25, wordsCount: 18 }
        ];

        let marqueeData = [];

        rows.forEach((rowConfig) => {
            const rowDiv = document.createElement('div');
            rowDiv.className = `marquee-row ${rowConfig.layerClass}`;
            let rowHtml = '';
            for(let i=0; i < rowConfig.wordsCount * 2; i++) {
                const randomWord = words[Math.floor(Math.random() * words.length)];
                const randomOpacity = (Math.random() * 0.5 + 0.5).toFixed(2); 
                rowHtml += `<span class="marquee-word" style="opacity: ${randomOpacity};">${randomWord}</span>`;
            }
            rowDiv.innerHTML = rowHtml;
            marqueeSection.appendChild(rowDiv);
            marqueeData.push({ element: rowDiv, offset: 0, direction: rowConfig.direction, baseSpeed: rowConfig.baseSpeed });
        });

        let speedMultiplier = 1;
        let targetSpeedMultiplier = 1;

        // 触碰时优雅平滑减速
        marqueeSection.addEventListener('mouseenter', () => {
            targetSpeedMultiplier = 0.05; 
            marqueeSection.classList.add('is-hovered'); 
        });
        marqueeSection.addEventListener('mouseleave', () => {
            targetSpeedMultiplier = 1;   
            marqueeSection.classList.remove('is-hovered');
        });

        function renderMarquee() {
            speedMultiplier += (targetSpeedMultiplier - speedMultiplier) * 0.02;
            marqueeData.forEach(data => {
                data.offset += data.direction * data.baseSpeed * speedMultiplier;
                if (data.offset <= -3500) data.offset += 3500;
                if (data.offset >= 3500) data.offset -= 3500;
                data.element.style.transform = `translateX(${data.offset}px)`;
            });
            requestAnimationFrame(renderMarquee);
        }
        renderMarquee();
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
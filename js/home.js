/* =========================================
   home.js - 高斯海浪 (Retina高清) & 互动生态鱼群 & 走马灯 
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- WHW 剧场开场 ---
    const preloader = document.querySelector('.preloader');
    const revealElements = document.querySelectorAll('.reveal-on-load');

    setTimeout(() => {
        if(preloader) preloader.classList.add('fade-out');
        setTimeout(() => { revealElements.forEach(el => el.classList.add('visible')); }, 500);
    }, 800);

    // --- 高斯平滑海浪 & 互动鱼群生态系统 ---
    const canvas = document.getElementById('particle-canvas');
    const heroContainer = document.querySelector('.hero-canvas-container');

    if (canvas && heroContainer) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let fishes = []; // 新增生态鱼群数组
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

        // --- 原有：气泡粒子 ---
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

        // --- 🌟 新增：高级交互鱼类物理引擎 ---
        class Fish {
            constructor() {
                this.respawn();
            }
            respawn() {
                this.x = Math.random() * logicalWidth;
                this.targetY = logicalHeight * 0.8 + Math.random() * (logicalHeight * 0.15); // 初始深水区
                this.y = this.targetY;
                this.vx = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.8 + 0.5); // 缓慢自然游动
                this.vy = 0;
                this.state = 'SWIMMING'; // 状态: SWIMMING, AIR, BONE_SINKING
                this.isBone = false;
                this.angle = this.vx > 0 ? 0 : Math.PI;
                this.size = Math.random() * 0.4 + 0.6; // 鱼群大小不一
                this.jumpTimer = Math.random() * 800 + 400; // 蓄力倒计时
            }
            update() {
                const surfaceY = getWaveY(this.x, time, 2); // 取最顶层海浪作为水面基准

                if (this.state === 'SWIMMING') {
                    this.x += this.vx;
                    // 正弦波产生自然的身体上下摇摆
                    this.y += (this.targetY - this.y) * 0.05 + Math.sin(time * 6 + this.x * 0.02) * 0.4;

                    // 边界环绕
                    if (this.x < -50) this.x = logicalWidth + 50;
                    if (this.x > logicalWidth + 50) this.x = -50;

                    // 🌟 躲避鼠标逻辑
                    let dx = this.x - smoothMouse.x;
                    let dy = this.y - smoothMouse.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        this.vx += (dx / dist) * 0.15; // 惊吓加速
                        this.targetY += (dy / dist) * 3;  // 向反方向下潜或上浮
                    }

                    // 游动速度摩擦力与恢复
                    let speed = Math.abs(this.vx);
                    if (speed > 2.5) this.vx *= 0.95; // 减速
                    else if (speed < 0.6) this.vx += Math.sign(this.vx) * 0.02; // 恢复巡航速度

                    // 平滑转向
                    let targetAngle = this.vx > 0 ? Math.sin(time * 4) * 0.1 : Math.PI + Math.sin(time * 4) * 0.1;
                    this.angle += (targetAngle - this.angle) * 0.1;

                    // 🌟 蓄力跃出水面逻辑
                    this.jumpTimer--;
                    if (this.jumpTimer <= 0 && this.y < surfaceY + 100) {
                        this.state = 'AIR';
                        this.vy = -(Math.random() * 8 + 14); // 极强的初始向上爆发力
                        this.vx = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 4 + 3); // 决定左右跳跃抛物线距离
                    }

                } else if (this.state === 'AIR') {
                    // 🌟 子弹时间流速控制
                    let timeScale = 0.22; // 空中减慢5倍，提供充足点击时间
                    this.x += this.vx * timeScale;
                    this.y += this.vy * timeScale;
                    this.vy += 0.5 * timeScale; // 重力加速度

                    // 身体倾斜严格遵循运动抛物线轨迹
                    this.angle = Math.atan2(this.vy, this.vx);

                    // 落回水面判定
                    if (this.vy > 0 && this.y > surfaceY) {
                        if (this.isBone) {
                            this.state = 'BONE_SINKING';
                            this.vy = 1; // 缓慢下沉速度
                            this.vx = 0;
                        } else {
                            this.state = 'SWIMMING'; // 平稳入水，继续游动
                            this.vy = 0;
                            this.jumpTimer = Math.random() * 1000 + 500;
                            this.targetY = logicalHeight * 0.7; // 潜入深水
                        }
                    }
                } else if (this.state === 'BONE_SINKING') {
                    // 🌟 鱼骨头缓缓沉底
                    this.y += 0.8; // 下沉
                    this.x += Math.sin(time * 2) * 0.3; // 随波逐流左右晃动
                    // 骨头角度朝下晃动
                    let baseAngle = this.vx >= 0 ? Math.PI/4 : (Math.PI - Math.PI/4);
                    this.angle = baseAngle + Math.sin(time * 3) * 0.15; 

                    // 沉出屏幕后重生为新鱼
                    if (this.y > logicalHeight + 50) {
                        this.respawn();
                    }
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                
                // 翻转逻辑：如果鱼向左游，垂直翻转以防腹部朝上
                if (Math.cos(this.angle) < 0) {
                    ctx.scale(this.size, -this.size);
                } else {
                    ctx.scale(this.size, this.size);
                }

                ctx.fillStyle = '#18181b'; // 高级克制的深墨色
                ctx.strokeStyle = '#18181b';
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';

                if (!this.isBone) {
                    // 绘制简约实心鱼
                    ctx.beginPath();
                    ctx.ellipse(0, 0, 14, 7, 0, 0, Math.PI * 2); // 鱼身
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(-10, 0); // 鱼尾
                    ctx.lineTo(-22, -8);
                    ctx.lineTo(-22, 8);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.moveTo(-2, 2); // 鱼鳍
                    ctx.lineTo(-6, 8);
                    ctx.lineTo(3, 6);
                    ctx.fill();
                } else {
                    // 绘制简约实心鱼骨
                    ctx.lineWidth = 2.5;
                    ctx.beginPath();
                    ctx.moveTo(-16, 0); // 脊椎
                    ctx.lineTo(10, 0);
                    ctx.stroke();
                    for(let i = -8; i <= 4; i += 4) { // 鱼刺
                        ctx.beginPath();
                        ctx.moveTo(i, -6);
                        ctx.lineTo(i, 6);
                        ctx.stroke();
                    }
                    ctx.beginPath(); // 骨尾
                    ctx.moveTo(-16, 0);
                    ctx.lineTo(-24, -6);
                    ctx.lineTo(-24, 6);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.beginPath(); // 头骨
                    ctx.arc(12, 0, 5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#fff'; // 镂空眼窝
                    ctx.beginPath();
                    ctx.arc(13, -1, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
            }
            
            checkClick(cx, cy) {
                // 仅允许点击处于空中的活鱼
                if (this.state === 'AIR' && !this.isBone) {
                    let dx = this.x - cx;
                    let dy = this.y - cy;
                    // 给予极其宽容的点击判定区域（防手抖）
                    if (Math.sqrt(dx * dx + dy * dy) < 50 * this.size) { 
                        this.isBone = true;
                        // 击中瞬间产生轻微的停顿与额外翻滚
                        this.vy = -2; 
                        return true;
                    }
                }
                return false;
            }
        }

        function initSystem() {
            particles = [];
            const pCount = window.innerWidth < 768 ? 300 : 600;
            for (let i = 0; i < pCount; i++) {
                const layer = i % 3; 
                particles.push(new WaveParticle(layer));
            }

            // 初始化生态鱼群 (电脑端6只，手机端3只防重叠)
            fishes = [];
            const fCount = window.innerWidth < 768 ? 3 : 6;
            for (let i = 0; i < fCount; i++) {
                fishes.push(new Fish());
            }
        }

        // 🌟 点击击杀监听器
        heroContainer.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            fishes.forEach(f => f.checkClick(cx, cy));
        });

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

            // 更新生态系统
            fishes.forEach(f => f.update());

            // 🌟 景深交错渲染引擎 (Interleaved Rendering)
            waveLayers.forEach((layer, i) => {
                ctx.beginPath();
                ctx.moveTo(0, logicalHeight); 
                for (let x = 0; x <= logicalWidth + 10; x += 10) {
                    ctx.lineTo(x, getWaveY(x, time, i));
                }
                ctx.lineTo(logicalWidth, logicalHeight); 
                
                let waveTop = logicalHeight * layer.yBase - 60; 
                let gradient = ctx.createLinearGradient(0, waveTop, 0, logicalHeight);
                gradient.addColorStop(0, `rgba(${layer.color}, 0.2)`); 
                gradient.addColorStop(1, `rgba(${layer.color}, 0.06)`);  

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

                // 核心：在绘制最后一层顶级海浪之前，渲染水底的鱼！这会产生透过海水看鱼的半透明朦胧效果
                if (i === 1) { 
                    fishes.forEach(f => {
                        if (f.state === 'SWIMMING' || f.state === 'BONE_SINKING') f.draw();
                    });
                }
            });

            // 最后在所有波浪之上，渲染处于空中（子弹时间）的鱼
            fishes.forEach(f => {
                if (f.state === 'AIR') f.draw();
            });

            // 绘制气泡粒子
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            requestAnimationFrame(animate);
        }
        
        resizeCanvas(); 
        animate();
    }

    // --- 🌟 双语支持的高级走马灯 ---
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
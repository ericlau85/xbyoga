// main.js - 主页专用功能
document.addEventListener('DOMContentLoaded', function() {
    
    // 语言切换功能 - 页面跳转
    const langButton = document.querySelector('.lang-btn-single');
    
    if (langButton) {
        // 更准确的语言检测逻辑
        const isEnglishPage = window.location.pathname.includes('index-en.html') ||
                             window.location.href.includes('index-en.html') ||
                             document.documentElement.lang === 'en-GB';
        
        if (isEnglishPage) {
            // 当前是英文主页 - 显示中国国旗
            langButton.setAttribute('data-lang', 'en');
            langButton.textContent = '🇨🇳'; // 中国国旗
        } else {
            // 当前是中文主页 - 显示英国国旗
            langButton.setAttribute('data-lang', 'zh');
            langButton.textContent = '🇬🇧'; // 英国国旗
        }
        
        langButton.addEventListener('click', function() {
            const currentLang = this.getAttribute('data-lang');
            
            if (currentLang === 'zh') {
                // 从中文切换到英文 - 跳转到英文主页
                window.location.href = 'index-en.html';
            } else {
                // 从英文切换到中文 - 跳转到中文主页
                window.location.href = 'index.html';
            }
        });
    }
    
    // 简单可靠的鼠标光晕效果
    function initSimpleGlow() {
        const body = document.body;
        
        // 创建光晕元素
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            transition: opacity 0.3s ease;
            transform: translate(-50%, -50%);
        `;
        body.appendChild(glow);
        
        // 鼠标移动时更新位置
        document.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
            glow.style.opacity = '1';
        });
        
        // 鼠标离开时隐藏
        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    }

    // 初始化光晕效果
    initSimpleGlow();

    // 主页链接点击反馈
    const links = document.querySelectorAll('.home-item, .home-contact-icon');
    
    links.forEach(link => {
        link.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        link.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // 微信二维码功能（主页专用）
    const closeBtn = document.querySelector('.qr-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const modal = document.getElementById('wechatQRModal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    }

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('wechatQRModal');
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    });

    window.showWechatQR = function() {
        const modal = document.getElementById('wechatQRModal');
        if (modal) {
            modal.style.display = 'block';
        }
    };
    
    console.log('主页功能加载完成');
});

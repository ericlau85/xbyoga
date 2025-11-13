// content-pages.js - 文章和课程页面功能
document.addEventListener('DOMContentLoaded', function() {
    initChapterNavigation();
    initCourseAnimations();
    
    // 初始化轮脉字母（适用于梵语课和瑜伽哲学页面）
    initChakraLetters();
    
    console.log('内容页面功能加载完成');
});

// 章节导航（文章和课程共用）
function initChapterNavigation() {
    // 左侧章节导航点击事件
    const leftNavItems = document.querySelectorAll('.nav-menu.left .nav-item');
    leftNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 章节导航激活状态
    const sections = document.querySelectorAll('.chapter, .intro-section, .comparison-section, .features-section, .private-section, .rest-section, .structure-section, .content-section, .path-section');
    const navItems = document.querySelectorAll('.nav-menu.left .nav-item');
    
    function setActiveNavItem() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    if (sections.length > 0 && navItems.length > 0) {
        window.addEventListener('scroll', setActiveNavItem);
    }
}

// 课程页面动画（仅课程页面使用）
function initCourseAnimations() {
    if (!document.querySelector('.course-page')) return;
    
    const elements = document.querySelectorAll('.comparison-card, .feature-item, .private-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });
    
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease";
        observer.observe(el);
    });
}

// 轮脉字母数据（梵语字母和瑜伽哲学页面共用）
const chakraLetters = {
    'crown': ['ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ', 'ॐ'],
    'brow': ['ह्', 'क्ष्'],
    'throat': ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ', 'ऌ', 'ॡ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'],
    'heart': ['क्', 'ख्', 'ग्', 'घ्', 'ङ्', 'च्', 'छ्', 'ज्', 'झ्', 'ञ्', 'ट्', 'ठ्'],
    'solar': ['ड्', 'ढ्', 'ण्', 'त्', 'थ्', 'द्', 'ध्', 'न्', 'प्', 'फ्'],
    'sacral': ['ब्', 'भ्', 'म्', 'य्', 'र्', 'ल्'],
    'root': ['व्', 'श्', 'ष्', 'स्']
};

// 生成环绕字母
function createCircularLetters(chakraId, letters) {
    const container = document.getElementById(chakraId);
    if (!container) return;
    
    const radius = 65;
    
    letters.forEach((letter, index) => {
        const angle = (index / letters.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        const letterElement = document.createElement('span');
        letterElement.className = 'letter-item';
        letterElement.textContent = letter;
        letterElement.style.transform = `translate(${x}px, ${y}px) rotate(${angle + Math.PI/2}rad)`;
        
        container.appendChild(letterElement);
    });
}

// 初始化所有轮脉
function initChakraLetters() {
    Object.keys(chakraLetters).forEach(chakra => {
        createCircularLetters(`${chakra}-letters`, chakraLetters[chakra]);
    });
}

// navbar.js - 所有页面通用导航功能
document.addEventListener('DOMContentLoaded', function() {
    // 移动端汉堡菜单功能
    const hamburger = document.querySelector('.hamburger');
    const topNavMenu = document.querySelector('.nav-menu.top');
    const overlay = document.querySelector('.menu-overlay');
    
    if (hamburger && topNavMenu) {
        hamburger.addEventListener('click', function() {
            const isActive = topNavMenu.classList.contains('active');
            
            topNavMenu.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = isActive ? 'fas fa-bars' : 'fas fa-times';
            }
            
            document.body.style.overflow = isActive ? '' : 'hidden';
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    const navLinks = document.querySelectorAll('.nav-menu.top a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    // 导航栏滚动效果
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            
            lastScrollY = window.scrollY;
        });
    }
    
    // 当前页面高亮
    const currentPage = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-menu.top a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage.split('/').pop()) {
            item.classList.add('active');
        }
    });
    
    console.log('导航栏功能加载完成');
});

function closeMobileMenu() {
    const topNavMenu = document.querySelector('.nav-menu.top');
    const overlay = document.querySelector('.menu-overlay');
    
    if (topNavMenu) topNavMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    
    const hamburgerIcon = document.querySelector('.hamburger i');
    if (hamburgerIcon) {
        hamburgerIcon.className = 'fas fa-bars';
    }
    
    document.body.style.overflow = '';
}

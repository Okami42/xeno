document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'rotate(0) translate(0, 0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'rotate(0) translate(0, 0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translate(0, 0)';
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(15, 15, 15, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(15, 15, 15, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #8B5CF6;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            box-shadow: 0 0 6px #8B5CF6;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        document.querySelector('.particles').appendChild(particle);
        
        const duration = Math.random() * 3000 + 2000;
        const distance = Math.random() * 100 + 50;
        
        particle.animate([
            { 
                opacity: 0, 
                transform: 'translateY(0px) scale(0)' 
            },
            { 
                opacity: 1, 
                transform: `translateY(-${distance}px) scale(1)`,
                offset: 0.1
            },
            { 
                opacity: 0, 
                transform: `translateY(-${distance * 2}px) scale(0)` 
            }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).addEventListener('finish', () => {
            particle.remove();
        });
    }
    
    setInterval(createParticle, 300);
    
    const codeLines = [
        '-- Xeno Premium Script',
        'local player = game.Players.LocalPlayer',
        'loadstring(game:HttpGet("https://xeno.online/api"))()',
        '-- Bypass Byfron Active ✓',
        'print("Xeno Loaded Successfully!")'
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    const codeContent = document.querySelector('.code-content');
    const typingSpeed = 100;
    const lineDelay = 1000;
    
    function typeCode() {
        if (currentLine < codeLines.length) {
            const line = codeLines[currentLine];
            if (currentChar < line.length) {
                currentChar++;
                setTimeout(typeCode, typingSpeed);
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(typeCode, lineDelay);
            }
        } else {
            setTimeout(() => {
                currentLine = 0;
                currentChar = 0;
                typeCode();
            }, 3000);
        }
    }
    
    setTimeout(typeCode, 2000);
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.feature-card, .script-card, .stat-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    function animateCounter(element) {
        const target = element.textContent;
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/[\d.]/g, '');
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            if (suffix.includes('K')) {
                element.textContent = Math.floor(current) + 'K+';
            } else if (suffix.includes('M')) {
                element.textContent = Math.floor(current) + 'M+';
            } else if (suffix.includes('%')) {
                element.textContent = Math.floor(current * 10) / 10 + '%';
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    }
    
    const glowButtons = document.querySelectorAll('.btn-primary, .btn-download');
    glowButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.3)';
        });
    });
    
    const scriptCards = document.querySelectorAll('.script-card');
    scriptCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.querySelector('.feature-icon').style.transform = 'rotate(10deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.feature-icon').style.transform = 'rotate(0deg) scale(1)';
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'd') {
            e.preventDefault();
            document.querySelector('.btn-download').click();
        }
        
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.click();
        }
    });
    
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            
            const message = document.createElement('div');
            message.innerHTML = '🎉 Konami Code Activated! Welcome to Xeno, Elite Hacker! 🎉';
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #8B5CF6, #A855F7);
                color: white;
                padding: 2rem;
                border-radius: 12px;
                z-index: 10000;
                font-family: 'Orbitron', monospace;
                font-weight: bold;
                text-align: center;
                box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
                animation: pulse 1s ease-in-out infinite;
            `;
            
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
            
            konamiCode = [];
        }
    });
    
    console.log(`
    ██╗  ██╗███████╗███╗   ██╗ ██████╗ 
    ╚██╗██╔╝██╔════╝████╗  ██║██╔═══██╗
     ╚███╔╝ █████╗  ██╔██╗ ██║██║   ██║
     ██╔██╗ ██╔══╝  ██║╚██╗██║██║   ██║
    ██╔╝ ██╗███████╗██║ ╚████║╚██████╔╝
    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ 
    
    🔥 Xeno Executor - Premium Roblox Script Executor
    ⚡ Bypass Byfron | Anti-Detection | Premium Scripts
    🌟 Welcome to the dark side of scripting!
    
    Looking for something? Try the Konami Code... 👀
    `);
    
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`🚀 Xeno loaded in ${loadTime}ms`);
        });
    }
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#8B5CF6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

window.Xeno = {
    showNotification,
    version: '1.2.65',
    initialized: true
};
// MAESTRO PALCO - Quiz de Personalidade Musical
// Analytics e interações da landing page

document.addEventListener('DOMContentLoaded', function() {
    // Track CTA clicks
    const mainCTA = document.getElementById('main-cta');
    if (mainCTA) {
        mainCTA.addEventListener('click', function(e) {
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': 'Descobrir Tipo Musico',
                    'event_value': 1
                });
            }
            
            console.log('CTA clicked: Descobrir tipo de músico');
        });
    }

    // Scroll tracking para entender engagement
    let scrollDepths = [25, 50, 75, 90];
    let scrolledDepths = [];

    function trackScrollDepth() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        scrollDepths.forEach(function(depth) {
            if (scrollPercent >= depth && scrolledDepths.indexOf(depth) === -1) {
                scrolledDepths.push(depth);
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll', {
                        'event_category': 'Engagement',
                        'event_label': 'Scroll Depth ' + depth + '%',
                        'event_value': depth
                    });
                }
                
                console.log('Scroll depth reached:', depth + '%');
            }
        });
    }

    // Throttled scroll tracking
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                trackScrollDepth();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Time on page tracking
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'event_category': 'Engagement',
                'event_label': 'Time on Landing Page',
                'event_value': timeSpent
            });
        }
        
        console.log('Time spent on landing page:', timeSpent, 'seconds');
    });

    // Smooth scroll para links internos
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Loading state para CTA
    if (mainCTA) {
        mainCTA.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Carregando...';
            this.style.pointerEvents = 'none';
            this.style.opacity = '0.7';
            
            setTimeout(function() {
                mainCTA.textContent = originalText;
                mainCTA.style.pointerEvents = '';
                mainCTA.style.opacity = '';
            }, 1000);
        });
    }
});
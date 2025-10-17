// Parallax Effect JavaScript with Lenis Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling on all pages
    initLenis();
    
    // Only initialize parallax on homepage (where .mdx-parallax exists)
    if (document.querySelector('.mdx-parallax')) {
        initParallax();
    }
    
    // Simple smooth scroll for internal links
    initSmoothScroll();
    
    // Initialize header transition
    initHeaderTransition();
    
    // Enhanced back to top functionality
    initEnhancedBackToTop();
    
    // Initialize smart TOC scrolling
    // setTimeout(initSmartTOCScrolling, 1000); // Disabled - let TOC scroll naturally
    
    // Hide tabs during parallax on homepage
    initTabsVisibility();
    
    // Ensure back to top works universally on all pages
    setInterval(() => {
        const btn = document.querySelector('.md-top');
        if (btn && !btn.hasAttribute('data-fixed')) {
            btn.setAttribute('data-fixed', 'true');
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }, 500);

    // (Removed) Collapsible nav for Proiecte
});

let lenis;

function initLenis() {
    console.log('🚀 Initializing slow parallax scrolling...');
    
    // Disable CSS smooth scrolling for manual control
    document.documentElement.style.scrollBehavior = 'auto';
    
    let targetY = window.pageYOffset;
    let currentY = targetY;
    let animating = false;
    
    // Flag to allow back to top to work
    let allowNativeScroll = false;
    
    // Expose to global scope for back to top button
    window.customScrollTargetY = targetY;
    window.customScrollAnimating = false;
    window.enableNativeScroll = function() {
        allowNativeScroll = true;
        setTimeout(() => { allowNativeScroll = false; }, 100);
    };
    
    function smoothUpdate() {
        const diff = targetY - currentY;
        if (Math.abs(diff) > 0.5) {
            currentY += diff * 0.15; // Smooth but responsive movement
            window.scrollTo(0, currentY);
            requestAnimationFrame(smoothUpdate);
        } else {
            currentY = targetY;
            animating = false;
        }
    }
    
    // Intercept wheel events for slow control
    window.addEventListener('wheel', function(e) {
        // Allow native scroll when back to top is being used
        if (allowNativeScroll) {
            return; // Let browser handle it naturally
        }
        
        e.preventDefault(); // Back to preventing default for custom scroll
        
        // Small increments for smooth parallax - need ~8-10 scrolls for full effect
        const increment = e.deltaY * 0.12; // Slightly faster than before
        
        targetY += increment;
        targetY = Math.max(0, Math.min(
            document.documentElement.scrollHeight - window.innerHeight,
            targetY
        ));
        
        // Update global variable
        window.customScrollTargetY = targetY;
        
        if (!animating) {
            animating = true;
            requestAnimationFrame(smoothUpdate);
        }
    }, { passive: false }); // Back to non-passive for preventDefault
    
    // Handle manual scrollbar usage
    let isManualScroll = false;
    window.addEventListener('scroll', function() {
        if (!animating) {
            isManualScroll = true;
            currentY = window.pageYOffset;
            targetY = currentY;
        }
    });
    
    console.log('✅ Smooth parallax scrolling enabled - ~8-10 scrolls for full effect');
}

function initParallax() {
    const parallaxContainer = document.querySelector('.mdx-parallax');
    if (!parallaxContainer) {
        console.log('No parallax container found');
        return;
    }

    // Select all parallax layers from the first group only
    const firstGroup = document.querySelector('.mdx-parallax__group:first-child');
    if (!firstGroup) {
        console.log('No first group found');
        return;
    }
    
    const parallaxLayers = firstGroup.querySelectorAll('.mdx-parallax__layer[style*="--md-parallax-depth"]');
    
    if (parallaxLayers.length === 0) {
        console.log('No parallax layers found');
        return;
    }

    console.log('Found', parallaxLayers.length, 'parallax layers');

    let ticking = false;

    function updateParallax() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        parallaxLayers.forEach(layer => {
            const depth = parseFloat(layer.style.getPropertyValue('--md-parallax-depth')) || 0;
            
            // Calculate parallax speed based on depth - fine-tuned
            let speed;
            if (depth >= 8) speed = 0.03;     // Background moves extremely slowly
            else if (depth >= 5) speed = 0.06; // Mid-ground (statuia) moves down very subtly
            else if (depth >= 3) speed = 0.12; // Characters (birou) move slower in sus
            else speed = 0.32;                 // Foreground (iarba) moves faster
            
            // Adjust direction based on layer type
            let yPos;
            if (depth === 5) {
                // Statuia se mișcă în jos (pozitiv) când scroll-ezi
                yPos = scrollTop * speed;
                console.log(`Statuie: depth=${depth}, speed=${speed}, scrollTop=${scrollTop}, yPos=${yPos}`);
            } else {
                // Alte layere se mișcă în sus (negativ) când scroll-ezi
                yPos = -(scrollTop * speed);
            }
            
            // Apply transform to the layer
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

        // Update blend layer opacity for smooth fade
        const blendLayer = document.querySelector('.mdx-parallax__blend');
        if (blendLayer) {
            const fadeStart = windowHeight * 0.5;
            const fadeEnd = windowHeight * 1.0;
            const fadeProgress = Math.min(Math.max((scrollTop - fadeStart) / (fadeEnd - fadeStart), 0), 1);
            blendLayer.style.opacity = fadeProgress;
        }

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Use window scroll
    window.addEventListener('scroll', requestTick);
    console.log('Parallax initialized with', parallaxLayers.length, 'layers');
}

function initSmoothScroll() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calculate offset for header
                const headerHeight = document.querySelector('.md-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                // Use Lenis if available, otherwise custom animation
                if (lenis) {
                    lenis.scrollTo(targetPosition, {
                        duration: 1.0,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
                    // Fallback smooth scroll animation
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 800;
                    let startTime = null;
                    
                    function animateScroll(currentTime) {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        
                        window.scrollTo(0, startPosition + (distance * ease));
                        
                        if (timeElapsed < duration) {
                            requestAnimationFrame(animateScroll);
                        }
                    }
                    
                    requestAnimationFrame(animateScroll);
                }
            }
        });
    });
}

function initHeaderTransition() {
    const header = document.querySelector('.md-header');
    if (!header) return;

    let ticking = false;

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow state when scrolled down
        if (scrollTop > 10) {
            header.setAttribute('data-md-state', 'shadow');
        } else {
            header.removeAttribute('data-md-state');
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
    
    // Check initial state
    updateHeader();
}

function initEnhancedBackToTop() {
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    let scrollCount = 0;
    let ticking = false;
    
    // Debug: Check if button exists
    const backToTopButton = document.querySelector('.md-top');
    console.log('Back to top button found:', backToTopButton);
    if (!backToTopButton) {
        console.log('❌ No .md-top button found');
        return;
    }
    
    function updateBackToTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Re-find the button in case it changed
        const currentButton = document.querySelector('.md-top');
        if (!currentButton) return;
        
        // Detect scroll direction
        if (scrollTop > lastScrollTop) {
            scrollDirection = 'down';
            scrollCount = 0;
        } else if (scrollTop < lastScrollTop) {
            scrollDirection = 'up';
            scrollCount++;
        }
        
        // Debug logging
        console.log(`Scroll: direction=${scrollDirection}, count=${scrollCount}, scrollTop=${scrollTop}, windowHeight=${windowHeight}`);
        
        // Show button only when user shows intent to go up (3+ consecutive scroll ups)
        // AND they are below the fold (good UX practice)
        const shouldShow = (
            scrollDirection === 'up' && 
            scrollCount >= 3 && 
            scrollTop > windowHeight * 0.5
        );
        
        console.log(`Should show: ${shouldShow}`);
        
        if (shouldShow) {
            currentButton.classList.add('md-top--show');
            currentButton.style.display = 'block';
        } else if (scrollDirection === 'down' || scrollTop <= windowHeight * 0.3) {
            // Hide when scrolling down OR when near top
            currentButton.classList.remove('md-top--show');
            setTimeout(() => {
                if (!currentButton.classList.contains('md-top--show')) {
                    currentButton.style.display = 'none';
                }
            }, 300);
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateBackToTop);
            ticking = true;
        }
    }
    
    // Override default Material behavior
    window.addEventListener('scroll', requestTick);
    
    // Try multiple approaches to hook into back to top
    
    // Approach 1: Direct click handler (try again with timeout)
    setTimeout(() => {
        const btn = document.querySelector('.md-top');
        console.log('Timeout check - button found:', btn);
        if (btn) {
            btn.addEventListener('click', function(e) {
                console.log('🚀 Direct click handler triggered!');
                e.preventDefault();
                
                // Check if we're on homepage with parallax
                const isHomepage = document.querySelector('.mdx-parallax');
                
                if (isHomepage && window.customScrollTargetY !== undefined) {
                    console.log('📍 Homepage detected - directly controlling targetY');
                    // Simply set the target to 0 - custom system will handle the animation
                    window.customScrollTargetY = 0;
                } else {
                    console.log('📄 Regular page - using standard smooth scroll');
                    // Standard smooth scroll for other pages
                    let target = 0;
                    let current = window.pageYOffset;
                    
                    function animate() {
                        const diff = target - current;
                        if (Math.abs(diff) > 1) {
                            current += diff * 0.12;
                            window.scrollTo(0, current);
                            requestAnimationFrame(animate);
                        } else {
                            window.scrollTo(0, 0);
                        }
                    }
                    animate();
                }
            });
        }
    }, 1000);
    

}

// (Removed) Proiecte collapsible helpers

function fixBackToTopOnHomepage() {
    // Intercept clicks on Material back to top button
    document.addEventListener('click', function(e) {
        if (e.target.closest('.md-top')) {
            e.preventDefault();
            e.stopPropagation();
            
            // Same as other pages
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, true);
}

// Smart TOC Scrolling - direct approach
function initSmartTOCScrolling() {
    const secondarySidebar = document.querySelector('.md-sidebar--secondary');
    
    if (!secondarySidebar) return;
    
    // Direct wheel handling on TOC element
    secondarySidebar.addEventListener('wheel', function(e) {
        // Prevent page scroll
        e.preventDefault();
        e.stopPropagation();
        
        // Scroll this element directly
        this.scrollBy(0, e.deltaY);
    }, { passive: false });
}

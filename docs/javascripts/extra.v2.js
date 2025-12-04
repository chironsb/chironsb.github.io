// Configure MathJax
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  }
};

document.addEventListener('DOMContentLoaded', function() {
    initLenis();
    
    if (document.querySelector('.mdx-parallax')) {
        initParallax();
    }
    
    initSmoothScroll();
    initHeaderTransition();
    initEnhancedBackToTop();
    initTOCClickHighlighting();
    initTOCScrollIsolation();
});

let lenis;

function initLenis() {
    document.documentElement.style.scrollBehavior = 'auto';
    
    let targetY = window.pageYOffset;
    let currentY = targetY;
    let animating = false;
    let allowNativeScroll = false;
    
    window.customScrollTargetY = targetY;
    window.enableNativeScroll = function() {
        allowNativeScroll = true;
        setTimeout(() => { allowNativeScroll = false; }, 100);
    };
    
    function smoothUpdate() {
        if (window.customScrollTargetY !== undefined && window.customScrollTargetY !== targetY) {
            targetY = window.customScrollTargetY;
        }
        const diff = targetY - currentY;
        if (Math.abs(diff) > 0.5) {
            currentY += diff * 0.15;
            window.scrollTo(0, currentY);
            requestAnimationFrame(smoothUpdate);
        } else {
            currentY = targetY;
            animating = false;
        }
    }
    
    window.forceCustomScroll = function() {
        if (window.customScrollTargetY !== undefined) {
            targetY = window.customScrollTargetY;
            if (!animating) {
                animating = true;
                requestAnimationFrame(smoothUpdate);
            }
        }
    };
    
    window.addEventListener('wheel', function(e) {
        if (allowNativeScroll) {
            return;
        }
        
        e.preventDefault();
        
        const increment = e.deltaY * 0.12;
        
        targetY += increment;
        targetY = Math.max(0, Math.min(
            document.documentElement.scrollHeight - window.innerHeight,
            targetY
        ));
        
        window.customScrollTargetY = targetY;
        
        if (!animating) {
            animating = true;
            requestAnimationFrame(smoothUpdate);
        }
    }, { passive: false });
    
    window.addEventListener('scroll', function() {
        if (!animating) {
            currentY = window.pageYOffset;
            targetY = currentY;
        }
    });
}

function initParallax() {
    const isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    const parallaxContainer = document.querySelector('.mdx-parallax');
    if (!parallaxContainer) {
        console.log('No parallax container found');
        return;
    }

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
            const bgImage = getComputedStyle(layer).backgroundImage || '';
            const isGrassLayer = bgImage.includes('assets/images/layers/1.png') || bgImage.includes('layers/1.png');
            
            let speed;
            if (depth >= 8) speed = 0.03;
            else if (depth >= 5) speed = 0.06;
            else if (depth >= 3) speed = 0.12;
            else speed = 0.32;

            if (isMobile && isGrassLayer) {
                speed *= 0.5;
            }
            
            let yPos;
            if (depth === 5) {
                yPos = scrollTop * speed;
            } else {
                yPos = -(scrollTop * speed);
            }
            
            if (isMobile && isGrassLayer) {
                const baseOffset = -windowHeight * 0.35;
                yPos += baseOffset;
            }
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

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

    window.addEventListener('scroll', requestTick);
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.md-header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                if (lenis) {
                    lenis.scrollTo(targetPosition, {
                        duration: 1.0,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
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
    updateHeader();
}

function initEnhancedBackToTop() {
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    let scrollCount = 0;
    let ticking = false;
    
    const backToTopButton = document.querySelector('.md-top');
    if (!backToTopButton) {
        return;
    }
    
    function updateBackToTop() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        const currentButton = document.querySelector('.md-top');
        if (!currentButton) return;
        
        if (scrollTop > lastScrollTop) {
            scrollDirection = 'down';
            scrollCount = 0;
        } else if (scrollTop < lastScrollTop) {
            scrollDirection = 'up';
            scrollCount++;
        }
        
        const shouldShow = (
            scrollDirection === 'up' && 
            scrollCount >= 3 && 
            scrollTop > windowHeight * 0.5
        );
        
        if (shouldShow) {
            currentButton.classList.add('md-top--show');
            currentButton.style.display = 'block';
        } else if (scrollDirection === 'down' || scrollTop <= windowHeight * 0.3) {
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
    
    window.addEventListener('scroll', requestTick);
}

function initTOCClickHighlighting() {
    const tocLinks = document.querySelectorAll('.md-sidebar--secondary .md-nav__link');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            tocLinks.forEach(l => l.classList.remove('toc-clicked'));
            this.classList.add('toc-clicked');
            setTimeout(() => {
                this.classList.remove('toc-clicked');
            }, 3000);
        });
    });
}

function initTOCScrollIsolation() {
    const leftSidebar = document.querySelector('.md-sidebar--primary');
    const rightSidebar = document.querySelector('.md-sidebar--secondary');
    
    // Function to isolate scroll for an element
    function isolateScroll(element, elementName) {
        if (!element) return;
        
        let isOverElement = false;
        
        // Detect mouse enter/leave
        element.addEventListener('mouseenter', function() {
            isOverElement = true;
        });
        
        element.addEventListener('mouseleave', function() {
            isOverElement = false;
        });
        
        // Prevent page scroll when wheel is over this element
        element.addEventListener('wheel', function(e) {
            if (isOverElement) {
                // Always prevent page scroll when over this element
                e.stopPropagation();
                // Element will scroll naturally
            }
        }, { passive: false });
        
        // Also prevent page scroll from window when over element
        window.addEventListener('wheel', function(e) {
            if (isOverElement) {
                // Prevent page scroll completely when over this element
                e.preventDefault();
                e.stopPropagation();
            }
        }, { passive: false });
    }
    
    // Isolate scroll for each sidebar
    if (leftSidebar) {
        isolateScroll(leftSidebar, 'left sidebar');
    }
    
    if (rightSidebar) {
        isolateScroll(rightSidebar, 'right sidebar');
    }
    
    // For main content, we want normal page scroll
    // No isolation needed - it IS the page
}


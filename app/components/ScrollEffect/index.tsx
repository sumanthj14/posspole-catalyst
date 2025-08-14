"use client"
import { useEffect, useCallback, useRef } from 'react';

const ScrollEffect = () => {
    const ticking = useRef(false);

    // Throttled scroll handler for better performance
    const handleScroll = useCallback(() => {
        if (!ticking.current) {
            requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const isScrolled = scrollTop > 50;
                
                // Update HTML data attribute for CSS targeting
                document.documentElement.setAttribute('data-scroll', scrollTop.toString());
                
                // Add/remove body class for fixed navbar compensation
                if (isScrolled) {
                    document.body.classList.add('navbar-fixed');
                } else {
                    document.body.classList.remove('navbar-fixed');
                }
                
                ticking.current = false;
            });
            ticking.current = true;
        }
    }, []);

    useEffect(() => {
        // Enhanced smooth scrolling for older browsers (native implementation)
        if (!('scrollBehavior' in document.documentElement.style)) {
            // Fallback for browsers that don't support smooth scrolling
            const originalScrollTo = window.scrollTo;
            window.scrollTo = function(options: any) {
                if (typeof options === 'object' && options.behavior === 'smooth') {
                    const start = window.pageYOffset;
                    const target = options.top;
                    const distance = target - start;
                    const duration = 500;
                    let startTime: number;

                    const animation = (currentTime: number): void => {
                        if (!startTime) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
                        
                        originalScrollTo.call(window, 0, start + distance * ease);
                        
                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation);
                        }
                    }
                    
                    requestAnimationFrame(animation);
                } else {
                    originalScrollTo.apply(window, arguments as any);
                }
            };
        }

        // Initial call
        handleScroll();
        
        // Add scroll listener with passive option for better performance
        window.addEventListener('scroll', handleScroll, { 
            passive: true,
            capture: false 
        });
        
        // Add resize listener for responsive adjustments
        const handleResize = () => {
            handleScroll();
        };
        
        window.addEventListener('resize', handleResize, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleScroll]);

    return null;
};

export default ScrollEffect;
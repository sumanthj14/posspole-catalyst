'use client';

import { useEffect, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener for anchor clicks
    document.addEventListener('click', handleAnchorClick);

    // Enhanced scroll performance
    let ticking = false;
    const updateScrollPosition = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update any scroll-dependent UI here
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll event for better performance
    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    // Intersection Observer for scroll animations (only for non-framer-motion elements)
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Skip elements that already have framer-motion animations
        if (entry.target.querySelector('[data-framer-motion="true"]')) {
          return;
        }
        
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('animate-fade-out');
        } else {
          entry.target.classList.remove('animate-fade-in');
          entry.target.classList.add('animate-fade-out');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations (excluding those with framer-motion)
    const sections = document.querySelectorAll('section:not([data-framer-motion])');
    sections.forEach((section) => {
      if (!section.querySelector('[data-framer-motion="true"]')) {
        observer.observe(section);
      }
    });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', updateScrollPosition);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
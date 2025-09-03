'use client';

import { useState } from 'react';
import PopupBanner from '../PopupBanner';

interface PopupBannerWrapperProps {
  imageSrc: string;
  imageAlt: string;
  autoShow: boolean;
  showDelay: number;
}

export default function PopupBannerWrapper({
  imageSrc,
  imageAlt,
  autoShow,
  showDelay
}: PopupBannerWrapperProps) {
  const handleSignupClick = () => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Wait a bit for scroll to complete, then find and click signup button
    setTimeout(() => {
      const buttons = document.querySelectorAll('button');
      Array.from(buttons).forEach((button) => {
        if (button.textContent?.includes('Signup')) {
          button.click();
          return;
        }
      });
    }, 500);
  };

  return (
    <PopupBanner
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      autoShow={autoShow}
      showDelay={showDelay}
      onSignupClick={handleSignupClick}
    />
  );
}
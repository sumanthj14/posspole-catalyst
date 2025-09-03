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
      for (const button of buttons) {
        if (button.textContent?.includes('Signup')) {
          button.click();
          break;
        }
      }
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
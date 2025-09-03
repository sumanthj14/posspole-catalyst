'use client';

import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface PopupBannerProps {
  imageSrc: string;
  imageAlt?: string;
  autoShow?: boolean;
  showDelay?: number;
  onSignupClick?: () => void;
}

const PopupBanner: React.FC<PopupBannerProps> = ({
  imageSrc,
  imageAlt = 'Banner',
  autoShow = true,
  showDelay = 1000,
  onSignupClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (autoShow && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, showDelay);

      return () => clearTimeout(timer);
    }
  }, [autoShow, showDelay, hasShown]);

  // Auto-close popup after 10 seconds if not interacted with
  useEffect(() => {
    if (isOpen) {
      const autoCloseTimer = setTimeout(() => {
        setIsOpen(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all max-w-4xl w-full mx-4">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100 bg-white shadow-lg"
                  aria-label="Close banner"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                
                {/* Banner Image */}
                <div className="relative w-full">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1000}
                    height={400}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-gray-100 rounded-t-2xl"
                    priority
                  />
                </div>
                
                {/* Call to Action Section */}
                <div className="p-3 sm:p-4 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Ready to Build the Future?
                  </h2>
                  <p className="text-xs text-gray-700 mb-3 max-w-lg mx-auto leading-relaxed">
                    Step into Posspole Catalyst — where innovation meets industry. Join our elite program integrated with Posspole{'s'} full‑stack ecosystem, spanning product development, compliance, manufacturing, market access, and funding. Work on real‑world challenges in healthcare, defence, telecom, and energy, and become a global product creator from India. Spots are limited — secure yours today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
                    <button
                      onClick={() => {
                        if (onSignupClick) {
                          onSignupClick();
                        }
                        closeModal();
                      }}
                      className="bg-navyblue hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm min-w-[120px]"
                    >
                      SignUp
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm min-w-[120px]"
                    >
                      Maybe Later
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PopupBanner;
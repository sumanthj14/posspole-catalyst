import React, { useState } from "react";
import Link from "next/link";
import Signup from "./Signup";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#about', current: true },
    { name: 'Identify & Train', href: '#identify', current: false },
    { name: 'Program', href: '#program', current: false },
    { name: 'The Model', href: '#hero', current: false },
    { name: 'Co-Founders', href: '#cofounders', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    const [loadingLink, setLoadingLink] = useState<string | null>(null);

    return (
        <div className="w-full">
            <div className="flex-1 space-y-2 py-2">
                <div className="block">
                    <div className="space-y-2 px-4 pt-2 pb-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-navyblue text-white border-l-4 border-navyblue' : 'text-slate-700 hover:bg-navyblue hover:text-white',
                                    'block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 min-h-[48px] flex items-center',
                                    loadingLink === item.href ? 'link-loading' : ''
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLoadingLink(item.href);
                                    
                                    // Smooth scroll to target section
                                    const targetId = item.href.replace('#', '');
                                    const targetElement = document.getElementById(targetId);
                                    
                                    if (targetElement) {
                                        // Add a slight delay for visual feedback
                                        setTimeout(() => {
                                            targetElement.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                            
                                            // Re-trigger animations by temporarily removing and re-adding elements to viewport
                                            const animatedElements = targetElement.querySelectorAll('[data-framer-motion]');
                                            animatedElements.forEach((el) => {
                                                const motionEl = el as any;
                                                if (motionEl.style) {
                                                    motionEl.style.transform = 'translateY(50px)';
                                                    motionEl.style.opacity = '0';
                                                    setTimeout(() => {
                                                        motionEl.style.transform = 'translateY(0px)';
                                                        motionEl.style.opacity = '1';
                                                    }, 100);
                                                }
                                            });
                                        }, 200);
                                    }
                                    
                                    setTimeout(() => setLoadingLink(null), 1000);
                                }}
                            >
                                {item.name}
                                {loadingLink === item.href && (
                                    <span className="ml-2 inline-block w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></span>
                                )}
                            </Link>
                        ))}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <Signup />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;

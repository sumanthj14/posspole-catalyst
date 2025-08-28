import React, { useState } from "react";
import Link from "next/link";
import Signup from "./Signup";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '#about-section', current: true },
    { name: 'Identify & Train', href: '#identify-train-section', current: false },
    { name: 'Program', href: '#program-section', current: false },
    { name: 'Contact', href: '#contact-section', current: false },
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
                                    item.current ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600',
                                    'block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 min-h-[48px] flex items-center',
                                    loadingLink === item.href ? 'link-loading' : ''
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                onClick={() => {
                                    setLoadingLink(item.href);
                                    setTimeout(() => setLoadingLink(null), 800);
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

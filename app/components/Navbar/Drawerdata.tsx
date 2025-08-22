import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

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
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-2 py-2">
                <div className="block">
                    <div className="space-y-2 px-4 pt-2 pb-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600',
                                    'block py-3 px-3 rounded-lg text-base font-medium transition-colors duration-200 min-h-[44px] flex items-center'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-6 pt-4 border-t border-gray-200"></div>
                        <button className="bg-blue-600 w-full hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 min-h-[44px]">
                            Contact Us
                        </button>
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;

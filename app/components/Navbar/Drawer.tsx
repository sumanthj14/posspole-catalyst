import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-300 translate-x-0  "
                    : " transition-all delay-300 opacity-0 -translate-x-full  ")
            }
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
        >
            <section
                className={
                    "w-80 sm:w-96 max-w-sm sm:max-w-md left-0 absolute bg-white h-full shadow-xl delay-200 duration-300 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >

                <article className="relative w-full pb-10 flex flex-col space-y-6 h-full">
                    <header className="px-4 py-4 flex items-center justify-between border-b border-gray-200">

                        <div className="flex flex-shrink-0 items-center">
                            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-3 sm:p-4 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200 min-h-[48px] min-w-[48px]"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <XMarkIcon className="block h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                        </button>
                    </header>
                    <div onClick={() => {
                        setIsOpen(false);
                    }}>{children}</div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;

"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Contactusform = () => {
    let [isOpen, setIsOpen] = useState(false)

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({ ...prevState, [name]: value }));
    }

    const handleClick = () => {
        alert(`Name: ${inputValues.input1}, Email-address: ${inputValues.input2}, Message: ${inputValues.input3}`);
        setIsOpen(false)
    }

    // FORM SUBMIT
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // handle form submission
    };

    const isDisabled = Object.values(inputValues).some((value) => value === '');


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                {/* Mobile Contact Button */}
                <div className='block lg:hidden'>
                    <button 
                        type="button" 
                        className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm min-h-[44px] transition-colors duration-200' 
                        onClick={openModal}
                    >
                        Contact
                    </button>
                </div>
                {/* Desktop Contact Button */}
                <div className='hidden lg:block'>
                    <button 
                        type="button" 
                        className='justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 min-h-[44px]' 
                        onClick={openModal}
                    >
                        Contact Us
                    </button>
                </div>
            </div>

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
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 sm:p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm sm:max-w-md transform overflow-hidden rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="py-4 sm:py-6 lg:py-8 px-2 sm:px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='flex items-center'>
                                                <Image 
                                                    src="/images/posspole-logo.svg" 
                                                    alt="POSSPOLE CATALYST" 
                                                    width={280} 
                                                    height={80}
                                                    className="h-8 sm:h-10 lg:h-12 w-auto"
                                                />
                                            </Link>
                                        </div>
                                        <p className="mb-6 sm:mb-8 lg:mb-16 mt-4 sm:mt-6 lg:mt-8 font-light text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-xl">Contact us now? Want to send us a feedback?</p>
                                        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
                                            <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                                <input
                                                    id="text"

                                                    name="input1"
                                                    value={inputValues.input1}
                                                    onChange={handleChange}

                                                    type="text"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Name..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                                <input
                                                    id="email"
                                                    name="input2"
                                                    value={inputValues.input2}
                                                    onChange={handleChange}

                                                    type="email"
                                                    autoComplete="current-password"
                                                    required
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="xyz@email.com"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                                <textarea
                                                    id="message"
                                                    name="input3"
                                                    value={inputValues.input3}
                                                    onChange={handleChange}
                                                    className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Leave a comment..."></textarea>
                                            </div>
                                            <button type="submit"
                                                onClick={handleClick}
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>

                                        </form>

                                    </div>

                                    {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Contactusform;

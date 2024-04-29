import { ModalProps } from '@/types/portfolio'
import React from 'react'
import { Icon } from '../icon/Icon'

export default function Modal({ onClose, isOpen, children, heading }: ModalProps) {
    return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full h-[calc(100%)] max-h-full" >
            <div className="flex bg-zinc-950 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%)] max-h-full" onClick={onClose} />
            <div className="relative p-4 w-full h-full ">
                <div className="relative  rounded-lg shadow bg-black border border-white/[0.2] flex flex-col items-start mx-auto p-4 h-full max-h-[100%] z-[99999999]">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
                    <div className="flex items-center justify-between p-4 md:p-5 w-full">
                        <h3 className="text-xl font-semibold text-white dark:text-white">
                            {heading}
                        </h3>
                        <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white transition-all" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4 w-full h-[calc(100% - 72px)] overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client"
import { useState } from "react"
import Sidebar from "./Sidebar"
import Link from "next/link"


function Main() {
    const [isOpen, setisOpen] = useState(false)

    return (
        <>
            <div className={`h-[100vh] flex m-auto scroll-smooth bg-black/30 fixed inset-0 w-full `}>
                <Sidebar />
                <main className='flex items-center m-auto justify-center'>
                    <div className='lg:max-w-3xl p-4 sm:p-0 lg:min-w-[48rem] max-w-full mx-auto flex-1 relative flex flex-col items-start justify-center sm:h-auto'>
                        <section className='w-full flex-1 mb-8 flex flex-col justify-start'>
                            <header className="space-y-2 sm:space-y-1">
                                <h1 className="text-2xl leading-7 transition-all sm:leading-10 sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-700 via-gray-400 to-white">Hi there, Mety
                                    <br /> What would like to know?
                                </h1>
                                <p className="text-sm transition-all text-neutral-500 sm:text-base">Use one of the most common prompts
                                    <br /> below or use your own to begin.</p>
                            </header>
                        </section>
                        <section className='flex flex-col justify-between h-full w-full space-y-2 border border-[#151B2D] mb-6  p-3 rounded-full shadow-sm   bg-[#151B2D] relative'>
                            <textarea maxLength='1000' type="text" placeholder='What`s in your mind ? ...' className='w-full resize-none px-6 focus:outline-none placeholder:text-gray-600 text-gray-300 text-sm bg-transparent rounded-2xl'></textarea>
                            <div className='flex items-center justify-end space-x-2 absolute top-0 bottom-2 right-4 '>
                                <div>
                                    <button type="submit" className='bg-gradient-to-t from-blue-600 to-purple-600 text-white p-1.5 rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                {/* Sign In && Sign Up */}
                <div className='text-white text-right px-3 pt-4 space-x-2 fixed right-0 text-sm'>
                    <Link href="/login" className=' bg-white text-black rounded-3xl cursor-pointer py-2 px-3 font-bold'>Log in</Link>
                    <Link href="/register" className=' bg-black/30 border border-gray-400 hover:bg-gray-900 transition-all rounded-3xl cursor-pointer py-2 px-3 font-bold'>Sign up</Link>
                </div>
            </div>
        </>
    )
}

export default Main
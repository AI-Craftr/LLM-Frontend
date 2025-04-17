"use client"
import { useState } from 'react'
import Dashboard from '../../modules/Sidebar/Sidebar'

function Home() {

    const [isOpen, setisOpen] = useState(false)

    return (
        <>
            <div className={`block md:hidden ${isOpen ? 'left-0' : 'left-[-22rem]'}`} onClick={() => setisOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='h-[100vh] flex m-auto scroll-smooth'>
                <Dashboard />
                <main className='flex items-center m-auto justify-center'>
                    <div className='lg:max-w-3xl p-4 sm:p-0 lg:min-w-[48rem] max-w-full mx-auto flex-1 relative flex flex-col items-start justify-center sm:h-auto'>
                        <section className='w-full flex-1 mb-8 flex flex-col justify-start'>
                            <header class="space-y-2 sm:space-y-1">
                                <h1 class="text-2xl leading-7 transition-all sm:leading-10 sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-700 via-gray-400 to-white">Hi there, Mety
                                    <br /> What would like to know?
                                </h1>
                                <p class="text-sm transition-all text-neutral-500 sm:text-base">Use one of the most common prompts
                                    <br /> below or use your own to begin.</p>
                            </header>
                        </section>
                        <section className='flex flex-col justify-between  w-full space-y-2 border border-[#151B2D] mb-6  p-3 rounded-3xl shadow-sm   bg-[#151B2D] relative'>
                            <input type="text" placeholder='What`s in your mind ? ...' className='w-full resize-none px-6 focus:outline-none placeholder:text-gray-600 text-gray-300 text-sm bg-transparent rounded-2xl' />
                            <div className='flex items-center justify-end space-x-2 absolute top-0 bottom-2 right-4 '>
                                <div>
                                    <button type="submit" className='bg-gradient-to-t from-blue-600 to-purple-600 text-white p-1.5 rounded-full flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home
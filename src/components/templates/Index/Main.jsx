"use client"
import { useState } from "react"
import Link from "next/link"
import Sidebar from "./Sidebar"


function Main() {

    const [isLoading, setIsLoading] = useState(false);
    const [isSending, setIsSending] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null);
    const [wasCancelled, setWasCancelled] = useState(false)

    const handleClick = async () => {

        setIsLoading(true);

        // Initial delay to show loading
        const id = setTimeout(() => {
            setIsSending(true);
            setWasCancelled(false);
            console.log("شروع ارسال پیام...");

            const sendId = setTimeout(() => {
                console.log("پیام با موفقیت ارسال شد!");
                setIsLoading(false);
                setIsSending(false);
                setTimeoutId(null);
            }, 1500); // Initial delay to show loading

            setTimeoutId(sendId); // Actual sending ID delay
        }, 500); // Initial delay for loading

        setTimeoutId(id); // ID delay Initial delay
    }

    const handleCancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setIsLoading(false);
        setIsSending(false);
        setWasCancelled(true)
        setTimeoutId(null);
        console.log("عملیات لغو شد!");
    };
    return (
        <div className="h-[100vh] flex m-auto scroll-smooth bg-black/30 fixed inset-0 w-full">
            <Sidebar />

            <main className="flex-1 flex flex-col justify-center sm:p-6 max-h-screen overflow-y-auto sm:grid sm:place-items-center mx-auto">
                <div className="lg:max-w-3xl p-6 sm:p-0 lg:min-w-[48rem] max-w-full mx-auto flex-1 relative flex flex-col items-start justify-center sm:h-auto">

                    {/* Header Section */}
                    <section className="w-full mb-8 flex flex-col justify-start">
                        <header className="space-y-2 sm:space-y-1">
                            <h1 className="text-2xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-purple-700 via-gray-400 to-white">
                                Hi there, Mety
                                <br /> What would you like to know?
                            </h1>
                            <p className="text-sm sm:text-base text-neutral-500">
                                Use one of the most common prompts below or use your own to begin.
                            </p>
                        </header>
                    </section>

                    {/* Textarea and Button Section */}
                    <section className="w-full mb-6 p-4 rounded-2xl bg-zinc-800/60 shadow-md space-y-4 relative">
                        <textarea
                            maxLength="1000"
                            placeholder="What's in your mind?..."
                            className="w-full p-4 resize-none rounded-2xl bg-transparent text-gray-100 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-md"
                        ></textarea>

                        {/* Button to send message or cancel */}
                        <div className="flex items-center justify-end space-x-2 absolute top-0 bottom-2 right-4">
                            <button
                                onClick={isLoading && isSending ? undefined : (isLoading ? handleCancel : handleClick)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center absolute bottom-4 right-3 top-7  text-white transition-all duration-300 ${isLoading
                                    ? isSending
                                        ? 'bg-gray-600'
                                        : 'bg-red-600'
                                    : wasCancelled
                                        ? 'bg-yellow-500'
                                        : 'bg-gradient-to-t from-blue-600 to-purple-600'
                                    }`}
                            >
                                {isLoading ? (
                                    isSending ? (
                                        <div className="sk-circle">
                                            <div className="sk-circle1 sk-child"></div>
                                            <div className="sk-circle2 sk-child"></div>
                                            <div className="sk-circle3 sk-child"></div>
                                            <div className="sk-circle4 sk-child"></div>
                                            <div className="sk-circle5 sk-child"></div>
                                            <div className="sk-circle6 sk-child"></div>
                                            <div className="sk-circle7 sk-child"></div>
                                            <div className="sk-circle8 sk-child"></div>
                                            <div className="sk-circle9 sk-child"></div>
                                            <div className="sk-circle10 sk-child"></div>
                                            <div className="sk-circle11 sk-child"></div>
                                            <div className="sk-circle12 sk-child"></div>
                                        </div>
                                    ) : (
                                        <span>✖️</span>
                                    )
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </section>

                </div>
            </main>

            {/* Sign In and Sign Up */}
            <div className="text-white text-right px-3 pt-4 space-x-2 fixed right-0 text-sm">
                <Link href="/login" className="bg-white text-black rounded-3xl cursor-pointer py-2 px-3 font-bold">
                    Log in
                </Link>
                <Link href="/register" className="bg-black/30 border border-gray-700 hover:bg-gray-900 transition-all rounded-3xl cursor-pointer py-2 px-3 font-bold">
                    Sign up
                </Link>
            </div>
        </div>
    )
};



export default Main
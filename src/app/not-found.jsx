import React from 'react'
import Link from 'next/link'


function NotFound() {
    return (
        <>
            <div className='p-3 overflow-hidden flex justify-center items-center h-[100vh]'>
                <h1 className='text-white  text-xl md:text-5xl text-center '>Page not found🥹🥹<Link href="/" className='bg-gray-700 p-1 rounded-lg text-lg md:text-2xl'>Go back to home.</Link></h1>
            </div>
        </>
    )
}

export default NotFound
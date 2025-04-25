import Link from 'next/link'
import React from 'react'

function RegisterAuth() {
  return (
    <div className='container m-auto   overscroll-contain p-3'>
      <div className='flex flex-col justify-center h-[700px]'>
        <div className='text-white text-center space-y-4 mb-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Sign in with free trail</h1>
          <p className='text-gray-300'>Empower your experience,sign up for a free account today</p>
        </div>
        <form action="#">
          <div className='flex flex-col items-center space-y-5 md:space-y-7'>
            <div className='text-white w-[80%] lg:w-[40%]'>
              <label htmlFor='#' className='block text-gray-300 mb-2'>Usename*</label>
              <input type="text" placeholder='ex.email@domain.com' className='w-full h-full focus:outline-none focus:border-none text-black p-3 md:p-5 rounded-2xl' required />
            </div>
            <div className='text-white w-[80%] lg:w-[40%]'>
              <label htmlFor='#' className='block text-gray-300 mb-2'>Email Address*</label>
              <input type="password" placeholder='Enter password' className='w-full h-full focus:outline-none focus:border-none text-black p-3 md:p-5 rounded-2xl' required />
            </div>
            <div className='text-white w-[80%] lg:w-[40%]'>
              <label htmlFor='#' className='block text-gray-300 mb-2'>Confirm password*</label>
              <input type="password" placeholder='Enter password' className='w-full h-full focus:outline-none focus:border-none text-black p-3 md:p-5 rounded-2xl' required />
            </div>
          </div>
          <a href="#" className='text-white flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-all w-[80%] md:w-[60%] 2xl:w-[40%] m-auto mt-8 p-4 rounded-full'>Get started free</a>
          <div className='text-center mt-3'>
            <span className='text-center text-white'>Already have on account? <Link href="/login" className='text-blue-600'>Login</Link></span>
          </div>
          <div className='text-center flex items-center justify-center gap-x-3 mt-8'>
            <span className='block w-[100px] md:w-[200px] h-[0.5px] bg-gray-800'></span>
            <span className='text-gray-500 mt-[-6px]'>Or better yet...</span>
            <span className='block w-[100px] md:w-[200px] h-[0.5px] bg-gray-800'></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterAuth
import React from 'react'
import { Spectral } from 'next/font/google';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // Choose weights you need
});

const Testimonials = () => {
  return (
    <div id="testimonials" className=' bg-red-50 dark:bg-black dark:text-red-50 w-full h-[80vh] flex flex-col items-center justify-center text-center'>
      <h1 className={`${spectral.className} uppercase font-bold text-4xl mb-4`}>What our users are saying</h1>
      {/* <div className='w-[85%] h-[80%] overflow-x-scroll flex items-center justify-center'>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>
        <div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div><div className='flex flex-col gap-4 p-4 bg-white w-[400px] mx-5 h-[90%] shadow-sm shadow-slate-300 rounded-2xl'></div>

      </div> */}
    </div>
  )
}

export default Testimonials

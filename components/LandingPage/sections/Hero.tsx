import React from 'react'
import { Poiret_One } from 'next/font/google';
import { Yanone_Kaffeesatz } from 'next/font/google';
import Image from 'next/image';
import hero from '@/assets/heroimg.jpg'

const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: ['400'], // Poiret One only has a 400 weight option
});

const yanoneKaffeesatz = Yanone_Kaffeesatz({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // Choose weights you need
});

const Hero = () => {
  return (
    <div id="hero" className=' h-full w-full flex flex-col items-center justify-center bg-red-50 dark:bg-[#1a1a2e] dark:text-red-50'>
      <div
        className=' text-center h-[50%] w-full flex items-center justify-center'
      >
        <div>
          <h1 className={`${poiretOne.className} text-4xl mb-4`}>Our job is to</h1>
          <h1 className={`${yanoneKaffeesatz.className} text-9xl font-bold uppercase`}>help you to help yourself</h1>
          <p className={`${poiretOne.className} text-2xl mb-4 m-0 p-0`}>Track every single expense you make to breed healthy spending habits.</p>
        </div>
      </div>
      <div className=' w-full h-[50%] flex items-end justify-center'>
        <div className="w-[65%] h-[90%] border-2 border-b-0 border-red-100 rounded-t-2xl hero overflow-hidden">
          <Image
            src={hero}
            alt=''
            className=' rounded-t-2xl'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { Yanone_Kaffeesatz } from 'next/font/google';
import { Poiret_One } from 'next/font/google';
import { Andika } from 'next/font/google'
import Link from 'next/link';

const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: ['400'], // Poiret One only has a 400 weight option
});

const yanoneKaffeesatz = Yanone_Kaffeesatz({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'], // Choose weights you need
});

const andika = Andika({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
});

const GetStarted = () => {
  return (
    <section id="getstarted" className="h-[55vh] relative bg-black py-2">
      <video
        src="/get_started.mp4"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        autoPlay
        loop
        playsInline
        muted
        controls={false}
      ></video>
      <div className="z-[3] relative text-white h-full w-full flex flex-col justify-center items-center gap-7">
        <h1 className={`${yanoneKaffeesatz.className} text-center text-4xl lg:text-7xl uppercase font-semibold tracking-wide`}>
          Get Started Today
        </h1>
        <p className={`${andika.className} text-md w-[60%] lg:w-[40%] text-center mx-auto`}>
          Step into a realm where organization meets sophistication, meticulously designed
          for every detail of your financial journey. Our expense tracker harmonizes
          functionality with style, ensuring that managing your finances is not only
          effective but also a pleasure. Embrace the ease of tracking your spending and
          budgeting, all while enjoying a sleek and intuitive interface that complements
          your lifestyle. Start your journey toward financial clarity today!
        </p>
        <Link
          href={''}
          className=' bg-red-50 dark:bg-[#20212c] px-8 py-2 text-black dark:text-red-50 hover:rounded-sm hover:font-semibold hover:px-12 duration-500'
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

export default GetStarted

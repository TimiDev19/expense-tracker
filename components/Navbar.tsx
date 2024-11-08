"use client";
import React, { useState } from 'react'
import { Yanone_Kaffeesatz } from 'next/font/google';
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import useDarkMode from '../hooks/useDarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import JoinFullOutlinedIcon from '@mui/icons-material/JoinFullOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';

const yanoneKaffeesatz = Yanone_Kaffeesatz({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'], // Choose weights you need
});

const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode()
    const [darkSide, setDarkSide] = useState(
        colorTheme === 'light' ? true : false
    )
    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <div className=' fixed z-[3] h-[100vh] w-[20%] bg-red-50 dark:bg-[#1a1a2e] border-r-2 border-black dark:border-red-50 flex items-center justify-center'>
            <div
                className=' h-[90%] w-full flex flex-col items-center justify-between'
            >
                <div className=' w-full text-center h-[90%]'>
                    <h1 className={`${yanoneKaffeesatz.className} uppercase font-bold text-4xl dark:text-red-50 mb-6`}>Expense tracker</h1>
                    <Link
                        href={'/#hero'}
                        className=" w-full"
                    >
                        <div className=" w-[75%] mx-auto flex items-center justify-start duration-500 hover:bg-red-200 p-3 rounded-xl mb-4 dark:text-red-50">
                            <HomeOutlinedIcon className='mr-2' />
                            Home
                        </div>
                    </Link>
                    <Link
                        href={'/#getstarted'}
                        className=" w-full"
                    >
                        <div className=" w-[75%] mx-auto flex items-center justify-start duration-500 hover:bg-red-200 p-3 rounded-xl mb-4 dark:text-red-50">
                            <JoinFullOutlinedIcon className='mr-2' />
                            Get Started
                        </div>
                    </Link>
                    <Link
                        href={'/#contact'}
                        className=" w-full"
                    >
                        <div className=" w-[75%] mx-auto flex items-center justify-start duration-500 hover:bg-red-200 p-3 rounded-xl mb-4 dark:text-red-50">
                            <ConnectWithoutContactOutlinedIcon className='mr-2' />
                            Contact
                        </div>
                    </Link>
                </div>

                <div className=' mx-2 py-2 w-[70%] m-auto bg-red-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg'>
                    <LightModeIcon className=' text-black dark:text-red-50 mx-4' />
                    <div onClick={toggleDarkMode} className=' hover:cursor-pointer dark:bg-[#1a1a2e] dark:justify-end duration-700 bg-red-50 dark:border-0 border border-black flex w-1/4 h-6 rounded-full items-center px-2'>
                        <div className='h-5 w-5 py-2 bg-black dark:bg-white rounded-full'></div>
                    </div>
                    <DarkModeIcon className=' text-black dark:text-red-50 mx-4' />
                </div>
            </div>
        </div>
    )
}

export default Navbar

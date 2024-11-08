import React from 'react'
import map from '@/assets/map.jpg'
import { Andika } from 'next/font/google'
import { Poiret_One } from 'next/font/google';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';

const andika = Andika({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
});

const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: ['400'], // Poiret One only has a 400 weight option
});

const Contact = () => {
  return (
    <div id='contact' className=' h-[95vh] w-full flex items-center justify-center bg-red-50 dark:bg-[#1a1a2e] dark:text-red-50'>
      <form className='w-[48%] h-full px-[10px] py-[28px] text-left flex items-center justify-center'>
        <div>
          <h1 className={`${andika.className} font-bold text-4xl capitalize mb-5`}>Reach out to us ✨</h1>

          <div className=" flex items-center justify-between w-full mb-[30px]">
            <input
              type="text"
              placeholder='First Name *'
              required
              className={`${poiretOne.className} bg-transparent w-[45%] border-b border-black text-black dark:text-red-50 dark:placeholder:text-red-50 dark:border-red-50 placeholder:text-black font-light focus:outline-none focus:placeholder:text-transparent`}
            />
            <input
              type="text"
              placeholder='First Name *'
              required
              className={`${poiretOne.className} bg-transparent w-[45%] border-b border-black text-black dark:text-red-50 dark:placeholder:text-red-50 dark:border-red-50 placeholder:text-black font-light focus:outline-none focus:placeholder:text-transparent`}
            />
          </div>

          <input
            type="email"
            placeholder='Email *'
            required
            className={`${poiretOne.className} bg-transparent w-full border-b border-black text-black dark:text-red-50 dark:placeholder:text-red-50 dark:border-red-50 placeholder:text-black font-light focus:outline-none focus:placeholder:text-transparent mb-[30px]`}
          />

          <input
            type="text"
            placeholder='Mobile Number *'
            required
            className={`${poiretOne.className} bg-transparent w-full border-b border-black text-black dark:text-red-50 dark:placeholder:text-red-50 dark:border-red-50 placeholder:text-black font-light focus:outline-none focus:placeholder:text-transparent mb-[30px]`}
          />

          <input
            type="textarea"
            placeholder='Mobile Number *'
            required
            className={`${poiretOne.className} bg-transparent w-full border-b border-black text-black dark:text-red-50 dark:placeholder:text-red-50 dark:border-red-50 placeholder:text-black font-light focus:outline-none focus:placeholder:text-transparent mb-[30px]`}
          />

          <textarea name="" id="" cols={30} rows={10}
            placeholder='Message *'
            required
            className={`${poiretOne.className} bg-transparent resize-none w-full border-b border-black dark:text-red-50 dark:placeholder:text-red-50 dark:border-red-50 text-black placeholder:text-black font-light focus:outline-none focus:placeholder:text-transparent mb-[30px]`}
          ></textarea>

          <button
            className=' flex dark:bg-[#20212c] items-center justify-center bg-red-100 p-3 rounded-lg hover:border-2 hover:border-black dark:hover:border-red-50 dark:text-red-50 duration-500'
          >
            Send message
            <SendIcon className=' mx-4 ' />
          </button>
        </div>
      </form>
      <div className='w-[48%] h-full p-5 flex items-center justify-center text-left'>
        <div className=' text-left w-full'>
          <h1 className={`${andika.className} font-bold text-4xl capitalize mb-5`}>Contact Info</h1>

          <div className={`${andika.className} border-b border-dashed pb-4 border-gray-500 text-gray-500 mb-4`}>
            <h1 className=' font-semibold text-xl mb-2'>Mobile details</h1>
            <div className=' w-full flex items-center justify-between'>
              <h1 className=' font-thin text-gray-400'>Reach out to us on whatsapp via</h1>
              <h1 className=' font-thin flex items-center justify-center text-sm'>
                (+234)000 000 0000
                <WhatsAppIcon className=' text-sm mx-2' />
              </h1>
            </div>

            <div className=' w-full flex items-center justify-between'>
              <h1 className=' font-thin text-gray-400'>Reach out to us on instagram via</h1>
              <h1 className=' font-thin flex items-center justify-center text-sm'>
                extracker_top
                <InstagramIcon className=' text-sm mx-2' />
              </h1>
            </div>

            <div className=' w-full flex items-center justify-between'>
              <h1 className=' font-thin text-gray-400'>Reach out to us on twitter via</h1>
              <h1 className=' font-thin flex items-center justify-center text-sm'>
                extracker_top
                <XIcon className=' text-sm mx-2' />
              </h1>
            </div>

            <div className=' w-full flex items-center justify-between'>
              <h1 className=' font-thin text-gray-400'>Reach out to us on facebook via</h1>
              <h1 className=' font-thin flex items-center justify-center text-sm'>
                extracker_top
                <FacebookIcon className=' text-sm mx-2' />
              </h1>
            </div>
          </div>

          <div className=' w-full rounded-3xl overflow-hidden h-[40vh] bg-black dark:border-2 dark:border-red-50'>
            <Image
              src={map}
              alt=''
              className=' rounded-t-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

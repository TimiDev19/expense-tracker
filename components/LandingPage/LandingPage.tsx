import React from 'react'
import Hero from './sections/Hero'
import GetStarted from './sections/GetStarted'
import Contact from './sections/Contact'
import Testimonials from './sections/Testimonials'

const LandingPage = () => {
    return (
        <div className=' pl-[20%] h-[100vh] w-[100vw] overflow-y-scroll scroll-smooth'>
            <Hero />
            <GetStarted />
            {/* <Testimonials /> */}
            <Contact />
        </div>
    )
}

export default LandingPage

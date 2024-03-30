import React from 'react'
// import herovideo1 from '../assets/video1.mp4'
import herovideo from '../assets/video.mp4'
import {Link} from 'react-scroll'

const hero = () => {
  return (
    <div className='w-full h-[90vh] top[90px]'>
        {/* <video src={herovideo1} autoPlay loop muted className='object-cover h-full w-full absolute -z-10 hidden sm:block '/> */}
        <video src={herovideo} autoPlay loop muted className='object-cover h-full w-full absolute -z-10'/>
        <div className='w-full h-[90%] flex flex-col justify-center text-center items-center text-white px-4'>
            <h3 className='text-lg font-bold' data-aos="fade-left" data-aos-duration="1000">Team,</h3>
            <h1 className='text-4xl py-2 font-bold' data-aos="fade-right" data-aos-duration="1000"><span className='text-[var(--primary-blue)] font-bold'>Wibe</span>Tec</h1>
            <p className='text-xl py-4 lg:px-40 xl:px-72 2xl:px-96 capitalize' data-aos="fade-up" data-aos-duration="1000">WibeTec is a dynamic website development company dedicated to crafting innovative web solutions. We specialize in creating engaging, responsive websites to help businesses thrive in the digital world.
            </p>
            <div>
                <button className='m-2' data-aos="zoom-in" data-aos-duration="1000"><Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Contact</Link></button>
                <button className='m-2' data-aos="fade-right" data-aos-duration="1000"><Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >FAQ</Link></button>
            </div>
        </div>
            <p className='text-center text-lg md:text-2xl lg:text-3xl font-bold text-white' >Total Projects Done : 5-nos</p>
        <div>

        </div>
    </div>
  )
}

export default hero
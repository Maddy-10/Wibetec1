import React from 'react'
import terminal from '../assets/terminal.jpeg'

const Developers = () => {
    return (
        <div className='w-full text-white bg-black text-left'>
           <div className='max-w-[1240px] px-4 py-16 mx-auto md:flex'>
            <div className=''>
                <h1 data-aos="fade-left" data-aos-duration="1000">Developing Environment</h1>
                <p className='mt-3 px-4 capitalize' data-aos="zoom-in" data-aos-duration="1000">That's great to Share that Our development environment is based on <span className='text-[var(--primary-blue)]'>React!</span> React is a popular JavaScript library for building user interfaces, and it's widely used for creating web applications. <span className='text-[var(--primary-blue)]'>Web Developing it's about React components,</span> state management, routing, or any other aspect of React development, we're here to help.</p>
            </div>
            <div className='flex  justify-center w-full py-16 md:py-0' data-aos="fade-right" data-aos-duration="1000">
                <img src={terminal} alt="/" className='max-w-[250px] px-4 shadow-lg shadow-cyan-500/50' />
            </div>
           </div>
        </div>
    )
}

export default Developers
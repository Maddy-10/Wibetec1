import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-center text-white'>
        <h1 data-aos="zoom-in" data-aos-duration="2000">Join Our WibeTec Community</h1>
        <div className='py-4' data-aos='fade-up'>
            <input className='p-2 rounded-3xl mr-1 sm:mr-4 text-black' type="email" placeholder="Enter your E-mail" />
            <button className='mt-3 sm:mt-0'>Sign up</button>
        </div>
        <div className='flex items-center justify-center py-2' data-aos='fade-up'>
        <p><span><input className='mr-2' type="checkbox" /></span>Yes, I Agree to Receive Email Communication from WibeTec.</p>
        </div>
    </div>
  )
}

export default Subscribe
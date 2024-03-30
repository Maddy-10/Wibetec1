// import React, { useState } from 'react'
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Logo from '../assets/wibetec.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // const [ nav, setNav ] = useState(false)
    // const handleNav=()=>{
    //     setNav(!nav);
    // }
    return (
        <div className='w-full h-[90px] bg-black'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div className='flex'>
                    <img src={Logo} alt="" className='w-12 h-auto'/>
                    <p className='my-auto text-white text-3xl font-bold'><span className='text-[--primary-blue]'>Wibe</span>Tec</p>
                </div>
                <div className='flex'>
                    <ul className='flex text-white items-center'>
                        {/* <li>Platform</li>
                        <li>Developers</li>
                        <li>Community</li>
                        <li>About</li> */}
                        <button className='ml-4 '><NavLink to='login'>Login</NavLink></button>
                    </ul>

                </div>
                {/* <div onClick={handleNav} className='block md:hidden'>
                    {nav?<AiOutlineClose size={30} className='text-white' />:<AiOutlineMenu size={30} className='text-white' />}                                        
                </div>
                <div className={nav?'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center':'hidden'}>
                    <ul>
                        <li className='p-4'>Platform</li>
                        <li className='p-4'>Developers</li>
                        <li className='p-4'>Community</li>
                        <li className='p-4'>About</li>
                        <button className='px-4 mb-4 rounded-lg'>Login</button>
                    </ul>
                </div> */}
            </div>

        </div>
    )
}

export default Navbar
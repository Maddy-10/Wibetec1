import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {BsYoutube} from 'react-icons/bs'
const Footer = () => {
    return (
        <div id='contact' className='bg-black text-white text-center'>
            <div className='w-full mx-auto px-4 grid grind-cols-1 md:grid-cols-2 border-t'>
                <div className='md:text-left text-white p-5'>
                    <p className='font-bold  text-2xl'><span className='text-[--primary-blue]'>Wibe</span>Tec,</p>
                    <p>A Website Developing Company.</p>
                    <div className='flex justify-center md:justify-start'>
                        <h1 className='text-lg my-auto'>Contact :</h1>
                        <h3 className='my-auto ml-2'>6383570296</h3>                        
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <h1 className='text-lg my-auto'>Mail :</h1>            
                        <h3 className='my-auto ml-2'>hello@wibetec.com</h3>
                    </div>
                </div>
                <div className='text-white p-5 flex justify-center md:justify-end'>
                    <div className='block md:flex my-auto'>
                    <p className='my-auto text-lg'>Follow Us On, </p>
                    <div className='text-white my-auto mx-5 flex'>
                        <a href=""><FaInstagram className='px-2 text-4xl mt-2 md:mt-0'/></a>
                        <a href=""><FaFacebook className='px-2 text-4xl mt-2 md:mt-0'/></a>
                        <a href=""><FaXTwitter className='px-2 text-4xl mt-2 md:mt-0'/></a>
                        <a href=""><BsYoutube className='px-2 text-4xl mt-2 md:mt-0'/></a>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer
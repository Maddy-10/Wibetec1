import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='bg-black text-center text-white'>
            <div className='max-w-[1240px] mx-auto px-4 py-16'>
                <div>
                    <h1 className='py-4' data-aos="fade-left" data-aos-duration="1000">A Leading Website Development Company</h1>
                    <p className='py-4 text-md font-bold capitalize text-[#00d8ff]' data-aos="zoom-in" data-aos-duration="2000">Elevate Your Online Presence with Our Expertise</p>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <AboutCard data-aos="fade-up" data-aos-duration="1000" icon={<SiHiveBlockchain size={40}/>} heading='Maintanance' text='Website maintenance is essential for optimal performance, security, and user experience. Regular updates, bug fixes, content management, and backup procedures ensure a seamless, secure, and reliable online presence.' />
                    <AboutCard data-aos="fade-down" data-aos-duration="1000" icon={<SiStrapi size={40}/>} heading='Hosting' text='Website hosting is essential for making your site accessible on the internet. It involves storing website files and data on servers, ensuring reliability, security, and performance.' />
                     <AboutCard data-aos="fade-up" data-aos-duration="1000" icon={<SiFsecure size={40}/>} heading='SSL Certified' text='An SSL certificate is essential for website security, encrypting data between users and the site. It ensures trust, protects sensitive information, and improves search engine rankings by displaying the padlock icon.' />
                    <AboutCard data-aos="fade-down" data-aos-duration="1000" icon={<VscServerProcess size={40}/>} heading='Enhanceable' text='Enhanceable is a web development platform offering services to improve website functionality, user experience, and performance. They specialize in optimizations, feature additions, and responsive design enhancements.' />
                    
                </div>
                <div className='mt-16'>
                <button className='' data-aos="zoom-out" data-aos-duration="1000">Build Your Website</button>
                </div>
            </div>
        </div>
    )
}

export default About
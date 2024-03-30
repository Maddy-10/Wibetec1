import React from 'react'

const Faq = () => {
    return (
        <div id='faq' className='w-full px-4 py-16 bg-black text-center text-white'>
            <h1 className='text-white text-2xl' data-aos='fade-down'>Frequently Asked Questions</h1>
            <div id="slider" data-aos='fade-down' className='overflow-y-auto h-36 md:h-48 mt-5 md:w-3/4 mx-auto flex flex-col scroll-smooth scroll scrollbar-thin scrollbar-thumb-[#00d7fe] scrollbar-track-slate-500'>
                <div className='mx-auto md:w-3/4 mt-3'>
                    <h1 className='text-lg text-[--primary-blue] text-left'>1. How much does a new website cost?</h1>
                    <p className='text-sm text-left mt-2 ml-1'>Do you think it’s possible to calculate the exact cost for website development? Website development will be fully customizable, tailoring to the client’s requirements. Nowadays, you can find many options to develop your website.</p>
                </div>
                <div className='mx-auto md:w-3/4 mt-3'>
                    <h1 className='text-lg text-[--primary-blue] text-left'>2. Will you maintain my site for me?</h1>
                    <p className='text-sm text-left mt-2 ml-1'>Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your website’s security, invite new visitors, boost traffic and more.</p>
                </div>
                <div className='mx-auto md:w-3/4 mt-3'>
                    <h1 className='text-lg text-[--primary-blue] text-left'>3. Will my website be mobile-friendly?</h1>
                    <p className='text-sm text-left mt-2 ml-1'>Let it be a ticket booking, online order, browsing, etc. people are keen to do these tasks on the go. So, developing a responsive website will help in increasing the look and feel of your website on both small and large devices. It also increases the number of visitors, rankings in search engines.</p>
                </div>
                <div className='mx-auto md:w-3/4 mt-3'>
                    <h1 className='text-lg text-[--primary-blue] text-left'>4. How long does it take to build a website?</h1>
                    <p className='text-sm text-left mt-2 ml-1'>If you have chosen a professional website development company, then it would take around 1 to 4 months starting from scratch till the end for basic information websites with less functionality.

                        Website builders can help you in building your website quicker but, it’s quite hard to rely on it as you have to handle everything right from scratch. Advice or opinion from an expert may help in producing better results.</p>
                </div>
                <div className='mx-auto md:w-3/4 mt-3'>
                    <h1 className='text-lg text-[--primary-blue] text-left'>5. What if I need help on my site down the road?</h1>
                    <p className='text-sm text-left mt-2 ml-1'>You can approach us whenever you need our assistance. Our team can sort it out and bring your site back with its functionality. At ColorWhistle, we first look for the causes behind it and then check with all the technical configurations to provide the best solution for bringing back your website.</p>
                </div>
                <div className='mx-auto md:w-3/4 mt-3'>
                    <h1 className='text-lg text-[--primary-blue] text-left'>6. Who hosts the website?</h1>
                    <p className='text-sm text-left mt-2 ml-1'>To build your website you will need to choose a provider to host your website, this makes your website available online. Bluehost, Fastcomet, Interserver.net, A2Hosting, etc. are some of the best hosting providers in the market.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq
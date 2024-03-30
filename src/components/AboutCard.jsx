import React from 'react'

const AboutCard = (props,aos) => {
  return (
    <div className='flex flex-col border text-left rounded-ss-2xl rounded-ee-2xl py-12 px-8' data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            <div className='bg-[var(--primary-blue)] inline-flex p-2 rounded-full'>
                                {props.icon}
                            </div>
                            <h3 className='text-2xl font-bold py-4 capitalize'>{props.heading}</h3>
                            <p>{props.text}</p>

                        </div>

                    </div>
  )
}

export default AboutCard
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-LIGHT to-GREY' id='top'>
      <div className=' w-full h-full mx-auto p-2 flex justify-center items-center text-center'>
            <div className='text-DARK'>
                <img className='mx-auto' src='https://www.svgrepo.com/show/250452/coding-html.svg' width={150} height={150} alt='Code symbol with lines'/> 
               <h1 className='py-4'><span className='text-BLUE'>Eve</span> Drake</h1>
                <div className="relative ">
                  <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-b border-DARK"></div>
                </div>
              <div className="relative flex justify-center">
                <span className="bg-DARK px-4 text-m text-LIGHT">BSc (Hons) CITs</span>
                </div>
              </div>
                <h2 className='py-2'>Web <span className='text-ORANGE'>Development</span></h2>
                <p>Thank you for your interest. On this site, I aim to show my key web development skills through links to a variety of recent projects</p>
            </div>
        </div>
    </div>
       
  )
}

export default HeroImage
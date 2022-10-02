import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main className='w-full flex py-8 px-4' id='about'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
            <div className='col-span-2 text-justify'>
                <h2 className='text-ORANGE'>About <span className='text-BLUE'>Me</span></h2>
                <article>
                    <text>
                        Throughout my life, I cant remember a time where a computer was far away. Technology has remained such a stable constant 
                        that I didn’t initially consider at as a career option! After leaving school, I was initially drawn to the more analytical 
                        subjects like Psychology and Philosophy, choosing to leave coding as a hobby or tool to make my own life easier though 
                        private projects.   
                    </text>

                </article>
                <article>
                    <text>
                        I continued doing this into my student life however, illness unfortunately led me to leaving during my first year - 
                        instead spending my time volunteering my small coding projects. Knowing I still wished to continue pursuing education, 
                        I began to reconsider my options and it was only then that I realised I could pursue coding in a more professional manner.
                    </text>
                </article>

                <article>
                    <text>
                        I enrolled in the Open University, choosing a degree in Computing and IT combined with Design. By this time, the beginning 
                        of 2019, I had began specialising towards Web Development and was getting relatively confident with the basics when I first 
                        heard about the then new functional components with hooks. This triggered my new interest in the React library and how it 
                        could be used to quickly design efficient websites and applications in a way that combined both my personal interests and 
                        goals with coding as well as my degrees main disciplines though the combining of function and design. 
                    </text>
                </article>

                <article>
                    <text>
                        Since then, react has remained my favourite library for JavaScript, though I have occasionally branched into learning 
                        others - just to see what’s out there and insure I don’t miss out on finding a future favourite! I have also began to 
                        delve into Next.js, having seen some of its useful iterations on core react principles. Front end development 
                        has remained the perfect blend of my interests - from the analytical aspects that I’ve always enjoyed to my relatively 
                        new love of user centred design and I doubt that will change an time soon.   
                    </text>
               </article> 
            </div> 
            <div className='col-span-2'>
                <Image className='mx-auto' src='https://www.svgrepo.com/show/224781/coding.svg' width={650} height={650} alt='Code symbol on monitor'/> 
            </div>
        </div>
        
    </main>
  )
}

export default About

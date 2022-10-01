import React from 'react'
import DisplayProjects from './DisplayProjects'

const Portfolio = () => {
  return (
    <div className='w-full py-8 px-4'>
        <h2 className='text-BLUE'>Some recent <span className='text-ORANGE'>Projects</span></h2>
          <p className='p-8 text-center'>Here are some recent projects. Some are still in progress but they should show some key front end skills that are not displaed on this website. Including API calls, array methods and work with typescript.</p>
        
        <DisplayProjects />
    </div>
  )
}

export default Portfolio
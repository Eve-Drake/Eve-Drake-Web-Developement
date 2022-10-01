import React from 'react'
import DisplayProjects from './DisplayProjects'

const Portfolio = () => {
  return (
    <div className='w-full py-8 px-4'>
        <h2 className='text-BLUE'>Some recent <span className='text-ORANGE'>Projects</span></h2>
          <p>Here are some recent projects. Some are still in progress but they should show key front end skills. </p>
        <div className='grid'>
          <DisplayProjects />
        </div>
    </div>
  )
}

export default Portfolio
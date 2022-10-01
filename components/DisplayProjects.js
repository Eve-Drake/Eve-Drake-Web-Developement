import React from 'react'

const DisplayProjects = () => {
    const projectArray = [
        {id:0, title: 'Blog With Pagination', type:'JavaScript', img: '', link: 'https://github.com/Eve-Drake/blog-with-pagination'},
        {id:1, title: 'TypeScript API Call', type:'TypeScript & API Calls', img: '', link: 'https://github.com/Eve-Drake/Typescript-Api-User-database'},
        {id:2, title: 'TypeScript Todo List', type:'TypeScript & Redux Toolkit', img: '/../public/ProjectImages/ReducTypescriptTodo.jpg', link: 'https://github.com/Eve-Drake/Typescript-Todo-List'},
        {id:3, title: 'TypeScript Redux CRUD', type:'TypeScript & Redux Toolkit', img: '', link: 'https://github.com/Eve-Drake/Typescript-Redux-CRUD'},
        {id:4, title: 'Random User Generator', type:'JavaScript', img: '', link: 'https://github.com/Eve-Drake/Random-User-Generator'},
        {id:5, title: 'Bootstrap Placeholder Reviews', type:'JavaScript & Bootstrap', img: '', link: 'https://github.com/Eve-Drake/Bootstrap-Placeholder-Reviews'},
        {id:6, title: 'Data Visulisation with ReCharts', type:'JavaScript & ReCharts', img: '', link: 'https://github.com/Eve-Drake/Data-Visulisation'},
        {id:7, title: 'JavaScript Simple Todo', type:'JavaScript & API Calls', img: '', link: 'https://github.com/Eve-Drake/Simple-Todo'},
    ]
  return (
    <div className='grid md:grid-cols-4 gap-4 p-10'>
        {projectArray.map((project)=>(
            <div key={project.id}>
                <div className="max-w-sm rounded  shadow-md hover:shadow-xl">
                    <img className="w-full" src='../public/ProjectImages/DataVis.jpg' alt="Project Image" />
                    <div className="px-6 py-4 h-500 min-h-full">
                        <div className="font-bold text-xl mb-2 ">
                            <h3 className='text-center'><a href={project.link}>{project.title}</a></h3>
                        </div>
                    </div>
                    <div class=" px-6 pt-4 pb-2 ">
                        <span class=" bg-LIGHT rounded-full px-3 py-1 text-sm font-semibold text-DARK-700 mr-2 mb-2">{project.type}</span>
                    </div>
                </div>
            </div>

        ))}
        
    </div>
  )
}

export default DisplayProjects
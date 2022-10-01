import React from 'react'

const DisplayProjects = () => {
    const projectArray = [
        {id:0, title: 'Blog With Pagination', type:'JavaScript', img: '', link: 'https://github.com/Eve-Drake/blog-with-pagination'},
        {id:1, title: 'TypeScript API Call', type:'TypeScript & API Calls', img: '', link: 'https://github.com/Eve-Drake/Typescript-Api-User-database'},
        {id:2, title: 'TypeScript Todo List', type:'TypeScript & Redux Toolkit', img: '/../public/ProjectImages/ReducTypescriptTodo.jpg', link: 'https://github.com/Eve-Drake/Typescript-Todo-List'},
        {id:3, title: 'TypeScript Redux CRUD', type:'TypeScript & Redux Toolkit', img: '', link: 'https://github.com/Eve-Drake/Typescript-Redux-CRUD'},
        {id:4, title: 'Random User Generator', type:'JavaScript', img: '', link: 'https://github.com/Eve-Drake/Random-User-Generator'},
        {id:5, title: 'Bootstrap Placeholder Reviews', type:'JavaScript & Bootstrap', img: '', link: 'https://github.com/Eve-Drake/Bootstrap-Placeholder-Reviews'},
        {id:6, title: 'Data Visulisation', type:'JavaScript & ReCharts', img: '', link: 'https://github.com/Eve-Drake/Data-Visulisation'},
        {id:7, title: 'JavaScript Simple Todo', type:'JavaScript & API Calls', img: '', link: 'https://github.com/Eve-Drake/Simple-Todo'},
    ]
  return (
    <div>
        {projectArray.map((project)=>(
            <div key={project.id}>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src='../public/ProjectImages/DataVis.jpg' alt="Project Image" />
                    <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        <h3><a href={project.link}>{project.title}</a></h3>
                    </div>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-LIGHT rounded-full px-3 py-1 text-sm font-semibold text-DARK-700 mr-2 mb-2">{project.type}</span>
                    
                </div>
                </div>
            </div>

        ))}
        
    </div>
  )
}

export default DisplayProjects
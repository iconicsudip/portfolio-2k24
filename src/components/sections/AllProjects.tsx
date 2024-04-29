import { useAllProjects } from '@/api-hooks/projects.hooks'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../project-card'

export default function AllProjects() {
    const [page,setPage] = useState(1)
    const {data,loading,hasNext} = useAllProjects(page,20)
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        setProjects([...data])
    },[data])

    return (
        <div>
            {loading ? <div>Loading...</div>
                :
                <>
                    {projects.length ? 
                        <>
                            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
                                {projects.filter((project: any) => project.fork === false).map((project: any) => {
                                    return <ProjectCard key={project.id} project={project} />
                                })}

                            </div>
                            <div className='my-4 flex gap-2 w-full justify-end'>
                                <button className={`px-8 py-2 rounded-full bg-gradient-to-b  hover:shadow-xl transition duration-200 text-sm ${page === 1 ? 'bg-transparent border border-white' :'from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400'}`} disabled={page === 1} onClick={()=>setPage(page-1)}>Prev</button>
                                <button className={`px-8 py-2 rounded-full bg-gradient-to-b  hover:shadow-xl transition duration-200 text-sm ${!hasNext ? 'bg-transparent border border-white' : 'from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400'}`} disabled={!hasNext} onClick={()=>setPage(page+1)}>Next</button>
                            </div>
                        </>
                    : 
                    <div>No data found</div>}
                </>
            }
        </div>
    )
}

import Link from 'next/link'
import React from 'react'

interface Props {
    project: any
}
export default function ProjectCard({ project }: Props) {
    return (
        <Link style={{display:"contents"}} href={`${project.html_url}`}>
            <div className='bg-[#1d1c20] hover:border-white/[0.5] transition-colors border border-white/[0.08] rounded-lg p-5 relative overflow-hidden'>
                <h2 className="font-bold mb-2">{project.name}</h2>
                <p className="text-xs text-stone-400">{project.description}</p>
            </div>
        </Link>
    )
}

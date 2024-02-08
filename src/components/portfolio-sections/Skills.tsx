"use client"

import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image'

export default function Skills() {
    const [hoverState, setHoverState] = useState<string | null>(null)
    const skills = [
        {
            id: "html",
            name:"html",
            alt:"HTML Logo",
            displayName:"HTML"
        },
        {
            id: "css",
            name:"css",
            alt:"CSS Logo",
            displayName:"CSS"
        },
        {
            id: "js",
            name:"js",
            alt:"JavaScript Logo",
            displayName:"JavaScript"
        },
        {
            id: "ts",
            name:"ts",
            alt:"TypeScript Logo",
            displayName:"TypeScript"
        },
        {
            id: "react",
            name:"react",
            alt:"React Logo",
            displayName:"React"
        },
        {
            id:"django",
            name:"django",
            alt:"Django Logo",
            displayName:"Django"
        },
        {
            id: "figma",
            name:"figma",
            alt:"Figma Logo",
            displayName:"Figma"
        },
    ]
    const handleToggleHover = (id:string | null) => {
        if(id){
            setHoverState(id)
        }else{
            setHoverState(null)
        }
    }
    return (
        <div className="h-full flex items-center">
            <Marquee speed={80}>
                {skills.map((skill) => (
                    <div key={skill.id} className="mx-4 relative overflow-hidden">
                        <Image
                            priority
                            onMouseEnter={()=>handleToggleHover(skill.id)}
                            onMouseLeave={()=>handleToggleHover(null)}
                            className='hover:-translate-y-4 transition-transform duration-300 ease-in-out cursor-pointer'
                            src={`${skill.name}.svg`}
                            height={180}
                            width={180}
                            alt={skill.alt}
                        />
                        <div className={`relative text-center flex items-center transition-all justify-center ${hoverState === skill.id ? 'opacity-100 bounce-in-right' : 'opacity-0'}`}> 
                            <h3 className="absolute top-0 text-center text-2xl font-black text-white ">{skill.displayName}</h3>
                            <h3 className="text-border text-center text-2xl font-black text-transparent pt-2 ">{skill.displayName}</h3>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

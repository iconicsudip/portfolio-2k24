import React from 'react'
import { Vortex } from '../vortex/Vortex'

export default function PersonalProjects() {
    return (
        <Vortex
            backgroundColor="black"
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >

            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="relative z-10 text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Expand to see all
                </h1>
            </div>
        </Vortex>
    )
}

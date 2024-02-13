import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import styles from './porfolio-sections.module.scss'

export default function Educations() {
    const educations = [
        {
            _id: "1",
            title: "Government College of Engg. & Textile Technology",
            degree: "B.Tech",
            duration: "2019 - 2023",
            location: "Serampore, West Bengal, India",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            _id: "2",
            title: "Uttarpara Govt. High School",
            degree: "PCMB",
            duration: "2017 - 2019",
            location: "Uttarpara, West Bengal, India",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            _id: "3",
            title: "Uttarpara Govt. High School",
            degree: "All Subjects",
            duration: "2009 - 2017",
            location: "Uttarpara, West Bengal, India",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return (
        <div className="h-full flex items-center overflow-hidden">
            <Marquee speed={50} direction="up"
                style={{
                    height: "100%",
                    width: "100vw",
                    margin: "0 2rem"
                }}
                pauseOnHover={true}
            >
                {educations.map((education) => (
                    <div key={education._id} className={`relative text-center ${styles.education} w-[280px]`}>

                        <div className="mb-2">
                            <h1 className="text-[20px] font-bold text-[white]">{education.title}</h1>
                            <p className="text-[15px] font-500 text-[--text-color]">{education.degree}</p>
                            <p className="text-[15px] font-500 text-[--text-color]">{education.location}</p>
                        </div>
                        <p className="text-[12px] font-500 text-[--primary-color]">{education.duration}</p>

                    </div>
                ))}
            </Marquee>
        </div>
    )
}

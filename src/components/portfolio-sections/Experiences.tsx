import React from 'react'
import Marquee from 'react-fast-marquee'
import styles from './porfolio-sections.module.scss'

export default function Experiences() {
    const experiences = [
        {
            _id: "1",
            title: "Frontend Developer",
            company: "Mind Webs Ventures",
            duration: "2022 - 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            _id: "2",
            title: "Full Stack Developer",
            company: "ICCE Limited",
            duration: "2022 - 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            _id: "3",
            title: "Software Developer",
            company: "Educheck",
            duration: "2021 - 2021",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return (
        <div className="h-full flex items-center overflow-hidden">
            <Marquee speed={50} direction="up" 
                style={{
                    height: "100%",
                    width: "100vw",
                    margin:"0 2rem"
                }}
                pauseOnHover={true}
            >
                {experiences.map((experience) => (
                    <div key={experience._id} className={`relative text-center ${styles.experience}`}>

                        <div className="mb-2">
                            <h1 className="text-[20px] font-bold text-[white]">{experience.title}</h1>
                            <p className="text-[15px] font-500 text-[--text-color]">{experience.company}</p>
                        </div>
                        <p className="text-[12px] font-500 text-[--primary-color]">{experience.duration}</p>



                    </div>
                ))}
            </Marquee>
        </div>
    )
}

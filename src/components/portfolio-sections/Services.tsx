import React from 'react'
import Marquee from "react-fast-marquee";
import styles from './porfolio-sections.module.scss'

export default function Services() {
    const services = [
        {
            _id: "1",
            title: "Web Development",
            techStack: "HTML, CSS, JS, React, Django",
            duration: "Based on your requirements",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        },
        {
            _id: "2",
            title: "UI/UX Design",
            techStack: "Figma",
            duration: "Based on your requirements",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            _id: "3",
            title: "Development Consultation",
            techStack: "Based on your requirements",
            duration: "Based on your requirements",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
    return (
        <div className="h-full flex items-center overflow-hidden">
            <Marquee speed={50} direction="down"
                style={{
                    height: "100%",
                    width: "100vw",
                    margin: "0 2rem"
                }}
                pauseOnHover={true}
            >
                {services.map((service) => (
                    <div key={service._id} className={`relative text-center ${styles.service}`}>

                        <div className="mb-2">
                            <h1 className="text-[20px] font-bold text-[white]">{service.title}</h1>
                            <p className="text-[15px] font-500 text-[--text-color]">{service.techStack}</p>
                        </div>
                        <p className="text-[12px] font-500 text-[--primary-color]">{service.duration}</p>

                    </div>
                ))}
            </Marquee>
        </div>
    )
}

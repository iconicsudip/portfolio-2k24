import React from 'react'
import styles from './client.module.scss'
import GridItem from './GridItem'

export default function Portfolio() {
  const portfolioContent = [
    {
      size: "1x2",
      title: "Services",
      description: "Hello there! I'm $, and I specialize in delivering a range of services designed to bring your vision to life in the digital realm. With a passion for creativity and a commitment to excellence."
    },
    {
      size: "1x2",
      title: "Education",
      description: "I have completed a Bachelor of Computer Science and Engineering. This degree has provided me with a strong foundation of knowledge and skills in the field of IT."
    }
    ,
    {
      size: "2x2",
      title: "Skills",
      description: "In the rapidly evolving landscape of technology, my proficiency extends across a versatile set of technical skills. These capabilities empower me to navigate complex challenges and deliver innovative solutions."
    },
    {
      size: "1x2",
      title: "Work Experience",
      description: "I have had the privilege of working with a diverse range of clients, from small businesses to large corporations. This experience has equipped me with the skills and knowledge necessary to deliver results."
    },
    {
      size: "1x2",
      title: "Personal Projects",
      description: "In addition to my professional experience, I have also undertaken a number of personal projects. These projects have enabled me to expand my skillset and explore new areas of interest."
    },
  ]
  return (
    <div className={`${styles.portfolio} grid w-full grid-cols-2 xExperiencel:grid-cols-4 xl:gap-8 gap-6 xl:py-10 px-6 pb-6 md:pl-0 md:pt-6 overflow-y-auto `}>
      {portfolioContent.map((item, i) => {
        const desc = item.description.replace('$', 'Sudip Das')
        return (
          <GridItem key={i} size={item.size}>
            <div className={styles.grid_item}>
              <div className="h-80 border rounded-2xl mb-6 border-[--border-color] bg-zinc-950" />
              <div className={styles.grid_item__content}>
                <h1 className='text-2xl font-bold mb-3 text-white-800'>{item.title}</h1>
                <p className='text-[15px] font-500 text-[--text-color]'>{desc}</p>
              </div>
            </div>
          </GridItem>
        )
      })}
    </div>
  )
}

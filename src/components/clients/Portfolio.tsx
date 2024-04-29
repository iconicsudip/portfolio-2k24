"use client"

import React, { useState } from 'react'
import styles from './client.module.scss'
import GridItem from './GridItem'
import Skills from '../portfolio-sections/Skills'
import { TbArrowsDiagonal } from "react-icons/tb";
import Modal from './Modal'
import Experiences from '../portfolio-sections/Experiences'
import Educations from '../portfolio-sections/Educations'
import Services from '../portfolio-sections/Services'
import PersonalProjects from '../portfolio-sections/PersonalProjects'
import { PortfolioSection } from '@/enums/portfolio'
import AllProjects from '../sections/AllProjects'

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [expand, setExpand] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("")
  const [currentHeading, setCurrentHeading] = useState<string>("")
  const portfolioContent = [
    {
      slug: "services",
      size: "1x2",
      title: "Services",
      description: "Hello there! I'm $, and I specialize in delivering a range of services designed to bring your vision to life in the digital realm. With a passion for creativity and a commitment to excellence.",
      isMore: false
    },
    {
      slug: "education",
      size: "1x2",
      title: "Education",
      description: "I have completed a Bachelor of Computer Science and Engineering. This degree has provided me with a strong foundation of knowledge and skills in the field of IT.",
      isMore: false
    }
    ,
    {
      slug: "skills",
      size: "2x2",
      title: "Skills",
      description: "In the rapidly evolving landscape of technology, my proficiency extends across a versatile set of technical skills. These capabilities empower me to navigate complex challenges and deliver innovative solutions.",
      isMore: false
    },
    {
      slug: "work-experience",
      size: "1x2",
      title: "Work Experience",
      description: "I have had the privilege of working with a diverse range of clients, from small businesses to large corporations. This experience has equipped me with the skills and knowledge necessary to deliver results.",
      isMore: false
    },
    {
      slug: "personal-projects",
      size: "1x2",
      title: "Personal Projects",
      description: "In addition to my professional experience, I have also undertaken a number of personal projects. These projects have enabled me to expand my skillset and explore new areas of interest.",
      isMore: true
    },
  ]
  const handleToggleExpand = (slug: string | null) => {
    if (slug) {
      setExpand(slug)
    } else {
      setExpand(null)
    }
  }
  const handleSelectItem = (item:string) => {
    const currentItem = portfolioContent.find((i) => i.slug === item)
    if(currentItem){
      setCurrentHeading(currentItem.title)
      setCurrentSection(currentItem.slug)
      setModalOpen(!modalOpen)
    }
  }
  return (
    <div className={`${styles.portfolio} grid w-full grid-cols-2 xExperiencel:grid-cols-4 xl:gap-8 gap-6 px-6 pb-6 md:pl-0 md:m-6 overflow-y-auto `}>
      {portfolioContent.map((item:any) => {
        const desc = item.description.replace('$', 'Sudip Das')
        if(item.size!==null && item.size!==undefined){
          return (
            <GridItem key={item.slug} size={item.size}>
              <div className={styles.grid_item}>
                <div className="h-80 border rounded-2xl mb-4 border-[--border-color] bg-zinc-950" >
                  {item.slug === PortfolioSection.Skills &&
                    <Skills />
                  }
                  {item.slug === PortfolioSection.WorkExperience &&
                    <Experiences />
                  }
                  {item.slug === PortfolioSection.Education &&
                    <Educations/>
                  }
                  {item.slug === PortfolioSection.Services &&
                    <Services />
                  }
                  {item.slug === PortfolioSection.PersonalProjects &&
                    <PersonalProjects />
                    // null
                  }
                </div>
                <div className={styles.grid_item__content}>
                  <div className='flex justify-between mb-3 items-start'>
                    <h1 className='text-2xl font-bold  text-white-800'>{item.title}</h1>
                    {item.isMore &&
                      <button type="button" onMouseEnter={() => handleToggleExpand(item.slug)} onMouseLeave={() => handleToggleExpand(null)} className='flex items-center justify-center p-2 bg-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-600 hover:fill-white' onClick={() => handleSelectItem(item.slug)}>
                        <TbArrowsDiagonal className="
                        text-[--text-color]
                        transition-all 
                        duration-300 
                        ease-in-out
                        
                      " data-modal-target="medium-modal" data-modal-toggle="medium-modal" />
                        <span onMouseEnter={(e) => e.stopPropagation()} className={`${expand === item.slug ? "w-auto opacity-100 ml-2" : "w-0 opacity-0"} text-[--text-color] text-[12px] transition-all whitespace-nowrap overflow-hidden`}>Click to expand</span>
                      </button> 
                    }
                  </div>
                  <p className='font-sans font-normal text-xs text-neutral-300'>{desc}</p>
                </div>
              </div>
            </GridItem>
          )
        }
        
      })}
      {modalOpen && 
        <Modal
          onClose={() => setModalOpen(!modalOpen)}
          isOpen={modalOpen}
          heading={currentHeading}
        >
          {PortfolioSection.PersonalProjects === currentSection &&
            <AllProjects />
          }
        </Modal>
      }
    </div>
  )
}

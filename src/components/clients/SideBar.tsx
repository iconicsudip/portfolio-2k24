import React from 'react'
import styles from './client.module.scss'
import Image from 'next/image'
import ContactForm from '../contact-form/ContactForm'

export default function SideBar() {
  return (
    <div className={`${styles.sidebar} border-b md:border-b-0 border-[--border-color] md:border-r pr-4`}>
      <Image className='
        rounded-full
        object-cover
        object-center
        mb-2
      ' src={'/profile.jpeg'} width={100} height={100} alt="Clients"/>
      <div className="mt-2 mb-6">
        <p className='
          text-md font-600 text-[--primary-color] mb-1
        '>Frontend Developer and Product Designer</p>
        <h1 
          className="text-2xl font-bold mb-3 text-white-800"
        >Sudip Das</h1>
        <p className='mt-4 font-normal text-sm text-neutral-400 max-w-lg mx-auto'>
          I am a passionate frontend developer and product designer with over 2+ years of experience. I love to create beautiful and functional websites and applications. I am proficient in HTML, CSS, JavaScript, React, Typescript, Git, Docker, Github Actions, and Figma.
        </p>
      </div>
      <div className={`${styles.current_status} px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative`}>
        <div className={styles.status} />
        <div>Open for interview</div>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"></div>
      </div>
      <ContactForm />
    </div>
  )
}

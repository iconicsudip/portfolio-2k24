import React from 'react'
import styles from './client.module.scss'
import Image from 'next/image'

export default function SideBar() {
  return (
    <div className={`${styles.sidebar} border-b md:border-b-0 border-[--border-color] md:border-r`}>
      <Image className='
        rounded-full
        object-cover
        object-center
        mb-2
      ' src={'https://xsgames.co/randomusers/assets/avatars/male/1.jpg'} width={100} height={100} alt="Clients"/>
      <div className="mt-2 mb-6">
        <p className='
          text-md font-600 text-[--primary-color] mb-1
        '>Developer and Product Designer</p>
        <h1 
          className="text-2xl font-bold mb-3 text-white-800"
        >Full Name</h1>
        <p className='text-[15px] font-500 text-[--text-color]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi alias a voluptates voluptatum dolorem nesciunt! Fugiat consequuntur corporis placeat voluptas ipsa eius enim vero, alias reprehenderit quibusdam esse odio.</p>
      </div>
      <div className={`${styles.current_status} mb-5 relative`}>
        <div className={styles.status}/>
        <div>Ready for interview</div>
        <div className='bg-noisy pointer-events-none absolute inset-0 z-10 rounded-[50px]'/>
      </div>
    </div>
  )
}

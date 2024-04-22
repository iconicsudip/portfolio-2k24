"use client";
import SideBar from '@/components/clients/SideBar'
import Portfolio from '@/components/clients/Portfolio'
import styles from './app.module.scss'
import { TbPdf } from 'react-icons/tb'

export default function Home() {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1bMA_GyfQbn_Y5iqTpVhPSSxog9N8zI0E/view?usp=drive_link', '_blank')
  }
  return (
    <main className={styles.portfolio_body}>
      <SideBar />
      <Portfolio />
      <div className="fixed right-2 bottom-2">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleDownloadResume}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <TbPdf className="h-6 w-6 text-white" />
            <p className='ml-3'>Download Resume</p>
          </div>
        </button>
      </div>
    </main>
  )
}

import SideBar from '@/components/clients/SideBar'
import Portfolio from '@/components/clients/Portfolio'
import styles from './app.module.scss'

export default function Home() {
  return (
    <main className={styles.portfolio_body}>
      <SideBar/>
      <Portfolio/>
    </main>
  )
}

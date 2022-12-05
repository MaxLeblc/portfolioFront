import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Prod from './Prod'
import { useState } from 'react'
import Link from 'next/link'


function Home() {
  const [componentChoice, setComponentChoice] = useState('')

  componentChoice === 'home' && window.location.reload(false)

  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.header}>
        {/* <div className={styles.navbar}> */}
        <Link href="/" onClick={() => setComponentChoice('home')}>Home</Link>
        <Link href="#">CV</Link>
        <Link href="#" onClick={() => setComponentChoice('prod')}>Productions</Link>
        <Link href="#">Contact</Link>
        {/* </div> */}
      </div>
      <div className={styles.mainLeft}>
        <div className={styles.description}>
          <h2>Maxime</h2>
          <h2>Leblanc</h2>
          <h3>Développpeur fullstack</h3>
          <p>« Aujourd’hui développeur Web & Mobile, j’ai acquis de solides compétences professionnelles pour avoir travaillé plus de dix années dans divers secteurs d’entreprises. Curieux et soucieux d’associer mon métier à l’enrichissement de mes connaissances et de participer à l’intelligence collective d’un projet, j’ai à coeur de m’investir pour la Tech. »</p>
        </div>
      </div>
      <div className={styles.mainRight}>
        {componentChoice === 'home' && <Prod />}
        {componentChoice === 'cv' && <Prod />}
        {componentChoice === 'prod' && <Prod />}
        {componentChoice === 'rdv' && <Prod />}
      </div>
      <div className={styles.footer}>
          <div className={styles.cursor}><Image src='/edit.png' width={60} height={60} /><div><p>Skills</p></div></div>
          <div className={styles.cursor} onClick={() => setComponentChoice('prod')}><Image src='/palet.png' width={60} height={60} /><div><p>Prod</p></div></div>
          <div className={styles.cursor}><Image src='/face.png' width={60} height={60} /><div><p>RDV</p></div></div>
        </div>
    </div>
  )
}

export default Home
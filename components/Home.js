import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Prod from './Prod'
import Skills from './Skills'
import { useState } from 'react'
import Link from 'next/link'

function Home() {
  const [componentChoice, setComponentChoice] = useState('')

  return (
    <div className={styles.view}>
      <div className={styles.circle} />
      <div className={styles.header}>
        <Link href='/' onClick={() => window.location.reload(false)}>Home</Link>
        <Link href='#' onClick={() => setComponentChoice('skills')}>Skills</Link>
        <Link href='#' onClick={() => setComponentChoice('prod')}>Productions</Link>
        <Link href='#'>Contact</Link>
      </div>
      <div className={styles.mainLeft}>
        <div className={styles.description}>
          <h2>Maxime</h2>
          <h2>Leblanc</h2>
          <div>
            <h3>Développpeur fullstack</h3>
            <Image src='/icon/gitHub.png' width={30} height={30} style={{ marginRight: 16, marginLeft: 16, cursor: 'pointer' }} alt='icon' onClick={() => window.open('https://github.com/MaxLeblc', '_blank')} />
            <Image src='/icon/linkedIn.png' width={30} height={30} alt='icon' style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/maxime-leblanc-dev/', '_blank')} />
          </div>
          <p>« Aujourd’hui développeur Web & Mobile, j’ai acquis de solides compétences professionnelles pour avoir travaillé plus de dix années dans divers secteurs d’entreprises. Curieux et soucieux d’associer mon métier à l’enrichissement de mes connaissances et de participer à l’intelligence collective d’un projet, j’ai à coeur de m’investir pour la Tech. »</p>
         <Link href='mailto:maxime.leb@gmail.com' >cacamou</Link>
        </div>
      </div>
      <div className={styles.mainRight}>
        {componentChoice === 'skills' && <Skills />}
        {componentChoice === 'prod' && <Prod />}
        {componentChoice === 'rdv' && <Prod />}
      </div>
      <div className={styles.footer}>
        <div className={styles.cursor} onClick={() => setComponentChoice('skills')} ><Image src='/icon/edit.png' width={60} height={60} alt='icon' /><div><p>Skills</p></div></div>
        <div className={styles.cursor} onClick={() => setComponentChoice('prod')} ><Image src='/icon/palet.png' width={60} height={60} alt='icon' /><div><p>Prod</p></div></div>
        <div className={styles.cursor}><Image src='/icon/face.png' width={60} height={60} alt='icon' /><div><p>RDV</p></div></div>
      </div>
    </div>
  )
}

export default Home
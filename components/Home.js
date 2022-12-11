import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkedin,  GrGithub } from "react-icons/gr"
import Bubble from './Bubble'
import Prod from './Prod'
import Skills from './Skills'
import Contact from './Contact'
import { useState } from 'react'

function Home() {
  const [componentChoice, setComponentChoice] = useState('home')

  return (
    <div className={styles.view}>
      <div className={styles.circle} />
      <div className={styles.header}>
        <Link href='/' onClick={() => {window.location.reload(false), setComponentChoice('home')}}>Home</Link>
        <Link href='#' onClick={() => setComponentChoice('skills')}>Skills</Link>
        <Link href='#' onClick={() => setComponentChoice('prod')}>Productions</Link>
        <Link href='#' onClick={() => setComponentChoice('contact')}>Contact</Link>
      </div>
      <div className={styles.mainLeft}>
        <div className={styles.description}>
          <h2>Maxime</h2>
          <h2>Leblanc</h2>
          <div>
            <h3>Développpeur fullstack</h3>
            <Link className={styles.icon1} href='https://github.com/MaxLeblc' target='_blank' ><GrGithub/></Link>
            <Link className={styles.icon2} href='https://github.com/MaxLeblc' target='_blank' ><GrLinkedin/></Link>
          </div>
          <p>« Aujourd’hui développeur Web & Mobile, j’ai acquis de solides compétences professionnelles pour avoir travaillé plus de dix années dans divers secteurs d’entreprises. Curieux et soucieux d’associer mon métier à l’enrichissement de mes connaissances et de participer à l’intelligence collective d’un projet, j’ai à coeur de m’investir pour la Tech. »</p>
        </div>
      </div>
      <div className={styles.mainRight}>
        {componentChoice === 'home' && <Bubble />}
        {componentChoice === 'skills' && <Skills />}
        {componentChoice === 'prod' && <Prod />}
        {componentChoice === 'contact' && <Contact />}
      </div>
      <div className={styles.footer}>
        <div className={styles.cursor} onClick={() => setComponentChoice('skills')} ><Image src='/icon/edit.png' width={60} height={60} alt='icon' /><div><p>Skills</p></div></div>
        <div className={styles.cursor} onClick={() => setComponentChoice('prod')} ><Image src='/icon/palet.png' width={60} height={60} alt='icon' /><div><p>Prod</p></div></div>
        <div className={styles.cursor} onClick={() => setComponentChoice('contact')} ><Image src='/icon/face.png' width={60} height={60} alt='icon' /><div><p>RDV</p></div></div>
      </div>
    </div>
  )
}

export default Home
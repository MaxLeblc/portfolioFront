import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkedin, GrGithub } from "react-icons/gr"
import Bubble from './Bubble'
import Prod from './Prod'
import Skills from './Skills'
import Contact from './Contact'
import { useEffect, useState } from 'react'

function Home() {
  const [componentChoice, setComponentChoice] = useState('home')
  console.log("🚀 ~ file: Home.js:13 ~ Home ~ componentChoice", componentChoice)
  const [isMobile, setIsMobile] = useState(false)
  console.log("🚀 ~ file: Home.js:15 ~ Home ~ isMobile", isMobile)

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)

    window.addEventListener('resize', () => {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
    })
  }, [])

  useEffect(() => {
      if (componentChoice != 'home' && window.innerWidth < 1720) {
        document.getElementById("mainLeft").style.display = "none"
      }
  }, [componentChoice])

  const navBar = () => {
    if (!isMobile) {
      return (
        <div className={styles.header}>
          <Link href='/' onClick={() => { window.location.reload(false), setComponentChoice('home') }}>Home</Link>
          <Link href='#' onClick={() => setComponentChoice('skills')}>Skills</Link>
          <Link href='#' onClick={() => setComponentChoice('prod')}>Productions</Link>
          <Link href='#' onClick={() => setComponentChoice('contact')}>Contact</Link>
        </div>
      )
    }
  }


  return (
    <div className={styles.view}>
      <div className={styles.circle} />
      {navBar()}
      <div className={styles.mainLeft} id='mainLeft'>
        <div className={styles.description}>
          <h2>Maxime</h2>
          <h2>Leblanc</h2>
          <div>
            <h3>Développpeur fullstack</h3>
            <Link className={styles.icon1} href='https://github.com/MaxLeblc' target='_blank' ><GrGithub /></Link>
            <Link className={styles.icon2} href='https://github.com/MaxLeblc' target='_blank' ><GrLinkedin /></Link>
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
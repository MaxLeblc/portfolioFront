import styles from '../styles/Contact.module.css'
import Link from 'next/link'
import { GrLinkedin, GrMail } from 'react-icons/gr'

function Contact() {
  return (
    <div className={styles.view}>
      <div className={styles.container} >
        <img className={styles.image} src='./chouette.png' alt='maxime leblanc' />
        <p>Après 7 années d'expérience dans la gestion des produits d'assurance et 4 années dans le design graphique,
          j'ai décidé de faire évoluer ma carrière vers le developpement web.
          Alumni du coding bootcamp de La Capsule Paris, je suis aujourd'hui développeur full-stack junior à Paris.
          Sorti diplomé d'un titre RNCP de niveau 6 "Chef de projet d'application web & mobile", je poursuis mon apprentissage en étant, en paralèlle,
          teacher assistant dans le bootcamp qui m'a formé. De ce fait, j'accompagne les éléves dans leurs problématiques liées au code
          et je les aide aussi se débugger.<br />
          Vous trouverez sur mon portfolio mon stack ainsi que certain projets que j'ai réalisé notamment en React & React-Native.<br />
          Je suis actuellement à la recherche d'un poste alors n'hésitez pas à me contacter pour que nous puissions échanger ensemble !</p>
        <div className={styles.links} >
          <Link className={styles.contactMail} href='mailto:maxime.leb@gmail.com' target='_blank'>
            <GrMail className={styles.icon} />
            <p>Me contacter par mail </p>
          </Link>

          <Link className={styles.contactSocial} href='https://www.linkedin.com/in/maxime-leblanc-dev/' target='_blank'>
            <GrLinkedin className={styles.icon} />
            <p>Ou me contacter via LinkedIn </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
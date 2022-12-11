import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkedin,  GrMail } from "react-icons/gr"

function Contact() {
  return (
    <div className={styles.view}>
      <Link className={styles.contactMail} href='mailto:maxime.leb@gmail.com' target='_blank'>
        <p>Me contacter par mail </p>
        <GrMail className={styles.icon} />
      </Link>

      <Link className={styles.contactSocial} href='https://www.linkedin.com/in/maxime-leblanc-dev/' target='_blank'>
        <p>Ou me contacter via LinkedIn </p>
        <GrLinkedin className={styles.icon} />
      </Link>
    </div>
  )
}

export default Contact
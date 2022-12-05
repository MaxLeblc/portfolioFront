import styles from '../styles/Prod.module.css'
import Link from 'next/link'

function Prod() {
  return (
    <div className={styles.view}>
      
      <div className={styles.container1} >
        <div className={styles.description}>
          <p>Reservez un train avec OuiOui</p>
          <div className={styles.button}>
            <Link href='https://ouioui-front.vercel.app' target='_blank'>Demo</Link>
            <Link href='https://github.com/MaxLeblc' target='_blank'>Code</Link>
          </div>
        </div>
      </div>

      <div className={styles.container2} >
        <div className={styles.description}>
          <p>Decouvrez les films à l'affiche</p>
          <div className={styles.button}>
            <Link href='https://popcorn-front-five.vercel.app' target='_blank'>Demo</Link>
            <Link href='https://github.com/MaxLeblc' target='_blank'>Code</Link>
          </div>
        </div>
      </div>

      <div className={styles.container3} >
        <div className={styles.description}>
          <p>Rejoignez la Touittasphère</p>
          <div className={styles.button}>
            <Link href='https://touittaire-front.vercel.app/login' target='_blank'>Demo</Link>
            <Link href='https://github.com/MaxLeblc' target='_blank'>Code</Link>
          </div>
        </div>
      </div>

      <div className={styles.container4} >
        <div className={styles.description}>
          <p>Trouvez un buddy de jeu</p>
          <div className={styles.button}>
            <Link href='https://drive.google.com/file/d/1Og9JmID8T2JecsIPo0cu3smGE1zvgfuF/view?usp=share_link' target='_blank'>Demo</Link>
            <Link href='https://github.com/MaxLeblc' target='_blank'>Code</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Prod
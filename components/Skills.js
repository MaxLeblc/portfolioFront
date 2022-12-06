import styles from '../styles/Skills.module.css'

function Skills() {

  const stack = [
    { name: 'HTML', image: '/stack/html.png' },
    { name: 'CSS', image: '/stack/css.png' },
    { name: 'Javascript', image: '/stack/js.png' },
    { name: 'React', image: '/stack/react.png' },
    { name: 'React Native', image: '/stack/reactNative.png' },
    { name: 'Redux', image: '/stack/redux.png' },
    { name: 'Redux Toolkit', image: '/stack/redux.png' },
    { name: 'Next.js', image: '/stack/next.png' },
    { name: 'Node JS', image: '/stack/nodeJS.png' },
    { name: 'Express', image: '/stack/express.png' },
    { name: 'MongoDB', image: '/stack/mongoDB.png' },
    { name: 'GitHub', image: '/stack/gitHub.png' },
    { name: 'Yarn', image: '/stack/yarn.png' },
    { name: 'Méthode Agile', image: '/stack/agile.png' },
    { name: 'Figma', image: '/stack/figma.png' },
    { name: 'Photoshop', image: '/stack/photoshop.png' },
    { name: 'Illustrator', image: '/stack/illustrator.png' },
    { name: 'InDesign', image: '/stack/inDesign.png' },
  ]

  const fullStack = stack.map((data, i) => {
    return (
      <div className={styles.card} key={i}>
          <div className={styles.description}>
            <img className={styles.image} src={data.image} alt='stack' />
            <p>{data.name}</p>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.view}>
      <div className={styles.container} section='section1'>
        {fullStack}
      </div>


    </div>
  )
}

export default Skills
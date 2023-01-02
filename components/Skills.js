import styles from '../styles/Skills.module.scss'

function Skills() {

  const stack = [
    { name: 'HTML', image: '/stack/html.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', image: '/stack/css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Javascript', image: '/stack/js.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', image: '/stack/react.png', link: 'https://reactjs.org/docs/getting-started.html' },
    { name: 'React Native', image: '/stack/reactNative.png', link: 'https://reactnative.dev/docs/getting-started' },
    { name: 'Redux', image: '/stack/redux.png', link: 'https://redux.js.org/introduction/getting-started' },
    { name: 'Redux Toolkit', image: '/stack/redux.png', link: 'https://redux-toolkit.js.org/introduction/getting-started' },
    { name: 'Next.js', image: '/stack/next.png', link: 'https://nextjs.org/docs' },
    { name: 'Node JS', image: '/stack/nodeJS.png', link: 'https://nodejs.org/en/docs/guides/getting-started-guide/' },
    { name: 'Express', image: '/stack/express.png', link: 'https://expressjs.com/fr/starter/hello-world.html' },
    { name: 'MongoDB', image: '/stack/mongoDB.png', link: 'https://www.mongodb.com/docs/manual/tutorial/getting-started/' },
    { name: 'GitHub', image: '/stack/gitHub.png', link: 'https://docs.github.com/fr/get-started' },
    { name: 'Yarn', image: '/stack/yarn.png', link: 'https://yarnpkg.com/getting-started/install' },
    { name: 'Sass', image: '/stack/sass.png', link: 'https://sass-lang.com/documentation/' },
    { name: 'Méthode Agile', image: '/stack/agile.png', link: 'https://www.atlassian.com/fr/agile' },
    { name: 'Figma', image: '/stack/figma.png', link: 'https://help.figma.com/hc/en-us/categories/360002042553-Figma-design#Get-started' },
    { name: 'Photoshop', image: '/stack/photoshop.png', link: 'https://helpx.adobe.com/photoshop/get-started.html' },
    { name: 'Illustrator', image: '/stack/illustrator.png', link: 'https://helpx.adobe.com/illustrator/get-started.html' },
    { name: 'InDesign', image: '/stack/inDesign.png', link: 'https://helpx.adobe.com/indesign/get-started.html' },
    { name: 'Premiere Pro', image: '/stack/premiere.png', link: 'https://helpx.adobe.com/premiere-pro/get-started.html' },
  ]

  const fullStack = stack.map((data, i) => {
    return (
      <div className={styles.card} key={i} onClick={() => window.open(`${data.link}`, '_blank')}>
        <div className={styles.description}>
          <img className={styles.image} src={data.image} alt='stack' />
          <p >{data.name}</p>
        </div>
      </div>
    )
  })

  return (
      <div className={styles.container}>
        {fullStack}
      </div>
  )
}

export default Skills
import Home from '../components/Home'
import Head from 'next/head'

function Index() {
  return (
    <>
      <Head>
        <title>Home / Maxime Leblanc Développeur Full Stack</title>
        <meta name="google-site-verification" content="ZcjXUMk4jdl_EhVlHeojPdiZqltBwTJJFJpr8gCY7B0" />
        <meta name='description' content='Maxime Leblanc Développeur Portfolio' />
        <meta name='og:title' content='My Portfolio' />
        <link rel='icon' href='/favicon.ico' /> 
      </Head>
      <Home />
    </>
  )
}

export default Index

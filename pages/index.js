import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nataniel Paiva</title>
        <meta name="description" content="TDC Transformation 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao TDC! <a href="https://nextjs.org">Experimente o Next.js!</a>
        </h1>

        <p className={styles.description}>
          Eu sou Nataniel Paiva
          <code className={styles.code}>Tech Lead na Zup Innovation e Instrutor na Udemy</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/natanielpaiva/" className={styles.card}>
            <h2>Linkedin &rarr;</h2>
            <p>Vamos nos conectar?</p>
          </a>

          <a href="https://github.com/natanielpaiva" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Me segue lá e veja meus projetos</p>
          </a>

          <a
            href="https://www.instagram.com/natanielpaiva/"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>Gosto de postar vídeos lá também</p>
          </a>

          <a
            href="https://www.udemy.com/user/natanielpaiva"
            className={styles.card}
          >
            <h2>Udemy &rarr;</h2>
            <p>
              Veja meus cursos na Udemy.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Se é o futuro da Web?
          {' '}
          Não sei! Mas tem tudo para ser!
        </a>
          
      </footer>
    </div>
  )
}

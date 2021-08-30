import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <div>
      <Head>
        <title>TVQuizPhD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
         TVQuizPhD
        </h1>

      <footer className={styles.footer}>
         Made with <3 on
         <a href="https://github.com/tvquizphd/test-next">
         Github
         </a>
      </footer>
    </div>
  )
}

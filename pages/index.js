import Head from 'next/head'
import Nav from '../components/nav'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import en from '../locales/en'
import ar from '../locales/ar'
import Home from '../components/home'

// export default function Home() {

//   const router = useRouter();
//   const { locale } = router;
//   const t = locale === 'en' ? en : ar;

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>{ t.HomePageTitle } </title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Nav />
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           { t.companyName }
//         </h1>
//         <h1 className={styles.title}>
//           { t.homeMainTitle }
//         </h1>

//         <p className={styles.description}>
//           { t.homeMainDescription }
//         </p>

//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }

export default function Main() {
  return (
    <Home />
  )
}
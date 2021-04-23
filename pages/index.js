import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Spotify - Web Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 className={styles.logo}>Spotify</h2>
          
          <ul className={styles.menus}>
            <li className={styles.active}>
              <Link href="/">Anasayfa</Link>
            </li>
            <li>
              <Link  href="/search">Ara</Link>
            </li>
            <li>
              <Link href="/collection/playlists">Kitaplığın</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bar}>
        asd
      </div>
    </div>
  )
}
 
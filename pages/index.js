import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Body from '../components/Body'

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Spotify - Web Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body {...{activepage: 'home', pagebody: (
        <div className={styles.pagecontent}>
          <section className={styles.homepagetop}> 
            <h3 className={styles.contexttitle}>İyi günler</h3>
          </section>
          <section> 

          </section>
        </div>
      )}} />
    </div>
  )
}
 
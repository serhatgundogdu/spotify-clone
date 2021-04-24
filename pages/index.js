import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Body from '../components/Body'
import PlaylistOne from '../components/PlaylistOne'



export default function Home() {
  const Playlists = [
    {
      img: "https://i.scdn.co/image/ab67706c0000da84c8466386a81a3862f7b0bda3",
      name: "let Development = true"
    },{
      img: "https://i.scdn.co/image/ab67706c0000da84c8466386a81a3862f7b0bda3",
      name: "let Development = true"
    },{
      img: "https://i.scdn.co/image/ab67706c0000da84c8466386a81a3862f7b0bda3",
      name: "let Development = true"
    },{
      img: "https://i.scdn.co/image/ab67706c0000da84c8466386a81a3862f7b0bda3",
      name: "let Development = true"
    },{
      img: "https://i.scdn.co/image/ab67706c0000da84c8466386a81a3862f7b0bda3",
      name: "let Development = true"
    },{
      img: "https://i.scdn.co/image/ab67706c0000da84c8466386a81a3862f7b0bda3",
      name: "let Development = true"
    },
  ]
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

            <div className={styles.playlists}>
              { Playlists.map(value => (
                <PlaylistOne {...value}/>
              )) }
            </div>

          </section>
          <section> 
            
          </section>
        </div>
      )}} />
    </div>
  )
}
 
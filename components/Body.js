import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Body(props) {
    return (
        <>
            <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 className={styles.logo}>Şupotifay</h2>
          
          <ul className={styles.menus}>
            <li className={props.activepage == 'home' && styles.active}>
              <Link href="/">
                <a><FontAwesomeIcon icon="home" /> Anasayfa</a>       
              </Link>
            </li>
            <li className={props.activepage == 'search' && styles.active}>
              <Link  href="/search">
                <a><FontAwesomeIcon icon="search" /> Ara</a>   
              </Link>
            </li>
            <li className={props.activepage == 'bookmark' && styles.active}>
              <Link href="/">
                <a><FontAwesomeIcon icon="bookmark"/> Kitaplığın</a>   
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bar}>
        asd
      </div>
        </>

    )

}
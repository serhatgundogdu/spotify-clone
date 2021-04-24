import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'


export default function Body(props) {

    const [user, setUser] = useState({
        username: 'Serhat Gündoğdu'
    });

    const [oldpages, setoldpages] = useState({
        beforepage: null,
        nextpage: null
    })

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
                <div className={styles.page}>
                    <div className={styles.header}>
                        <div>
                            <button style={ oldpages.beforepage == null ? { cursor: 'not-allowed' } : {cursor: 'pointer'}}> <FontAwesomeIcon icon="chevron-left" />  </button>
                            <button style={ oldpages.nextpage == null ? { cursor: 'not-allowed' } : {cursor: 'pointer'}} > <FontAwesomeIcon icon="chevron-right"/>  </button>
                        </div>
                        <button className={styles.user}> <span>{user.username}</span> </button>
                    </div>
                    <div className={styles.pagecontentgeneral}>
                        { props.pagebody }
                    </div>
                </div>
            </div>
            <div className={styles.bar}>
                asd
            </div>
        </>

    )

}
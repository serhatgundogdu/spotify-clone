import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import Sidebar from './Sidebar'
import Playingbar from './PlayingBar'


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
                <Sidebar {...props}/>
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
            <Playingbar />
        </>

    )

}
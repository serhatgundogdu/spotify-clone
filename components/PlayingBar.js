import styles from '../styles/Home.module.scss'
import MousePosition from '../hooks/MousePosition'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useEffect, useRef} from 'react'



export default function Playingbar(props) {
    return (
        <div className={styles.bar}>
            <div className={styles.barInside}>
                <div className={styles.bar_left}>
                    <img src="https://i.scdn.co/image/ab67616d000048512bd9bfbba6708a110323e11e" width={56} height={56}  />
                    <div className={styles.music_details}>
                        <a className={styles.song}>Broke - Cut Edit</a>
                        <a className={styles.artist}>Yutubırr</a>
                    </div>
                    <button><FontAwesomeIcon icon="heart" size="2x" style={{height:"20px", marginLeft:25, color: "#1db954", cursor: "pointer"}} /></button>
                </div>
                <div className={styles.bar_center}>
                    asd
                </div>
                <div className={styles.bar_right}>
                    <button><FontAwesomeIcon icon={["fab", "mixer"]} size="2x" style={{height:"20px", marginRight:20, color: "#b3b3b3", cursor: "pointer"}} /></button>
                    <button><FontAwesomeIcon icon="laptop-house" size="2x" style={{height:"20px", marginRight:20, color: "#b3b3b3", cursor: "pointer"}} /></button>
                </div>
            </div>
        </div>

    )

}





import styles from '../styles/PlaylistOne.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PlaylistOne(props){

    return (
        <div className={styles.playlistItem}>
            <img src={props.img}></img>
            <div className={styles.playlistDetail}>
                <a>
                    {props.name}
                </a>
                <button className={styles.playButton}><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 16 16" class="play_svg__Svg-ulyrgf-0 play_svg__hJgLcF"><path d="M4.018 14L14.41 8 4.018 2z"></path></svg></button>
            </div>
        </div>
    )
}
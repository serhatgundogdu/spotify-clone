import styles from '../styles/Home.module.scss'
import MousePosition from '../hooks/MousePosition'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useEffect} from 'react'


export default function Sidebar(props) {
    const[width, SetWidth] = useState(300);
    const [isMouseDown, setisMouseDown] = useState(false);
    const { x } = MousePosition();

    useEffect(() => {
      if(JSON.parse(localStorage.getItem('sbwidth')) & JSON.parse(localStorage.getItem('sbwidth')) > 0){
        SetWidth(JSON.parse(localStorage.getItem('sbwidth')))
      }

      if (!isMouseDown) return false;
  
      const handleMove = () => {
        if(x > 200 && x < 400){
          SetWidth(x);
          localStorage.setItem('sbwidth',JSON.stringify(x))
        }
      };
  
      const handleUp = () => {
        setisMouseDown(false);
      };
  
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleUp);
      return () => {
        document.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseup", handleUp);
      };
    });
    return (
        <div className={styles.sidebar} style={{width: `${width}px`}}>
            <div>
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
            <div
                className={`${styles.changeWidth} ${isMouseDown ? styles.ActiveChange : ''}`}
                onMouseDown={() => {
                setisMouseDown(true);
                }}
            >
            </div>
        </div>
    )

}
import styles from './Kalc.module.scss'
import {ReactComponent as Logo} from './assets/logo_kalc.svg';
import DisplayTxt from './components/DisplayTxt';
import Keypad from './components/Keypad';

export default function Kalc(){
    return (
        <>
            <div className={styles.header}>
                <Logo id="logo" className={styles.logo} />
                <span id="app-name" className={styles.titulo}>KALC</span>
            </div>
            <div role={'main'} className={styles.frame}>
                <DisplayTxt />
                <Keypad />
            </div>
        </>
    )
}
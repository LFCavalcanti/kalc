import styles from './Kalc.module.scss'
import {ReactComponent as Logo} from './assets/logo_kalc.svg';

export default function Kalc(){
    return (
        <>
            <div className={styles.header}>
                <Logo id="logo" className={styles.logo} />
                <span id="app-name" className={styles.titulo}>KALC</span>
            </div>
            <div role={'main'} className={styles.frame}>
                <p>TESTE</p>
            </div>
        </>
    )
}
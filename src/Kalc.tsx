import styles from './Kalc.module.scss'
import {ReactComponent as Logo} from './assets/logo_kalc.svg';

const Kalc = () => {
    return (
        <>
            <div className={styles.header}>
                <Logo className={styles.logo} />
                <span id="titulo" className="titulo">KALC</span>
            </div>
            <div id= "frame" className={styles.frame}>
            <p>TESTE</p>
            </div>
        </>
    )
}

export default Kalc;
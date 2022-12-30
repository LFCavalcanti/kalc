import styles from './DisplayTxt.module.scss'

export default function DisplayTxt(){
    return(
        <div id="display" className={styles.pannel}>
            <span role={"textbox"} id="display">TESTE</span>
        </div>
    )
}
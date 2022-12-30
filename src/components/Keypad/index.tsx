import styles from './Keypad.module.scss'
export default function Keypad(){
    return(
        <div className={styles.keypad}>
            <div className={styles.advop}>
                <p>ADV OPERATIONS</p>
            </div>
            <div className={styles.numbers}>
                <p>NUMBERS</p>
            </div>
            <div className={styles.operations}>
                <p>OPERATIONS</p>
            </div>
        </div>
    )
}
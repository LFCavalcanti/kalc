import styles from './Keypad.module.scss'
export default function Keypad(){
    return(
        <>        
            <div className={styles.clearBtn}>
                <button>C</button>
                <button>AC</button>
            </div>

            <div className={styles.buttons}>
                <div className={styles.advop}>
                    <button>X²</button>
                    <button>RAIZ QDR X</button>
                    <button>X ^ Y</button>
                    <button>10 ^ X</button>
                    <button>LOG</button>
                    <button>N!</button>
                    <button>MOD</button>
                </div>
                <div className={styles.numbers}>
                    <button>:</button>
                    <button>(</button>
                    <button>)</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+/-</button>
                    <button>0</button>
                    <button>,</button>

                </div>
                <div className={styles.operations}>
                    <button>/</button>
                    <button>X</button>
                    <button>-</button>
                    <button>+</button>
                    <button>=</button>
                </div>
            </div>
        </>

    )
}
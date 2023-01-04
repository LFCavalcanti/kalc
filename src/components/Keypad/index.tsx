import BtnClear from '../BtnClear'
import BtnExec from '../BtnExec'
import BtnKeypad from '../BtnKeypad'
import styles from './Keypad.module.scss'
export default function Keypad(){
    return(
        <>        
            <div className={styles.clearBtn}>
                <BtnClear text="AC" variant="ac"></BtnClear>
                {<div>
                    <p>ERROR DISPLAY</p>
                </div>}
            </div>

            <div className={styles.buttons}>
                <div className={styles.advop}>
                    <BtnKeypad text="X²" variant="op"></BtnKeypad>
                    <BtnKeypad text="SQRT X" variant='op'></BtnKeypad>
                    <BtnKeypad text="X^Y" variant='op'></BtnKeypad>
                    <BtnKeypad text="10^X" variant='op'></BtnKeypad>
                    <BtnKeypad text="LOG" variant='op'></BtnKeypad>
                    <BtnKeypad text="N!" variant='op'></BtnKeypad>
                    <BtnKeypad text="MOD" variant='op'></BtnKeypad>
                </div>
                <div className={styles.numbers}>
                    <BtnKeypad text="("></BtnKeypad>
                    <BtnKeypad text=")"></BtnKeypad>
                    <BtnClear text="C"></BtnClear>
                    <BtnKeypad text="7"></BtnKeypad>
                    <BtnKeypad text="8"></BtnKeypad>
                    <BtnKeypad text="9"></BtnKeypad>
                    <BtnKeypad text="4"></BtnKeypad>
                    <BtnKeypad text="5"></BtnKeypad>
                    <BtnKeypad text="6"></BtnKeypad>
                    <BtnKeypad text="1"></BtnKeypad>
                    <BtnKeypad text="2"></BtnKeypad>
                    <BtnKeypad text="3"></BtnKeypad>
                    <BtnKeypad text="+/-"></BtnKeypad>
                    <BtnKeypad text="0"></BtnKeypad>
                    <BtnKeypad text=","></BtnKeypad>
                </div>
                <div className={styles.operations}>
                    <BtnKeypad text="/" variant="op"></BtnKeypad>
                    <BtnKeypad text="X" variant="op"></BtnKeypad>
                    <BtnKeypad text="-" variant="op"></BtnKeypad>
                    <BtnKeypad text="+" variant="op"></BtnKeypad>
                    <BtnExec text="="></BtnExec>
                </div>
            </div>
        </>

    )
}
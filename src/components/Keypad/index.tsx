import {displayErrorMsg} from '../../state/hooks/displayErrorMsg'
import { getErrorMessage } from '../../state/hooks/getErrorMessage'
import BtnClear from '../BtnClear'
import BtnExec from '../BtnExec'
import BtnKeypad from '../BtnKeypad'
import styles from './Keypad.module.scss'

export default function Keypad(){

    const errorMessage = getErrorMessage()
    const displayError = displayErrorMsg()

    const calculate = () => {
        displayError('TESTANDO MENSAGEM 5 segundos', 5000)
    }

    return(
        <div className={styles.keypadFrame}>

            <div className={styles.toolBar}>
                <div className={styles.errorDisplayer}>
                    {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
                </div>
                <BtnClear text="AC" variant="ac"></BtnClear>
                <BtnClear text="C"></BtnClear>
            </div>

            <div className={styles.buttons}>

                <BtnKeypad text="&#8730;" variant='op'></BtnKeypad>
                <BtnKeypad text="("></BtnKeypad>
                <BtnKeypad text=")"></BtnKeypad>
                <BtnKeypad text="/" variant="op"></BtnKeypad>
                <BtnKeypad text="X" variant="op"></BtnKeypad>

                <BtnKeypad text="X^Y" variant='op'></BtnKeypad>
                <BtnKeypad text="7"></BtnKeypad>
                <BtnKeypad text="8"></BtnKeypad>
                <BtnKeypad text="9"></BtnKeypad>
                <BtnKeypad text="-" variant="op"></BtnKeypad>

                <BtnKeypad text="LOG" variant='op'></BtnKeypad>
                <BtnKeypad text="4"></BtnKeypad>
                <BtnKeypad text="5"></BtnKeypad>
                <BtnKeypad text="6"></BtnKeypad>
                <BtnKeypad text="+" variant="op"></BtnKeypad>
                
                <BtnKeypad text="N!" variant='op'></BtnKeypad>
                <BtnKeypad text="1"></BtnKeypad>
                <BtnKeypad text="2"></BtnKeypad>
                <BtnKeypad text="3"></BtnKeypad>
                <BtnExec text="=" onClick={calculate}></BtnExec>

                <BtnKeypad text="MOD" variant='op'></BtnKeypad>
                <BtnKeypad text="%"></BtnKeypad>
                <BtnKeypad text="0"></BtnKeypad>
                <BtnKeypad text=","></BtnKeypad>
            </div>
        </div>

    )
}
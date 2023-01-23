import {useDisplayErrorMsg} from '../../state/hooks/useDisplayErrorMsg'
import { useErrorMessage } from '../../state/hooks/useErrorMessage'
import BtnClear from '../BtnClear'
import BtnExec from '../BtnExec'
import BtnKeypad from '../BtnKeypad'
import styles from './Keypad.module.scss'

export default function Keypad(){

    const errorMessage = useErrorMessage()
    const displayError = useDisplayErrorMsg()

    return(
        <div className={styles.keypadFrame}>

            <div className={styles.toolBar}>
                <div className={styles.errorDisplayer}>
                    {errorMessage && <p role='alert' className={styles.errorMsg}>{errorMessage}</p>}
                </div>
                <BtnClear text="AC" variant="ac"></BtnClear>
                <BtnClear text="C"></BtnClear>
            </div>

            <div className={styles.buttons}>

                <BtnKeypad text={String.fromCharCode(8730)} variant='op' operation={String.fromCharCode(8730)}></BtnKeypad>
                <BtnKeypad text="(" operation='('></BtnKeypad>
                <BtnKeypad text=")" operation=')'></BtnKeypad>
                <BtnKeypad text="/" variant="op" operation='/'></BtnKeypad>
                <BtnKeypad text="X" variant="op" operation='*'></BtnKeypad>

                <BtnKeypad text="X^Y" variant='op' operation='^'></BtnKeypad>
                <BtnKeypad text="7" operation='7'></BtnKeypad>
                <BtnKeypad text="8" operation='8'></BtnKeypad>
                <BtnKeypad text="9" operation='9'></BtnKeypad>
                <BtnKeypad text="-" variant="op" operation='-'></BtnKeypad>

                <BtnKeypad text={String.fromCharCode(13266)} variant='op' operation={String.fromCharCode(13266)}></BtnKeypad>
                <BtnKeypad text="4" operation='4'></BtnKeypad>
                <BtnKeypad text="5" operation='5'></BtnKeypad>
                <BtnKeypad text="6" operation='6'></BtnKeypad>
                <BtnKeypad text="+" variant="op" operation='+'></BtnKeypad>
                
                <BtnKeypad text="N!" variant='op' operation='!'></BtnKeypad>
                <BtnKeypad text="1" operation='1'></BtnKeypad>
                <BtnKeypad text="2" operation='2'></BtnKeypad>
                <BtnKeypad text="3" operation='3'></BtnKeypad>
                <BtnExec text="="></BtnExec>

                <BtnKeypad text="MOD" variant='op' operation='%'></BtnKeypad>
                <BtnKeypad text="-/+" operation='NEG'></BtnKeypad>
                <BtnKeypad text="0" operation='0'></BtnKeypad>
                <BtnKeypad text="," operation=','></BtnKeypad>
            </div>
        </div>

    )
}
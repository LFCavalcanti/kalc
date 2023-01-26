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
                <BtnClear variant="ac">AC</BtnClear>
                <BtnClear >C</BtnClear>
            </div>

            <div className={styles.buttons}>

                <BtnKeypad variant='op' operation={String.fromCharCode(8730)}>{String.fromCharCode(8730)}</BtnKeypad>
                <BtnKeypad operation='('>(</BtnKeypad>
                <BtnKeypad operation=')'>)</BtnKeypad>
                <BtnKeypad variant="op" operation='/'>/</BtnKeypad>
                <BtnKeypad variant="op" operation='*'>X</BtnKeypad>

                <BtnKeypad variant='op' operation='^'>X^Y</BtnKeypad>
                <BtnKeypad operation='7'>7</BtnKeypad>
                <BtnKeypad operation='8'>8</BtnKeypad>
                <BtnKeypad operation='9'>9</BtnKeypad>
                <BtnKeypad variant="op" operation='-'>-</BtnKeypad>

                <BtnKeypad variant='op' operation={String.fromCharCode(13266)}>{String.fromCharCode(13266)}</BtnKeypad>
                <BtnKeypad operation='4'>4</BtnKeypad>
                <BtnKeypad operation='5'>5</BtnKeypad>
                <BtnKeypad operation='6'>6</BtnKeypad>
                <BtnKeypad variant="op" operation='+'>+</BtnKeypad>
                
                <BtnKeypad variant='op' operation='!'>N!</BtnKeypad>
                <BtnKeypad operation='1'>1</BtnKeypad>
                <BtnKeypad operation='2'>2</BtnKeypad>
                <BtnKeypad operation='3'>3</BtnKeypad>
                <BtnExec>=</BtnExec>

                <BtnKeypad variant='op' operation='%'>MOD</BtnKeypad>
                <BtnKeypad operation='NEG'>-/+</BtnKeypad>
                <BtnKeypad operation='0'>0</BtnKeypad>
                <BtnKeypad operation=','>,</BtnKeypad>
            </div>
        </div>

    )
}
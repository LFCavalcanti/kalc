import { useDisplayFormula } from '../../state/hooks/useDisplayFormula'
import { useDisplayResult } from '../../state/hooks/useDisplayResult'
import styles from './DisplayTxt.module.scss'



export default function DisplayTxt(){

    const displayFormula = useDisplayFormula()
    const displayResult = useDisplayResult()

    return(
        <div id="display" className={styles.pannel}>
            <p role={"textbox"} className={styles.currFormula}>{displayFormula}</p>
            <p role={"textbox"} className={styles.result}>{displayResult}</p>
        </div>
    )
}
import { useEffect } from 'react'
import useCalcFormula from '../../state/hooks/useCalcFormula'
import useCurrElement from '../../state/hooks/useCurrElement'
import useDisplayFormula from '../../state/hooks/useDisplayFormula'
import useDisplayResult from '../../state/hooks/useDisplayResult'
import useSetDisplayFormula from '../../state/hooks/useSetDisplayFormula'
import styles from './DisplayTxt.module.scss'



export default function DisplayTxt(){

    const displayFormula = useDisplayFormula()
    const setDisplayFormula = useSetDisplayFormula()

    const calcFormula = useCalcFormula()

    const currentElement = useCurrElement()

    const displayResult = useDisplayResult()

    useEffect(() => {

        setDisplayFormula(calcFormula.join('') + currentElement)

    }, [calcFormula, currentElement])

    return(
        <div id="display" className={styles.pannel}>
            <div className={styles.currFormula}>
                <span role={"textbox"} className={styles.currSpanFormula}>{displayFormula}</span>
            </div>
            <p role={"status"} className={styles.result}>{displayResult}</p>
        </div>
    )
}
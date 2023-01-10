import { useRecoilValue, useSetRecoilState } from "recoil"
import { calcFormula } from "../atom"

const usePopCalcFormula = () => {
    const stateCalcFormula = useRecoilValue(calcFormula)
    const setCalcFormula = useSetRecoilState(calcFormula)
    return (clearAll:boolean = false) => {
        const newValue = (clearAll) ? [] : stateCalcFormula.slice(0, -1)
        const lastElement = (clearAll) ? '' : stateCalcFormula[stateCalcFormula.length -1]
        setCalcFormula(newValue)
        return lastElement
    }
}

export default usePopCalcFormula
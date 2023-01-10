import { useRecoilValue, useSetRecoilState } from "recoil"
import { calcFormula } from "../atom"

const usePopCalcFormula = () => {
    return (clearAll:boolean = false) => {
        const stateCalcFormula = useRecoilValue(calcFormula)
        const setCalcFormula = useSetRecoilState(calcFormula)
        const newValue = (clearAll) ? [] : stateCalcFormula.slice(0, -1)
        setCalcFormula(newValue)
    }
}

export default usePopCalcFormula
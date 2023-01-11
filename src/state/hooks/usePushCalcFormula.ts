import { useRecoilValue, useSetRecoilState } from "recoil"
import { calcFormula } from "../atom"

const usePushCalcFormula = () => {
    const stateCalcFormula = useRecoilValue(calcFormula)
    const setCalcFormula = useSetRecoilState(calcFormula)
    return (newElement:string) => {
        if(newElement !== '') setCalcFormula(stateCalcFormula => [...stateCalcFormula, newElement])
    }
}

export default usePushCalcFormula
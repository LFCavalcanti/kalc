import { useRecoilValue, useSetRecoilState } from "recoil"
import { calcFormula } from "../atom"

const usePushCalcFormula = () => {
    return (newElement:string) => {
        const stateCalcFormula = useRecoilValue(calcFormula)
        const setCalcFormula = useSetRecoilState(calcFormula)
        if(newElement) setCalcFormula([...stateCalcFormula, newElement])
    }
}

export default usePushCalcFormula
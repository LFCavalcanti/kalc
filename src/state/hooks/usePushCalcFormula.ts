import { useRecoilValue, useSetRecoilState } from "recoil"
import { calcFormula } from "../atom"

const usePushCalcFormula = () => {
    const stateCalcFormula = useRecoilValue(calcFormula)
    const setCalcFormula = useSetRecoilState(calcFormula)
    return (newElement:string) => {
        console.log(`ENTROU SET FORMULA COM VALOR ${newElement}`)
        if(newElement) setCalcFormula([...stateCalcFormula, newElement])
        console.log(calcFormula)
    }
}

export default usePushCalcFormula
import { useRecoilValue } from "recoil"
import { calcFormula } from "../atom"

const useCalcFormula = () => {
    return useRecoilValue(calcFormula)
}

export default useCalcFormula
import { useRecoilValue } from "recoil"
import { displayFormula } from "../atom"

export const useDisplayFormula = () => {
    return useRecoilValue(displayFormula)
}
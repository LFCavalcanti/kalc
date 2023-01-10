import { useRecoilValue } from "recoil"
import { displayFormula } from "../atom"

const useDisplayFormula = () => {
    return useRecoilValue(displayFormula)
}

export default useDisplayFormula
import { useSetRecoilState } from "recoil"
import { currElement } from "../atom"

const useSetCurrFormula = () => {
    const setCurrFormula = useSetRecoilState(currElement)
    return (newValue : string) => {
        setCurrFormula(newValue)
    }
}

export default useSetCurrFormula
import { useSetRecoilState } from "recoil"
import { currElement } from "../atom"

const useSetCurrElement = () => {
    const setCurrElement = useSetRecoilState(currElement)
    return (newValue : string) => {
        setCurrElement(newValue)
    }
}

export default useSetCurrElement
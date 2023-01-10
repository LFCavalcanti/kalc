import { useSetRecoilState } from "recoil"
import { displayResult } from "../atom"

const useSetDisplayResult = () => {
    const setDisplayResult = useSetRecoilState(displayResult)
    return (newValue : string) => {
        setDisplayResult(newValue)
    }
}

export default useSetDisplayResult
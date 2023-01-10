import { useRecoilValue } from "recoil"
import { displayResult } from "../atom"

const useDisplayResult = () => {
    return useRecoilValue(displayResult)
}

export default useDisplayResult
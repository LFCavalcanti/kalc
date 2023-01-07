import { useRecoilValue } from "recoil"
import { displayResult } from "../atom"

export const useDisplayResult = () => {
    return useRecoilValue(displayResult)
}
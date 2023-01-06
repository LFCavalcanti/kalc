import { useRecoilValue } from "recoil"
import { displayError } from "../atom"

export const getErrorMessage = () => {
    return useRecoilValue(displayError)
}
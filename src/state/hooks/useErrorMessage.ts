import { useRecoilValue } from "recoil"
import { displayError } from "../atom"

export const useErrorMessage = () => {
    return useRecoilValue(displayError)
}
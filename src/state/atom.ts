import { atom } from "recoil";

export const displayError = atom<string>({
    key: 'displayError',
    default: ''
})

export const displayResult = atom<string>({
    key: 'displayResult',
    default: ''
})

export const displayFormula = atom<string>({
    key: 'displayFormula',
    default: ''
})

export const calcFormula = atom<string[]>({
    key: 'calcFormula',
    default: []
})


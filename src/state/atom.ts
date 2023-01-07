import { atom } from "recoil";

export const displayError = atom<string>({
    key: 'displayError',
    default: ''
})

export const displayResult = atom<string>({
    key: 'displayResult',
    default: '0'
})

export const displayFormula = atom<string>({
    key: 'displayFormula',
    default: '0'
})

export const calcFormula = atom<string[]>({
    key: 'calcFormula',
    default: []
})


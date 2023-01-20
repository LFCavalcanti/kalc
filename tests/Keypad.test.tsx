import React from "react"
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil"
import Kalc from '../src/Kalc'
import useCurrElement from "../src/state/hooks/useCurrElement";

describe('The keypad should', () => {

    //const currElement = useCurrElement()

    test('input all the number keys from 1 to 0 with a comma(,) and check if it shows into display', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['1','2','3','4','5','6','7','8','9','0',',','1']

        const displayFormula = screen.getByRole('textbox')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayFormula).toHaveTextContent('1234567890,1')

    })

    test('input a formula deleting last element and check if the displayFormula is correct with the input', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['(','-/+','2','X^Y','(','4','5','MOD','2','+','3',')','N!','+',String.fromCharCode(8730),'6','4',')','C']

        const displayFormula = screen.getByRole('textbox')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayFormula).toHaveTextContent(`(-2^(45%2+3)!+${String.fromCharCode(8730)}64`)

    })

    test('input a valid formula with simple operations, calculate and check if the displayResult is correct with the input', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['(','2','+','(','8','X','(','2','/','2',')',')','-','(','5','X','1','0',')','X','1','0',')','=']

        const displayResult = screen.getByRole('status')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayResult).toHaveTextContent(`-490`)

    })

    test('input a valid formula with advanced operations, calculate and check if the displayResult is correct with the input', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','X^Y','(','4','5','MOD','2','+','3',')','N!','+',String.fromCharCode(8730),'6','4','=']

        const displayResult = screen.getByRole('status')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayResult).toHaveTextContent(`16777224`)

    })

})
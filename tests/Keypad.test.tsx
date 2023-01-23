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

    test('input Radic and check if the formula display is correct', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const displayFormula = screen.getByRole('textbox')

        fireEvent.click(screen.getByText(String.fromCharCode(8730), { selector: 'button' }))
  
        expect(displayFormula).toHaveTextContent(String.fromCharCode(8730))

    })

    test('input a negative number and check if the display is correct', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )
        
        const btnToPress = ['2','-/+']

        const displayFormula = screen.getByRole('textbox')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayFormula).toHaveTextContent(`-2`)

    })

    test('input a negative number and press the signal button again and check if the display is correct', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )
        
        const btnToPress = ['2','-/+','-/+']

        const displayFormula = screen.getByRole('textbox')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayFormula).toHaveTextContent(`2`)

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

    test('input a valid formula with advanced operations, calculate and press "=" and "C", the result display should remain the same', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','+','5','=']

        const displayResult = screen.getByRole('status')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        fireEvent.click(screen.getByText('=', { selector: 'button' }))
        fireEvent.click(screen.getByText('C', { selector: 'button' }))
        
        expect(displayResult).toHaveTextContent(`7`)

    })

    test('input a valid formula, calculate and press the AllClear(AC) then check if the formula and result display are back to default', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','+','5','=']

        const displayResult = screen.getByRole('status')
        const displayFormula = screen.getByRole('textbox')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        fireEvent.click(screen.getByText('AC', { selector: 'button' }))
        
        displayFormula.textContent

        expect(displayFormula.textContent === '' && displayResult.textContent === '0')

    })

    test('input a valid formula with advanced operations, calculate and press "=" and "C", the result display should remain the same', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','+','5','=']

        const displayResult = screen.getByRole('status')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        fireEvent.click(screen.getByText('+', { selector: 'button' }))
        fireEvent.click(screen.getByText('2', { selector: 'button' }))
        fireEvent.click(screen.getByText('=', { selector: 'button' }))
        
        expect(displayResult).toHaveTextContent(`9`)
        
    })

    test('input a invalid formula with a operation signal endind and check if error is displayed', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','+','=']

        //const displayError = screen.getByRole('alert')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(screen.getByRole('alert')).toHaveTextContent(`Previous formula element + makes it invalid`)
    })

    test('input a invalid formula with an invalid current element and check if error is displayed', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','+','-/+','=']

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(screen.getByRole('alert')).toHaveTextContent(`Current element is invalid`)
    })

    test('input a invalid formula with invalid pareteses pair and expect error message to be displayed', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['2','+','(','2','+','5','=']
        
        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(screen.getByRole('alert')).toHaveTextContent(`Invalid parenteses pairs`)
    })
})
import React from "react"
import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil"
import Kalc from '../src/Kalc'
import useCurrElement from "../src/state/hooks/useCurrElement";

describe('The keypad should', () => {

    //const currElement = useCurrElement()

    test('input to Recoil Atom State currElement all the number keys from 1 to 0 with a comma(,)', () => {
        render(
            <React.StrictMode>
                <RecoilRoot>
                    <Kalc />
                </RecoilRoot>
            </React.StrictMode>
        )

        const btnToPress = ['1','2','3','4','5','6','7','8','9','0',',','1']

        const displayResult = screen.getByRole('textbox')

        const buttons = []

        btnToPress.forEach((item) => {
            buttons.push(screen.getByText(item, { selector: 'button' }))
        })

        buttons.forEach((button) => {
            fireEvent.click(button)
        })
  
        expect(displayResult).toHaveTextContent('1234567890,1')

    })

})
import { render } from "@testing-library/react"
import React from "react"
import getById from "./helpers/getById"
import DisplayTxt from '../src/components/DisplayTxt'

describe("The Display of the Calculator should...", () => {

    test("contain the text span display for current formula and result", () => {
        const component = render(<DisplayTxt />)
        const display = getById(component.container ,'display')
        expect(display).toBeInTheDocument()
    })

    test("should display current formula being typed", () => {
        expect(true)
    })

    test("should display current result", () => {
        expect(true)
    })
})
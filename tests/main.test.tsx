import React from "react";
import {describe, test, it} from 'vitest'
import { render, screen} from "@testing-library/react"
import Kalc from '../src/Kalc'
import getById from "./helpers/getById";

describe("<<<MAIN>>> should...",() => {

    test('contain logo and name', () => {
        const component = render(<Kalc />)
        const logo = getById(component.container ,'logo')
        const titulo = getById(component.container ,'app-name')

        expect(logo).toBeInTheDocument()
        expect(titulo).toBeInTheDocument()
    })

    test('contain main element', () => {
        render(<Kalc />)
        const main = screen.getByRole('main')

        expect(main).toBeInTheDocument()
    })

})
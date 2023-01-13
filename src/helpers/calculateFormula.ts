import processParenteses from "./processParenteses"

export default function calculateFormula(
    formula:string[]
){
    let parentesesList = []

    // 1 -> Checar parenteses
    try {
        parentesesList = processParenteses(formula)
    } catch(error) {
        throw error
    }

    console.log(parentesesList)

    // 2 -> Processar formula por segmento de parenteses
    // 3 -> Processar restante da formula

    return 1
}
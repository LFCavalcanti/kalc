export default function processOperation(currOperation:string = '', previous:number, next: number){

    if(currOperation === '-'){
        return previous - next
    }

    if(currOperation === '+'){
        return previous + next
    }

    if(currOperation === '/'){
        return previous / next
    }

    if(currOperation === '*'){
        return previous * next
    }

    if(currOperation === '^'){
        return Math.pow(previous, next)
    }

    if(currOperation === '%'){
        return previous % next
    }

    if(currOperation === String.fromCharCode(8730)){ //RADIC
        return Math.sqrt(next)
    }

    if(currOperation === String.fromCharCode(13266)){ //LOG
        return Math.log(next)
    }

    if(currOperation === '!'){ //LOG

        let result = previous
        let curr = previous
        while(curr > 1){
            result = result * (curr-1)
            curr--
        }
        return result
    }

    throw 'Invalid operation'
    return 0

}
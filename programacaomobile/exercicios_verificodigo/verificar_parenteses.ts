// Validando parênteses
// Descrição

// Escreva uma função em TypeScript chamada validarParenteses que determine se uma expressão composta por parênteses (), colchetes [] e chaves {} está corretamente balanceada.

// Uma expressão está balanceada quando cada abertura possui um fechamento correspondente e a ordem é respeitada.

// Exemplo de uso:


//   console.log(validarParenteses("()[]{}"));      // true
//   console.log(validarParenteses("([{}])"));     // true
//   console.log(validarParenteses("(]"));         // false
//   console.log(validarParenteses("([)]"));       // false
//   console.log(validarParenteses("{[()]}{}"));   // true

export default function validarParenteses(expressao: string): boolean {
    let stack: string[] = []

    for (let i = 0; i < (expressao.length); i++){
        if (expressao[i] == "(" || expressao[i] == "[" || expressao[i] == "{"){
            stack.push(expressao[i])
        } else if (expressao[i] == ")") {
            if (stack[stack.length-1] == "("){
                stack.pop()
            } else {
                return false
            }
        } else if (expressao[i] == "]") {
            if (stack[stack.length-1] == "["){
                stack.pop()
            } else {
                return false
            }
        } else if (expressao [i] == "}"){
            if (stack[stack.length-1] == "{"){
                stack.pop()
            } else {
                return false
            }
        }
    }

    if (stack.length === 0) return true
    return false
}
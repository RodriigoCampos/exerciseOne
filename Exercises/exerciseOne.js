let numberOne = Number(prompt ("Digite o primeiro número:"))
let numberTwo = Number(prompt ("Digite o segundo número:"))

let result = numberOne + numberTwo 
let resultTwo = numberOne - numberTwo
let resultThree = numberOne * numberTwo
let resultFour = numberOne / numberTwo
let resultFive = numberOne % numberTwo

alert( `A soma dos números é: ${result}` )
alert(`A subtração dos números é: ${resultTwo}`)
alert(`A multiplicação dos números é: ${resultThree}`)
alert(`A divisão dos números é: ${resultFour}`)
alert(`O resto da divisão dos dois números é: ${resultFive}`)



if (result % 2 == 0) {
    alert("A soma dos dois números é par!")
} else {
    alert("A soma dos dois números é ímpar!")
}

if (numberOne === numberTwo) {
    alert("Os números digitados são iguais.")
} else {
    alert("Os números digitados são diferentes.")
}


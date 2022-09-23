// faça um programa q some dois numeros
// faça um programa q multiplique dois numeors e o resultado adicione 10
// faça um programa q encontre a raiz quadrada de um numero,multiplique por 10 e divida por 33
// faça um programa q inicie com dois nomes e o programa imprima na tela o seguinte dado:
//  Olã meu nome é (nome1) e meu partner é ( nome2)

let n1 = 20
let n2 = 30

const soma = n1 + n2
console.log(soma)
 
const multiplicacaoMaisDez = n1 * n2 + 10
console.log(multiplicacaoMaisDez)

let encontrarRaiz = 81

const raizMultiplicadoPorDezEDivididoPorTrintaETres = (Math.sqrt(81) *10) / 33
console.log(raizMultiplicadoPorDezEDivididoPorTrintaETres)

let myName = "Eric"
let partnerName = "Lucas"

console.log("Olã meu nome é " + myName + " e meu partner é " + partnerName)

// faça um progrma que imprima na tela se um nome é igual a outro 
// faça um progrma que imprima na tela se um nome é diferente de outro

console.log( myName == myName)
console.log( myName != partnerName)

// faça um progrma que imprima na tela se um nome é igual a outro porem os dois nomes devem estar em um array 
// faça um progrma que imprima na tela se um nome é diferete do outro porem os dois nomes devem estar em um array 

let myArrayName = ["Eric", "Lucas"]

console.log(myArrayName[0] == myArrayName[0] )
console.log(myArrayName[0] != myArrayName[1] )

// crie 5 objetos,neles devem conter os dados de 5 pessoas que voç~e conhece. minimo 5

// faça um programa q imprima na tela se um nome é igua a ondurationchange,porem os dois devem estar em dois objetos separados
// faça um programa q imprima na tela se um nome é igua a ondurationchange,porem os dois devem estar no mesmo objeto 

let name1 ={
    firstName : "Eric",
    secondName: "formiga",
     age: 21,
    sex:"male",
    altura: 1.77 
}
let name2={
    firstName : "Carlos",
    secondName: "henrique",
    age: 31,
    sex: "male",
    altura: 1.75 
}
let name3={
    firstName : "Rodolfo",
    secondName: "mori",
    age: 28,
    sex: "male",
    altura: 1.70 
}
let name4={
    firstName : "estefany",
    secondName: "luana",
    age: 18,
    sex: "female",
    altura: 1.55
}
let name5={
    firstName : "Perola",
    secondName: "oliverira",
    age: 22,
    sex: "female",
    altura: 1.68
}

console.log(name1.firstName == name2.firstName)
console.log(name1.firstName == name1.secondName)

// faça um programa onde toda vez que ele rodar, coloca na tela um numero aleatorio entre 1 e 100.
// faça um programa onde colocamos dois numeros impares e o  programa imprima o resto da divisao 
// faça um programa onde colocamos dois numeros, ele imprime se o primeiro numero é maior q o segundo
// faça um programa onde colocamos dois numeros, ele imprime se o primeiro numero é segundo q o segundo
 
let aleatorionumero = Math.random()
console.log(Math.floor(aleatorionumero * 100))

let NumberImpar1 = 3
let NumberImpar2 = 3
const restoDaDivisao = NumberImpar1 % NumberImpar2

let firstNumber = 50
let secondNumber = 20

console.log(firstNumber > secondNumber)
console.log(firstNumber < secondNumber)

// crie um programa que mostra o tamanho do array

let myArray = ["Eric", 4, "Perola", "Safira", 301, "peba"]

console.log(myArray.length)
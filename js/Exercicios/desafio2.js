// faça um programa que compare um numero com o 10 e imprime na tela "o numero é maior, o numero é mneor,numero é igual"

const number1 = 10
if(number1 > 10){
    console.log(` O numero ${number1} é maior que 10`)
}else if(number1 === 10){
    console.log(` O numero ${number1} é igual a 10`)
}else{
    console.log(`O numero ${number1} é menor do que 10`)
}

// faça um progrma que verifica se uma pessoa é brasileira ou nao

const nacionalidade = "braknjd"
if( nacionalidade === "brasileria"){
    console.log( "Você é barsileria(o)")
}else{
    console.log("você não é barsileira(o)")
}

// faça um programa que gere um numero aleatorio entre 1 e 10, esse é o numero ganhador
// entao ele tambem ira gerar um numero aleatorioa entre 1 a 10 e verifica se a pessoa ganhou ou nao 
// em caso ter ganhado mostra um premio se nao mostra outra mensagem

const randonNumber1 = Math.floor(Math.random() * 11)
const randonNumber2 = 10

if(randonNumber1 > randonNumber2){
    console.log(` O numero ${randonNumber1} é maior que o numero ${randonNumber2}, Parabens Você ganhou!!!`)
}else if(randonNumber1 < randonNumber2){
    console.log(` O numero ${randonNumber1} é menor que o numero ${randonNumber2}, Opps, infelizmente você perdeu`)
}else{
    console.log(` O numero ${randonNumber1} é igual ao numero ${randonNumber2}, Por favor reinicie o programa`)
}

// faça um programa wue recebe 3 numeros Inteiros,e deve imprimir, qual é o maior e qual é o menor

const primeiroNumero = 7
const segundoNumero = 4
const terceiroNumero = 1 

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero ){
    console.log(`O numero ${primeiroNumero} é maior que o segundo numero ${segundoNumero} e o terceiro numero ${terceiroNumero}`)
}else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero ){
    console.log(`O numero ${segundoNumero} é maior que o numero ${primeiroNumero} e o numero ${terceiroNumero}`)
}else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero ){
    console.log(`O numero ${terceiroNumero} é maior que o numero ${primeiroNumero} e o numero ${segundoNumero}`)
}else{
    console.log(`temos numero iguais entre o primeiro,segundo e terceiro numero. Respectivamente na ordem são eles
    ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero} `)
}

// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo para ser 
// aprovado, se a pessoa deve ser maior de idade e brsileira

const people = [{nome:"Eric",
                 idade: 21,
                 sexo: "masculino",
                 profissão: "front-end developer",
                 paisDeOrigem: "brasil"},
                 {nome:"Brenda",
                 idade: 20,
                 sexo: "feminino",
                 profissão: "medica veterinaria",
                 paisDeOrigem: "brasil"},
                 {nome:"henrique",
                 idade: 32,
                 sexo: "masculino",
                 profissão: "trader esportivo",
                 paisDeOrigem: "brasil"},
                 {nome:"alan",
                 idade: 23,
                 sexo: "masculino",
                 profissão: "vendedor",
                 paisDeOrigem: "americano"},
                 {nome:"Ali",
                 idade: 23,
                 sexo: "masculino",
                 profissão: "front-end developer",
                 paisDeOrigem: "Paquistão"}]

for(let i = 0; i < people.length; i++){
if(people[i].idade >= 18 && people[i].paisDeOrigem === "brasil"){
    console.log("aprovado, Você é brasileiro(a) e é maior de idade!!!")
}else{
    console.log("reprovado!,Você precisa ser barsileiro e maior de idade para ser aprovado")
}
}


// faça um programa onde os jurados vão dar a explicação para cada nota.
// são permitidas notas de 0 a 10 cada nota deve conter um a mensagem diferente

const notas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for( let i = 0; i <= notas.length; i++){
    switch(notas[i]){
    case 10: 
         console.log(`sua nota é ${notas[i]},Parabens Você tirou nota maxima!! `)
        break;

        case 9: 
         console.log(`sua nota é ${notas[i]},Parabens Você quase gabaritou!!`)
        break;

        case 8: 
         console.log(`sua nota é ${notas[i]},Parabens Você se saiu muito bem,porem precisa melhorar!!`)
        break;

        case 7: 
         console.log(`sua nota é ${notas[i]},Parabens Você se saiu muito bem,porem precisa melhorar!!`)
        break;

        case 6: 
        console.log(`sua nota é ${notas[i]},Você está na média,precisa melhorar!!`)
        break;

        case 5: 
        console.log(`sua nota é ${notas[i]},Você está na média,precisa melhorar!!`)
        break;

        case 4: 
        console.log(`sua nota é ${notas[i]},Você está abaixo da média,precisa melhorar!!`)
        break;

        case 3: 
        console.log(`sua nota é ${notas[i]},Desculpe a sinceridade porem Você é ruim precisa melhorar urgentemente!!`)
        break;

        case 2: 
        console.log(`sua nota é ${notas[i]},Desculpe a sinceridade porem Você é ruim precisa melhorar urgentemente!!`)
        break;

        case 1: 
        console.log(`sua nota é ${notas[i]},Desculpe a sinceridade porem Você é bem ruim precisa melhorar urgentemente!!`)
        break;

        case 0: 
        console.log(`sua nota é ${notas[i]},Desculpe a sinceridade porem Você é  MUITO ruim precisa melhorar urgentemente!!`)
        break;
    }
}

// faça um programa onde leia um numero e diga  se ele é par ou impar

const imparOuPar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for( let i = 0 ; i < imparOuPar.length; i++){
    if(imparOuPar[i] % 2 === 0){
        console.log(`o numero ${imparOuPar[i]} é Par`)
    }else{
        console.log(`o numero ${imparOuPar[i]} é Impar`)
    }
}
 
// faça um programa onde leia dois numero e diga se ele é:
//  impar
//  par
//  é primo e impar
//  é par é dividivel por 5

const verificarImparParOuPrimo = [7, 20, 11, 9, 13, 17, 19, 15, 10, 30]

for(let i = 0 ; i < verificarImparParOuPrimo.length; i++){
    if(verificarImparParOuPrimo[i] % 5 === 0 && verificarImparParOuPrimo[i] % 2 === 0){
        console.log("par e divisivel por 5")
    }else if(verificarImparParOuPrimo[i] % 2 === 0){
        console.log("par")
    }else if(verificarImparParOuPrimo[i] % 3 !== 0){
        console.log("primo e impar")
    }else{
        console.log("impar")
    }
}


// faça um progarama que le 4 numeros.em cada caso, ele deve retornar a mensagem condizente:
//se todos os numeros são par => TODOS OS NUMEROS SAO PAR
//se todos os numeros são impar => TODOS OS NUMEROS SAO IMPAR
// default => Existem  numeros  pares e impar neste caso

const numberOne = 11
const numbertwo = 11
const numbertree = 11
const numberFour = 11

if( numberOne % 2 === 0 && numbertwo % 2 === 0 && numbertree % 2 === 0 && numberFour % 2 ===0 ){
    console.log("TODOS OS NUMEROS SÃO PARES")
}else if( numberOne % 2 !== 0 && numbertwo % 2 !== 0 && numbertree % 2 !== 0 && numberFour % 2 !==0 ){
    console.log("TODOS OS NUMEROS SÃO IMPARES")
}else{
    console.log("EXISTEM NUMEROS PARES E IMPARES")
}

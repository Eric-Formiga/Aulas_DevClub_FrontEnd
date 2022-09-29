// [ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 a
// té o número que você enviou

const printOneUntilTen = ( number1 )=>{
    for(let i = 1; i <= number1; i++ ){
        console.log( i )
    }
}

printOneUntilTen(4)

//Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const multiplayOneUntilten = (number1) =>{
    if(number1 >= 1 && number1 <=10){
        for(let i = 1; i <= 10; i++ ){
        console.log(`O resultado da multiplicação entre ${number1} e ${i} é ${number1 * i}`)
        }
    }else{
        console.log("Apenas numeros entre 1 e 10 são permitidos")
    }
}

multiplayOneUntilten(6)

//[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!

 const data = new Date()
 const day = String(data.getDay()).padStart(2,'0')
 const month = String(data.getMonth()).padStart(2,'0')
 const year = String(data.getFullYear()).padStart(2,'0')
 const hours = String(data.getHours()).padStart(2,'0')
 const minutes = String(data.getMinutes()).padStart(2,'0')
 const seconds = String(data.getSeconds()).padStart(2,'0')
  
 const horaExata = ()=>{
    console.log(`São exatamente ${hours}:${minutes}:${seconds} Horaio de barsilia`)
 }

 horaExata()
 
//[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos (dd/mm/aaaa)

const dataExata = ()=>{
    console.log(`Hoje é Dia ${day}/${month}/${year} ano da tecnologia`)
}
dataExata()

//[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

const compareteNumber = (number1, number2)=>{
    if(number1 > number2){
        console.log(`O numero ${number1} é maior que o numero ${number2}`)
    }else if(number1 < number2){
        console.log(`O numero ${number1} é menor que o numero ${number2} `)
    }else{
        console.log(`Ò numero ${number1} é igual ao numero ${number2}`)
    }
}
compareteNumber(5,5)


//[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
// A prefeitura deseja saber: - média do salário da população; - média do número de filhos;
//- maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const people = [{  salary: 3000,
                    numberOfChildren: 2},
                 {  salary: 3000,
                    numberOfChildren: 5},
                 {  salary:4500,
                    numberOfChildren:0},
                 {  salary: -3000,
                    numberOfChildren: 2}]

function findAvaregeAndHighestSalary(peopleInformation){
    
    let avarageSalary = 0
    let avarageChildren = 0
    let highestSalary = 0

    for(let i = 0; i <= peopleInformation.length; i++){

        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if(salary > highestSalary) highestSalary = salary

        if(salary < 0){
            console.log(`A media salarial é R$${(avarageSalary / i ).toFixed(0)}`)
            console.log(`A media de filhos é ${(avarageChildren / i ).toFixed(0)}`)
            console.log(`A maior salario é R$${highestSalary}`)
            break
        }else{
            avarageSalary = avarageSalary + salary;
            avarageChildren += children
        }
    }
}

findAvaregeAndHighestSalary(people)
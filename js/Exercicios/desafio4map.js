const list = [
    {name:"Rodolfo", vip: true},
    {name:"Maria", vip: false},
    {name:"João", vip: true},
    {name:"Bruno", vip: true},
    {name:"Carla", vip: false},
    {name:"Ana", vip: true},
    {name:"Julio", vip: false}
]

const newList = list.map( client =>{
    const newList = {
        name:client.name, 
        vip:client.vip,
        sector: client.vip ? "black" : "Green"
    }

    return newList
})

console.log(newList)


const students = [
    {name:"Rodolfo", testeGrade: 7},
    {name:"Maria", testeGrade: 5},
    {name:"João", testeGrade: 8},
    {name:"Bruno", testeGrade: 9},
    {name:"Carla", testeGrade: 3},
    {name:"Ana", testeGrade: 2},
    {name:"Julio", testeGrade: 10}
]

const newStudents = students.map(student =>{
    const newStudent ={
        name: student.name,
        testeGrade: student.testeGrade,
        finalResult: student.testeGrade >= 7 ? "approved" : "disapproved"
    }
    return newStudent
})

console.log(newStudents)

// fazendo a mesma coisa com if e else

const approvedStudents = students.map(student =>{
    let approvedOrNot 
    if(student.testeGrade >= 7){
        approvedOrNot = "approved"
    }else{
        approvedOrNot = "disapproved"
    }
    const students = {
        name: student.name,
        finalResult: approvedOrNot
    }

    return students
}) 

console.log(approvedStudents)
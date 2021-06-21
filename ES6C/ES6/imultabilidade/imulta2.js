const students =[
    {
        name: "João",
        grade: 8,
    },

    {
        name: "Fred",
        grade: 4,
    },

    {
        name: "Eva",
        grade: 5,
    },

];


function getApprovendStudents(studentsList){
    //os argumentos do filter são um parâmetro e a condição
    
   return studentsList.filter(student  =>  student.grade < 5);


}


console.log("Alunos Aprovados ");

console.log(getApprovendStudents(students))
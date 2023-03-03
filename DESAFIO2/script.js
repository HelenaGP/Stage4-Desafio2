let studentsList = []
let student 
let input 
let index = 1
let studentAverage
let studentStatus
function average(grade1, grade2){
  return ((grade1+grade2)/2).toFixed(1)
}


while(input != 3){
  input = Number(prompt(`
  Insira uma das opções:
    1. Inserir aluno e suas informações.
    2. Visualizar as médias dos alunos e verificar se o aluno foi aprovado no concurso.
    3. Finalizar programa.
  `))

  switch(input){
    case 1:
      alert(`Vamos inserir os dados do aluno ${index}`)
      student = {
        name: prompt(`Insira o nome do(a) aluno(a) ${index}:`),
        firstGrade: Number(prompt(`Insira a primeira nota do(a) aluno(a) ${index}`)),
        secondGrade: Number(prompt(`Insira a segunda nota do(a) aluno(a) ${index}`))
      }
      studentsList.push(student)
      index++
      break
    case 2:
      for(let student of studentsList) {
        studentAverage = average(student.firstGrade,student.secondGrade)
        if(studentAverage >= 7) {
          studentStatus = `Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
        }
        else{
          studentStatus = `Não foi dessa vez, ${student.name}! Tente novamente!`
        }
        alert(`
        A média do(a) aluno(a) ${student.name} é: ${studentAverage}.
        
        ${studentStatus}
        `)
      }
      break
    
    case 3:
      break

    default:
      alert(`Essa opção é inválida, tente novamente.`)
      break
  }
}

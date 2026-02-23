// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar se ele foi aprovado ou reprovado. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.
const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 5;

function calcularMedia() {
  return (nota1 + nota2) / 2;
}

const media = calcularMedia () ;
  let resultado;
  if (media >= 7) {
  resultado = "Aprovado";
} else {
  resultado = "Reprovado";
}

console.log("O aluno " + nomeAluno + " está: " + resultado);

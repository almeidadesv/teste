// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

//tirei as aspas da taxaDolar

const taxaDolar = 5.50;

//substitui valorDolar para valor como esta na const transacao

function converterParaReal(valor) {
  let resultado = valor * taxaDolar;
  return resultado;
}


// tirei as aspas do valor e substitui a virgula por ponto


const transacao = {
  usuario: "Carlos",
  valor: 100.00,
  concluida: true,
};

//adicionei a funcao pra calcular corretamente e criei uma variavel resultado

const valorFinal = converterParaReal (transacao.valor)
let resultado;
if (transacao.concluida == true) {
  console.log("O valor convertido para " + transacao.usuario + " é: " + valorFinal);

} else {
  console.log("Erro no processamento.");
}

// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const produto = {
  nome: "Teclado Gamer",
  preco: 150.00,
  estoque: 10,
};

//mudei o nome da variavel valor pra preco e atribui o valor nela

function aplicarDesconto (preco) {
  return preco = (produto.preco) - 20;
}
  
//mudei a variavel preco pra produto.preco pra aplicar o desconto no valor do produto

const precoFinal = aplicarDesconto(produto.preco);

//adicionei uma variavel nova pra atualizar o estoque pós realização da compra

const compraRealizada = produto.estoque - 1;

console.log("Produto:" + produto.nome);
console.log("Preço com desconto:" + precoFinal);
console.log("Estoque atual:" + produto.estoque);

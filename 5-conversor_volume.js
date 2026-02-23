// --- Conversor de Medidas de Fábrica ---

const mlPorLitro = 1000
const LPorMl = 1000

function converterMlParaLitro(quantidadeMl) {
  let resultado1 = quantidadeMl / mlPorLitro;
  return resultado1;
}

function converterLitroParaMl(quantidadeLitros) {
  let resultado2 = quantidadeLitros * LPorMl;
  return resultado2;
}

const producaoDia = {
  lote1: 0, // ml
  lote2: 0, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (L em Mililitros): " + calculoLote2 + "ml");

if ((producaoDia.lote1 == 0 && producaoDia.lote2 == 0)) {
  console.log("Atenção: Estoque zerado!");
}


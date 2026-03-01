// --- Calculadora de Consumo de Combustível ---


// tirei as aspas em diesel pois não é texto

const precos = {
  gasolina: 5.8,
  alcool: 3.9,
  diesel: 6.20,
};

function calcularGasto(distancia, consumoKml, tipoCombustivel) {
  let precoUnitario = tipoCombustivel;

  let litrosNecessarios = distancia / consumoKml;
  let custoTotal = (litrosNecessarios * precoUnitario);

  return custoTotal;
}

// tirei as aspas en distancia pois não é texto

const viagem = {
  destino: "Litoral",
  distancia: 200,
  veiculo: "Corsa",
};

// adicionei variaveis separadas que calculam o custo total pra cada tipo de combustivel
//com valores mais proximos dos reais

const resultadoGasolina = calcularGasto(viagem.distancia, 10, precos.gasolina);
const resultadoDiesel = calcularGasto(viagem.distancia, 15, precos.diesel);
const resultadoAlcool = calcularGasto(viagem.distancia, 8, precos.alcool);

// encurtei as variaveis e adicionei toFixed pra deixar o valor menor

console.log("Viagem para: " + viagem.destino);
console.log("Custo estimado no Diesel: R$ " + resultadoDiesel.toFixed(2));
console.log("Custo estimado na Gasolina: R$ " + resultadoGasolina.toFixed(2));
console.log("Custo estimado no Álcool: R$ " + resultadoAlcool.toFixed(2));


//adicionei um console.log ao invés da variável const pra mostrar a mensagem corretamente e outro para caso o álcool
//não esteja compensando.
//adicionei comparações entre o valor pra mostrar qual ficaria mais barato no geral.

if (resultadoGasolina <= resultadoAlcool && resultadoGasolina < resultadoDiesel) {
  console.log("A gasolina está compensando!");
}
else if (resultadoAlcool <= resultadoGasolina && resultadoAlcool < resultadoDiesel) {
  console.log("O álcool está compensando!");
}
else {
  console.log("O diesel está compensando!");
}

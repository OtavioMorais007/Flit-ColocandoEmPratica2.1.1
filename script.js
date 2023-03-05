function calcularCombustivel(distanciaMetros, tipoCombustivel) {
  let erro = true
  if(distanciaMetros < 0 || typeof distanciaMetros !== 'number') {
    console.log("Valor de distância  inválido")
    return erro
  }
  if(typeof tipoCombustivel !== 'string' || tipoCombustivel !== 'gasolina' && tipoCombustivel !== 'etanol') {
    console.log("Tipo de combustível inválido")
    return erro
  }

  let kmPorLitro;
  tipoCombustivel === "gasolina" ? (kmPorLitro = 16) : (kmPorLitro = 11);
  let distanciaKm = distanciaMetros / 1000;
  return Math.ceil(distanciaKm / kmPorLitro);
}

function numeroDeParadas(passageiros, tempoHoras) {
  let erro = true
  if(!passageiros || typeof tempoHoras !== 'number' || tempoHoras < 0) {
    return erro
  }
  let numeroDeAdultos = 0;
  let numeroDeCriancas = 0;
  let intervalo;
  passageiros.forEach((passageiro) => {
    passageiro === "adulto" ? numeroDeAdultos++ : numeroDeCriancas++;
  });
  if (numeroDeAdultos > 0 && numeroDeCriancas === 0) {
    intervalo = 90;
  } else if (numeroDeAdultos > numeroDeCriancas) {
    intervalo = 60;
  } else if (numeroDeCriancas > numeroDeAdultos) {
    intervalo = 40;
  }

  let tempoMinutos = tempoHoras * 60;
  let qntDeParadas = tempoMinutos / intervalo;
  return Math.round(qntDeParadas);
}

function numeroDeRefeicoes(qntDeParadas, passageiros) {
  let erro = true
  if(!passageiros || typeof qntDeParadas !== 'number' || qntDeParadas < 0) {
    return erro
  }
  let adultos = 0;
  let criancas = 0;
  let total;
  passageiros.forEach((passageiro) => {
    passageiro === "adulto" ? adultos++ : criancas++;
  });

  total = adultos * 50 + criancas * 40;
  for (let i = 0; i < qntDeParadas; i++) {
    if (i % 2 === 0 && i > 0) {
      total += adultos * 50 + criancas * 40;
    }

    if (i % 2 !== 0) {
      total += adultos * 30 + criancas * 20;
    }
  }

  return parseFloat(total)
}
module.exports = { calcularCombustivel, numeroDeParadas, numeroDeRefeicoes };
// ||||

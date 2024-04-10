var historicoLista = [];

function calcular() {
    var etanol = parseFloat(document.getElementById('etanol').value);
    var gasolina = parseFloat(document.getElementById('gasolina').value);
    var div = etanol / gasolina;
    var resultado = div.toFixed(3);
    var resultadoElement = document.getElementById('resultado');
    var diferenca = gasolina - etanol; 

    historicoLista.push({
        etanol: etanol,
        gasolina: gasolina,
        resultado: resultado,
        diferenca: diferenca 
    });

    if (historicoLista.length > 5) {
        historicoLista.shift(); 
    }

    exibirHistorico();

    if (resultado <= 0.699) {
        resultadoElement.innerText = 'Abasteça com Etanol!';
        resultadoElement.className = 'resultado resultado-etanol';
    } else if (resultado >= 0.701) {
        resultadoElement.innerText = 'Abasteça com Gasolina!';
        resultadoElement.className = 'resultado resultado-gasolina';
    } else {
        resultadoElement.innerText = 'Tanto faz Gasolina ou Etanol!';
        resultadoElement.className = 'resultado resultado-igual';
    }
}

function exibirHistorico() {
    var historicoBody = document.getElementById('historicoBody');
    historicoBody.innerHTML = ''; 

    historicoLista.slice(-5).forEach(function(item, index) {
        var row = historicoBody.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = item.etanol.toFixed(2);
        row.insertCell(2).innerText = item.gasolina.toFixed(2);
        row.insertCell(3).innerText = item.resultado;
        row.insertCell(4).innerText = item.diferenca.toFixed(2);
    });
}

function calcularCustoViagem() {
    var precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    var distancia = parseFloat(document.getElementById('distancia').value);
    var consumoRodovia = parseFloat(document.getElementById('consumoRodovia').value);
    var consumoUrbano = parseFloat(document.getElementById('consumoUrbano').value);

    if (isNaN(precoGasolina) || isNaN(distancia) || isNaN(consumoRodovia) || isNaN(consumoUrbano)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var consumoTotalRodovia = (distancia / consumoRodovia);
    var consumoTotalUrbano = (distancia / consumoUrbano);

    var custoTotalRodovia = consumoTotalRodovia * precoGasolina;
    var custoTotalUrbano = consumoTotalUrbano * precoGasolina;

    var custoViagemElement = document.getElementById('custoViagem');
    custoViagemElement.innerHTML = 'Custo Total da Viagem (Rodovia): R$ ' + custoTotalRodovia.toFixed(2) + '<br>' +
                                    'Custo Total da Viagem (Área Urbana): R$ ' + custoTotalUrbano.toFixed(2);
    custoViagemElement.className = 'resulta';
}

function calcularCustoViagemRodovia() {
    var precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    var distancia = parseFloat(document.getElementById('distancia').value);
    var consumoRodovia = parseFloat(document.getElementById('consumoRodovia').value);

    if (isNaN(precoGasolina) || isNaN(distancia) || isNaN(consumoRodovia)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var consumoTotalRodovia = (distancia / consumoRodovia);
    var custoTotalRodovia = consumoTotalRodovia * precoGasolina;

    var custoViagemElement = document.getElementById('custoViagem');
    custoViagemElement.innerHTML = 'Custo Total da Viagem (Rodovia): R$ ' + custoTotalRodovia.toFixed(2);
    custoViagemElement.className = 'resulta';
}

function calcularCustoViagemUrbana() {
    var precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    var distancia = parseFloat(document.getElementById('distancia').value);
    var consumoUrbano = parseFloat(document.getElementById('consumoUrbano').value);

    if (isNaN(precoGasolina) || isNaN(distancia) || isNaN(consumoUrbano)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var consumoTotalUrbano = (distancia / consumoUrbano);
    var custoTotalUrbano = consumoTotalUrbano * precoGasolina;

    var custoViagemElement = document.getElementById('custoViagem');
    custoViagemElement.innerHTML = 'Custo Total da Viagem (Área Urbana): R$ ' + custoTotalUrbano.toFixed(2);
    custoViagemElement.className = 'resulta';
}



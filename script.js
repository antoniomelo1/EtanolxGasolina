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
var historicoLista = [];

function calcular() {
    var etanol = parseFloat(document.getElementById('ethanol-price').value);
    var gasolina = parseFloat(document.getElementById('gasoline-price').value);
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

function calcularCustoViagemRodovia() {
    var precoGasolina = parseFloat(document.getElementById('precoGasolinaRodovia').value);
    var distancia = parseFloat(document.getElementById('distanciaRodovia').value);
    var consumoRodovia = parseFloat(document.getElementById('consumoRodovia').value);
    var pedagio = parseFloat(document.getElementById('pedagio').value);

    if (isNaN(precoGasolina) || isNaN(distancia) || isNaN(consumoRodovia)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var consumoTotalRodovia = (distancia / consumoRodovia);
    var custoTotalRodovia = (consumoTotalRodovia * precoGasolina) + (isNaN(pedagio) ? 0 : pedagio);

    var custoViagemElement = document.getElementById('custoViagemRodovia');
    custoViagemElement.innerHTML = 'Custo Total da Viagem (Rodovia): R$ ' + custoTotalRodovia.toFixed(2);
    custoViagemElement.className = 'resulta';
}

function calcularCustoViagemUrbana() {
    var precoGasolina = parseFloat(document.getElementById('precoGasolinaUrbano').value);
    var distancia = parseFloat(document.getElementById('distanciaUrbano').value);
    var consumoUrbano = parseFloat(document.getElementById('consumoUrbano').value);

    if (isNaN(precoGasolina) || isNaN(distancia) || isNaN(consumoUrbano)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var consumoTotalUrbano = (distancia / consumoUrbano);
    var custoTotalUrbano = consumoTotalUrbano * precoGasolina;

    var custoViagemElement = document.getElementById('custoViagemUrbana');
    custoViagemElement.innerHTML = 'Custo Total da Viagem (Área Urbana): R$ ' + custoTotalUrbano.toFixed(2);
    custoViagemElement.className = 'resulta';
}

function enviarFeedback() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;

    if (nome && email && feedback) {
        document.getElementById('mensagemFeedback').innerText = 'Obrigado pelo seu feedback!';
        document.getElementById('mensagemFeedback').className = 'feedback-enviado';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function enviarFeedback() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('feedback').value;
    var mensagemFeedback = document.getElementById('mensagemFeedback');

    if (nome.trim() === '' || mensagem.trim() === '') {
        mensagemFeedback.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (!validarEmail(email)) {
        mensagemFeedback.textContent = 'Por favor, insira um email válido.';
        return;
    }

    // Lógica para enviar o formulário
    // Exemplo de envio assíncrono com fetch API ou XMLHttpRequest

    mensagemFeedback.textContent = 'Obrigado pelo Feedback!';
    // Aqui você pode implementar o código para enviar os dados do formulário
}



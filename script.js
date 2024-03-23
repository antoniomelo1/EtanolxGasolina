function calcular() {
  var etanol = parseFloat(document.getElementById('etanol').value);
  var gasolina = parseFloat(document.getElementById('gasolina').value);
  var div = etanol / gasolina;
  var resultado = div.toFixed(3);

  if (resultado <= 0.699) {
      document.getElementById('resultado').innerText = 'Abasteça com Etanol!';
  } else if (resultado >= 0.701) {
      document.getElementById('resultado').innerText = 'Abasteça com Gasolina!';
  } else {
      document.getElementById('resultado').innerText = 'Tanto faz Gasolina ou Etanol!';
  }
}
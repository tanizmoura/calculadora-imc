function calcular() {

	var altura = parseFloat(document.getElementById('altura').value);
	var peso = parseFloat(document.getElementById('peso').value);
	
	altura = altura * altura;

	var imc = Math.round(peso/altura);

	var resultado ='';

	if (imc < 10) {
		resultado = "desnutrição grau v"
	} else if (imc >= 10 && imc < 12.9) {
		resultado = "desnutrição grau Iv"
	} else if (imc >= 13 && imc < 15.9) {
		resultado = "desnutrição grau III"
	} else if (imc >= 16 && imc < 16.9) {
		resultado = "desnutrição grau II"
	} else if (imc >= 17 && imc < 18.4) {
		resultado = "desnutrição grau I"
	} else if (imc >= 18.5 && imc < 24.9) {
		resultado = "normal"
	} else if (imc >= 25 && imc < 29.9) {
		resultado = "pré-obesidade"
	} else if (imc >= 30 && imc < 34.5) {
		resultado = "obesidade grau I"
	} else if (imc >= 35 && imc < 39.9) {
		resultado = "obesidade grau II"
	} else {
		resultado = "obesidade grau III"
	}

	document.getElementById('imc').innerHTML = imc;
	document.getElementById('resultado').innerHTML = resultado;
}

function apagar() {
	document.getElementById('altura').value = '';
	document.getElementById('peso').value = '';
	document.getElementById('imc').innerHTML = '';
	document.getElementById('resultado').innerHTML = '';
}


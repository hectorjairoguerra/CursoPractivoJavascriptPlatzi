console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
function areaTriangulo3L(lado1, lado2, lado3){
  let s = (lado1 + lado2 + lado3) / 2;
  var area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
  return area;
}
function esTrianguloIsosceles(lado1, lado2) {
  return (lado1 == lado2);
}

function alturaTrianguloIsosceles(lado, base) {
  return Math.sqrt( (lado ** 2) - (base / 2) ** 2);
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const value = document.getElementById("InputCuadrado").value;
  const area = areaCuadrado(value);
  alert(area);
}
function calcularPerimetroTriangulo() {
  let lado1 = Number(document.getElementById("InputTrianguloLado1").value);
  let lado2 = Number(document.getElementById("InputTrianguloLado2").value);
  let base =  Number(document.getElementById("InputBaseTriangulo").value);
  let perimetro = perimetroTriangulo(lado1, lado2, base) ;
  alert(perimetro) ;
}
function calcularAreaTrianguloBH(){
  let base = document.getElementById("InputBaseTriangulo").value;
  let altura = document.getElementById("InputAlturaTriangulo").value;
  let area = areaTriangulo(base, altura)
  alert(area);
}
function calcularAreaTriangulo3L(){
  let lado1 = Number(document.getElementById("InputTrianguloLado1").value);
  let lado2 = Number(document.getElementById("InputTrianguloLado2").value);
  let lado3 = Number(document.getElementById("InputBaseTriangulo").value);
  let area = areaTriangulo3L(lado1, lado2, lado3) ;
  alert(area);
}
function calcularPerimetroCirculo(){
  let radio = document.getElementById("InputRadioCirculo").value;
  let perimetro = perimetroCirculo(radio);
  alert(perimetro);
}
function calcularAreaCirculo(){
  let radio = document.getElementById("InputRadioCirculo").value;
  let area = areaCirculo(radio);
  alert(area);
}
function calcularAlturaTriangulo() {
  let lado1 = Number(document.getElementById("InputTrianguloLado1").value);
  let lado2 = Number(document.getElementById("InputTrianguloLado2").value);
  let base = Number(document.getElementById("InputBaseTriangulo").value);
  
  if(esTrianguloIsosceles(lado1, lado2)) {
    let altura = alturaTrianguloIsosceles(lado1, base);
    let area = areaTriangulo(base, altura);
    alert(`Altura: ${altura} y el área: ${area}`);
  } else {
    alert("No es triángulo isósceles");
  }
  
  }
  
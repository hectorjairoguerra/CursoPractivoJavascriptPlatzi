const lista = [
    40,
    100,
    1,
    5,
    25,
    10,
    400000000
];

console.log(lista);
lista.sort(function(a, b){return a - b});
console.log(lista);

function calcularMediaAritmetica(lista) {
    lista.sort(function(a, b){return a - b});
    const sumaLista = lista.reduce(
        function (valorAcumulado= 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};
let mediana;

const mitadLista = parseInt(lista.length / 2);

function esPar(n){
    return (n % 2 === 0);
}

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    mediana = calcularMediaAritmetica([elemento1, elemento2]);
} else {
    mediana = lista[mitadLista];
}
console.log(mediana);
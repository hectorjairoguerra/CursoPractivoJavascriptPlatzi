const lista = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, 1, 1, 1,
    8, 8, 8, 8, 8, 8, 8
];

function calcularModa(lista) {
    const listaCount = {};    
    lista.map(
        function(elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    return ordenar(listaCount)[0][0];
}

console.log(calcularModa(lista));

function ordenar(array) {
    const listArray = Object.entries(array).sort(
        function (valorAcumulado, nuevoValor) {
            //return valorAcumulado[1] - nuevoValor[1]
            return nuevoValor[1] - valorAcumulado[1];
        }
    )
    return listArray
}

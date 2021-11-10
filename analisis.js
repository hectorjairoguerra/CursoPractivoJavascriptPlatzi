// Helpers
function esPar(numero) { 
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado= 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

const salariosCol = colombia.map (
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(a,b) {
        return a-b;
    }
);

// Mediana general
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2)
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        return calcularMediaAritmetica([personaMitad1, personaMitad2]);
    } else {
        return lista[mitad];
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

/* const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
); */
const salariosColTop10 = salariosColSorted.slice(
    spliceStart,
    salariosColSorted.length
);

const medianaTop10Col = medianaSalarios(salariosColTop10);
    console.log(salariosColSorted);
    console.log(medianaGeneralCol);
    console.log(spliceStart);
    console.log(spliceCount);
    console.log(salariosColTop10);
    console.log(medianaTop10Col);


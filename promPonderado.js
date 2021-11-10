const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

// Arreglo con los productos nota * credito
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

// Suma de los productos calculados previamente
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// fArreglo con los créditos
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

// Suma de los créditos anteriores
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

// Cálculo del promedio ponderado.
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

notesWithCredit;
sumOfNotesWithCredit;
credits;
sumOfCredits;
promedioPonderadoNotasConCreditos;
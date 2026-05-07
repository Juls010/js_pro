// .at (indice): accede a un elemento del array. incluyendo indices negativos (desde el final). Es decirle adios a esto: arr[arr.length - 1] para acceder al último elemento.  

// Ejemplos:
const frutas = ['manzana', 'banana', 'cereza', 'durazno'];
console.log(frutas.at(0)); // Output: 'manzana'
console.log(frutas.at(-1));
console.log(frutas.at(-2));

"hola".at(-1); // 'a'

// .flat() y .flatMap() aplanan arrays anidados. flat() aplanará un array hasta la profundidad especificada, mientras que flatMap() aplicará una función a cada elemento y luego aplanará el resultado en un nuevo array.


[1,[2,3], [4,[5]]].flat(); // [1, 2, 3, 4, [5]]
[1,[2,[3]]].flat(Infinity); // [1, 2, 3] aplana completamente el array, sin importar cuán anidado esté.
const posts = [
    {titulo : "JS", tags: ["programacion", "javascript"]},
    {titulo : "CSS", tags: ["CSS", "javascript"]},
];

posts.flatMap(p => p.tags); // ["programacion", "javascript", "CSS", "javascript"]


// findLast() es similar a find(), pero devuelve el último elemento que cumple con la condición dada en lugar del primero. Es útil cuando se desea encontrar el último elemento que coincide con ciertos criterios en un array.


const pedidos = [
    {id: 1, estado: "enviado"},
    {id: 2, estado: "enviado"},
    {id: 3, estado: "pendiente"}
];

pedidos.findLast(p => p.estado === "enviado");
pedidos.findLastIndex(p => p.estado === "enviado") // 2 devuelve el índice del último pedido con estado "pendiente"

// .toSorted(), .toReversed(), .toSpliced() y .with() son métodos que permiten crear nuevas versiones de un array sin modificar el original. toSorted() devuelve una copia ordenada del array, toReversed() devuelve una copia con los elementos en orden inverso, toSpliced() devuelve una copia con elementos eliminados o reemplazados según los parámetros proporcionados, y with() devuelve una copia con un elemento modificado en la posición especificada. Estos métodos son útiles para mantener la inmutabilidad de los arrays mientras se realizan operaciones de transformación.

const numeros = [3, 1, 2];
numeros.toSorted(); // [1, 2, 3]
numeros.toReversed(); // [2, 1, 3]
numeros.toSpliced(1, 1, 4); // [3, 4, 2] la posición 1 (el número 1) se elimina y se reemplaza por el número 4
numeros.with(0, 5); // [5, 1, 2]



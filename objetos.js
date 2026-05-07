// Object.entries()  y object.fromEntries() son métodos que permiten convertir un objeto en un array de pares clave-valor y viceversa. Object.entries() devuelve un array de pares clave-valor a partir de un objeto, mientras que Object.fromEntries() crea un objeto a partir de un array de pares clave-valor. Estos métodos son útiles para manipular objetos y arrays de manera más flexible.

const precios = {
    manzana: 1.2,
    pera: 0.8,
    naranja: 1.5
};

const caros = Object.fromEntries(
    Object.entries(precios)
    .filter(([_, precio]) => precio > 1) // Filtra los productos con precios mayores a 1
    .map(([nombre, precio]) => [nombre, precio * 1.21]) // Agrega un impuesto del 21% a los precios mayores a 1
);

console.log(caros); // Output: { manzana: 1.452, naranja: 1.815 }
// para quitar los 3 decimales, se puede usar toFixed(2) para redondear a 2 decimales:


const params = new URLSearchParams('?ciudad=sevilla&orden=precio');

// percent encoding 

// URLSearchParams tambien transforma % y numeros que puede haber en la URL a su formato original, por ejemplo.

const params2 = new URLSearchParams('?ciudad=sevilla%20y%20granada&orden=precio%20ascendente');
console.log(params2.get('ciudad'));

const obj = Object.fromEntries(params);
console.log(obj); // Output: { ciudad: 'sevilla', orden: 'precio' }


//objets.hasOwn() es un método que se utiliza para verificar si un objeto tiene una propiedad específica como su propia propiedad, en lugar de heredada a través de la cadena de prototipos. Este método devuelve true si la propiedad existe directamente en el objeto, y false si no existe o si es una propiedad heredada.

const persona = {
    nombre: 'Juan',
    role: 'admin'
};      
/*
persona.hasOwn('nombre') // edge case
// 1. objeto sin tipo
const obj2 = Object.create(null);
obj2.nombre = 'Maria';
console.log(obj2.hasOwn('nombre')); // true

// 2. objeto sobrescrito
const obj3 = {
    hasOwn: "hola",
    nombre: 'Carlos'
};
console.log(obj3.hasOwn('nombre')); // true, aunque hasOwn es una propiedad del objeto, no afecta la funcionalidad del método hasOwn() para verificar la propiedad 'nombre'.    

Object.hasOwn(obj3, 'nombre'); // true pero con edge case, es decir, usando Object.hasOwn() en lugar de obj3.hasOwn() para evitar conflictos con propiedades del objeto que puedan sobrescribir el método hasOwn().
*/
// objetc.groupBy() es un método que permite agrupar los elementos de un array en función de una función de agrupación proporcionada. Este método devuelve un objeto donde las claves son los resultados de la función de agrupación y los valores son arrays que contienen los elementos correspondientes a cada grupo.

const productos = [
    {nombre: 'Camiseta', categoria: 'ropa'},
    {nombre: 'Pantalón', categoria: 'ropa'},
    {nombre: 'Zapatos', categoria: 'calzado'},
    {nombre: 'Sandalias', categoria: 'calzado'},
];

productos.reduce((acc, p) => {
    acc[p.categoria] ??= [];
    acc[p.categoria].push(p);
    return acc;
}, {}); // va a dar un objeto con las categorías como claves y los productos agrupados en arrays como valores. El resultado sería: { ropa: [{nombre: 'Camiseta', categoria: 'ropa'}, {nombre: 'Pantalón', categoria: 'ropa'}], calzado: [{nombre: 'Zapatos', categoria: 'calzado'}, {nombre: 'Sandalias', categoria: 'calzado'}] }

const agrupados = Object.groupBy(productos, p => p.categoria); // hace exactamente lo mismo pero de forma más sencilla y legible. El resultado sería el mismo: { ropa: [{nombre: 'Camiseta', categoria: 'ropa'}, {nombre: 'Pantalón', categoria: 'ropa'}], calzado: [{nombre: 'Zapatos', categoria: 'calzado'}, {nombre: 'Sandalias', categoria: 'calzado'}] }
console.log(agrupados);

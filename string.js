// .replaceAll() reemplaza todas las ocurrencias de una cadena por otra
const text = "el gato y el gato negro";
const resultado = text.replace(/gato/g, 'perro');
console.log(resultado);

const moderno = text.replaceAll('gato', 'perro');
console.log(moderno);

// .trimStart() y trimEnd()

const text2 = 'hola mundo  ';

const result2 = text2.trim();
const result3 = text2.trimStart();
const result4 = text2.trimEnd();

console.log(result2);
console.log(result3);
console.log(result4);


//padStart() y padEnd()

console.log(String(7).padStart(2, '0'));
console.log(String(42).padStart(5, '0'));

const time = (h,m) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

console.log(time(9, 5));

// String.raw... 
console.log("Normal:");
console.log('hola\nmundo');
console.log("Raw:");
console.log(String.raw`C:User/paloma/Desktop`); // por ejemplo rutas de Windows
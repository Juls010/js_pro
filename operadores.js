// opcional chaining (?.)
/*const user = {};

console.log(user?.profile?.email); // undefined

if(user && user.profile){
    console.log(user.profile.email);
}
user && user.profile && user.profile.email;
const pedido = {
    cliente: {
        nombreUsu: "Juan"
    }
};
*/

console.log(pedido.cliente?.nombreUsu); // "Juan"

// nussing coalescing (??)
const cantidad = 0;
const resultado = cantidad ?? 10;

console.log(resultado);

const usuaria = {
    nombreusu: "",
}

const nombreUsuaria = usuaria.nombreusu ?? "Desconocida";

console.log(nombreUsuaria);

// logical assignment (&&=, ||=, ??=)
// ||= asigna un valor si la variable es falsy

let color = "";
color ||= "Desconocido";

if (!color){
    color = "Desconocido";
}

let puntos = 0;
puntos ||= 100; 
console.log(puntos);


//??= asigna un valor si la variable es null o undefined

let edad;
edad ??= 18;
console.log(edad);

if (edad === null || edad === undefined){
    edad = 18;
}

let punTos = 0;
punTos ??= 100;
console.log(punTos); // 0, porque 0 no es null ni undelined, es un valor falsy pero no null ni undefined


let config = {
    tema: null
};

config.tema ??= "claro";


// &&= asigna un valor si la variable es truthy
// falsy: false, 0, "", null, undefined, NaN, -0
let activo = true;
activo &&= false;
console.log(activo); // false

let usuariA = null;
usuariA &&= {nombre: "Pepa"};   
console.log(usuariA); // null, porque usuariA es null, no se asigna el nuevo valor


// ||= si está vacío reemplaza
// ??= si no existe reemplaza
// &&= si es verdadero reemplaza

let cantidaD = 0;
cantidaD ||= 10; // cantidaD sigue siendo 0, porque 0 es falsy, entonces se asigna 10
cantidaD ??= 20; // cantidaD sigue siendo 0, porque 0 no es null ni undefined, entonces no se asigna 20


//ejemplo:

let user = {
    name: "",
    age: 0,
    active : true
};

user.name ||= "Guess"; // user.name sigue siendo "", porque "" es falsy, entonces se asigna "Desconocido"
user.age ??= 18; // user.age sigue siendo 0, porque 0 no es null ni undefined, entonces no se asigna 18
user.active &&= false; // user.active se asigna a false, porque user.active es true, entonces se asigna false

console.log(user); // {name: "Guess", age: 0, active: false}    
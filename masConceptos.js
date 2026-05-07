// structureClone() adios al JSON.parse

// JSON.parse(JSON.stringify(obj));
// no soporta date, map,, set, undefined

// structuredClone(obj);
// soporta date, map, set, undefined, arrayBuffer

const original = {
    nombre : "Sara",
    fecha : new Date(),
    tags : ['JS', 'web'],
}


const copia = structuredClone(original);
copia.nombre = 'Luis';
copia.tags.push('react');

console.log(original.nombre);
console.log(original.tags);
console.log(copia);

// Promise.allSettled() y Promise.all

const resultados = await Promise.allSettled([
    fetch('/api/usuaria'),
    fetch('/api/pedidos'),
    fetch('/api/notificaciones'),
]);

resultados.forEach(r => {
    if(r.status === 'fulfilled'){
        console.log(`Okey!`, r.value);
    }else {
        console.warn('Error', r.reason);
    }
}); 
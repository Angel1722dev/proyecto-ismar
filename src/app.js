const saludo = "hola mundo";
console.log(saludo);

const sumar = (v1, v2) => {
  const result = v1 + v2;
  return result;
};

const mostrar = sumar(1, 10);
//console.log(mostrar);

const objeto = {
  nombre: "angel",
  apellido: "Briceño",
  edad: "39",
  nacionalidad: "venezolana",
  suma: sumar(5, 10),
};

const arreglo = [sumar(10, 10), saludo, objeto, 1, 2, 3, 4, 5, 6];

const objeto1 = {
  arreglo,
};
console.log(objeto1);

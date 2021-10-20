import { Punto } from "./Punto";

let punto1 = new Punto(2,6);
let punto2 = new Punto(-7,3);
let punto3 = new Punto(-3,-5);
let punto4 = new Punto(4,-7);
let origen = new Punto(0,0);
let arrayPuntos : Punto[] = [punto1, punto2, punto3, punto4];

console.log("Puntos:")
console.log(punto1.toString());
console.log(punto2.toString());
console.log(punto3.toString());
console.log(punto4.toString());

console.log("Distancia al Origen (0,0)");
console.log(punto1.distanciaAlOrigen());
console.log(punto2.distanciaAlOrigen());
console.log(punto3.distanciaAlOrigen());
console.log(punto4.distanciaAlOrigen());

console.log("Distancia entre dos puntos:");
console.log(origen.calcularDistancia(punto1));
console.log(origen.calcularDistancia(punto2));
console.log(origen.calcularDistancia(punto3));
console.log(origen.calcularDistancia(punto4));

console.log("Calcular Cuadrante:")
console.log("Punto 1 está en el cuadrante ",punto1.calcularCuadrante());
console.log("Punto 2 está en el cuadrante ",punto2.calcularCuadrante());
console.log("Punto 3 está en el cuadrante ",punto3.calcularCuadrante());
console.log("Punto 4 está en el cuadrante ",punto4.calcularCuadrante());
console.log("Origen está en el cuadrante ",origen.calcularCuadrante());

console.log(origen.calcularMasCercano(arrayPuntos));


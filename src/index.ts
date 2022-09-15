import "./styles.css";

let numeroIngresado : number;
let numeroMin: number = 0;
let numeroMax: number = 0;
let numeroProm: number = 0;
let totalNums: number = 0;
let sumaNums: number = 0;

while (numeroIngresado !==0) {
  totalNums++;
  numeroIngresado = Number(prompt("Ingrese numero"));
    if (numeroIngresado > numeroMax) {
    numeroMax = numeroIngresado;
    }
    if (numeroIngresado < numeroMin) {
    numeroMin = numeroIngresado;
    }
  //sumaNums = ((Number(sumaNums) + Number(numeroIngresado))
  sumaNums += numeroIngresado;
}
);

console.log("Suma Total " + sumaNums);
console.log("Total numeros ingresados " + (totalNums - 1));
console.log(numeroMax);
console.log(numeroMin);


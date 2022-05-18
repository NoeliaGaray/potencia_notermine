let base : number = 0
let exponente : number = 0;

base = Number(prompt("Ingrese el número base:"));
exponente = Number(prompt("Ingrese el exponente, recuerde debe ser un número mayor o igual a 0:"));

function calcularPotencia (base:number,exponente:number):number{
  for(let i: number = exponente; i>=base; i++){
    i = base * i;
  }
  // console.log("el resultado de la potencia es:", calcularPotencia(base,exponente));
  // return(base*i);
} 
console.log("el resultado de la potencia es:", calcularPotencia(base,exponente));

"use strict";
// https://airtable.com/shrl4hERs4qjZkGCS

function BinarioADecimal(num) {
  // Binario a decimal
  // 1010
  // array = [1,0,1,0]
  // 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0
  // 8 + 0 + 2 + 0
  // 10

  // opcion 1
  // let array = Array.from(String(num));

  // array.reverse();

  // let suma = 0;

  // for (let i = 0; i < array.length; i++){
  //    let x = Number(array[i]);
  //    // suma = suma +
  //    // suma += x * Math.pow(2, i)
  //    console.log("i", i);
  //    suma += x * 2 ** i;
  // }

  // opcion 2
  // let suma = 0;

  // for (let i = 0; i < num.length; i++) {
  //    let potencia = num.length - 1 - i;
  //    console.log("potencia", potencia);
  //    suma = suma + num[i] * 2 ** potencia;
  // }
  // return suma;

  // opcion 3

  // console.log('parseInt(num, 2)', parseInt(num, 2));
  return parseInt(num, 2);
}

function DecimalABinario(num) {
  // Decimal a binario
  // 10
  // 10/2 = 5 y sobra 0
  // 5/2 = 2 y sobra 1
  // 2/2 = 1 y sobra 0
  // 1/2 = 0 y sobra 1
  // 1010

  // Opcion 1
  // let array = [];

  // while (num > 0) {
  //    let resto = num % 2;
  //    array.unshift(resto);
  //    num = Math.floor(num / 2);
  // }

  // return array.join("");

  // opcion 2
  // let binario = '00';

  // for (let i = num; i > 0; i = Math.floor(i / 2)) {
  //    console.log('binario', binario);
  //    console.log('completo', (i % 2) + binario);
  //    binario = (i % 2) + binario;
  // }

  // return binario;

  // opcion 3

  // se utiliza para convertir un número num en su representación de cadena en base 2 en este caso
  // console.log('octal', num.toString(8));
  // console.log('num.toString(2)', num.toString(2));
  return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

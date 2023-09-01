'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  if (typeof num !== 'number') return 'Debo ser invocado con un número';

  // opcion 1
  let array = [1];
  let primo = 2;

  while (num !== 1){
    if (num % primo === 0){
      array.push(primo);
      num = num / primo;
    } else {
      primo++;
    }
  }

  return array;

  // opcion 2
  // let factors = [1];
  // for (let i = 2; i <= num; i++) {
  //   while (num % i === 0) {
  //     factors.push(i);
  //     num /= i;
  //   }
  // }
  // return factors;

  // opcion 3 no es recomendable
  // let result = [1]
  // let primos = [2, 3,]
  // let division = num

  // for (let primo of primos) {
  //   while (division % primo === 0) {
  //     result.push(primo)
  //     division = Math.floor(division / primo)
  //   }
  // }
  // if (division > 1) {
  //   result.push(division)
  // }
  // return result

}

// https://blog.pleets.org/article/es/algoritmo-de-ordenamiento-de-burbuja
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Option 1
  for (let i = 0; i < array.length; i++) {
    for (let y = i +1 ; y < array.length; y++) {
      if (array[i] > array[y]){
        let temporal = array[i]
        array[i] = array[y]
        array[y] = temporal
      }
    }    
  }

  // Option 2
  // for (let i = array.length; i > 1; i--) {
  //   for (let j = 0; j < i; j++) {
  //     if (array[j] > array[j + 1]) {
  //       let temp = array[j];
  //       array[j] = array[j + 1];
  //       array[j + 1] = temp;
  //     }
  //   }
  // }

  // Option 3

  // let cambio = true;

  // while (cambio) {
  //   cambio = false;
  //   //              0 < 3 
  //   for (let i = 0; i < array.length - 1; i++) {//1
  //     if (array[i] > array[i + 1]) {//5>9
  //       let temp = array[i];
  //       array[i] = array[i + 1];//2
  //       array[i + 1] = temp;//

  //       cambio = true;//
  //     }
  //   }
  // }


  // Option 4
  // let _arraySwapped = false;
  // let _indexArrayLength = array.length;
  // let _indexArray = 0;

  // do {
  //   for (let i = 0; i < _indexArrayLength; i++) {
  //     if (array[i] > array[i + 1]) {
  //       let aux = array[i + 1];
  //       array[i + 1] = array[i]
  //       array[i] = aux;
  //       console.log(array)
  //       _arraySwapped = true;
  //     }
  //     else
  //       _arraySwapped = false;
  //   }
  //   _indexArray++;
  //   console.log(_indexArray)
  // } while (_arraySwapped || _indexArray < _indexArrayLength - 1);

  return array;
}

// https://es.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // opcion 1
  // for (let i = 1; i < array.length; i++) {
  //   let j = i;
  //   while (j > 0 && array[j] < array[j - 1]) {
  //     let temp = array[j];
  //     array[j] = array[j - 1];
  //     array[j - 1] = temp;
  //     j--;
  //   }
  // }

  // opcion 2
  // for (let i = 1; i < array.length; i++) {
  //   let j = i - 1;
  //   let current = array[i];
  //   while (j >= 0 && current < array[j]) {
  //     array[j + 1] = array[j];
  //     j--
  //   }
  //   array[j + 1] = current;
  // }

  // opcion 3
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array


}

// https://es.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/selection-sort-pseudocode
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // opcion 1
  // for (let i = 0; i < array.length; i++) {
  //   let Index = i;
  //   for (let j = i + 1; j < array.length; j++) {
  //     if (array[j] < array[Index]) {
  //       Index = j;
  //     }
  //   }
  //   let temp = array[i];
  //   array[i] = array[Index];
  //   array[Index] = temp;
  // }

  // opcion 2
  let arr = array.slice()
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

    /*let temp=array[i]
    array[i]=array[minIndex]
    array[minIndex]=temp*/
  }
  
  return arr;

  // opcion 3
  // for (let i = 0; i < array.length - 1; i++) {
  //   let pos = i + 1;
  //   for (let j = pos + 1; j < array.length; j++) {
  //     if (array[j] < array[pos]) {
  //       pos = j;
  //     }
  //   }
  //   if (array[pos] < array[i]) {
  //     let temp = array[pos];
  //     array[pos] = array[i];
  //     array[i] = temp;
  //   }
  // }

  // opcion 4
  // for (var i = 0; i < array.length; i++) {
  //   for (var j = i + 1; j < array.length; j++) {
  //     while (array[j] < array[i]) {
  //       var minimo = array[j];
  //       var provicional = array[i];
  //       array[i] = minimo;
  //       array[j] = provicional;
  //     }
  //   }
  // }

  // return array;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

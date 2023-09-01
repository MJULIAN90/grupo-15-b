'use strict'
// No cambies los nombres de las funciones.

// Encuenta
// https://airtable.com/shrRbVwOfluNnbHi4


// http://lwh.free.fr/pages/algo/tri/tri_rapide_es.html
function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // base 
  console.log('array', array);
  if (array.length <= 1) {
    return array;
  };

  // pivot
  let pivot = array.pop();
  let left = [];
  let right = [];
  let aux = [];

  // opcion 1
  while(array.length) {
    if (array[0] <= pivot) {
      left.push(array.shift());
    } else {
      right.push(array.shift());
    }
  };

  // opcion 2
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] <= pivot) {
  //     left.push(array[i]);
  //   } else {
  //     right.push(array[i]);
  //   }
  // };


  // Forma spread operator
  // return [...quickSort(left), pivot, ...quickSort(right)];

  // Forma concat
  return aux.concat(quickSort(left), pivot, quickSort(right));
}

// https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort
// https://www.youtube.com/watch?v=55d8cAK9oE0
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // base
  if (array.length <= 1) {
    return array;
  }

  // Opcion 1
  // let middle = Math.floor(array.length / 2);
  // let left = array.slice(0, middle);
  // let right = array.slice(middle);

  // return merge(mergeSort(left), mergeSort(right));

  // // Creación de la función merge toma los array y los ordena en uno solo array
  // function merge(arrayLeft, arrayRigth) {
  //   let arrOrdenado = [];
  //   let indexLeft = 0;
  //   let indexRigth = 0;

  //   while (indexLeft < arrayLeft.length && indexRigth < arrayRigth.length) {
  //     if (arrayLeft[indexLeft] < arrayRigth[indexRigth]) {
  //       arrOrdenado.push(arrayLeft[indexLeft]);
  //       indexLeft++;
  //     } else {
  //       arrOrdenado.push(arrayRigth[indexRigth]);
  //       indexRigth++
  //     }
  //   }
  //   while (indexLeft < arrayLeft.length) {
  //     arrOrdenado.push(arrayLeft[indexLeft])
  //     indexLeft++;
  //   }
  //   while (indexRigth < arrayRigth.length) {
  //     arrOrdenado.push(arrayRigth[indexRigth])
  //     indexRigth++;
  //   }
  //   return arrOrdenado;
  // }

  // Opcion 2
  if (array.length <= 1) return array;
  // Array.length === 1 && array;

  console.log('array', array);

  let mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let rigth = array.slice(mitad);

  const result = [];

  left = mergeSort(left);
  rigth = mergeSort(rigth);

  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      result.push(left.shift());

    }
    else result.push(rigth.shift());
  }

  console.log('left' , left);
  console.log('rigth' , rigth);
  console.log('result' , result);
  console.log('------------------------');
  return result.concat(left, rigth);

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

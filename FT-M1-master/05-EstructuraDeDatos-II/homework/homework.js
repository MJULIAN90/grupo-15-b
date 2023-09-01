'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
    this.head = null;
    this.length = 0;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
  const node = new Node(value);
  let current = this.head;

  if (!current) {
    this.head = node;
    this.length++;
    return node;
  }

  while (current.next) {
    current = current.next;
  }

  current.next = node;
  this.length++;

  return node;

};
LinkedList.prototype.remove = function () {
  let current = this.head;
  let pre = null;

  if (!current) {
    return null;
  }

  if (!current.next) {
    this.head = null;
    this.length--;
    return current.value;
  }

  // opcion 1
  // while (current.next.next) {
  //   current = current.next;
  // }

  // const last = current.next;
  // current.next = null;
  // this.length--;

  // return last.value;

  // opcion 2

  while(current.next){
    pre = current;
    current = current.next;
  }

  pre.next = null;
  this.length--;

  return current.value;
};

LinkedList.prototype.search = function (param) {
  if (!this.head) {
    return null;
  }

  let current = this.head;

  // Opcion 1
  // if (typeof param === 'function') {
  //   while (current) {
  //     if (param(current.value)) {
  //       return current.value;
  //     }
  //     current = current.next;
  //   }
  // } else {
  //   while (current) {
  //     if (current.value === param) {
  //       return current.value;
  //     }
  //     current = current.next;
  //   }
  // }

  // Opcion 2
  while (current !== null) {
    if ((typeof param === 'function' && param(current.value)) || current.value === param) {
      return current.value
    }
    current = current.next
  }

  return null
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

// Option 1
HashTable.prototype.hash = function (input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += input.charCodeAt(i);
  }
  return total % this.numBuckets;
};

// Opcion 2
// HashTable.prototype.hash = function (_keyParm) {
//   let hash = 0;
//   let _lengthKey = _keyParm.length;
//   for (let i = 0; i < _lengthKey; i++) {
//     hash += _keyParm.charCodeAt(i) + i;
//   }
//   return hash % this.numBuckets;
// }

// Opcion 1
HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') {
    throw new TypeError('Keys must be strings');
  }

  let index = this.hash(key);

  if (!this.buckets[index]) {
    this.buckets[index] = {}
  }

  this.buckets[index][key] = value;
};

// Opcion 2 pablo
// HashTable.prototype.set = function (key, value) {
//   if (typeof key !== "string") {
//     throw new TypeError("Keys must be strings");
//   }

//   const index = this.hash(key);
//   if (!this.buckets[index]) {
//     this.buckets[index] = [[key, value]];
//   } else {
//     let found = false;
//     for (let i = 0; i < this.buckets[index].length; i++) {
//       if (this.buckets[index][i][0] === key) {
//         this.buckets[index][i][1] = value;
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       this.buckets[index].push([key, value]);
//     }
//   }
// };

// opcion 1
HashTable.prototype.get = function (key) {
  const indice = this.hash(key)
  return this.buckets[indice][key]
}

// Opcion 2
// HashTable.prototype.get = function (key) {
//   const indice = this.hash(key)
//   const bucket = this.buckets[indice]
//   return bucket && bucket[key]
// }


// Opcion 3 pablo
// HashTable.prototype.get = function (key) {
//   const index = this.hash(key);
//   if (!this.buckets[index]) return undefined;
//   for (let i = 0; i < this.buckets[index].length; i++) {
//     if (this.buckets[index][i][0] === key) {
//       return this.buckets[index][i][1];
//     }
//   }
// };

// opcion 1
HashTable.prototype.hasKey = function (key) {
  const index = this.hash(key);

  return this.buckets[index].hasOwnProperty(key);
};

// Opcion 2 pablo
// HashTable.prototype.hasKey = function (key) {
//   const index = this.hash(key);
//   if (!this.buckets[index]) return false;
//   for (let i = 0; i < this.buckets[index].length; i++) {
//     if (this.buckets[index][i][0] === key) {
//       return true;
//     }
//   }
//   return false;
// };

// opcion 3
HashTable.prototype.hasKey = function (key) {
  const indice = this.hash(key)
  console.log({key});
  console.log('1', this.buckets[indice][key]);
  console.log('2', !this.buckets[indice][key]);
  console.log('3', !!this.buckets[indice][key]);
  console.log('---------------------------');
  return !!this.buckets[indice] && !!this.buckets[indice][key]
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};

"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.length = 1;
}

// opcion 1
BinarySearchTree.prototype.size = function () {
  return this.length;
};

// opcion 2
// BinarySearchTree.prototype.size = function () {
//    let length = 1;
//    if (this.left) length += this.left.size();
//    if (this.right) length += this.right.size();
//    return length;
// }

// opcion 3 sin arrow function y ternarios
// BinarySearchTree.prototype.size = function () {
//    return 1 + (this.left ? this.left.size() : 0) + (this.right ? this.right.size() : 0)
// }
// opcion 3 sin arrow function y ternarios
// BinarySearchTree.prototype.size =  () => 1 + (this.left ? this.left.size() : 0) + (this.right ? this.right.size() : 0)

// opcion 1
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
  this.length++;
};

// opcion 1
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true; //
  //
  if (this.left && this.left.contains(value)) return true;
  //
  if (this.right && this.right.contains(value)) return true;

  return false;
};

// opcion 2
// BinarySearchTree.prototype.contains = function (value) {
//    if (value !== this.value) {
//       return !!((this.right && this.right.contains(value)) || (this.left && this.left.contains(value))      )
//    }
//    return true
// }



BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
// Forma de diccionario
   const cases = {
      "post-order": (left, right, cb, value) => {
         left && left.depthFirstForEach(cb, "post-order");
         right && right.depthFirstForEach(cb, "post-order");
         cb(value);
      },
      "pre-order": (left, right, cb, value) => {
         cb(value);
         left && left.depthFirstForEach(cb, "pre-order");
         right && right.depthFirstForEach(cb, "pre-order");
      },
      "in-order": (left, right, cb, value) => {
         left && left.depthFirstForEach(cb, "in-order");
         cb(value);
         right && right.depthFirstForEach(cb, "in-order");
      },
   }
   cases[order || "in-order"](this.left, this.right, cb, this.value)

// opcion 1 con if
// post-order (izq, der, raiz)
//   if (order === "post-order") {
//     this.left && this.left.depthFirstForEach(cb, order);
//     // if (this.left) this.left.depthFirstForEach(cb, order);

//     this.right && this.right.depthFirstForEach(cb, order);
//     // if (this.right) this.right.depthFirstForEach(cb, order);

//     cb(this.value);
//   }

  // pre-order (raiz, izq, der)
//   if (order === "pre-order") {
//     cb(this.value);

//     this.left && this.left.depthFirstForEach(cb, order);
//     // if (this.left) this.left.depthFirstForEach(cb, order);

//     this.right && this.right.depthFirstForEach(cb, order);
//     // if (this.right) this.right.depthFirstForEach(cb, order);
//   }

  // in-order (izq, raiz, der)
//   if (order === "in-order" || !order) {
//     this.left && this.left.depthFirstForEach(cb, order);
//     // if (this.left) this.left.depthFirstForEach(cb, order);

//     cb(this.value);

//     this.right && this.right.depthFirstForEach(cb, order);
//     // if (this.right) this.right.depthFirstForEach(cb, order);
//   }

  // this.left && this.left.depthFirstForEach(cb, order);
  // // if (this.left) this.left.depthFirstForEach(cb, order);

  // cb(this.value);

  // this.right && this.right.depthFirstForEach(cb, order);
  // // if (this.right) this.right.depthFirstForEach(cb, order);

//   opcion 2 con switch
//   switch (order) {
//     case "post-order":
//       this.left && this.left.depthFirstForEach(cb, order);
//       // if (this.left) this.left.depthFirstForEach(cb, order);

//       this.right && this.right.depthFirstForEach(cb, order);
//       // if (this.right) this.right.depthFirstForEach(cb, order);

//       cb(this.value);
//       break;
//     case "pre-order":
//       cb(this.value);

//       this.left && this.left.depthFirstForEach(cb, order);
//       // if (this.left) this.left.depthFirstForEach(cb, order);

//       this.right && this.right.depthFirstForEach(cb, order);
//     // if (this.right) this.right.depthFirstForEach(cb, order);
//       break;
//     default:
//       this.left && this.left.depthFirstForEach(cb, order);
//       // if (this.left) this.left.depthFirstForEach(cb, order);

//       cb(this.value);

//       this.right && this.right.depthFirstForEach(cb, order);
//     // if (this.right) this.right.depthFirstForEach(cb, order);
//       break;
//   }

};



// opcion 1
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {//

   cb(this.value);
   if (this.left) array.push(this.left);
   if (this.right) array.push(this.right);
   //                  
   if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
}

// opcion 2
BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
   let queue = [];
   // console.log('this', this);
   queue.push(this);
   // console.log('array', queue);
   while (queue.length > 0) {
      let current = queue.shift();
      cb(current.value);
      console.log('current', current);
      if (current.left) {
         console.log('current.left', current.left);
         queue.push(current.left);
      }
      if (current.right) {
         console.log('current.right', current.right);
         queue.push(current.right);
      }
   }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

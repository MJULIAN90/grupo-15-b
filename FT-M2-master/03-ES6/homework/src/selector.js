var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  // opcion 1
  // let traverse = function (element) {
  //   // Verificar si el elemento coincide con matchFunc
  //   if (matchFunc(element)) {
  //     resultSet.push(element);
  //   }

  //   // Recorrer los hijos del elemento actual
  //   let children = element.children;
  //   for (let i = 0; i < children.length; i++) {
  //     traverse(children[i]);
  //   }
  // };

  // // Comenzar el recorrido del árbol del DOM
  // traverse(startEl);

  // // Devolver el conjunto de resultados
  // return resultSet;

  // opcion 2
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) {
    // resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
    resultSet.push(...traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  }

  return resultSet;

  // opcion 3 no funciono
  // if (matchFunc(startEl)) {
  //   resultSet.push(startEl);
  // }

  // startEl.children.forEach(element => {
  //   resultSet.push(...traverseDomAndCollectElements(matchFunc, element));
  // });

  // return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí

  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';

  // if (selector.indexOf('.') !== -1) return 'tag.class';
  if (selector.includes('.')) return 'tag.class';

  return 'tag';

  // opcion 2
  // if (/^#.+/.test(selector)) {
  //   return 'id'
  // } else if (/^\..+/.test(selector)) {
  //   return 'class'
  // } else if (/.+\..+/.test(selector)) {
  //   return 'tag.class'
  // } else {
  //   return 'tag'
  // }

  // opcion 3
  //   if (selector.startsWith("#")) {
  //     return "id";
  //   }

  //   // Verificar si el selector contiene un '.'
    // if (selector.includes(".")) {
    //   // Verificar si el selector comienza con una etiqueta
    //   if (selector.indexOf(".") > 0) {
    //     return "tag.class";
    //   }
    //   return "class";
    // }

  //   return "tag";

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (ele) => {return "#"+ele.id === selector}
    // matchFunction = ele => "+"+ele.id === selector
    // matchFunction = ele => `#${ele.id}` === selector

  } else if (selectorType === "class") {
    // opcion 1
    matchFunction = (element) => element.classList.contains(selector.slice(1));

    // opcion 2
    // matchFunction = (x) => {
    //   let arr = x.classList
    //   for (let i = 0; i < arr.length; i++) {
    //     if ("." + arr[i] === selector) {
    //       return true
    //     }
    //   }
    //   return false
    // }
  } else if (selectorType === "tag.class") {
    // forma larga
    // let tag = selector.split(".")[0];
    // let className = selector.split(".")[1];

    // forma con destructuring
    let [tag, className] = selector.split(".")
    matchFunction = (element) => 
      element.tagName.toLowerCase() === tag && element.classList.contains(className);
  } else if (selectorType === "tag") {
    matchFunction = (element) => element.tagName.toLowerCase() === selector.toLowerCase();
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

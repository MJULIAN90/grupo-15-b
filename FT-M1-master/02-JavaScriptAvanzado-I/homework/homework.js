// # Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná que será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// ```javascript
// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a= 8, b, c) {
//    x = 10;
//    console.log(x);  // 10 ok
//    console.log(a);  // 8 ok 
//    var f = function (a, b, c) {
//       b = a;
//       console.log('quien', b); //8 ok  - 9 no
//       b = c;
//       var x = 5;
//    };
//    f(a= 8 , b, c);
//    console.log(b); // 9
// };

// c(8, 9, 10);
// console.log(b); //10
// console.log(x); //1 - error
// ```

//   ```javascript
// console.log(bar); //undefined - 1
// console.log(baz); //undefined - error - no defined
// foo();
// function foo() {
//    console.log('Hola!'); //hola
// }
// var bar = 1;
// baz = 2;
// ```

//   ```javascript
// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor);
// ```

//   ```javascript
// var instructor = 'Tony';
// console.log(instructor);//tony
// // IIFE
// (function () {
//    if (true) {
//     console.log(instructor); // TONY - UNDEFINED
//     var instructor = 'Franco';
//     console.log(instructor); //franco
//    }
// })();
// console.log(instructor); //TONY -  FRANCO
// ```

//   ```javascript
// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor); //the flash
//    console.log(pm); //reverse flash
// }
// console.log(instructor); // TONY - THE FLASH
// console.log(pm); //FRANCO - REVERSE FLASH
// ```

// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones ?:

//   ```javascript
// 6 / "3"
// console.log(6 / "3"); // 2
// "2" * "3"
// console.log("2" * "3"); // 6
// 4 + 5 + "px"
// console.log(4 + 5 + "px"); // 9px
// console.log("px" + 4 + 5 ); // px45
// "$" + 4 + 5
// console.log("$" + 4 + 5); // $45
// console.log(3 + 7 + "$" + 4 + 5); // 10$45
// "4" - 2
// console.log("4" - 2); // 2
// "4px" - 2
// console.log("4px" - 2); // NaN
// 7 / 0
// console.log(7 / 0); // Infinity
// {}[0]
// console.log({}[0]); // undefined
// console.log([0]); // 0
// parseInt("09")
// console.log(parseInt("09")); // 9
// console.log(parseInt("09A")); // NAN - 9
// console.log(parseInt("09A5")); // 9
// console.log(Number("09A5")); // NAN
// 5 && 2
// console.log(5 && 2); // 2
// 2 && 5
// console.log(2 && 5); // 5
// console.log(2 && 5 && 0 && 2); // 0 - 2
// console.log(2 && 5 && false && 2); // 0 - 2
// 5 || 0
// console.log(5 || 0); // 5
// 0 || 5
// console.log(0 || 5); // 5
// [3]+[3]-[10]
// console.log([3]+[3]-[10]); // 23
// 3>2>1
// console.log(3>2>1); // false
// [] == ![]
// console.log([] == ![]); // true
// console.log([] == []) ; // true - false
// console.log([] === []); // true - false
// ```

//   > Si te quedó alguna duda repasá con[este artículo](http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//       ```javascript
// function test() {
//    console.log(a); // undefined
//    console.log(foo()); // 2 

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }
// test();
// ```

//     Y el de este código?:

//       ```javascript
// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }

// getFood(false);
// ```

// ### This

// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

//       ```javascript
// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//         console.log({this: this});
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname()); // Aurelio De Rosa

// // aca se pierde el this de la funcion porque no la invocamos y esta tomando el contexto global
// var test = obj.prop.getFullname;
// // aca persiste el this de la funcion porque la invocamos en el contexto de obj
// var test2 = obj.prop.getFullname();
// console.log(test2); // Aurelio De Rosa
// console.log(test()); // undefined - Juan Perez
// ```

// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// ```javascript
// function printing() {
//    console.log(1);// 1
//    setTimeout(function () {
//       console.log(2);
//    }, 1000);
//    setTimeout(function () {
//       console.log(3);
//    }, 0);
//    console.log(4);
// }

// printing();
// ```
// 1 4 3 2 

// </br >

//   ---

// ## **✅ FEEDBACK **

// ### Usa este[** formulario **](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.

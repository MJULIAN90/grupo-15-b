var a = {
  hola: 'hola'
}

b = '2'

const pepito = 55

// El console.log con la , imprime objetos es recomendable usar esta forma
console.log('con ,');
console.log('hola a ' , a); // { hola: 'hola' }
console.log('hola b ' , b); // 2

// El console.log con el + no imprime objetos solo datos que sean primitivos
console.log('con +');
console.log('hola a ' + a);
console.log('hola b ' + b);

// El console.log imprime con un text de igual nombre que la variable y el valor de la variable
console.log('con {}');
console.log({a});
console.log({b});
console.log({pepito});


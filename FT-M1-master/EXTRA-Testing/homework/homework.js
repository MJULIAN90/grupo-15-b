const layout = [
  [
    { type: 'VIP', booked: false },
    { type: 'VIP', booked: true },
    { type: 'VIP', booked: true },
    { type: 'VIP', booked: false },
  ],
  [
    { type: 'NORMAL', booked: false },
    { type: 'VIP', booked: true },
    { type: 'VIP', booked: false },
    { type: 'NORMAL', booked: false },
  ],
  [
    { type: 'NORMAL', booked: false },
    { type: 'NORMAL', booked: true },
    { type: 'NORMAL', booked: true },
    { type: 'NORMAL', booked: false },
  ],
  [
    { type: 'ECONOMIC', booked: true },
    { type: 'NORMAL', booked: true },
    { type: 'NORMAL', booked: true },
    { type: 'ECONOMIC', booked: false },
  ],
  [
    { type: 'ECONOMIC', booked: false },
    { type: 'ECONOMIC', booked: true },
    { type: 'ECONOMIC', booked: false },
    { type: 'ECONOMIC', booked: false },
  ],
];

function checkSeatStatus(row, number) {
  
  if (typeof row !== 'string') {
    throw new TypeError('First parameter must be a string.')
  }
  
  if (typeof number !== 'number') {
    throw new TypeError('Second parameter is not a number.')
  }

  // Opcion 1 para buscar dentro de la matriz
  // const firstPosition = getRowNumber(row)
  // const findPositionLaout = layout[firstPosition]
  // const findSeat = findPositionLaout[number].booked

  // return findSeat

  // Opcion 2 para buscar dentro de la matriz (mas corta)

  // return layout[getRowNumber(row)][number].booked

  const firstPosition = getRowNumber(row)
  const findPositionLaout = layout[firstPosition]
  const findSeat = findPositionLaout[number].booked

  return findSeat
}

function book (row, number) {

  if (checkSeatStatus(row, number)) {
    return `Seat in ${row}${number} is already booked`;
    // return 'The seat '+ row + number + ' is booked';
    // return 'The seat ' , row , number , ' is booked';
  } else {
    layout[getRowNumber(row)][number].booked = true;
    return `Seat in ${row}${number} successfully booked`;
    // return 'The seat '+ row + number + ' is free';
    // return 'The seat ' , row , number , ' is free';
  }
}
function getRowNumber  (letter) {
  if (letter.length !== 1) {
    throw new TypeError('First parameter must be a string the only one letter.')
  }
  // const rowIndex = {A: 0, B: 1, C: 2, D: 3, E: 4}
  // return rowIndex[letter]
  return letter.charCodeAt(0) - 65
}

function summaryLayout () {
  let totalSeats = 0
  let totalBooked = 0
  let totalFree = 0

  for (let x = 0; x < layout.length; x++) {
    for (let y = 0; y < layout[x].length; y++) {

      if (layout[x][y].booked) {
        totalBooked++
      } else {
        totalFree++
      }
      totalSeats++

   }
  }

  // Es lo mismo que lo de abajo
  // return {
  //   totalSeats: totalSeats,
  //   totalBooked: totalBooked,
  //   totalFree: totalFree,
  // }

  return {
    totalSeats ,
    totalBooked,
    totalFree,
  }
}

console.log(summaryLayout());


module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  summaryLayout,
}
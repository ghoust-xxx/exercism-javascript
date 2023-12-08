// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  var cnt = 0;
  var i = 0;
  while (cnt < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case 'small':
        cnt += 6;
        break;
      case 'medium':
        cnt += 8;
        break;
      case 'large':
        cnt += 10;
        break;
    }
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  var res = [];
  var i = 0;
  var time = 0;
  while (time < timeLeft && i < orders.length) {
    time += timeToMixJuice(orders[i]);
    i++;
  }
  var idx = 0;
  while (i < orders.length) {
    res[idx] = orders[i];
    i++;
    idx++;
  }
  return res;
}

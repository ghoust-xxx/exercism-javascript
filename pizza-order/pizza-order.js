/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let sum = 0;
  for (let i of extras.concat(pizza)) {
    switch(i) {
      case 'Margherita':
        sum += 7;
        break;
      case 'Caprese':
        sum += 9;
        break
      case 'Formaggio':
        sum += 10;
        break
      case 'ExtraSauce':
        sum++;
        break
      case 'ExtraToppings':
        sum += 2;
        break;
      default:
        sum += 0;
    }
  }
  return sum;
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let sum = 0;
  for (let i of pizzaOrders) {
    sum += pizzaPrice(i.pizza, ...i.extras);
  }
  return sum;
}

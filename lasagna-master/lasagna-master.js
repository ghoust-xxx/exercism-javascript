/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(time) {
  switch (time) {
    case undefined:
      return 'You forgot to set the timer.';
    case 0:
      return 'Lasagna is done.';
    default:
      return 'Not done, please wait.';
  }
}

export function preparationTime(layers, time) {
  if (time === undefined) {
    time = 2;
  }

  return layers.length * time;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let i in layers) {
    switch (layers[i]) {
      case 'noodles':
        noodles += 50;
        break;
      case 'sauce':
        sauce += 0.2;
    }
  }
  return {noodles: noodles, sauce: sauce};
}

export function addSecretIngredient(first, last) {
  last[last.length] = first[first.length - 1];
}

export function scaleRecipe(orig, count) {
  let res = {};
  for (let key in orig) {
    res[key] = orig[key]/2 * count;
  }
  return res;
}
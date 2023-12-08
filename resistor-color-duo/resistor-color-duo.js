export const decodedValue = (vals) => {
  let cols = ['black', 'brown', 'red', 'orange', 'yellow', 'green',
    'blue', 'violet', 'grey', 'white'];
  return cols.indexOf(vals[0]) * 10 + cols.indexOf(vals[1]);
};


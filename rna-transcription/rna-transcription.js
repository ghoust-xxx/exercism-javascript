export const toRna = (input) => {
  return input.split('').map((x) => {
    switch (x) {
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        return '';
    }
  }).join('');
};

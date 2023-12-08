export const gigasecond = (val) => {
  let out = val.getTime() + 10 ** 12;
  return new Date(out);
};

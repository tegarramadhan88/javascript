const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accmulator, currentvalue) => accmulator.concat(currentvalue));

console.log(array1);

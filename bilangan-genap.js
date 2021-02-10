function bilanganGenap() {
  var genap = [];
  for (var i = 1; i < 10; i++)
    if (i % 2 === 0) {
      genap.push(i);
    }
  return genap;
}

console.log(bilanganGenap());

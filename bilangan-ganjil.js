function bilanganGanjil() {
  var ganjil = [];
  for (var i = 1; i < 30; i++) {
    if (i % 2 !== 0) {
      ganjil.push(i);
    }
  }
  return ganjil;
}

console.log(bilanganGanjil());

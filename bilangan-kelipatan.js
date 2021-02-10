function bilanganKelipatan() {
  var kelipatan = [];
  for (var i = 1; i < 50; i++) {
    if (i % 5 == 0) {
      kelipatan.push(i);
    }
  }
  return kelipatan;
}

console.log(bilanganKelipatan());

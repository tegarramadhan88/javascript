for (var i = 0; i <= 20; i = ++i) {
  var modulus = i % 2;
  if ((modulus === 0) & (i > 0)) {
    console.log(i, "Bilangan Genap");
  } else {
    console.log(i);
  }
}

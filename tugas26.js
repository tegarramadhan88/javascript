function arrayTugas() {
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  for (i = 0; i < angka.length; i++) {
    angka1 = angka[i];

    if (isFinite(angka1) == false) {
      console.log("Angka ", angka1, "NOT Infinity");
    } else {
      console.log("Angka ", angka1, "Infinity");
    }
  }
}

arrayTugas();

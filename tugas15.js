function segitigaSiku() {
  var ab = 8;
  var bc = 6;
  var operasi = Math.pow(ab, 2) + Math.pow(bc, 2);
  var ac = Math.sqrt(operasi);

  console.log("Nilai AB : ", ab);
  console.log("Nilai BC : ", bc);
  console.log("Panjang sisi AC dari segitiga siku-siku tersebut adalah ", ac);
}

segitigaSiku();

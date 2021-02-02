function panggilObject() {
  var mobil = {
    type: "sedan",
    harga: 200000000,
    warna: "putih",
    tahun: [2000, 2001, 2002, 2003],
  };
  var motor = {
    type: "yamaha",
    harga: 20000000,
    warna: "hitam",
    tahun: [2000, 2001, 2002, 2003],
  };
  console.log(mobil);
  console.log(mobil.warna);
  console.log(mobil.tahun);
  console.log(mobil.tahun[2]);

  console.log(motor);
  console.log(motor.type);
  console.log(motor.tahun);
  console.log(motor.tahun[3]);
}

panggilObject();

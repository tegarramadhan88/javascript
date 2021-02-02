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

  mobil.harga = 100000000;
  motor.type = "honda";
  console.log(mobil);
  console.log(mobil.harga);

  console.log(motor);
  console.log(motor.type);
}

panggilObject();

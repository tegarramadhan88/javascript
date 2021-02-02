function panggilObject() {
  var mobil = {
    type: "sedan",
    harga: 200000000,
    warna: "putih",
  };
  var motor = {
    type: "yamaha",
    harga: 20000000,
    warna: "hitam",
  };

  mobil.harga = 100000000;
  mobil.tahun = 2008;
  motor.type = "honda";
  motor.tahun = 2010;

  console.log(mobil);
  console.log(mobil.harga);
  console.log(mobil.tahun);

  console.log(motor);
  console.log(motor.type);
  console.log(motor.tahun);
}

panggilObject();

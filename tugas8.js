function panggilObject() {
  var rumah = {
    type: "65/22",
    harga: 500000000,
    warna: "putih",
  };
  console.log(rumah);

  rumah.harga = 400000000;
  rumah.warna = "hijau";

  console.log(rumah);
}

panggilObject();

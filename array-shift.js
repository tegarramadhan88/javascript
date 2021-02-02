function panggilShift() {
  var kota = ["Jakarta", "Bandung", "Semarang", "Makassar", "Surabaya"];
  console.log(kota);
  console.log("=============");

  var kota2 = kota.shift();
  console.log(kota2);

  return kota;
}

console.log(panggilShift());

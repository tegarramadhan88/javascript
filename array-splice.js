function panggilSplice() {
  var kota = ["Jakarta", "Bandung", "Semarang", "Padang"];
  console.log(kota);
  kota.splice(2, 0, "Pekanbaru");
  return kota;
}

console.log(panggilSplice());

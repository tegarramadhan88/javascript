function balikKata(kata) {
  var proses = kata.split("").reverse().join("");
  return proses;
}

console.log(balikKata("Niomic!"));
console.log(balikKata("Javascript"));
console.log(balikKata("Alohahola"));
console.log(balikKata("Jawa_Barat"));

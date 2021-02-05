function strMatch() {
  var kata = "saya pintar memasak nasi goreng";
  console.log(kata.match("pintar"));
  console.log(kata.match("nasi"));
  console.log(kata.match(/nasi/));
}

strMatch();

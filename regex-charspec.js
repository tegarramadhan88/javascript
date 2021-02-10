function panggilRegexp(value) {
  var ambilData = value.match(/ke/g);
  console.log(ambilData);
}

panggilRegexp("Bulan ke 1 sd bulan ke 4");

function panggilRegexp2(value) {
  var ambilData2 = value.match(/[ke]/g);
  console.log(ambilData2);
}

panggilRegexp2("Bulan ke 1 sd bulan ke 4");

function perintahMap() {
  var kota = ["Jakarta", "Medan", "Palembang", "Padang"];
  kota.map(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

perintahMap();

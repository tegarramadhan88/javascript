var angka = [5, 12, 8, 120, 44];

var found = angka.findIndex(function (element) {
  return element > 100;
});

console.log(found);

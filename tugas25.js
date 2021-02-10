var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
function arrayJoin() {
  var angka1 = angka.join(",");
  console.log("Sebelumnya :", angka1);

  var angka2 = angka.sort();
  console.log("Ascending :", angka2.join());

  var angka3 = angka.reverse();
  console.log("Descending :", angka3.join());
}
arrayJoin();

var angka4 = angka.filter((angka) => {
  return angka > 10;
});

console.log("Filter :", angka4.join());

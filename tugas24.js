function arrayJoin() {
  const angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  var angka1 = angka.join(",");
  console.log("Sebelumnya :", angka1);

  var angka2 = angka.sort();
  console.log("Ascending :", angka2.join());

  var angka3 = angka.reverse();
  console.log("Descending :", angka3.join());
}
arrayJoin();

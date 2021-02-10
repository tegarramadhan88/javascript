function tugasForeach() {
  var data = "saya ingin belajar bersama";
  var hasil = data.split(" ");
  var hasil2 = hasil.forEach(function (item, index, array) {
    console.log("item : ", item, "index ke ", index);
    return hasil2;
  });
}

tugasForeach();

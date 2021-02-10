function panggilForeach() {
  var kata = ["a", "b", "c", "d"];
  kata.forEach(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilForeach();

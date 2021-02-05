function panggilUnshift() {
  var data = ["Bandung", "Jakarta", "Semarang", "Cirebon"];
  console.log(data);

  data.unshift("Surabaya", "Tegal");
  return data;
}

console.log(panggilUnshift());

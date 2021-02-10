function FilterParameters() {
  var arr = [
    { negara: "Indonesia", benua: "asia" },
    { negara: "Jerman", benua: "eropa" },
    { negara: "Spanyol", benua: "eropa" },
    { negara: "Korea", benua: "asia" },
    { negara: "Portugal", benua: "eropa" },
    { negara: "Amerika Serikat", benua: "amerika" },
  ];
  var benuaeropa = arr.filter(function (item) {
    return item.benua === "eropa";
  });
  console.log(benuaeropa);
}

FilterParameters();

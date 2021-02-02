function panggilObject() {
  var mahasiswa = {
    nama: "adi",
    umur: "23 Tahun",
    semester: 7,
    Jurusan: "Teknik Informatika",
  };
  for (var x in mahasiswa) {
    console.log(mahasiswa[x]);
  }
}

panggilObject();

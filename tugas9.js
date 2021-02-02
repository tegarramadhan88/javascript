function panggilObject() {
  var penduduk = {
    Nama: "Ilham",
    umur: "25 Tahun",
    jenisKelamin: "Pria",
    Status: "Sudah Menikah",
    Alamat: "Jl. Antapani Lama No. 5",
  };
  for (var i in penduduk) {
    console.log(penduduk[i]);
  }
}

panggilObject();

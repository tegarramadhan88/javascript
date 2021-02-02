function nestedObject() {
  var mahasiswa = {
    nama: "ilham",
    ipk: {
      semester1: 3.5,
      semester2: 3.75,
      semester3: 3.25,
      semester4: 3,
    },
  };
  console.log(mahasiswa.ipk.semester2);
}

nestedObject();

function panggilRegexp() {
  let data = "Belajar Satu Tahun Bersama Niomic";
  let str = new RegExp("Niomic");

  console.log(str.exec(data));
}

panggilRegexp();

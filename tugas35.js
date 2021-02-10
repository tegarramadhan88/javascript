function deretAngka(value) {
  var deret = "";
  for (var i = 1; i < value; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      deret += "NIOMIC ";
    } else if (i % 3 == 0) {
      deret += "NIO ";
    } else if (i % 5 == 0) {
      deret += "MIC ";
    } else {
      deret += i + " ";
    }
  }
  return deret;
}
console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));

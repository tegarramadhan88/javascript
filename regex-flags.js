function flagsRegexp() {
  let data = "abcdefghijklmnopqrstuvwxyz";

  console.log(data.search(/K/));
  console.log(data.search(/K/i));
  console.log(data.search(/K/gi));
}

flagsRegexp();

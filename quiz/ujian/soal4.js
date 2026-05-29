function xo(str) {
  const jumlahX = str.split("").filter((huruf) => huruf === "x").length;
  const jumlahO = str.split("").filter((huruf) => huruf === "o").length;
  return jumlahO === jumlahX;
}
// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true

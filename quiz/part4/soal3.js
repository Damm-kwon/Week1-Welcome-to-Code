let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
let fullSentence = processSentence(name, age, address, hobby);
function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, saya punya hobby yaitu ${hobby}`;
}
console.log(fullSentence);

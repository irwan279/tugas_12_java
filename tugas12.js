function tampil() {
var buah = ['pisang','jeruk','apel','mangga'];
console.log(buah);

var buah2 = buah.pop()
console.log(buah);

buah.shift()
return buah
}

console.log(tampil());

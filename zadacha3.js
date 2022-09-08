var just = 8;
var dust = " ";
for (var i = 0; i < just; i++) {
  for (var x = 0; x < just; x++) {
    if ((x + i) % 2 === 0) {
        dust += " ";
    }else {
        dust += "*";
    }
  }
  dust += "\n";
}
console.log(dust);
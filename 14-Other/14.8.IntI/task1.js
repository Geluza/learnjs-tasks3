let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(function(a, b) {
  console.log(collator.compare(a, b));
});

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
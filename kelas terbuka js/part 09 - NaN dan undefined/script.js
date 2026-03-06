// NaN dan Undefined

// NaN = Not a Number
console.log(`akar dari -1 \t:${Math.sqrt(-1)}`);
console.log(`"Juki" / "Ijaxtz" \t:${"Juki" / "Ijaxtz"}`);
console.log(`"Juki" * "Ijaxtz" \t:${"Juki" * "Ijaxtz"}`);
console.log(`"Juki" + "Ijaxtz" \t:${"Juki" + "Ijaxtz"}`); // ini tidak akan menjadi NaN
console.log(`"Juki" - "Ijaxtz" \t:${"Juki" - "Ijaxtz"}`);

let data = parseInt("123test");
console.log(data); // ini tidak akan menjadi NaN

let data1 = parseInt("test123");
console.log(data1 + 5); // akan tetap menjadi NaN atau NaN tidak bisa di operasi kan

//undefined = dia belum tau nilainya
let a;
console.log(`a = ${a}`); // ini akan menjadi undefined
console.log(Math.sqrt(4));
console.log(console.log("test")); // ini akan menjadi undefined
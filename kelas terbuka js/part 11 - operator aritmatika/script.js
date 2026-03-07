// operator aritmatika

// ekspresi (expression) dan statement

// */+-
// %  <- modulo atau sisa bagi
// ++ <- increment
// -- <- decrement
// ** <- pangkat atau power

let x = 10;
console.log(x + 1);
console.log(x - 1);
console.log(x / 4);
console.log(x * 2);

// aritmatika khusus di javascript
console.log(x % 4); // sisa pembagian
console.log(x ** 2); // ini pangkat

// pemrograman biasa
x = x + 1;
console.log(x);
x = x + 1;
console.log(x);
x++; // ini akan menambahkan x sebanyak 1 kali
x++;
console.log(x);

x = x - 1;
console.log(x);
x--; // ini akan mengurangi x sebanyak 1 kali
console.log(x);

// contoh
let y = 1 + "1";
console.log(y);
y = 1 + parseInt("1");
console.log(y);
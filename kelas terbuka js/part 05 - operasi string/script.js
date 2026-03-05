// operasi string

// 1. mengakses character menggunakan index nya .charAt(index)
let dataString = "abcde";
let dataChar = dataString.charAt(0);
console.log(`character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index ke 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index ke 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index ke 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index ke 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index ke 5 = ${dataChar}`); // ini akan kosong karena character di index ke 5 itu tidak ada

// 2. menyambung string .concat()
let namaDepan = "Juki";
let namaBelakang ="Kece";
let namaLengkap = namaDepan.concat(' ',namaBelakang, ' mantap bang');
console.log(namaLengkap);

// 3. mengambil index nya (yang muncul paling pertama) .indexOf()
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('m'));
console.log(namaLengkap.indexOf('j'));
console.log(namaLengkap.indexOf('J'));

// 4. mengambil character dari index awal sampai akhir .substring(awal, akhir+1) dan index nya juga bisa dari akhir+1 hingga awal
let namaBelakang_5_10 = namaLengkap.substring(5,10)
console.log(namaBelakang_5_10);
console.log(namaLengkap.substring(10,5));

// 5. .slice() atau potong
console.log(namaLengkap.slice(5,10));
// console.log(namaLengkap.substring(10,5)); tidak akan tercetak atau kosong

// 6. .replace(yang di ganti, yang jadi pengganti)
namaLengkap = namaLengkap.replace('Juki Kece', 'Ijaxtz Ahaha');
console.log(namaLengkap);

// 7. .toLowerCase()
console.log(namaLengkap.toLowerCase());

// 8. .toUpperCase()
console.log(namaLengkap.toUpperCase());

// 9. extract data number
let dataString2 = '10';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.125'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);
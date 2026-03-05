// numbers - 64 bit dari 2^1024 sampai -2^1024

let nilai_int = 10; // integer
let nilai_float = 10.123; // float
let nilai_big_int = 123456789018742671864810171081874817n; // bigint itu tambahkan n di ujung
console.log(typeof nilai_int);
console.log(typeof nilai_float);
console.log(typeof nilai_big_int);

// cara menggunakan data nya
let angka = 5.678;
let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10.98;
let angka_2_float = parseFloat(angka_2);
console.log(angka_2_float);

// merubah string
let data = "10.98" + 10; // ini tidak akan di jumlahkan tetapi di gabungkan
console.log(data);
console.log(parseInt(data) + 10);   // pengonversian ke bilangan bulat
console.log(parseFloat(data) + 10); // pengonversian ke bilangan desimal

let data_2 = "cihuyyy 10.98"; //  ini akan menjadi NaN karena dalam parse yang diambil adalah di bagian depan
console.log(data_2);
console.log(parseInt(data_2) + 10);   // pengonversian ke bilangan bulat
console.log(parseFloat(data_2) + 10); // pengonversian ke bilangan desimal

// contoh
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian) + pajak;
console.log(bayar);
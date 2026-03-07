// Operator logika

// And, OR, Not

let data_bool = true;
console.log(data_bool);

// 1. Not
console.log(!data_bool);  // ini akan false
console.log(!!data_bool); // ini akan true
console.log(!1); // ini akan false juga karena 1 itu adalah true
console.log(!0); // ini akan true
// selain dari 0 itu akan bernilai true semua ketika kita menggunakan operator Not

let is_keren = true;
let is_jelek = !is_keren

// 2. OR || (operasi antara dua variabel boolean) atau ini juga penjumlahan
// A     = true true  false false
// B     = true false true  false
// Hasil = true true  true  false

// A     1 1 0 0
// B     1 0 1 0
// Hasil 1 1 1 0

console.log(`true || true, Hasil = ${true || true}`);
console.log(`true || false, Hasil = ${true || false}`);
console.log(`false || true, Hasil = ${false || true}`);
console.log(`false || false, Hasil = ${false || false}`);

let makan = false;
let minum = false;

let sudah_selesai = makan || minum;
console.log(`sudah selesai = ${sudah_selesai}`);

// 3. And && (operasi antara dua variabel boolean) atau ini juga perkalian
// A     = true true  false false
// B     = true false true  false
// Hasil = true false false false

// A     1 1 0 0
// B     1 0 1 0
// Hasil 1 0 0 0

console.log(`true && true, Hasil = ${true && true}`);
console.log(`true && false, Hasil = ${true && false}`);
console.log(`false && true, Hasil = ${false && true}`);
console.log(`false && false, Hasil = ${false && false}`);

makan = true;
minum = true;

let sudah_makan_minum = makan && minum;
console.log(`sudah makan minum? = ${sudah_makan_minum}`);
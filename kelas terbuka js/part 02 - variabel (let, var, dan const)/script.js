// ini adalah komentar di java script

// 1. variabel dengan let
let nama = "Juki Kece";

// tampilkan data
console.log(nama);

// kita mengubah variabel nama
nama = "Ijaxtz Ahaha";
console.log(nama);

// 2. variable dengan var
var namaDepan = "Juki";
console.log(namaDepan);
var namaDepan = "Ijaxtz";
console.log(namaDepan);

// kelakuan dari let
let namaBelakang = "Kece";
{
    let namaBelakang = "Ahaha";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Mantap";
{
    var namaTengah = "Keren";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword let atau var dia akan otomatis menjadi var
gorengan = "Bakwan";
{
    gorengan = "pisang goreng";
}
console.log(gorengan);

// 3. const
const TTL = "2 February 2026";
console.log(TTL);
// TTL = "3 February 2026";  ini akan error karena sudah const atau sudah tetap
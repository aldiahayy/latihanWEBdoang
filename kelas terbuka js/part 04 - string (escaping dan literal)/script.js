let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
// mengganti petik dua dengan petik satu
let data1 = 'Juki berkata "apa kabar dunia?"';
console.log(data1);

// escaping karakter
// 1. menambahkan backslash sebelum petik dua nya
let data2 = "Ijaxtz berkata \"mantap bang\"";
console.log(data2);

// 2. untuk enter yaitu \n
let data3 = "Juki berjalan jalan ditepi pantai,\nmantap";
console.log(data3);

// 3. untuk tab yaitu \n
let data4 = "Juki berjalan jalan ditepi pantai,\tmantap";
console.log(data4);


// 2. literal string (template literal string)
let namaDepan = "Ijaxtz";
let namaBelakang = "Ahaha";
let umur = 19;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

// ini adalah literal nya atau template nya
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);

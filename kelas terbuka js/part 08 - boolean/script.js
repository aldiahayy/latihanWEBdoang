// Tipe data boolean

let data_bool_1 = false; // false = 0 , true = 1, binary
console.log(data_bool_1);

let data_bool_2 = (3<10); // ini akan bernilai true
console.log(data_bool_2);

let data_bool_3 = ("juki" == "Juki"); // ini akan bernilai false
console.log(data_bool_3);

let data_bool_4 = (true == 1); // akan bernilai true
console.log(data_bool_4);

data_bool_4 = (false == 0n); // akan bernilai true
console.log(data_bool_4);

data_bool_4 = (false == " "); // akan bernilai true
console.log(data_bool_4);

data_bool_4 = (false == NaN); // akan bernilai false
console.log(data_bool_4);
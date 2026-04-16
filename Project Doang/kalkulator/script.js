let angka_1, angka_2, operasi, hasil;
document.getElementById("kalkulator").onsubmit = function(event){
    event.preventDefault();
    angka_1 = document.getElementById("angka_1").value;
    angka_2 = document.getElementById("angka_2").value;
    operasi = document.getElementById("operasi").value;
    
    let jumlah = parseFloat(angka_1) + parseFloat(angka_2);
    let kurang = parseFloat(angka_1) - parseFloat(angka_2);
    let kali = parseFloat(angka_1) * parseFloat(angka_2);
    let bagi = parseFloat(angka_1) / parseFloat(angka_2);
    let sisaBagi = parseFloat(angka_1) % parseFloat(angka_2);

    switch (operasi){
        case "+" :
        document.getElementById("hasil").textContent = jumlah;
        break;

        case "-" :
        document.getElementById("hasil").textContent = kurang;
        break;

        case "*" :
        document.getElementById("hasil").textContent = kali;
        break;

        case "/" :
        document.getElementById("hasil").textContent = bagi;
        break;

        case "%" :
        document.getElementById("hasil").textContent = sisaBagi;
        break;
        
        default:
        document.getElementById("hasil").innerHTML = "operasi tidak ada";
        break;
    }
};

<?php
$sks = 22;
$ipk = 2.85;
echo"apakah bisa mahasiswa mengambil $sks sks? <br>";

if($ipk >= 3.00){
    echo"hanya bisa maksimal 24 sks";

}else if($ipk >= 2.50 && $ipk <= 2.99){
    echo" tidak diizinkan maksimal 20 sks";

}else{
    echo"maksimal 16 sks";
}
?>

<?php
$baris = 9;
for($i = $baris; $i >= 1; $i--){
    for($S = $baris; $S > $i; $S--){
        echo "&nbsp; &nbsp";
        
    }
    for($j = 1; $j <= $i; $j++){
        echo "* &nbsp &nbsp";
    }
    echo "<br>";
}
?>

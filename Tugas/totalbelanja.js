let totalbelanja = 180000;

function hitungDiskon() {
    if(belanja > 100000){
        let potongan = totalbelanja * 0.10;
        return totalbelanja - potongan;
    }
    else{
        return totalbelanja;
    }
}

console.log("Total belanja sebelum diskon: Rp. " + totalbelanja);
console.log("Total yang harus di bayar: Rp. " + hitungDiskon());
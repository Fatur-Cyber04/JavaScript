let nilai = 98;

function konversiNilai() {
    if (nilai >= 85) {
        return "A";
    } 
    else if (nilai >= 70) {
        return "B";
    } 
    else if (nilai >= 55) {
        return "C";
    } 
    else if (nilai >= 40) {
        return "D";
    } 
    else {
        return "E";
    }
}

console.log("Nilai:", nilai);
console.log("Konversi Huruf:", konversiNilai());
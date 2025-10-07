let mahasiswa = ["nazwa", "farda", "hengky", "ari", "fatur"];

console.log("Daftar mahasiswa:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

mahasiswa.push("aston");

mahasiswa.shift();

console.log("Setelah dimodifikasi:");
for(let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}
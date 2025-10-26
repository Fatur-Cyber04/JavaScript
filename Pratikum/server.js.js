const http = require('http');

const server = http.createServer((req, res) => {
    const data = {
        nama: "Mahasiswa",
        matkul: "Pemograman Berbasis Platform",
        server: "Node.js"
    };
    res.writeHead(200, {'content-type' : 'application/json'});
    res.end(JSON.stringify(data));
});

server.listen(8000, () => console.log('server JSON berjalan di http://localhost:8000'));

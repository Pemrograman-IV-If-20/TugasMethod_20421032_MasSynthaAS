const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.get('/', function (req,res) {
    res.send('Hello World Awareness')
})

app.get('/',function (req,res) {
    res.send('Selamat Datang di API')
})

//https://localhost:3000/data-mahasiswa/20202/lisa
app.get('/data-mahasiswa/npm/nama', function (req, res) {
    res.json({
        npm : req.params.npm,
        nama : req.params.nama,
    })
})

//https://localhost:3000/data-mahasiswa-query?npm=20202&nama=lisa
app.put('/data-mahasiswa-query', function (req, res) {
    res.json({
        npm : req.query.npm,
        nama : req.query.nama,
    })
})

//https://localhost:3000/data-mahasiswa/20202/lisa/manajemen-query?jalanikanhiu&perempuan
app.post('/data-mahasiswa/npm/nama/prodi-query',function (req,res) {
    res.json ({
        npm : req.params.npm,
        nama : req.params.nama,
        prodi : req.params.prodi,
        alamat : req.query.alamat,
        jeniskelamin : req.query.jeniskelamin,
        negara : req.body.negara,
        hobi : req.body.hobi,
        nohp : req.body.nohp,
        email : req.body.email,
        umur : req.body.umur,
    })
})

const port = 3000
app.listen(port,() =>{
    console.log("on port 3000")
});
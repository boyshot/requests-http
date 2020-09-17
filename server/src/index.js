const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
/*Teste
app.listen(8000, () => {
    console.log('Servidor porta 8000')
})*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const corsOptions = {
//  origin: '*',
//  optionsSuccessStatus: 200
//};
//app.use(cors(corsOptions));

const multipartMiddleware = multipart({ uploadDir: './uploads' });

app.post('/upload', multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.get('/downloadExcel', (req, res) => {
  res.download('./uploads/download/LayoutTAF.xlsx');

});

app.get('/downloadPDF', (req, res) => {
  res.download('./uploads/download/dma_bahia_v2.pdf');
});

app.use((err, req, res, next) =>
  res.json({ error: err.message }));

app.listen(8000, () => {
  console.log('Servidor porta 8000');
})




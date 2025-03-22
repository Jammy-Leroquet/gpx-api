const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use('/gpx', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('API GPX opérationnelle ✅');
});

app.post('/upload', upload.single('gpxfile'), (req, res) => {
  res.json({
    filename: req.file.filename,
    originalname: req.file.originalname
  });
});

app.get('/gpx-list', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture dossier' });
    res.json(files);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('✅ Serveur en ligne sur le port', PORT);
});

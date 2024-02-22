import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const data = `Timestamp: ${new Date().toISOString()}, Name: ${name}, Email: ${email}\n`;
    fs.appendFile(path.join(__dirname, 'data', 'submissions.txt'), data, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.send('Data saved successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

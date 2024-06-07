import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import agenteRouter from './routes/agente.route.js'

export const app = express();

const __dirname = import.meta.dirname

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/htmlcorreo', (req, res) => {
    res.sendFile(__dirname + '/public/htmlcorreo.html');
});

app.get('/ruta-restringida', (req, res) => {
    res.sendFile(__dirname + '/public/ruta-restringida.html');
});

app.use('/api/v1/agentes', agenteRouter)

app.use('*', (_, res) => {
    res.status(404).json({ ok: false, msg: 'ruta no configurada 😐' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`);
});

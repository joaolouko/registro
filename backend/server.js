const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registro',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/api/data/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            res.status(500).json({ status: 'error', error: 'Erro interno do servidor' });
            return;
        }
        
        connection.query('SELECT * FROM usuario', (error, results) => {
            connection.release();
            if (error) {
                console.error('Erro ao consultar dados:', error);
                res.status(500).json({ status: 'error', error: 'Erro interno do servidor' });
                return;
            }

            res.json(results);
        });
    });
});

app.post('/api/data', (req, res) => {
    const { nome, idade } = req.body;
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            res.status(500).json({ status: 'error', error: 'Erro interno do servidor' });
            return;
        }

        const query = 'INSERT INTO usuario (nome, idade) VALUES (?, ?)';
        connection.query(query, [nome, idade], (err, result) => {
            connection.release();
            if (err) {
                console.error('Erro ao inserir dados:', err);
                res.status(500).json({ status: 'error', error: 'Erro interno do servidor' });
                return;
            }

            res.json({ cod: result.insertId, nome, idade });
        });
    });
});

app.delete('/api/data/:cod', (req, res) => {
    const { cod } = req.params;
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            res.status(500).json({ status: 'error', error: 'Erro interno do servidor' });
            return;
        }

        const query = 'DELETE FROM usuario WHERE cod = ?';
        connection.query(query, [cod], (err, result) => {
            connection.release();
            if (err) {
                console.error('Erro ao excluir dados:', err);
                res.status(500).json({ status: 'error', error: 'Erro interno do servidor' });
                return;
            }

            res.json({ status: 'success', cod });
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`);
});

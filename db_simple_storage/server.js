const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db');

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    age INTEGER NOT NULL
)`);

app.post('/api/users', (req, res) => {
    const { first_name, age } = req.body;
    const sqlInsert = "INSERT INTO users (first_name, age) VALUES (?, ?)";
    
    db.run(sqlInsert, [first_name, age], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Success", insertedId: this.lastID });
    });
});

app.get('/api/users', (req, res) => {
    const sqlQuery = "SELECT * FROM users";
    
    db.all(sqlQuery, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows); 
    });
});

app.listen(3000, () => console.log('Database Bridge Server actively awake on Port 3000'));
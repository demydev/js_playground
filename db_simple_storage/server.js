const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Open connectivity path connection to your SQLite database file layout
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error('Database connection error:', err.message);
    else console.log('Successfully connected to SQLite database.');
});

// Initialize database schema tables to hold input elements
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    age INTEGER NOT NULL
)`);

// Route handler to post text values into table database records
app.post('/api/users', (req, res) => {
    const { first_name, age } = req.body;
    const sqlInsert = "INSERT INTO users (first_name, age) VALUES (?, ?)";
    
    db.run(sqlInsert, [first_name, age], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Success", insertedId: this.lastID });
    });
});

// Route handler to retrieve rows dataset and pass it back down
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

// FIXED: Moved entirely onto Port 5000 away from VS Code Live Preview standard port 3000
app.listen(5000, () => console.log('Database Bridge Server actively awake on Port 5000'));
require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const pool = new Pool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port: 5432
});

// =====================
// GET /api/habits
// =====================
app.get('/api/habits', async (req, res) => {
try {
const result = await pool.query('SELECT * FROM habits ORDER BY id');
res.json(result.rows);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'failed to fetch habits' });
}
});

// =====================
// POST /api/habits
// =====================
app.post('/api/habits', async (req, res) => {
const { name, description } = req.body;

try {
await pool.query(
'INSERT INTO habits (name, description) VALUES ($1, $2)',
[name, description]
);
res.json({ message: 'habit created' });
} catch (err) {
console.error(err);
res.status(500).json({ error: 'failed to create habit' });
}
});

// =====================
// POST /api/logs
// =====================
app.post('/api/logs', async (req, res) => {
const { habit_id, date, done } = req.body;

try {
await pool.query(
'INSERT INTO logs (habit_id, date, done) VALUES ($1, $2, $3)',
[habit_id, date, done]
);
res.json({ message: 'log created' });
} catch (err) {
console.error(err);
res.status(500).json({ error: 'failed to create log' });
}
});

// =====================
// サーバー起動
// =====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const pool = require('./db'); // ← PostgreSQL接続設定
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* =====================
   API
===================== */

// GET habits
app.get('/api/habits', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM habits ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// POST habits
app.post('/api/habits', async (req, res) => {
  const { name, description } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO habits (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    res.json(result.rows[0]); // ← 追加した行を返す
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// POST logs
app.post('/api/logs', async (req, res) => {
  const { habit_id, date, done } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO logs (habit_id, date, done) VALUES ($1, $2, $3) RETURNING *',
      [habit_id, date, done]
    );
    res.json(result.rows[0]); // ← 追加した行を返す
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

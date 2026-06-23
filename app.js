const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const PORT = 3000;

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
    await pool.query(
      'INSERT INTO habits (name, description) VALUES ($1, $2)',
      [name, description]
    );
    res.json({ message: 'habit created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

// POST logs
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
    res.status(500).json({ error: 'DB error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
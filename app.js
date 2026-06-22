const express = require('express');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, service: 'student-api' });
});

app.use('/api/students', studentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// error handler
app.use(errorHandler);

module.exports = app;


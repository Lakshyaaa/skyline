// backend/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.get('/weather', async (req, res) => {
  const { city } = req.query;
  const API_KEY = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Weather API failed' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

app.get('/search', async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        ...req.query,
        key: YOUTUBE_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/videos', async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        ...req.query,
        key: YOUTUBE_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/videoCategories', async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videoCategories', {
      params: {
        ...req.query,
        key: YOUTUBE_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});

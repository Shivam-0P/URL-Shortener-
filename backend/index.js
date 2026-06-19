const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { nanoid } = require('nanoid');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Schema
const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
  clicks: {
    type: Number,
    default: 0,
  },
});

// Model
const Url = mongoose.model('Url', urlSchema);

// Create Short URL
app.post('/api/short', async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        message: 'originalUrl is required',
      });
    }

    const shortUrl = nanoid(8);

    const url = new Url({
      originalUrl,
      shortUrl,
    });

    await url.save();

    res.status(201).json({
      message: 'URL Generated',
      shortUrl: `http://localhost:3000/${shortUrl}`,
      data: url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

// Redirect Route
app.get('/:shortUrl', async (req, res) => {
  try {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({
        message: 'Short URL not found',
      });
    }

    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
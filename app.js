const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/users');
const sightingRoutes = require('./routes/sightings');
const animalRoutes = require('./routes/animals');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('✅ MongoDB connected');
});

app.use('/api/users', userRoutes);
app.use('/api/sightings', sightingRoutes);
app.use('/api/animals', animalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

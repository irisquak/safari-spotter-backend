const express = require('express');
const router = express.Router();
const Sighting = require('../models/Sighting');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
  const sightings = await Sighting.find().sort({ createdAt: -1 }).limit(50);
  res.json(sightings);
});

router.post('/', upload.single('photo'), async (req, res) => {
  const { userId, animal, lat, lng, notes } = req.body;
  const newSighting = new Sighting({
    userId,
    animal,
    photoUrl: req.file?.path || '',
    location: { lat, lng },
    notes
  });
  await newSighting.save();
  res.status(201).json(newSighting);
});

module.exports = router;

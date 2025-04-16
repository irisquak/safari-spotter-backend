const mongoose = require('mongoose');

const sightingSchema = new mongoose.Schema({
  userId: String,
  animal: String,
  photoUrl: String,
  location: {
    lat: Number,
    lng: Number
  },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sighting', sightingSchema);

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Timbuctoo' },
  state: { type: String, default: 'CA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

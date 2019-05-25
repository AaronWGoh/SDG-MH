const mongoose = require("mongoose");

const TherapistSchema = mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
  email: String,
  rating: Number,
  reviews: [
    {type: mongoose.Schema.ObjectId, ref: 'Review'}
  ]
});

module.exports = mongoose.model("Therapist", TherapistSchema);
const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  title: String,
  content: String,
  postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  therapist: { type: mongoose.Schema.ObjectId, ref: 'Therapist' }
}, {
  timestamps: true
});

module.exports = mongoose.model("Review", ReviewSchema);
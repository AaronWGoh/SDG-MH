const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  reviews: [
    { type: mongoose.Schema.ObjectId, ref: 'Review'}
  ],
});

module.exports = mongoose.model("User", UserSchema);
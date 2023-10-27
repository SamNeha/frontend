const mongoose = require('mongoose');

const userCardSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  cardTitle: { type: String, required: true },
  // Other fields related to the card
});

const UserCard = mongoose.model('UserCard', userCardSchema);

module.exports = UserCard;

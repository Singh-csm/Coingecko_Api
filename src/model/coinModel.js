const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    platforms: { type: Object, default: null },
  }, { timestamps: true });

module.exports = mongoose.model("coin", CoinSchema)
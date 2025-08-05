const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  interfaceName: String,
  integrationKey: String,
  status: String,
  message: String,
  timestamp: Date
});

module.exports = mongoose.model('Log', logSchema);

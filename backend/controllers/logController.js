const Log = require('../models/Log');

exports.getAllLogs = async (req, res) => {
  const logs = await Log.find().sort({ timestamp: -1 });
  res.json(logs);
};

exports.createLog = async (req, res) => {
  const newLog = new Log(req.body);
  await newLog.save();
  res.json(newLog);
};

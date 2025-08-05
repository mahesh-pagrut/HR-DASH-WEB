const express = require('express');
const router = express.Router();
const { getAllLogs, createLog } = require('../controllers/logController');

router.get('/', getAllLogs);
router.post('/', createLog);

module.exports = router;

const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const auth = require('../middleware/auth');

router.post('/generate-prompt', auth, aiController.generatePrompt);

module.exports = router;

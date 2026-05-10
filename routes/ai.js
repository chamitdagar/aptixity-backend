const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const auth = require('../middleware/auth');

router.post('/generate-prompt', auth, aiController.generatePrompt);
router.post('/generate-requirements', auth, aiController.generateRequirements);

module.exports = router;

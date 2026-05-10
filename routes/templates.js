const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', templateController.getAllTemplates);
router.post('/', auth, admin, templateController.createTemplate);
router.put('/:id', auth, admin, templateController.updateTemplate);
router.delete('/:id', auth, admin, templateController.deleteTemplate);
router.patch('/:id/usage', templateController.incrementUsage);

module.exports = router;

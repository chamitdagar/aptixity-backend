const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', projectController.getAllProjects);
router.post('/', auth, admin, projectController.createProject);
router.put('/:id', auth, admin, projectController.updateProject);
router.delete('/:id', auth, admin, projectController.deleteProject);

module.exports = router;

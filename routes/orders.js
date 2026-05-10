const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/', auth, orderController.createOrder);
router.get('/my', auth, orderController.getMyOrders);
router.get('/all', auth, admin, orderController.getAllOrders);
router.patch('/:id/status', auth, admin, orderController.updateOrderStatus);

module.exports = router;

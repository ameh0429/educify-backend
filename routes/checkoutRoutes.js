import express from 'express';
import * as checkoutController from '../controllers/checkoutController.js';

const router = express.Router();

router.post('/calculate', checkoutController.calculateCheckout);
router.post('/validate-promo', checkoutController.validatePromo);
router.post('/process-payment', checkoutController.processPayment);

export default router;
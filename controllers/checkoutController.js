import * as paymentService from '../services/paymentService.js';

export const calculateCheckout = (req, res) => {
  try {
    const { lessons, promoCode } = req.body;

    const calculation = paymentService.calculateTotal(lessons, promoCode);

    res.json({
      success: true,
      data: calculation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const validatePromo = (req, res) => {
  try {
    const { code } = req.body;

    const isValid = paymentService.validatePromoCode(code);

    res.json({
      success: true,
      valid: isValid,
      message: isValid ? 'Promo code is valid' : 'Invalid promo code'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const processPayment = (req, res) => {
  try {
    const paymentData = req.body;

    const result = paymentService.processPayment(paymentData);

    res.status(201).json({
      success: true,
      data: result,
      message: 'Payment processed successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
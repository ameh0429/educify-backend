export const calculateTotal = (lessons, promoCode = null) => {
  let subtotal = lessons.reduce((total, lesson) => {
    return total + (lesson.rate * lesson.quantity);
  }, 0);

  let discount = 0;
  if (promoCode) {
    discount = applyPromoCode(promoCode, subtotal);
  }

  const total = subtotal - discount;

  return {
    subtotal,
    discount,
    total,
    currency: 'USD'
  };
};

const applyPromoCode = (code, subtotal) => {
  const promoCodes = {
    'SAVE10': { type: 'percentage', value: 10 },
    'SAVE20': { type: 'percentage', value: 20 },
    'FLAT5': { type: 'fixed', value: 5 }
  };

  const promo = promoCodes[code.toUpperCase()];
  if (!promo) return 0;

  if (promo.type === 'percentage') {
    return (subtotal * promo.value) / 100;
  } else {
    return promo.value;
  }
};

export const processPayment = (paymentData) => {
  // Mock payment processing
  return {
    transactionId: `TXN${Date.now()}`,
    status: 'success',
    amount: paymentData.amount,
    currency: 'USD',
    paymentMethod: paymentData.paymentMethod,
    processedAt: new Date().toISOString()
  };
};

export const validatePromoCode = (code) => {
  const validCodes = ['SAVE10', 'SAVE20', 'FLAT5'];
  return validCodes.includes(code.toUpperCase());
};
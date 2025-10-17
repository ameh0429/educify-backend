import express from 'express';
import * as scheduleController from '../controllers/scheduleController.js';

const router = express.Router();

router.get('/availability', scheduleController.checkAvailability);
router.post('/bookings', scheduleController.createBooking);
router.get('/bookings/:id', scheduleController.getBooking);
router.patch('/bookings/:id', scheduleController.updateBooking);

export default router;
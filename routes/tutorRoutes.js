import express from 'express';
import * as tutorController from '../controllers/tutorController.js';

const router = express.Router();

router.get('/', tutorController.getAllTutors);
router.get('/:id', tutorController.getTutorById);
router.get('/:id/schedule', tutorController.getTutorSchedule);

export default router;
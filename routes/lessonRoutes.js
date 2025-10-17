import express from 'express';
import * as lessonController from '../controllers/lessonController.js';

const router = express.Router();

router.get('/tutor/:tutorId', lessonController.getLessonsByTutor);
router.get('/:id', lessonController.getLessonById);

export default router;
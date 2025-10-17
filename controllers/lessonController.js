import * as lessonService from '../services/lessonService.js';

export const getLessonsByTutor = (req, res) => {
  try {
    const lessons = lessonService.getLessonsByTutor(req.params.tutorId);

    res.json({
      success: true,
      data: lessons
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getLessonById = (req, res) => {
  try {
    const lesson = lessonService.getLessonById(req.params.id);

    if (!lesson) {
      return res.status(404).json({
        success: false,
        message: 'Lesson not found'
      });
    }

    res.json({
      success: true,
      data: lesson
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
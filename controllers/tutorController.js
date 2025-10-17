import * as tutorService from '../services/tutorService.js';

export const getAllTutors = (req, res) => {
  try {
    const filters = {
      subject: req.query.subject,
      location: req.query.location,
      priceRange: req.query.priceRange,
      experience: req.query.experience,
      rating: req.query.rating,
      availability: req.query.availability
    };

    const tutors = tutorService.getTutors(filters);

    res.json({
      success: true,
      data: tutors,
      count: tutors.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getTutorById = (req, res) => {
  try {
    const tutor = tutorService.getTutorById(req.params.id);

    if (!tutor) {
      return res.status(404).json({
        success: false,
        message: 'Tutor not found'
      });
    }

    res.json({
      success: true,
      data: tutor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getTutorSchedule = (req, res) => {
  try {
    const { id } = req.params;
    const { weekStart } = req.query;

    const schedule = tutorService.getTutorSchedule(id, weekStart);

    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: 'Tutor not found'
      });
    }

    res.json({
      success: true,
      data: schedule
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
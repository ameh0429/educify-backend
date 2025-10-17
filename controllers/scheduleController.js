import * as scheduleService from '../services/scheduleService.js';

export const checkAvailability = (req, res) => {
  try {
    const { tutorId, date, time } = req.query;

    const isAvailable = scheduleService.checkAvailability(tutorId, date, time);

    res.json({
      success: true,
      available: isAvailable
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const createBooking = (req, res) => {
  try {
    const bookingData = req.body;
    const booking = scheduleService.createBooking(bookingData);

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const getBooking = (req, res) => {
  try {
    const booking = scheduleService.getBookingById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateBooking = (req, res) => {
  try {
    const { status } = req.body;
    const booking = scheduleService.updateBookingStatus(req.params.id, status);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Booking updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
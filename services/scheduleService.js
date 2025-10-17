import { bookings } from '../utils/mockData.js';

export const checkAvailability = (tutorId, date, time) => {
  const existingBooking = bookings.find(
    booking =>
      booking.tutorId === tutorId &&
      booking.date === date &&
      booking.time === time &&
      booking.status !== 'cancelled'
  );

  return !existingBooking;
};

export const createBooking = (bookingData) => {
  const isAvailable = checkAvailability(
    bookingData.tutorId,
    bookingData.date,
    bookingData.time
  );

  if (!isAvailable) {
    throw new Error('This time slot is not available');
  }

  const newBooking = {
    id: String(bookings.length + 1),
    ...bookingData,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  bookings.push(newBooking);
  return newBooking;
};

export const getBookingById = (id) => {
  return bookings.find(booking => booking.id === id);
};

export const updateBookingStatus = (id, status) => {
  const booking = getBookingById(id);
  if (!booking) return null;

  booking.status = status;
  booking.updatedAt = new Date().toISOString();
  return booking;
};
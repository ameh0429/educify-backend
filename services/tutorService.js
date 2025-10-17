import { tutors } from '../utils/mockData.js';

export const getTutors = (filters = {}) => {
  let filteredTutors = [...tutors];

  if (filters.subject) {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.subjects.some(s => s.toLowerCase().includes(filters.subject.toLowerCase()))
    );
  }

  if (filters.location) {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.location.toLowerCase() === filters.location.toLowerCase()
    );
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange.split('-').map(Number);
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.hourlyRate >= min && tutor.hourlyRate <= max
    );
  }

  if (filters.experience) {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.experience >= Number(filters.experience)
    );
  }

  if (filters.rating) {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.rating >= Number(filters.rating)
    );
  }

  if (filters.availability) {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.available === (filters.availability === 'true')
    );
  }

  return filteredTutors;
};

export const getTutorById = (id) => {
  return tutors.find(tutor => tutor.id === id);
};

export const getTutorSchedule = (tutorId, weekStart) => {
  const tutor = getTutorById(tutorId);
  if (!tutor) return null;

  // Mock weekly schedule
  return {
    tutorId,
    weekStart,
    schedule: generateWeeklySchedule(tutor)
  };
};

const generateWeeklySchedule = (tutor) => {
  // Generate mock availability slots
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const schedule = {};

  days.forEach(day => {
    schedule[day] = [
      { time: '2:30 AM - 3:30 AM', available: Math.random() > 0.5 },
      { time: '3:00 AM - 4:00 AM', available: Math.random() > 0.5 },
      { time: '5:00 AM - 6:00 AM', available: Math.random() > 0.5 }
    ];
  });

  return schedule;
};
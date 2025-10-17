export const tutors = [
  {
    id: '1',
    name: 'Guy Hawkins',
    verified: true,
    subjects: ['Algebra', 'Math'],
    rating: 4,
    totalReviews: 3380,
    experience: 5,
    tutorSince: '2023-07-12',
    languages: ['English', 'Yoruba'],
    hourlyRate: 16,
    location: 'Online',
    available: true,
    bio: 'An impeccable tutor',
    education: [
      {
        years: '2016 - 2020',
        institution: 'Université de Grenoble - Grenoble',
        degree: 'Master en Français Langue Etrangère (FLE)'
      }
    ],
    avatar: 'avatar-url',
    schedules: []
  }
];

export const lessons = [
  {
    id: '1',
    tutorId: '1',
    subject: 'Algebra',
    rate: 50,
    duration: 30,
    type: 'Trial',
    location: 'Online',
    isFree: true
  }
];

export const bookings = [];
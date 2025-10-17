import { lessons } from '../utils/mockData.js';

export const getLessonsByTutor = (tutorId) => {
  return lessons.filter(lesson => lesson.tutorId === tutorId);
};

export const getLessonById = (id) => {
  return lessons.find(lesson => lesson.id === id);
};

export const createLesson = (lessonData) => {
  const newLesson = {
    id: String(lessons.length + 1),
    ...lessonData,
    createdAt: new Date().toISOString()
  };
  
  lessons.push(newLesson);
  return newLesson;
};
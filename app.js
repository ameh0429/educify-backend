import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import tutorRoutes from './routes/tutorRoutes.js';
import lessonRoutes from './routes/lessonRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/tutors', tutorRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/checkout', checkoutRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
} )
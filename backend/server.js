import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contact.js'; 

dotenv.config();

const app = express();

// Middleware
const allowedOrigins = ['https://mmesoma-portfolio.netlify.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Backend check
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

import express from 'express';
const router = express.Router();

// Test route to confirm it's working
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Contact route is working!' });
});

// Handle contact form POST
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // You can add validation and logic here
  res.status(200).json({ message: 'Message received!', data: { name, email, message } });
});

export default router;

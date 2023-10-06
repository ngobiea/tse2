import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.get('/', (_req, res) => {
  res.send('Hello From TSE-2 Assignment 1');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log('Server is running on port ', PORT);
});

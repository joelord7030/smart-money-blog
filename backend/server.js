const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postsRouter = require('./routes/posts');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB if MONGO_URI provided; otherwise use in-memory fallback
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error', err));
} else {
  console.log('No MONGO_URI provided — ensure to set one or run Mongo locally');
}

app.get('/', (req, res) => res.send({ status: 'ok', service: 'smart-money-backend' }));
app.use('/api/posts', postsRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import sequelize from './db';
import './models/models';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.error('DB connection error:', e);
  }
};

start();

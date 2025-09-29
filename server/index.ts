import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import fileUpload from 'express-fileupload';
import router from './routes/index';
import ErrorHandlerMiddleware from './middleware/ErrorHandlerMiddleware';

import path from 'path';
import sequelize from './db';
import './models/models';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Error handling, the last middleware
app.use(ErrorHandlerMiddleware);

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

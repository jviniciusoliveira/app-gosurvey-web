import express from 'express';
import SurveyController from './app/controllers/Survey';
import Sequelize from 'sequelize';
import { resolve } from 'path';

import SurveyModel from './app/models/Survey';

const pathDb = resolve(__dirname, 'database', 'data.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: pathDb,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

SurveyModel.init(sequelize);
SurveyModel.sync();

const app = express();

app.get('/', async (request, response) => {
  const surveys = await SurveyModel.findAll();
  return response.send(surveys);
});

app.get('/test', SurveyController.index);

app.listen(3333);

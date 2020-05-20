import express from 'express';
import SurveyController from './app/controllers/Survey';

import Sequelize from 'sequelize';
import SurveyModel from './app/models/Survey';
import ResponseModel from './app/models/Response';
import { resolve } from 'path';

class App {
  constructor() {
    this.server = express();

    this.init();
  }

  init() {
    this.server.use(express.json());

    // routes
    this.server.get('/', SurveyController.index);
    this.server.post('/add', SurveyController.store);

    this.sequelize();
  }

  async sequelize() {
    const pathDb = resolve(__dirname, 'database', 'data.sqlite');

    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: pathDb,
    });

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (err) {
      console.log('Unable to connect to the database:', err);
    }

    SurveyModel.init(sequelize);
    ResponseModel.init(sequelize);
    //await sequelize.sync({ force: true });
  }
}

export default new App().server;

import express from 'express';
import cors from 'cors';
import upload from './lib/multer';

import SurveyController from './app/controllers/SurveyController';

import Sequelize from 'sequelize';
import SurveyModel from './app/models/Survey';
import ResponseModel from './app/models/Response';
import FileModel from './app/models/File';
import { resolve } from 'path';

class App {
  constructor() {
    this.server = express();

    this.init();
  }

  init() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );

    // routes
    this.server.get('/', SurveyController.index);
    this.server.post('/add', upload.single('image'), SurveyController.store);
    this.server.get('/files');

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
    FileModel.init(sequelize);

    SurveyModel.associate(ResponseModel, FileModel);
    ResponseModel.associate(SurveyModel);
    //await sequelize.sync({ force: true });
  }
}

export default new App().server;

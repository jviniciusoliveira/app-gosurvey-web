import Sequelize, { Model } from 'sequelize';
import Survey from './Survey';

class Response extends Model {
  static init(sequelize) {
    super.init(
      {
        response: Sequelize.STRING,
        votes: Sequelize.STRING,
      },
      { sequelize }
    );

    this.belongsTo(Survey, { foreignKey: 'survey_id' });

    return this;
  }
}

export default Response;

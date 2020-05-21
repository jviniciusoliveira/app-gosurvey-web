import Sequelize, { Model } from 'sequelize';

class Response extends Model {
  static init(sequelize) {
    super.init(
      {
        response: Sequelize.STRING,
        votes: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(model) {
    this.belongsTo(model, { foreignKey: 'survey_id', as: 'survey' });
  }
}

export default Response;

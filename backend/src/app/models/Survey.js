import Sequelize, { Model } from 'sequelize';

class Survey extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        expire: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(model) {
    this.hasMany(model, { foreignKey: 'survey_id', as: 'responses' });
  }
}

export default Survey;

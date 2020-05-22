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

  static associate(responseModel, fileModel) {
    this.hasMany(responseModel, {
      foreignKey: 'survey_id',
      as: 'responses',
    });
    this.belongsTo(fileModel, { foreignKey: 'image_id', as: 'image' });
  }
}

export default Survey;

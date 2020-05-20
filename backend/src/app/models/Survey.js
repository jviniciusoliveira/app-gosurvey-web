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
  }
}

export default Survey;

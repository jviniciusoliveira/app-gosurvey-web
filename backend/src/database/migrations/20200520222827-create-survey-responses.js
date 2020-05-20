module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('responses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      survey_id: {
        type: Sequelize.INTEGER,
        references: { model: 'surveys', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      response: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      votes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('responses');
  },
};

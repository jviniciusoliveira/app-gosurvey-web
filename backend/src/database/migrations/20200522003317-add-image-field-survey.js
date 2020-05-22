module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('surveys', 'image_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('surveys', 'image_id');
  },
};

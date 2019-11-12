module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fones_gravadora', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      gravadora_id: {
        type: Sequelize.INTEGER,
        references: { model: 'gravadoras', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      fone_numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('fones_gravadora');
  },
};

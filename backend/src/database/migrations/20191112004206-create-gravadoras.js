module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gravadoras', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homepage: {
        type: Sequelize.STRING,
      },
      rua: {
        type: Sequelize.STRING,
      },
      rua_numero: {
        type: Sequelize.INTEGER,
      },
      CEP: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('gravadoras');
  },
};

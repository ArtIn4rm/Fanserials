const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ganre', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ganre',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_ganre",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
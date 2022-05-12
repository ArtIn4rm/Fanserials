const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studio', {
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
    tableName: 'studio',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_studio",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
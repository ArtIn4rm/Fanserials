const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ganre', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    tableName: 'moderator_request',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_moderator_request",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
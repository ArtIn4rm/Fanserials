const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adding_request', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    request_text: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'adding_request',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_adding_request_request_status",
        fields: [
          { name: "request_status" },
        ]
      },
      {
        name: "ixfk_adding_request_user",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "pk_adding_request",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

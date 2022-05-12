const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'request_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_request_status",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
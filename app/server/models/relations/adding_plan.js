const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adding_plan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serial_name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    voice_acting: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    series: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'adding_plan',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_adding_plan_adding_request",
        fields: [
          { name: "adding_request_id" },
        ]
      },
      {
        name: "pk_adding_plan",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

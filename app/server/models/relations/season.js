const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('season', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    number: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'season',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_season_serial",
        fields: [
          { name: "serial_id" },
        ]
      },
      {
        name: "pk_season",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

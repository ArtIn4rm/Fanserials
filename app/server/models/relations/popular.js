const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('popular', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    tableName: 'popular',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_popular_serial",
        fields: [
          { name: "serial_id" },
        ]
      },
      {
        name: "pk_popular",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

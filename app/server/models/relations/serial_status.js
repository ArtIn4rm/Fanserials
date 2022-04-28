const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serial_status', {
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
    tableName: 'serial_status',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_serial_status",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

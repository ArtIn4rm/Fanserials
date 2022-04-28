const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    icon_img_ref: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    number_in_season: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'seria',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_seria_season",
        fields: [
          { name: "season_id" },
        ]
      },
      {
        name: "ixfk_seria_serial",
        fields: [
          { name: "serial_id" },
        ]
      },
      {
        name: "pk_seria",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

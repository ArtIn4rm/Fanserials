const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serial', {
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
    original_name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    tv_channel: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    producers: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    actors: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    scenarists: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    start_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    end_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imdb_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    icon_img_ref: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'serial',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_serial_category",
        fields: [
          { name: "category" },
        ]
      },
      {
        name: "ixfk_serial_ganre",
        fields: [
          { name: "ganre" },
        ]
      },
      {
        name: "ixfk_serial_serial_status",
        fields: [
          { name: "serial_status" },
        ]
      },
      {
        name: "pk_serial",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

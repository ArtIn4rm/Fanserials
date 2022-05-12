const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
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
    tableName: 'category',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "pk_category",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
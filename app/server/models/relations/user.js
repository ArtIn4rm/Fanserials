const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    banning_beginning: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    banning_term: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_user_role",
        fields: [
          { name: "role" },
        ]
      },
      {
        name: "ixfk_user_status",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "pk_user",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
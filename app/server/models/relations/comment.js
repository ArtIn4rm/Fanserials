const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    likes: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    dislikes: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comment',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_comment_seria",
        fields: [
          { name: "seria_id" },
        ]
      },
      {
        name: "ixfk_comment_user",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "pk_comment",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
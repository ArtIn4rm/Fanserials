const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view', {
    mark: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'view',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_view_seria",
        fields: [
          { name: "seria_id" },
        ]
      },
      {
        name: "ixfk_view_user",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "pk_view",
        unique: true,
        fields: [
          { name: "seria_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};

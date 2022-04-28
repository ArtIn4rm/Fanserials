const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voice_acting', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    video_ref: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'voice_acting',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "ixfk_voice_acting_seria",
        fields: [
          { name: "seria_id" },
        ]
      },
      {
        name: "ixfk_voice_acting_studio",
        fields: [
          { name: "studio_id" },
        ]
      },
      {
        name: "pk_video_acting",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

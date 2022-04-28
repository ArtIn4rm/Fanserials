const sequelize = require('../db');
const {DataTypes} = require('sequelize')
const _adding_plan = require("./relations/adding_plan");
const _adding_request = require("./relations/adding_request");
const _category = require("./relations/category");
const _comment = require("./relations/comment");
const _ganre = require("./relations/ganre");
const _popular = require("./relations/popular");
const _request_status = require("./relations/request_status");
const _role = require("./relations/role");
const _season = require("./relations/season");
const _seria = require("./relations/seria");
const _serial = require("./relations/serial");
const _serial_status = require("./relations/serial_status");
const _studio = require("./relations/studio");
const _user = require("./relations/user");
const _user_status = require("./relations/user_status");
const _view = require("./relations/view");
const _voice_acting = require("./relations/voice_acting");
const _moderator_request = require("./relations/moderator_request");

const adding_plan = _adding_plan(sequelize, DataTypes);
const adding_request = _adding_request(sequelize, DataTypes);
const category = _category(sequelize, DataTypes);
const comment = _comment(sequelize, DataTypes);
const ganre = _ganre(sequelize, DataTypes);
const popular = _popular(sequelize, DataTypes);
const request_status = _request_status(sequelize, DataTypes);
const role = _role(sequelize, DataTypes);
const season = _season(sequelize, DataTypes);
const seria = _seria(sequelize, DataTypes);
const serial = _serial(sequelize, DataTypes);
const serial_status = _serial_status(sequelize, DataTypes);
const studio = _studio(sequelize, DataTypes);
const user = _user(sequelize, DataTypes);
const user_status = _user_status(sequelize, DataTypes);
const view = _view(sequelize, DataTypes);
const voice_acting = _voice_acting(sequelize, DataTypes);
const moderator_request = _moderator_request(sequelize, DataTypes);

seria.belongsToMany(user, { as: 'user_id_users', through: view, foreignKey: "seria_id", otherKey: "user_id" });
user.belongsToMany(seria, { as: 'seria_id_seria', through: view, foreignKey: "user_id", otherKey: "seria_id" });
adding_plan.belongsTo(adding_request, { as: "adding_request", foreignKey: "adding_request_id"});
adding_request.hasMany(adding_plan, { as: "adding_plans", foreignKey: "adding_request_id"});
serial.belongsTo(category, { as: "category_category", foreignKey: "category"});
category.hasMany(serial, { as: "serials", foreignKey: "category"});
serial.belongsTo(ganre, { as: "ganre_ganre", foreignKey: "ganre"});
ganre.hasMany(serial, { as: "serials", foreignKey: "ganre"});
adding_request.belongsTo(request_status, { as: "request_status_request_status", foreignKey: "request_status"});
request_status.hasMany(adding_request, { as: "adding_requests", foreignKey: "request_status"});
user.belongsTo(role, { as: "role_role", foreignKey: "role"});
role.hasMany(user, { as: "users", foreignKey: "role"});
seria.belongsTo(season, { as: "season", foreignKey: "season_id"});
season.hasMany(seria, { as: "seria", foreignKey: "season_id"});
comment.belongsTo(seria, { as: "serium", foreignKey: "seria_id"});
seria.hasMany(comment, { as: "comments", foreignKey: "seria_id"});
view.belongsTo(seria, { as: "serium", foreignKey: "seria_id"});
seria.hasMany(view, { as: "views", foreignKey: "seria_id"});
voice_acting.belongsTo(seria, { as: "serium", foreignKey: "seria_id"});
seria.hasMany(voice_acting, { as: "voice_actings", foreignKey: "seria_id"});
popular.belongsTo(serial, { as: "serial", foreignKey: "serial_id"});
serial.hasMany(popular, { as: "populars", foreignKey: "serial_id"});
season.belongsTo(serial, { as: "serial", foreignKey: "serial_id"});
serial.hasMany(season, { as: "seasons", foreignKey: "serial_id"});
seria.belongsTo(serial, { as: "serial", foreignKey: "serial_id"});
serial.hasMany(seria, { as: "seria", foreignKey: "serial_id"});
serial.belongsTo(serial_status, { as: "serial_status_serial_status", foreignKey: "serial_status"});
serial_status.hasMany(serial, { as: "serials", foreignKey: "serial_status"});
voice_acting.belongsTo(studio, { as: "studio", foreignKey: "studio_id"});
studio.hasMany(voice_acting, { as: "voice_actings", foreignKey: "studio_id"});
adding_request.belongsTo(user, { as: "user", foreignKey: "user_id"});
user.hasMany(adding_request, { as: "adding_requests", foreignKey: "user_id"});
comment.belongsTo(user, { as: "user", foreignKey: "user_id"});
user.hasMany(comment, { as: "comments", foreignKey: "user_id"});
view.belongsTo(user, { as: "user", foreignKey: "user_id"});
user.hasMany(view, { as: "views", foreignKey: "user_id"});
user.belongsTo(user_status, { as: "status_user_status", foreignKey: "status"});
user_status.hasMany(user, { as: "users", foreignKey: "status"});
user.hasOne(moderator_request, {as: "moderator_request", foreignKey: "user_id"})
moderator_request.belongsTo(user, { as: "user", foreignKey: "user_id"})

module.exports = {
  adding_plan,
  adding_request,
  category,
  comment,
  ganre,
  popular,
  request_status,
  role,
  season,
  seria,
  serial,
  serial_status,
  studio,
  user,
  user_status,
  view,
  voice_acting,
  moderator_request
};

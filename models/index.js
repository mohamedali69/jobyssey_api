const dbConfig = require("../config/db.config.js");
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize('postgresql://jobysseyproject:IyzSELW5mB8j@ep-purple-term-96252117.us-east-2.aws.neon.tech/jobyssey_db?sslmode=require', {
  dialect: 'postgres',
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

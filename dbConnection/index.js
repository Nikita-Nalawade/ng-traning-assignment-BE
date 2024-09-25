const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('to_do_listDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
    .then(() => {
        console.log("connected");

    })
    .catch(err => {
        console.log("Error" + err);

    })

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.sequelize.sync({ force: false })
    .then(() => {
        console.log("yes re-sync");

    })

db.taskList = require('../models/taskList')(sequelize, DataTypes);


module.exports = db;
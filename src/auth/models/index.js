"use strict";

require("dotenv");

const UsersModel = require('./users-model');
//Connect to the database
const POSTGRES_URI = process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/dunia';
const {Sequelize, DataTypes} = require('sequelize');
// const POSTGRES_URI = 'postgres://localhost:5432/dunia';

// config for prod
const sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    UsersModel:UsersModel(sequelize, DataTypes),
    
  }

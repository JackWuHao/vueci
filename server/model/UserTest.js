
var db = require('../db')
var seq = require('sequelize')



var UserTest = db('UserTest',{
    email:seq.STRING,
    name:seq.STRING(100),
    phone:seq.STRING,
    startDate: seq.BIGINT
})

module.exports = UserTest
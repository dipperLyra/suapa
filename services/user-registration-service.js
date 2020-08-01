//var {db} = require("../database/connection");
var model = require("../models/index");
var bcrypt = require("bcryptjs");
var message = require("../utils/messages");



function register(req, res) {
    let passwordHash = bcrypt.hashSync(req.body.password, 8);

    model.User.create({
        username: req.body.username,
        password: passwordHash,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(user => res.json({
        data: {
            success: true,
            message: message.user_created,
            user: user
        }
    }))
    .catch(err => res.json({
        data: {
            success: false,
            message: message.user_not_created
        }
    }))
}

function listAllUsers(req, res) {
    return model.User.findAll({
        attributes: ['username', 'email', 'createdAt', 'updatedAt']
    });
}

module.exports = {register, listAllUsers};
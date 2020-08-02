//var {db} = require("../database/connection");
var model = require("../models/index");
var bcrypt = require("bcryptjs");
var message = require("../utils/messages");
var {setSuccessResponseMessage, setFailResponseMessage} = require("../utils/response");



function register(req, res) {
    model.User.create(setUserParams(req))
    .then(user => setSuccessResponseMessage(res, user, message.user_created))
    .catch(err => setFailResponseMessage(res, err, message.user_not_created))
}

function setUserParams(req) {
    let passwordHash = bcrypt.hashSync(req.body.password, 8);

    return {
        username: req.body.username,
        password: passwordHash,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}

function signin(req, res) {
    model.User.findOne({
        where: req.body.username
    })
    .then(user => {
        let isPassword = bcrypt.compareSync(req.body.password, user.password);

        if(isPassword) {
            return true
        } else {
            return false
        }
    })
}

function listAllUsers(req, res) {
    return model.User.findAll({
        attributes: ['username', 'email', 'createdAt', 'updatedAt']
    });
}

function deleteAllUsers() {
     model.User.destroy({
        truncate: true
    });
}

module.exports = {register, listAllUsers, deleteAllUsers};
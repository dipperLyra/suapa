var model = require("../models/index");
var message = require("../utils/messages");
var {setSuccessResponseMessageItem, setFailResponseMessage} = require("../utils/response");
const items = require("../models/items");

/* save new item */
function createItem(req, res) {
    model.Items.create({
        name: req.body.item_name,
        description: req.body.item_description,
        email: req.body.contact_phone,
        phone: req.body.contact_email
    })
    .then(item => setSuccessResponseMessageItem(res, item, message.item_created))
    .catch(err => setFailResponseMessage(res, err, message.item_not_created)) 
}

/* list all items */
function listAllItems(res) {
    model.Items.findAll()
    .then(items => res.send(items))
    .catch(err => setFailResponseMessage(res, err)) 
}

function getAllItems() {
    return model.Items.findAll(); 
}

module.exports = {createItem, listAllItems, getAllItems};
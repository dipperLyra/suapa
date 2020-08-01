var model = require("../models/index");

model.PostSubCategory.create()
function post(req, res) {
    model.PostCategory.create({
        name: req.body.category_name
    })
    
}
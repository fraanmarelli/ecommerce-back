const Category = require('../models/category');
const { errorHandler } = require("../helpers/dbErrorHandler")

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((error, category) => {
        if (error || !category) {
            return error.status(400).json({
                error: "category is not like that"
            })
        }
        req.category = category;
        next();
    })
}

exports.create = (req, res) => {
    const category = new Category(req.body)
    category.save((error, data) => {
        if (error) {
            return res.status(400).json({
                error: errorHandler(error)
            })
        }
        res.json({ data })
    })
}

exports.read = (req, res) => {
    return res.json(req.category)
}

exports.update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((error, data) => {
        if (error) {
            res.status(400).json({
                error: errorHandler(error)
            })
        }
        res.json(data)
        console.log(data)
    })
}

exports.remove = (req, res) => {
    const category = req.category;
    category.delete((error, data) => {
        if (error) {
            res.status(400).json({
                error: errorHandler(error)
            })
        }
        res.json({
            message: "Category deleted succesfully"
        })
    }) 
}

exports.list = (req, res) => {
    Category.find().exec((error, categories) => {
        if (error) {
            res.status(400).json({
                error: errorHandler(error)
            })
        }
        res.json(categories)
    })
}
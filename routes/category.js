const express = require('express');
const router = express.Router();


const { create, read, categoryById, update, remove, list } = require("../controllers/category");
const { isAdmin, requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", requireSignin ,read)
router.post("/category/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/category/:categoryId/:userId", requireSignin, isAuth, isAdmin ,update);
router.delete("/category/:categoryId/:userId", requireSignin, isAdmin, isAuth, remove)
router.get("/categories", list)

router.param('userId', userById);
router.param('categoryId', categoryById)

module.exports = router;

//preguntar xq a veces la ruta agrega direccion y a veces no 
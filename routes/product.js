const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user")

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
} = require("../controllers/product");


router.get('/product/:productId', read);
router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.get('/products', list)
router.post('products/by/search', listBySearch)
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update)

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
const express = require('express');
const router = express.Router();
const app = express();
const Product = require('../models/Product');
const indexRouter = require('../routes/index');
app.use('/', indexRouter)
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.findAll();
//         res.render('index', { products });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Đã xảy ra lỗi' });
//     }
// });

router.get('/api/product', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
});


module.exports = router;

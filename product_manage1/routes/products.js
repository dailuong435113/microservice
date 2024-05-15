const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Trang thêm sản phẩm mới
router.get('/add', (req, res) => {
    res.sendFile('addProduct.html', { root: './views' });
});


// router.get('/', async (req, res) => {
//     const products = await Product.findAll();
//     res.render('index', { products });
// });

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/create', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
          return res.status(400).send('Name and email are required');
        }
        const newProduct = await Product.create({ name, email });
        res.send(`User ${newProduct.name} added successfully!`);
      } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
      }
  });

router.post('/delete', async (req, res) => {
    try {
      const id = req.body.id; // Sử dụng req.body thay vì req.params
      const deleted = await Product.destroy({
        where: { id: id }
      });
  
      if (deleted) {
        res.send('User deleted');
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send('Error deleting user');
    }
});

router.get('/edit/:id', async (req, res) => {
  try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
          res.render('edit_product', { product });
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error('Error finding user:', error); 
      res.status(500).send('Error finding user');
  }
});


// Xử lý form sửa thông tin người dùng
router.post('/edit', async (req, res) => {
  try {
      const { id, name, email } = req.body;
      const updated = await Product.update({ name, email }, {
          where: { id: id }
      });

      if (updated) {
          res.send('User updated successfully');
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Error updating user');
  }
});



module.exports = router;

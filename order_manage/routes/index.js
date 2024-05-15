const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('index', { users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
});

router.get('/api/user', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
});

router.post('/api/user/create', async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
          return res.status(400).json({ message: 'Name and email are required' });
        }
        const newUser = await User.create({ name, email });
        res.json({ message: `User ${newUser.name} added successfully!` });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Error adding user' });
    }
});

router.post('/api/user/edit', async (req, res) => {
    try {
        const { id, name, email } = req.body;
        const updated = await User.update({ name, email }, {
            where: { id: id }
        });

        if (updated[0] > 0) { // Sequelize update returns an array with count of affected rows
            res.json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
});

router.post('/api/user/delete', async (req, res) => {
    try {
      const id = req.body.id; // Sử dụng req.body thay vì req.params
      const deleted = await User.destroy({
        where: { id: id }
      });
  
      if (deleted) {
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user' });
    }
});

module.exports = router;

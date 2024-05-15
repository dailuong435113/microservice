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
        // Destructure các trường từ req.body
        const { username, email, password, address, sex, phone, groupId } = req.body;

        // Kiểm tra điều kiện bắt buộc của các trường
        if (!username || !email || !password) {
          return res.status(400).json({ message: 'Username, email, and password are required' });
        }

        // Tạo người dùng mới với toàn bộ thông tin từ req.body
        const newUser = await User.create({
          username,
          email,
          password,
          address,
          sex,
          phone,
          groupId
        });

        // Phản hồi thành công với thông tin người dùng mới
        res.json({ message: `User ${newUser.username} added successfully!` });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Error adding user' });
    }
});


router.post('/api/user/edit', async (req, res) => {
    try {
        const { id, username, email, address, sex, phone } = req.body;
        const updated = await User.update({ username, email, address, sex, phone }, {
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

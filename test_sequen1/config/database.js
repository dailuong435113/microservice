const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'mysql'
// });
const sequelize = new Sequelize('mydatabase', 'myuser', 'mypassword', {
  host: 'localhost',
  dialect: 'mysql', // Loại CSDL bạn đang sử dụng
  port: '8080',
});
module.exports = sequelize;

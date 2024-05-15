const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');
const app = express();

const cors = require('cors');
app.use(cors());
// Nếu bạn muốn giới hạn các nguồn cụ thể
// app.use(cors({
//   origin: ['http://localhost:8000', 'https://your-web-domain.com'] // Cập nhật để phù hợp với domain/port của bạn
// }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'))
// Kết nối CSDL
sequelize
  .authenticate()
  .then(() => {
    console.log('Kết nối CSDL thành công.');
  })
  .catch(err => {
    console.error('Không thể kết nối CSDL:', err);
  });

app.use(express.json());
app.use('/products', productRouter);

app.use('/', indexRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`http://localhost:${PORT}/api/product`);
});

// Secret key
require('dotenv').config(); 

const express = require('express');
const app = express();
const port = 3000;

// Khởi tạo template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Khởi tạo file public
app.use(express.static('public'));

// Đọc cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.SESSION_COOKIE));

// Middleware kkiểm tra tính xác thực của dữ liệu gởi từ form
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true }); // Middleware 

// Đọc dữ liệu từ form
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Đọc file dữ liệu được upload lên
const multer = require('multer');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server khởi tạo tại cổng ${port}`));
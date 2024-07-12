require('dotenv').config();
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const app = express(); // app express
const port = process.env.PORT || 8888; // gọi đến port bên file env (port 8080); // port 
const hostname = process.env.HOST_NAME; // gọi đến port bên file env hostname

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//config template engine
configViewEngine(app);

// Khai báo routes - tuyến đường
/**
 * sử dụng để đăng ký middleware hoặc các tuyến đường cho ứng dụng của bạn
 * cấu trúc cơ bản : app.use([path,] middlewareFunction)
 * path (tùy chọn): Đây là đường dẫn cơ sở hoặc đừng dẫn cụ thể mà middleware sẽ được gắn vào. Nếu không chỉ định, middleware sẽ được áp dụng cho tất cả các đường dẫn.
 */
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});



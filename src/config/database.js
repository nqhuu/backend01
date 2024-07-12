require('dotenv').config();

// const mysql = require('mysql2/promise'); // cách này đang bị lỗi
const mysql = require('mysql2/promise');

// Tạo biến chứa hàm createConnection được lấy từ mysql2 
// Create the connection to database
const connection = mysql.createPool({ // sử dụng createPool thay vì createConnection để giới hạn số lượng truy cập nhằm tránh việc data bị quá tải dẫn đến sập
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4',
    // đi theo createPool
    waitForConnections: true,
    connectionLimit: 10, // giới hạn số kết nối tối đa là 10
    queueLimit: 0,
});

module.exports = connection;
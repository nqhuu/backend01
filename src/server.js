require('dotenv').config();
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express(); // app express
const port = process.env.PORT || 8888; // gọi đến port bên file env (port 8080); // port 
const hostname = process.env.HOST_NAME; // gọi đến port bên file env hostname

const mysql = require('mysql2');

//config template engine
configViewEngine(app);

// Khai báo routes - tuyến đường
app.use('/', webRoutes);

// test connextion mysql 
// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});

// A simple SELECT query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});



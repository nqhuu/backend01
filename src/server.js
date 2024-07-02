require('dotenv').config();
const express = require('express'); // commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express(); // app express
const port = process.env.PORT || 8888; // gọi đến port bên file env (port 8080); // port 
const hostname = process.env.HOST_NAME; // gọi đến port bên file env hostname


//config template engine
configViewEngine(app);

// Khai báo routes - tuyến đường
app.use('/', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
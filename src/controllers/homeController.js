const express = require('express');
const { getAllUsers, getUserById, updateUserById,
    createUser, deleteUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
};



// render ra giao diện nhập của create page
const getCreatePage = (req, res) => {
    res.render('create.ejs');
    /**ta có thể truyền tham số thứ 2 cho render như sau
     * res.render('index', { title: 'Home with EJS' });
     * khi đó trong file index.ejs của chúng ta ta có thể thao tác với tham số thứ 2 nay (bắt buộc là 1 object).
     */
};

// render ra giao diện nhập của update page
const getUpdatePage = async (req, res) => {
    /**
  * req.params là một thuộc tính của đối tượng req (request) trong Express.js, 
  * req.params sẽ lấy thông tin trên đường dân URL trả về 1 object 
  * id là tên key được đặt từ bên router.get('/update/:id', getUpdatePage); >>>>> (chữ id sau dấu :)
  * value sẽ được lấy từ <a href="/update/<%= user.id %>">Edit</a> bên file home.ejs
  * khi click vào thẻ a thì sẽ đưa ta đến đường link có kiểu /update/value
  * */
    const userId = req.params.id;
    let user = await getUserById(userId) // lấy database, truyền user id vào hàm getUserById để sử dụng lấy dữ liệu của user
    res.render('edit.ejs', { userEdit: user }); // truyền đối số thứ 2 vào hàm render đẻ xử lý bên file ejs
};

// lấy dữ liệu từ fe để tạo người dùng đưa vào database
const postCreateUser = async (req, res) => {
    // lấy dữ liệu input từ FE và gán cho từng biến (1)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let { email, name, city } = req.body; // sử dụng object destructuring với object
    // ***********đẩy dữ liệu từ FE vào database************
    // thực hiện insert dữ liệu vào database với câu lệnh connection.query, 2 biến results, fields sử dụng để lưu thông tin về kết quả truy vấn và thông tin về các cột trong bảng cơ sở dữ liệu
    // connection.query(
    //     ` INSERT INTO 
    //     Users (email, name, city)
    //     VALUES (?, ?, ?)`, // mỗi dấu ? tướng ứng với dữ liệu động đượ tạo ở (1) và gắn vào (3)
    //     [email, name, city], // (3)
    //     function (err, results) {
    //         res.send('create user success');
    //     }
    // );


    // thực hiện insert dữ liệu vào database với câu lệnh connection.query, 2 biến results, fields sử dụng để lưu thông tin về kết quả truy vấn và thông tin về các cột trong bảng cơ sở dữ liệu
    await createUser(email, name, city);

    res.redirect('/'); // Chuyển hướng người dùng về trang chủ
}


// update thông tin người dùng
const postUpdatePage = async (req, res) => {
    // lấy dữ liệu input từ FE và gán cho từng biến (1)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email, name, city, userId);

    res.redirect('/'); // Chuyển hướng người dùng về trang chủ
}

// render thông tin người dùng cần xóa
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId) // lấy database, truyền user id vào hàm getUserById để sử dụng lấy dữ liệu của user
    res.render('delete.ejs', { userEdit: user })
}


// xóa người dùng
const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserById(userId);
    res.redirect('/'); // Chuyển hướng người dùng về trang chủ
}

// exports ra bên ngoài
module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdatePage,
    postDeleteUser,
    postHandleRemoveUser
};


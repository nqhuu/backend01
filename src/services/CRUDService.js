//chịu trách nhiệm lấy data
const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users') // lấy database tất cả user
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]) // lấy database của user có id được lấy từ params (url)
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.query( // đẩy dữ liệu từ FE vào database . results chứa thông tin về kết quả của truy vấn SQL
        ` INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, // mỗi dấu ? tướng ứng với dữ liệu động đượ tạo ở (1) và gắn vào (3)
        [email, name, city], // (3)
    );
}


const updateUserById = async (email, name, city, userId) => {
    // thực hiện UPDATE dữ liệu vào database với câu lệnh connection.query, 2 biến results, fields sử dụng để lưu thông tin về kết quả truy vấn và thông tin về các cột trong bảng cơ sở dữ liệu
    let [results, fields] = await connection.query( // đẩy dữ liệu từ FE vào database . results chứa thông tin về kết quả của truy vấn SQL
        ` UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, // mỗi dấu ? tướng ứng với dữ liệu động đượ tạo ở (1) và gắn vào (3)
        [email, name, city, userId], // (3)
    );
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById
}

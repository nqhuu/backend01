
const express = require('express')
const path = require('path');
const configViewEngine = (app) => { // cấu hình view engine , app ở đây là 1 đối số của arow function, ta có thể đổi bằng tên khác
    app.set('views', path.join('./src', 'views'));
    /***cấu hình folder chứa các file views, app.set(key, value).
     * để set 1 thư mục chứ file views thì key bắt buộc phải là 'views' trong 1 ứng dụng chỉ nên có 1 cấu hình views
     * nếu có nhiều đường dẫn thì ta sẽ để value là 1 mảng chứa các đường dẫn app.set('views', [
                                                                                        path.join(__dirname, 'views'),
                                                                                        path.join(__dirname, 'templates'),
                                                                                    ]);
     *khi clien gửi về 1 path thì nó sẽ tìm đến file view đầu tiên nó tìm thấy trong mảng các đường dẫn folder chứa 
    */

    //cấu hình engine view, cái này dùng để đọc và render file view, nó phải được set trước khi đăng ký route
    // Ở đây ta đã set 'ejs' là engine view, nếu muốn sử dụng một engine khác thì phải thay đổi tại đây
    // key khai báo bắt buộc phải là view engine
    app.set('view engine', 'ejs');
    /**config static files
     * khi muốn cấu hình folder chứa các file tĩnh ta sẽ sử dụng express.static(root) , root ở đây băt buộc là đường dẫn của folder chứa các file tĩnh của bạn
     * trong Express thì express.static chỉ dùng để cấu hình thư mục gốc (root) mà Express sẽ sử dụng để phục vụ các file tĩnh.
     * */
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;
Lớp 2var options = [
    "<option value='Lớp 1'>Lớp 1</option>"
    +"<option value='Lớp 2'>Lớp 2</option>"
    +"<option value='Lớp 3'>Lớp 3</option>"
    +"<option value='Lớp 4'>Lớp 4</option>"
    +"<option value='Lớp 5'>Lớp 5</option>"
    +"<option value='Lớp 6'>Lớp 6</option>"
    +"<option value='Lớp 7'>Lớp 7</option>"
    +"<option value='sgk8'>Lớp 8</option>"
    +"<option value='Lớp 9'>Lớp 9</option>"
    +"<option value='sgk10'>Lớp 10</option>"
    +"<option value='Lớp 11'>Lớp 11</option>"
    +"<option value='Lớp 12'>Lớp 12</option>",

    "<option value='Lớp 1'>Lớp 1</option>"
    +"<option value='Lớp 2'>Lớp 2</option>"
    +"<option value='Lớp 3'>Lớp 3</option>"
    +"<option value='Lớp 4'>Lớp 4</option>"
    +"<option value='Lớp 5'>Lớp 5</option>"
    +"<option value='Lớp 6'>Lớp 6</option>"
    +"<option value='Lớp 7'>Lớp 7</option>"
    +"<option value='Lớp 8'>Lớp 8</option>"
    +"<option value='Lớp 9'>Lớp 9</option>"
    +"<option value='Lớp 10'>Lớp 10</option>"
    +"<option value='Lớp 11'>Lớp 11</option>"
    +"<option value='Lớp 12'>Lớp 12</option>",

    "<option value='Tiểu thuyết'>Tiểu thuyết</option>"
    +"<option value='Truyện ngắn - Tản văn<'>Truyện ngắn - Tản văn</option>"
    +"<option value='Huyền bí - Giả tưởng'>Huyền bí - Giả tưởng</option>"
    +"<option value='Phóng sự - Ký sự<'>Phóng sự - Ký sự</option>"
    +"<option value='Trinh thám - Kinh dị'>Trinh thám - Kinh dị</option>"
    +"<option value='Tiểu sử - Hồi ký'>Tiểu sử - Hồi ký</option>",

    "<option value='Tiểu sử - Hồi ký'>Tiểu sử - Hồi ký</option>"
    +"<option value='Truyện lịch sử - Kiếm hiệp'>Truyện lịch sử - Kiếm hiệp</option>"
    +"<option value='Truyện ngắn - Tản văn'>Truyện ngắn - Tản văn</option>"
    +"<option value='Tác phẩm kinh điển'>Tác phẩm kinh điển</option>"
    +"<option value='Huyền bí - Giả tưởng'>Huyền bí - Giả tưởng</option>"
    +"<option value='Trinh thám - Kinh dị'>Trinh thám - Kinh dị</option>"
    +"<option value='Tiểu thuyết tình cảm - Lãng mạn'>Tiểu thuyết tình cảm - Lãng mạn</option>"
    +"<option value='Tiểu thuyết đam mỹ'>Tiểu thuyết đam mỹ</option>"
    +"<option value='Bách hợp'>Bách hợp</option>",

    "<option value='Truyện tranh Nhật Bản'>Truyện tranh Nhật Bản</option>"
    +"<option value='Truyện tranh Hàn Quốc'>Truyện tranh Hàn Quốc</option>"
    +"<option value='Truyện tranh Trung Quốc'>Truyện tranh Trung Quốc</option>"
    +"<option value='Truyện tranh phương Tây'>Truyện tranh phương Tây</option>",

    "<option value='Từ diển'>Từ diển</option>"
    +"<option value='Sách học tiếng Anh'>Sách học tiếng Anh</option>"
    +"<option value='Sách học tiếng Hoa'>Sách học tiếng Hoa</option>"
    +"<option value='Sách học tiếng Nhật'>Sách học tiếng Nhật</option>",

    "<option value='Truyện cổ tích - Thần thoại'>Truyện cổ tích - Thần thoại</option>"
    +"<option value='Vừa học vừa chơi'>Vừa học vừa chơi</option>"
    +"<option value='Kiến thức - Kỹ năng'>Kiến thức - Kỹ năng</option>"
    +"<option value='Văn học'>Văn học</option>"
    "<option value='Truyện kể bé nghe'>Truyện kể bé nghe</option>",

    "<option value='Kỹ năng sống'>Kỹ năng sống</option><option value='Nghệ thuật sống đẹp'>Nghệ thuật sống đẹp</option>"
];


$(document).ready(function() {
    $("#type").change(function() {
        var val = $(this).val();
        if (val == "Sách giáo khoa") {
            $("#category").html(options[0]);
        } else if (val == "Sách tham khảo") {
            $("#category").html(options[1]);
        } else if (val == "Văn học trong nước") {
            $("#category").html(options[2]);
        }
    });
});

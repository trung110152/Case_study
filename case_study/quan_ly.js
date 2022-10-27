let hoten = ['Cao Văn Trung','Nguyễn Ngọc Kiên','Trần Văn Trì','Hoàng Anh Lỗ','Lê Trọng Lực'];
let ngaysinh = ['25/01/1996','01/01/1997','12/06/1998','12/12/1999','02/05/2000'];
let gioitinh = ['Nam','Nam','Nam','Nam','Nam'];
let diachi = ['Hải Dương','Thanh Hóa','Hà Nội','Tp Hồ Chí Minh','Bình Dương'];
let sodt = ["0981641139",'0987654321','0987654312','0987654123','0987651234']

function showList() {
    let j = 0;
    let table = " <tr>" +
        " <td>STT</td>" +
        " <td>Họ và tên</td>" +
        " <td>Ngày sinh</td>" +
        " <td>Giới tính</td>" +
        " <td>Địa chỉ</td>" +
        " <td>Liên lac</td>" +
        " <td colspan='2'>Ghi chú</td>" +
        " </tr>";
    for (let i = 0; i < hoten.length; i++) {
        j++;
        table += "<tr class='a'>" +
            "<td>" + j + "</td>" +
            "<td>" + hoten[i] + "</td>" +
            "<td>" + ngaysinh[i] + "</td>" +
            "<td>" + gioitinh[i] + "</td>" +
            "<td>" + diachi[i] + "</td>" +
            "<td>" + sodt[i] + "</td>" +
            "<td><button onclick ='edit(" + i + ")'>Thay đổi</button></td>" +
            "<td><button onclick ='dxoa(" + i + ")'>Xóa bỏ</button></td>" + "</tr>";
    }
    document.getElementById("liststudent").innerHTML = table;
}

showList()

function add() {
    let fullname = document.getElementById("fullname").value;
    let birthday = document.getElementById("birthday").value;
    let gender = document.getElementById("gender").value;
    let dress = document.getElementById("dress").value;
    let phonenumber = document.getElementById("phonenumber").value;
    hoten.push(fullname);
    ngaysinh.push(birthday);
    gioitinh.push(gender);
    diachi.push(dress);
    sodt.push(phonenumber);
    showList()
}

function dxoa(i) {
    hoten.splice(i, 1)
    showList();
}

function edit(i) {
    let str = '';
    str += "<tr>" +
        "<td><input id='editname' value='" + hoten[i] + "'></td>" +
        "<td><input id='editbirth' value='" + ngaysinh[i] + "'></td>" +
        "<td><input id='editgender' value='" + gioitinh[i] + "'></td>" +
        "<td><input id='editdress' value='" + diachi[i] + "'></td>" +
        "<td><input id='editphone' value='" + sodt[i] + "'></td>" +
        "<td><button onclick ='save(" + i + ")'>Lưu</button></td>" + "</tr>";
    document.getElementById("edit").innerHTML = str;
}

function save(i) {
    hoten[i] = document.getElementById("editname").value;
    ngaysinh[i] = document.getElementById("editbirth").value;
    gioitinh[i] = document.getElementById("editgender").value;
    diachi[i] = document.getElementById("editdress").value;
    sodt[i] = document.getElementById("editphone").value;
    document.getElementById("edit").innerHTML = "";
    showList()
}

function search() {
    let word = document.getElementById("student_name").value;
    for (let i = 0; i < hoten.length; i++) {
        if (word === hoten[i]) {
            return kq(i);
        }
    }
    alert('Không tìm thấy: ' + word);
}

function kq(i) {
    let ketqua = "<table border='1'><tr>" +
        " <td>Họ và tên</td>" +
        " <td>Ngày sinh</td>" +
        " <td>Giới tính</td>" +
        " <td>Địa chỉ</td>" +
        " <td>Liên lac</td>" +
        " <td>Ghi chú</td>\n" +
        " </tr><tr>" +
        "<td>" + hoten[i] + "</td>" +
        "<td>" + ngaysinh[i] + "</td>" +
        "<td>" + gioitinh[i] + "</td>" +
        "<td>" + diachi[i] + "</td>" +
        "<td>" + sodt[i] + "</td>" +
        "<td><button onclick='done()'>Xong</td>" +
        "</tr></table>";
    document.getElementById("result").innerHTML = ketqua;
}

function done() {
    document.getElementById("result").innerHTML = "";
}
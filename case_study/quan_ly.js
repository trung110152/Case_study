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
        table += "<tr >" +
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

function showListSearch(index) {
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
    for (let i = 0; i < index; i++) {
        j++;
        table += "<tr >" +
            "<td>" + j + "</td>" +
            "<td>" + hoten[i] + "</td>" +
            "<td>" + ngaysinh[i] + "</td>" +
            "<td>" + gioitinh[i] + "</td>" +
            "<td>" + diachi[i] + "</td>" +
            "<td>" + sodt[i] + "</td>" +
            "<td><button onclick ='edit(" + i + ")'>Thay đổi</button></td>" +
            "<td><button onclick ='dxoa(" + i + ")'>Xóa bỏ</button></td>" + "</tr>";
    }
    j++;
    table += "<tr style='background-color: white'>" +
        "<td>" + j + "</td>" +
        "<td>" + hoten[index] + "</td>" +
        "<td>" + ngaysinh[index] + "</td>" +
        "<td>" + gioitinh[index] + "</td>" +
        "<td>" + diachi[index] + "</td>" +
        "<td>" + sodt[index] + "</td>" +
        "<td><button onclick ='edit(" + index + ")'>Thay đổi</button></td>" +
        "<td><button onclick ='dxoa(" + index + ")'>Xóa bỏ</button></td>" + "</tr>";
    for (let i = index+1; i < hoten.length; i++) {
        j++;
        table += "<tr>" +
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
    showListSearch(hoten.length -1);
    document.getElementById("fullname").value= '';
    document.getElementById("birthday").value= '';
    document.getElementById("gender").value= '';
    document.getElementById("dress").value= '';
    document.getElementById("phonenumber").value= '';
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
    for (let x = 0; x < hoten.length; x++) {
        if (word === hoten[x]) {
            showListSearch(x);
            break;
        }
    }
    // alert('Không tìm thấy: ' + word);
}

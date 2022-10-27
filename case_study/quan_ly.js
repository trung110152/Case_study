let hoten    = ['Cao Văn Trung'];
let ngaysinh = ['25/01/1996'];
let gioitinh = ['Nam'];
let diachi   = ['Hải Dương'];
let sodt     = ["0981641139"];
display();
function display() {
   let table = " <tr>\n" +
       " <td>STT</td>\n" +
       " <td>Họ và tên</td>\n" +
       " <td>Ngày sinh</td>\n" +
       " <td>Giới tính</td>\n" +
       " <td>Địa chỉ</td>\n" +
       " <td>Liên lac</td>\n" +
       " <td colspan='2'>Ghi chú</td>\n" +
       " </tr>";
   for ( let i = 0; i < hoten.length; i++) {
      table += "<tr class='a'>" +
          "<td>" + hoten.length + "</td>" +
          "<td>" + hoten[i] + "</td>" +
          "<td>" + ngaysinh[i] + "</td>" +
          "<td>" + gioitinh[i] + "</td>" +
          "<td>" + diachi[i] + "</td>" +
          "<td>" + sodt[i] + "</td>" +
          "<td><button onclick ='edit(" + i + ")'>Thay đổi</button></td>" +
          "<td><button onclick ='dxoa(" + i + ")'>Xóa bỏ</button></td>" + "</tr>";
   }
   table = table + "</table>";
   document.getElementById("liststudent").innerHTML = table;
}

function add() {
   let fullname    = document.getElementById("fullname").value;
   let birthday    = document.getElementById("birthday").value;
   let gender      = document.getElementById("gender").value;
   let dress       = document.getElementById("dress").value;
   let phonenumber = document.getElementById("phonenumber").value;
   hoten.push(fullname);
   ngaysinh.push(birthday);
   gioitinh.push(gender);
   diachi.push(dress);
   sodt.push(phonenumber);
   display();
}

function dxoa(i) {
   hoten.splice(i, 1)
   display();
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
       str = str + "</table>";
       document.getElementById("edit").innerHTML = str;
}

function save(i){
   hoten[i] = document.getElementById("editname").value;
   ngaysinh[i] = document.getElementById("editbirth").value;
   gioitinh[i] = document.getElementById("editgender").value;
   diachi[i] = document.getElementById("editdress").value;
   sodt[i] = document.getElementById("editphone").value;
   document.getElementById("edit").innerHTML= "";
   display();
}

function search() {
   let word = document.getElementById("student_name").value;
   for(let i = 0; i < hoten.length; i++ ){
      if(word === hoten[i]){
         return alert('Học viên: ' + hoten[i] + ' Sinh ngày: ' + ngaysinh[i] + ' Giới tính: ' + gioitinh[i]  + ' Địa chỉ: ' + diachi[i] + ' Số đt: ' + sodt[i] );
      }
   }
   alert('Không tìm thấy: ' + word);
}
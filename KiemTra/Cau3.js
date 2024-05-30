class SOTIETKIEM {
    constructor(maSo, loaiTietKiem, tenKhachHang, CMND, ngayMoSo, soTienGui){
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.tenKhachHang = tenKhachHang;
        this.CMND = CMND;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }

    getMaSo(){
        return this.maSo;
    }
    getLoaiTietKiem(){
        return this.loaiTietKiem;
    }
    getTenKhachHang(){
        return this.tenKhachHang;
    }
    getCMND(){
        return this.CMND;
    }
    getNgayMoSo(){
        return this.ngayMoSo;
    }
    getSoTienGui(){
        return this.soTienGui;
    }

    edit(maSo, loaiTietKiem, tenKhachHang, CMND, ngayMoSo, soTienGui){
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.tenKhachHang = tenKhachHang;
        this.CMND = CMND;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }

}

let soTK1 = new SOTIETKIEM('abc1', "Thường", "Nguyen Van A", "123456789", "01/01/2020", 1000000);
let soTK2 = new SOTIETKIEM('abc2', "Thường", "Nguyen Van B", "111112223", "01/01/2020", 2000000);
let soTK3 = new SOTIETKIEM('edf1', "Cao cấp", "Nguyen Van C", "656565656", "01/01/2020", 3000000);
let arr = [soTK1, soTK2, soTK3];
display();

function display(){
    let output = ""
    for(let i = 0; i < arr.length; i++) {
        output += "<tr>";
        output += "<td>" + (i + 1) + "</td>";
        output += "<td>" + arr[i].getMaSo() + "</td>";
        output += "<td>" + arr[i].getLoaiTietKiem() + "</td>";
        output += "<td>" + arr[i].getTenKhachHang() + "</td>";
        output += "<td>" + arr[i].getCMND() + "</td>";
        output += "<td>" + arr[i].getNgayMoSo() + "</td>";
        output += "<td>" + arr[i].getSoTienGui() + "</td>";
        output += "</tr>";
    }
    document.getElementById('content').innerHTML = output;
}

function themSo(){
    let maSo = prompt("Nhập mã sổ: ");
    while(KT_maSo(maSo) === false){
        maSo = prompt("Mã sổ không hợp lệ hoặc đã tồn tại! Vui lòng nhập lại: ");
    }
    let loaiTietKiem = prompt("Nhập loại tiết kiệm: ");
    while(KT_loaiTietKiem(loaiTietKiem) === false){
        loaiTietKiem = prompt("Loại tiết kiệm không hợp lệ! Vui lòng nhập lại: ");
    }
    let tenKhachHang = prompt("Nhập tên khách hàng: ");
    while(KT_tenKhachHang(tenKhachHang) === false){
        tenKhachHang = prompt("Tên khách hàng không hợp lệ! Vui lòng nhập lại: ");
    }
    let CMND = +prompt("Nhập CMND: ");
    while(KT_CMND(CMND) === false){
        CMND = +prompt("CMND không hợp lệ! Vui lòng nhập lại: ");
    }
    let ngayMoSo = prompt("Nhập ngày mở sổ: ");
    while(KT_ngayMoSo(ngayMoSo) === false){
        ngayMoSo = prompt("Ngày mở sổ không hợp lệ! Vui lòng nhập lại: ");
    }
    let soTienGui = +prompt("Nhập số tiền gửi: ");
    while(KT_soTienGui(soTienGui) === false){
        soTienGui = +prompt("Số tiền gửi không hợp lệ! Vui lòng nhập lại: ");
    }
    arr.push(new SOTIETKIEM(maSo, loaiTietKiem, tenKhachHang, CMND, ngayMoSo, soTienGui));
    alert("Thêm sổ thành công!");
    display();
}

function xoaSo(){
    let maSo = prompt("Nhập mã sổ cần xóa: ");
    if(isExist(maSo) === false){
        alert("Sổ không tồn tại! Vui lòng nhập lại!");
        xoaSo();
    }
    else{
        let check = confirm("Bạn có chắc chắn muốn xóa không?");
        if(check){
            for(let i = 0; i < arr.length; i++){
                if(arr[i].getMaSo() === maSo){
                    arr.splice(i, 1);
                    break;
                }
            }
        }
        alert("Xóa sổ " + maSo + " thành công!");
        display();
    }
}

function KT_maSo(maSo){
    return !(maSo.length > 5 || maSo === "" || isExist(maSo));

}

function KT_loaiTietKiem(loaiTietKiem){
    return !(loaiTietKiem.length > 10 || loaiTietKiem === "");
}

function KT_tenKhachHang(tenKhachHang){
    return !(tenKhachHang.length > 30 || tenKhachHang === "");
}

function KT_CMND(CMND){
    return !(typeof(CMND) !== "number" || CMND === "");
}

function KT_ngayMoSo(ngayMoSo){
    return !(ngayMoSo.length > 10 || ngayMoSo.length < 10 || ngayMoSo[2] !== "/" && ngayMoSo[5] !== "/" || ngayMoSo.slice(0, 2) > 31 || ngayMoSo.slice(3, 5) > 12);
}

function KT_soTienGui(soTienGui){
    return !(typeof(soTienGui) !== "number" || soTienGui === "");
}
// Kiểm tra mã sổ đã tồn tại chưa
function isExist(maSo){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].getMaSo() === maSo){
            return true;
        }
    }
    return false;
}
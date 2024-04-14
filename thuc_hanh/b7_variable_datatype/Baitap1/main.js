function diemTB() {
    let p1 = +document.getElementById("physics").value;
    let p2 = +document.getElementById("chemistry").value;
    let p3 = +document.getElementById("biology").value;
    let result = (p1 + p2 + p3) / 3;
    document.getElementById("diemTB").innerHTML = Math.round(result*100)/100;
}

function convertTemp() {
    let doC = +document.getElementById("doC").value;
    document.getElementById("doF").innerHTML = doC*9/5 + 32;
}

const pi = 3.14;
function tinhDienTich() {
    let r = +document.getElementById("banKinh").value;
    let s = pi * r * r;
    document.getElementById("result1").innerHTML = Math.round(s*100)/100;
}

function tinhChuVi() {
    let r = +document.getElementById("banKinh").value;
    let p = 2 * pi * r;
    document.getElementById("result2").innerHTML = Math.round(p*100)/100;
}

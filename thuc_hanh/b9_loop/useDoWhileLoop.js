let val = null;

do{
    val = prompt("Nhập số từ 1 đến 10");
} while(val < 1 || val > 10);
alert("Số bạn vừa nhập là " + val);
function solve1() {
    let a = document.getElementById("numA").value;
    let b = document.getElementById("numB").value;
    if(a % b === 0)
        document.getElementById("ans1").innerHTML = "A chia hết cho B ";
    else
        document.getElementById("ans1").innerHTML = "A không chia hết cho B";
}

function solve2() {
    let age = document.getElementById("age").value;
    if(age >= 15)
        document.getElementById("ans2").innerHTML = "Bạn đã đủ tuổi vào lớp 10";
    else
        document.getElementById("ans2").innerHTML = "Bạn chưa tuổi vào lớp 10";
}

function solve3() {
    let num = document.getElementById("num").value;
    if(num >= 0)
        document.getElementById("ans3").innerHTML = "Số nguyên dương";
    else
        document.getElementById("ans3").innerHTML = "Số nguyên âm";
}

function solve4() {
    let a = +document.getElementById("num1").value;
    let b = +document.getElementById("num2").value;
    let c = +document.getElementById("num3").value;
    let max = a;
    if(max < b) max = b;
    if(max < c) max = c;
    document.getElementById("ans4").innerHTML = "Số lớn nhất là: " + max;
}

function solve5() {
    let tp = +document.getElementById("test").value;
    let mtp = +document.getElementById("mtest").value;
    let ftp = +document.getElementById("ftest").value;
    let average = (tp + 2*mtp + 3*ftp)/6;
    let ans = "";
    if(average >= 9) ans = "Giỏi";
    else if(average >= 7.5) ans = "Khá";
    else if(average >= 5) ans = "Trung bình";
    else ans = "Kém";
    document.getElementById("ans5").innerHTML = "Học lực của bạn là : " + ans;
}

function solve6() {
    let amount = +document.getElementById("amount").value;
    const m = 25000;
    let result;
    if(amount >= 500) result = m * amount * 0.3;
    else if(amount >= 250) result = m * amount * 0.2;
    else if(amount >= 150) result = m * amount * 0.1;
    else result = m * amount * 0.05;
    document.getElementById("ans6").innerHTML = "Tiền hoa hồng bạn nhận được là : " + result + "VNĐ";
}

function solve7() {
    let time = +document.getElementById("time").value;
    const m = 300;
    let result;
    if(time >= 1000)  result = m * time * 3;
    else if(time >= 500) result = m * time * 2;
    else if(time >= 250) result = m * time * 1.5;
    else result = m * time;
    document.getElementById("ans7").innerHTML = "Tiền cước tháng này của bạn là: " + result + "VNĐ";
}


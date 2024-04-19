function checkBMI() {
    let h = +document.getElementById("height").value;
    let w = +document.getElementById("weight").value;
    let bmi = w / (h*h); bmi = Math.round(bmi*100)/100;
    let type = "";
    if(bmi >= 30) type = "Béo phì";
    else if(bmi >= 25) type = "Thừa cân";
    else if(bmi >= 18.5) type = "Bình thường";
    else type = "Gầy";
    document.getElementById("result").innerHTML = "Chỉ số: " + bmi + " | " + " Trạng thái: " + type;
}
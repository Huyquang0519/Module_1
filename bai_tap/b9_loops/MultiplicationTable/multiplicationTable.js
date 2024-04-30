let sout;
sout = "<table border='1' width='700px' >";
for(let i = 1; i < 10; i++){
    sout += "<tr>";
    for(let j = 2; j <= 9; j++){
        sout += "<td>" + j + "x" + i + "=" + j * i + "</td>";
    }
    sout += "</tr>";
}
sout += "</table>"
document.getElementById("result").innerHTML = sout;


let output = "", x = 1, y = 2;
output += "<table border = '1' width='700px'>";
while(x < 10){
    output += "<tr>";
    while(y <= 9){
        output += "<td>" + x + " x " + y + " = " + x * y + "</td>";
        y++;
    }
    output += "</tr>";
    x++;
}
output += "</table>";
document.getElementById("output").innerHTML = output;
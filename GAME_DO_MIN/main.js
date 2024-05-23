

let arr = [
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

display();

function display() {
    let screen = "";
    for(let i = 0; i < 10; i++){
        screen += "<tr>";
        for(let j = 0; j < 10; j++){
            if(arr[i][j] !== 0){
                screen += "<td onclick='clickCell(" + i + "," + j + ")'>" + "</td>";
            }
            else
        }
        screen += "</tr>";
    }
    document.getElementById("screen").innerHTML = screen;
}

function clickCell(i, j) {
    if(arr[i][j] === "*") {
        arr[i][j] = "X";
    }
}

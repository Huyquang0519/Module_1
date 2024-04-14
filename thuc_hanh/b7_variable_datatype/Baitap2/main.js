function convertCurrency() {
    let amount = +document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;

    if (from == "VND" && to == "USD"){
        result = amount/23000 + " USD";
    }
    else if (from == "USD" && to == "VND"){
        result = amount * 23000 + " VND";
    }
    else if (from == to){
        result = amount;
        if (to == "VND") result += " VND";
        else result += " USD";
    }
    document.getElementById("result").innerHTML = result;
}
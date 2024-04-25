let number= +prompt("Nhập số lượng số nguyên tố");
console.log(number);
let cnt = 0;//
let n = 2;

while(cnt < number){
    if(isPrime(n)){
        document.write(n + "<br>");
        cnt++;
    }
    n++;
}

function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}





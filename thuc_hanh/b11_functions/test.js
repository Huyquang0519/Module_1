
// function sumAllNums(){
//     console.log(arguments);
// }
//
// sumAllNums(1, 2, 3, 4, 5);

// function sumAllNums(){
//     let sum = 0;
//     for(const number of arguments)
//         sum += number;
//     return sum;
// }

// console.log(sumAllNums(1,2,3,4,5));

// const sumAllNums = (...args) => {
//     let sum = 0;
//     for(const element of args){
//         sum += element;
//     }
//     return sum;
// }
// console.log(sumAllNums(1,2,3,4));

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
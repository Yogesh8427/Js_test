
let arr = [-2, 5, 3, -8, 10, -4];

//this function calculating only positive nums sum in array;
const sumOfPositives = (arr) => {
    let sum = 0;
    arr.forEach(value =>{if(value >= 0)sum += value;})
    return sum;
}

console.log(sumOfPositives(arr)); //output:18;
let num = 8046957321;

//making num to array;
num = num.toString();
num = Array.from(num);
num = num.map((value) => value = parseInt(value))

//sorting the array
let size = num.length;
for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        if (num[i] < num[j]) {
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
    }
}
console.log(num) //[0,1,2,3,4,5,6,7,8,9];

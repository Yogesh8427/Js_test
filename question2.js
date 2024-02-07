//array of objects of students data;
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 75 },
];

//finding High Scorers Students Names;
const getHighScorers = (arr, score) => {
    let newarr = [];
    arr.forEach((stu) => {if(stu.score > score) newarr.push(stu.name);})
    return newarr;
}

console.log(getHighScorers(students, 70)); //['Alice','Charlie','David']
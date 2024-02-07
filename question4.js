
//this function is geting a data from api and returning it;
const get_data = async () => {
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await responce.json();
        let newdata = [];
        for (i = 0; i < 5; i++)
            newdata.push(data[i].title);
        return newdata;
    } catch (error) {
        console.log("There is an error to fetching a data")
    }

}

get_data().then(data => console.log(data)); //this is a function call and after that printing a data to console;

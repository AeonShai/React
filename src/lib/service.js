import axios from 'axios';

const getData = async (number) => 
    {
        try{
            //User data
            const userResponse = await axios.get("https://jsonplaceholder.typicode.com/users/" + number);
            const userResult = userResponse.data;
            //Post data
            const  postResponse = await axios.get("https://jsonplaceholder.typicode.com/posts/" + number);
            const postResult = postResponse.data;

            return console.log(userResult, postResult);
        } catch(error){
            console.log(error);
        }
    }

    export default getData;
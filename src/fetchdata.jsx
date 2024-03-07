import React from "react";
import axios from 'axios';

function fetchdata(){
    const url="https://jsonplaceholder.typicode.com/";
    const[date,setdate]=usestate([]);
    async function fetchInfo (){
        try{
            const response=await axios.get(url)
            setData(response.data);
        }
        catch(error){
            console.log(error);
        }
    };
}
export default Fetchdata;
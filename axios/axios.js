import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:5000"
})

export const getPersonaje= async () =>{
    return axiosClient.get('/characters').then(response =>{
        if(response.status < 300){
            return response.data
        }
        else {
            console.log("Error, algo no funciona")
        }
    })
    .catch(function(err) {
        console.log("Catch, algo no funciona", err)
    })
}
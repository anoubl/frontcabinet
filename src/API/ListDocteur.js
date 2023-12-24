import axios from "axios";

export function listOfDocteur()
{
    axios.get("https://anoubl-001-site1.atempurl.com/api/Users")
    .then((response)=>{
        return response;
    })
    .catch((error)=>console.log(error))
}
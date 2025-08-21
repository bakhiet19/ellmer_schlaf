import axios from "axios";

const baseURL = 'https://bed-king.de'
const instance = axios.create({
  baseURL,
  headers : {
    'Content-Type' : 'application/json'
  }})


//get all apartment
 async function getAllApartment(endpoint , params = {}){
  try{
     const response = await instance.get(endpoint , {params})
     return response.data
  }catch(error){
    console.log(error);
  }
}

//get the result from the filtering
  async function filter(endpoint , city) {
    try{
      const response = await instance.get(endpoint , {city})
      return response.data
  } catch(er){
    console.log(er);
    }}


//get all the location in the map
async function allLocations(endpoint , params = {}) {
    try{
      const response = await instance.get(endpoint , {params})
      return response.data
    }catch(er){
      console.log(er);
    }
}


//send the contact details for DB
 async function contact(endpoint , formData) {
  try{
    const response = await instance.post(endpoint , formData)
    return response.data
  }catch(er){
    console.log(er);  
  }
}


  export default function app(){
    console.log('hello');
    
  }


export {getAllApartment , contact  , filter}
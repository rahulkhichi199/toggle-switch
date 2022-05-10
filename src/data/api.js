import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/';



export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'multipleFiles', data, options);
        
    } catch (error) {
        throw error;
        
    }
}
export const getMultipleFiles = async (filter,sort) => {
    try{
        let apiurl = apiUrl + 'getMultipleFiles'
        if(filter && !sort){
            apiurl =  `${apiurl}?filter=${JSON.stringify(filter)}`
        }
        if(sort && !filter){
            apiurl =  `${apiurl}?sort=${JSON.stringify(sort)}`
        }
        if(sort && filter){
            apiurl =  `${apiurl}?sort=${JSON.stringify(sort)}&filter=${JSON.stringify(filter)}`
        }
        const {data} = await axios.get(apiurl);
        console.log("getmultp",apiurl,data)
        return data;
    }catch(error){
        throw error;
    }
}





//getnfts

export const getnfts = async (_id) => {
    try {
        let apiurl =`http://localhost:8080/api/DetailNFT/${_id}`
        const {data} = await axios.get(`http://localhost:8080/api/DetailNFT/${_id}`);
        console.log("getmultple",apiurl,data)
        return data;
    } catch (error) {
        throw error;
        
    }
}
//


















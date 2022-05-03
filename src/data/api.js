import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/';






export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'multipleFiles', data, options);
        
    } catch (error) {
        throw error;
        
    }
}
export const getMultipleFiles = async () => {
    try{
        const {data} = await axios.get(apiUrl + 'getMultipleFiles');
        return data;
    }catch(error){
        throw error;
    }
}







// export const getMultipleFiles = async (req,res) => {
//     try{
        
// let sort = req.query.sort;
// let orderby = req.query.orderby;


//  const sortObject = {}; // create a blank sort object
//     sortObject['sort'] = orderby === 'asc' ? 1 : -1; // set the sorting 


//         const {data} = await axios.get(apiUrl + 'getMultipleFiles')
//         .sort(sortObject)
//         return data;
//     }catch(error){
//         throw error;
//     }
// }






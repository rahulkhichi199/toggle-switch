import React, {useState, useEffect} from 'react';
import {multipleFilesUpload} from '../data/api';

const FileUploadScreen = (props) => {
    
    const [multipleFiles, setMultipleFiles] = useState('');
    const [title, setTitle] =  useState('');
    const [NFTname, setNFTname] =  useState('');
    const [Tags, setTags] =  useState('');
    const [AssetID, setAssetID] =  useState('');
    const [Amount, setAmount] =  useState('');
    const [Description, setDescription] =  useState('');
    const [CreatorName, setCreatorName] =  useState('');
    
    const [multipleProgress, setMultipleProgress] = useState(0);
    
   
    



const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });


const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });

  }



const [isSucces, setSuccess] = useState(null);

//   const submit = async () =>{
//     const formdata = new FormData(); 
//     formdata.append('avatar', userInfo.file);

//     axios.post("http://localhost:8080/imageupload", formdata,{   
//             headers: { "Content-Type": "multipart/form-data" } 
//     })
//     .then(res => { // then print response status
//       console.warn(res);
//       if(res.data.success === 1){
//         setSuccess("Image upload successfully");
//       }

//     })
//   }




    
    
    
    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        setMultipleProgress(0);
        

  setuserInfo({
      ...userInfo,
      file:e.target.files[0],
      filepreview:URL.createObjectURL(e.target.files[0]),
    });

    }
  
    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }
  
    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('NFTname', NFTname);
        formData.append('Tags', Tags);
        formData.append('AssetID', AssetID);
        formData.append('Amount', Amount);
        formData.append('Description', Description);
        formData.append('CreatorName', CreatorName);

        
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        await multipleFilesUpload(formData, mulitpleFileOptions);
        props.getMultiple();
    }


    

    

    return (
        <div className="row mt-3">

  {/* previw      */}

  {userInfo.filepreview !== null ? 
        <img className="previewimg" style={{"width":"25%"}} src={userInfo.filepreview} alt="UploadImage" />
      : null}

{/* previw      */}

            <div className="p-0">
                   <div className="row p-0">



	 <div className="formdesign">
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-group">
          <label className="text-white">Select Image :</label>
          <input type="file" className="form-control" name="upload_file"  onChange={(e) =>  MultipleFileChange(e)} single />
        </div>



{/* images */}

                   {/* <div className="col-5 m-2">
                        <div className="form-group">
                            <label>Select Multiple Files</label>
                            <input type="file" accept="image/*" name="image-upload" id="input" onChange={(e) =>  MultipleFileChange(e)}  className="form-control" single />
                        </div>
                       </div> */}

{/* images */}
                       <div className="col-5 m-2">
                            <label >Title</label>
                            <input type="text" onChange={(e) => setTitle(e.target.value) } placeholder="enter title for your gallery" className="form-control"/>
                       </div>
                       <div className="col-5 m-2">
                            <label >NFTname</label>
                            <input type="text" onChange={(e) => setNFTname(e.target.value) } placeholder="enter NFT name for your gallery" className="form-control"/>
                       </div>

                       <div className="col-5 m-2">
                            <label >Tags</label>
                            <input type="text" onChange={(e) => setTags(e.target.value) } placeholder="Tags" className="form-control"/>
                       </div>

                       <div className="col-5 m-2">
                            <label >AssetID</label>
                            <input type="number" onChange={(e) => setAssetID(e.target.value) } placeholder="asset id" className="form-control"/>
                       </div>
                       <div className="col-5 m-2">
                            <label >Amount</label>
                            <input type="number" onChange={(e) => setAmount(e.target.value) } placeholder="enter Base price" className="form-control"/>
                       </div>
                      
                       <div className="col-5 m-2">
                            <label >CreatorName</label>
                            <input type="text" onChange={(e) => setCreatorName(e.target.value) } placeholder="enter CreatorName for your gallery" className="form-control"/>
                       </div>

                       
                   </div> 
                   <div className="col-10 m-2">
                            <label >Description</label>
                            <textarea onChange={(e) => setDescription(e.target.value) } placeholder="enter Description for your gallery" className="form-control"></textarea>
                       </div>                  
                    <div className="row">
                        <div className="col-10 m-2">
                            <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-danger">Upload</button>
                        </div>
                      
                    </div>
                </div>
        </div>
       
        </div>
    );

}

export default FileUploadScreen;
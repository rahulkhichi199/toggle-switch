import React, {useState, useEffect} from 'react';

// import FileUploadScreen from '../screens/FileUploadScreen';

import {getMultipleFiles} from '../data/api';

function MyNFTs() {

  const [multipleFiles, setMultipleFiles] = useState([]);

  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
   
    getMultipleFilesList();
  }, []);
  return (
    <>
      
       <div  className="container-fluid col-12 mt-5">
         <div className="col-12">
           <div className="col-12"  >
             <h4 className="text-success font-weight-bold">My NFTs List</h4>
             <div className='row col-12 d-flex mt-5' >
             {multipleFiles.map((element, index) =>
                <div className='col-3 '  key={element._id}>
                    {/* <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <h6 className="text-danger font-weight-bold">{element.NFTname}</h6>
                    <h6 className="text-danger font-weight-bold">{element.Amount}</h6> */}
                    <div className="row col-12">
                      {element.files.map((file, index) =>
                        <div className="col-12" >
                            <div className="card mb-2 border-0 p-0" >
                              <img src={`http://localhost:8080/${file.filePath}`} height="100%" className="card-img-top img-responsive" alt="img"/>
                             <div >
                              <h6 className="text-danger font-weight-bold">{element.title}</h6>
                              <h6 className="text-danger font-weight-bold">{element.NFTname}</h6>
                              <h6 className="text-danger font-weight-bold ">{element.Amount}</h6>
                              </div>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
              </div>
           </div>
         </div>
       </div>












    </>
  );
}

export default MyNFTs;
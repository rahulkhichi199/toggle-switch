import React, { useState, useEffect } from 'react';

import axios from 'axios';
// import multipleFiles from '../../../server/controllers/fileuploadController'
// import FileUploadScreen from '../screens/FileUploadScreen';

import { getMultipleFiles } from '../data/api';
import { getMultiples } from '../data/api';



function MyNFTs() {




  // onclick







  // onclick



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





      <div className='row col-12 d-flex mt-5' >
        {multipleFiles.map((element, index) =>
          <div className='col-3 ' key={element._id}>

            <div className="row col-12">
              {element.files.map((file, index) =>
                <div className="col-12" >
                  <div className="card mb-2 border-0 p-0" >
                    <img src={`http://localhost:8080/${file.filePath}`} height="75%" className="card-img-top img-responsive" alt="img" />
                    <div >
                      <h6 className="text-danger font-weight-bold">Title : - {element.title}</h6>
                      <h6 className="text-danger font-weight-bold">NFTname : -{element.NFTname}</h6>
                      <h6 className="text-danger font-weight-bold ">Price : -{element.Amount}</h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>



        )}
      </div>















    </>





  );
}

export default MyNFTs;
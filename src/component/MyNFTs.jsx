import React, { useState, useEffect } from 'react';
import './priceslider.css';

// import FileUploadScreen from '../screens/FileUploadScreen';

import { getMultipleFiles } from '../data/api';





function MyNFTs() {

  const [multipleFiles, setMultipleFiles] = useState([]);

  const [price, setPrice] = useState('150');

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

      <div className="container-fluid col-12 mt-5">
        <div className="col-12">
          <div className="col-12"  >
            <h4 className="text-success font-weight-bold">Filter by<span className='fas fa-sliders-h'></span></h4>


            <div className='row '>


              <nav className='navbar navbar-expand-lg navbar-light bg-light border-top p-3'>
                <form className='form-inline my-2 my-lg-0' style={{ "display": "flex", "margin": "auto" }}>
                  <input
                    className='form-control mr-sm-2  '
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    name='search'

                  />
                  <button
                    className='btn btn-outline-success my-2 my-sm-0'
                    type='submit'
                    disabled={true}
                  >
                    Search
                  </button>
                </form>
              </nav>

              <div className='border-top border-bottom bg-light p-4' style={{ "display": "flex" }}>


                <div className='col-4'>
                  <div className='form-check mx-4'>

                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='category'

                      id='flexCheckChecked'

                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckChecked'
                    >

                      ART
                    </label>




                  </div>
                  <div className='form-check mx-4'>

                    <input
                      className='form-check-input '
                      type='checkbox'
                      name='category'

                      id='flexCheckChecked'

                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckChecked'
                    >

                      MUSIC
                    </label>




                  </div>



                </div>

                {/* tosel */}


                <div className='col-4'>
                  <div className="slideBlock">
                    <div className="strack"></div>
                    <div className="slideProgress" style={{ "width": (price / 400 * 100) + "%" }}></div>
                    <input
                      onChange={(e) => setPrice(
                        e.target.value >= 0 && e.target.value <= 400 ? e.target.value : '100'
                      )}
                      value={price}
                      type="range"
                      name="range"
                      id="range"
                      min="0" max="400" />
                    <div className="Price">${price}</div>
                  </div>
                  <div className="imput_fields custom-imput-fields">
                    <label className="price_prod">Price <small>(US$)</small><br />
                      <input type="text" onChange={(e) => setPrice(e.target.value >= 100 && e.target.value <= 400 ? e.target.value : '100')} id="price_prod" name="price_prod" value={price} />
                    </label>
                  </div>
                  {/* <br /><br /> */}

                </div>

                {/* tosel */}







                <div className='col-4 px-5'>
                  Sort by{' '}
                  <select

                  >
                    <option value="newest">Newest Arrivals</option>
                    <option value="lowest">Price: Low to High</option>
                    <option value="highest">Price: High to Low</option>

                  </select>
                </div>
              </div>










            </div>
            {/* sss */}
            <div className='col-md-9'>

              <div className='row'>



              </div>

            </div>

          </div>



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
        </div>
      </div>














    </>





  );
}

export default MyNFTs;
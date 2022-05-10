import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


import { getMultipleFiles } from '../data/api';
import { getMultiples } from '../data/api';



function MyNFTs(props) {




  console.log(props.table, ":::");




  return (
    <>



      <div className='row col-12 d-flex mt-1 p-5' style={{ 'height': 'auto', 'backgroundColor': "smoke" }}>

        {props.table && props.table.length > 0 ? props.table.map((element, index) =>

          <div className='col-3 my-3' key={element._id}>



            <div className="row col-12">

              {element.files.map((file, index) =>

                <div class="card shadow-lg bg-white rounded" style={{ 'height': 'auto', 'backgroundColor': "white", 'color': 'black' }}>

                  <img class="card-img-top" style={{ 'height': '20rem' }} src={`http://localhost:8080/${file.filePath}`} alt="Card image cap" />

                  <div class="card-body">

                    <h5 class="card-title">Title : - {element.title}</h5>
                    <h5 class="card-title">NFT name : - {element.NFTname}</h5>

                    <h5 class="card-title">Price : - {element.Amount}</h5>

                    <a style={{ 'backgroundColor': "rgb(255, 35, 145)", 'border': 'none' }} href={`/DetailNFT/${element._id} `} class="btn btn-primary">view</a>

                  </div>

                </div>

              )}

            </div>

          </div>




        ) : 'NO RECORDS FOUNDS'}

      </div>




    </>



  );
}

export default MyNFTs;
import React, { useState, useEffect } from 'react'
import axios from "axios";
import MyNFTs from './MyNFTs'
import { useParams } from "react-router-dom";
import { getnfts } from '../data/api'


export default function DetailNFT(props) {


    const params = useParams();

    const [nft, setNft] = useState([])





    useEffect(() => {
        async function fetchData() {

            const data = await getnfts(params.id);
            setNft(data);
            // console.log(data.files[0].filePath, 'filter');

        }
        fetchData();
    }, []);



    return (
        <div>
            {/* {nft ? (<div>

                {nft.files ? nft.files.map(file => {

                    return <img src={`http://localhost:8080/${file.filePath}`} height="35%" width="22%" className="card-img-top img-responsive" alt="img" />
                }) : ''}
                {nft.title}
                {nft.NFTname}
                {nft.Description}
                {nft.AssetID}
                {nft.Amount}
                {JSON.stringify(nft.files)}
            </div >)
                :
                (<div>
                    <p>no record</p>
                </div>)
            } */}



            {nft ? (<div className='container col-12 d-flex'>
                <div className='col-6'>
                    {nft.files ? nft.files.map(file => {

                        return <img src={`http://localhost:8080/${file.filePath}`} height="75%" width="22%" className="card-img-top img-responsive" alt="img" />
                    }) : ''}
                </div>
                <div className='col-6 mx-5 ' id='headings' style={{ "width": "75%", "height": "50%" }}>
                    <h2>
                        Title - {nft.title}
                    </h2>
                    <h4>
                        NFTname -  {nft.NFTname}
                    </h4>
                    <h4>
                        Description - {nft.Description}
                    </h4>
                    <h4>
                        AssetID - {nft.AssetID}
                    </h4>
                    <h4>
                        CreatorName - {nft.CreatorName}
                    </h4>
                    <h4>
                        Tags - {nft.Tags}
                    </h4>
                    <h4>
                        createdAt - {nft.createdAt}
                    </h4>
                    <h4>
                        updatedAt - {nft.updatedAt}
                    </h4>
                    <h4>
                        Amount - {nft.Amount}
                    </h4>
                    {/* {JSON.stringify(nft.files)} */}

                    <a href="#" class="btn btn-primary">SELL NOW</a>
                </div>
            </div >)
                :
                (<div>
                    <p>no record</p>
                </div>)
            }

        </div>
    )
}

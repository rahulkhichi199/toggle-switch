import React from 'react';
import  Tabs  from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import UploadNFT from './UploadNFT';
import Uploadmusic from './Uploadmusic';
import './UploadNFT.css';



export default function Createnft() {
    return (
        <div>

     <div id="createnft"className=" p-4 ">
      <p style={{ color: "yellow", fontSize: "33px" }}>
        You have sucessfully connected to Metamask Wallet.
        <h2>Complete the steps below to create NFT</h2>
      </p>
    
      

      <div class="accordion" id="myAccordion">

        <div class="accordion-item">

            <h2 class="accordion-header" id="headingOne">

                <a  href="" data-bs-toggle="collapse" data-bs-target="#collapseOne"><i className="fa fa-chevron-down"></i> 1.Select the asset type</a>                  

            </h2>

            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">

                <div class="card-body">

  


    <Tabs
  defaultActiveKey="home"
  transition={true}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="Art" title="Art">
    <UploadNFT />
  </Tab>
  <Tab eventKey="Music" title="Music">
    <Uploadmusic />
  </Tab>
 
</Tabs>


{/* <h2 class="accordion-header p-4" id="headingOne">

                <a  href="" data-bs-toggle="collapse" data-bs-target="#collapseOne"><i className="fa fa-chevron-down"></i> 2.Fill in the below details</a>                  

            </h2> */}


                </div>

            </div>

        </div>
        </div>





</div>

        </div>

    )
}

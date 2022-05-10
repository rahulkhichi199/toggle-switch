import React from 'react';
import  Tabs  from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import UploadNFT from './UploadNFT';
import Uploadmusic from './Uploadmusic';
import './UploadNFT.css';



export default function Createnft() {
    return (
        <div>

     <div id="createnft" className=" p-4 ">
      <p style={{ color: "yellow", fontSize: "33px" }}>
        You have sucessfully connected to Metamask Wallet.
        <h2>Complete the steps below to create NFT</h2>
      </p>
    
      

      <div class="accordion col-12" id="myAccordion">

        <div class="accordion-item" id="myAccordion">

            <h2 class="accordion-header" id="headingOne">

                <a  href="" data-bs-toggle="collapse" data-bs-target="#collapseOne"><i className="fa fa-chevron-down"></i> 1.Select the asset type</a>                  

            </h2>

            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">

                <div class="card-body" >

  


    <Tabs
  defaultActiveKey="home"
  transition={true}
  id="noanim-tab-example"
  className="m-3"
>
  <Tab eventKey="Art" title="Art">
    <UploadNFT />
  </Tab>
  <Tab eventKey="Music" title="Music">
    <Uploadmusic />
  </Tab>
 
</Tabs>





                </div>

            </div>

        </div>
        </div>





</div>

        </div>

    )
}

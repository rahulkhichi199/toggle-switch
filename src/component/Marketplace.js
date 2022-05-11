import React from "react";
import  Tabs  from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MyNFTSatMarketPlace from './MyNFTSatMARKET';
import './MarketPlace.css'
import OtherNFTS from "./OtherNFTS";


export default function Marketplace() {
  return (
  <div>
     <div className="pink p-5">
      <h1 className="dashhead">MarketPlace</h1>
      
   </div>




    


    <div>


    <Tabs
  defaultActiveKey="home"
  transition={true}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="MyNFTs" title="MyNFTs">
    <MyNFTSatMarketPlace />
  </Tab>
  <Tab eventKey="MyNFTMarketPlace" title="Other NFTs">
    <OtherNFTS/>
  </Tab>
 
</Tabs>



    </div>

</div>
  );
}

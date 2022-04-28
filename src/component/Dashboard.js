import React from "react";
import "./dashboard.css";
// import { Nav } from "react-bootstrap";
import  Tabs  from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import MyNFTMarketPlace from "./MyNFTMarketPlace";
import MyNFTs from "./MyNFTs";

export default function Dashboard() {
  return (
    <>
    <div className="pink p-5">
      <h1 className="dashhead">My NFT Gallery</h1>
      <p style={{ color: "yellow", fontSize: "33px" }}>
        You have sucessfully connected to Metamask Wallet.
      </p>

<div class="accordion" id="myAccordion">

        <div class="accordion-item">

            <h2 class="accordion-header" id="headingOne">

                <a  href="" data-bs-toggle="collapse" data-bs-target="#collapseOne"><i className="fa fa-chevron-down"></i> Recently created</a>                  

            </h2>

            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">

                <div class="card-body">

                    <p className="paragp">There are no recently created NFT available</p>

                </div>

            </div>

        </div>
        </div>


    </div>




    


    <div>


    <Tabs
  defaultActiveKey="home"
  transition={true}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="MyNFTs" title="MyNFTs">
    <MyNFTs />
  </Tab>
  <Tab eventKey="MyNFTMarketPlace" title="MyNFTMarketPlace">
    <MyNFTMarketPlace />
  </Tab>
 
</Tabs>













    {/* <Nav variant="tabs" id="navLinkDash">
  <Nav.Item>
    <Nav.Link eventKey="link-1" href="<MyNFTs/>"  className="navDash">My NFTs
    </Nav.Link>
   

  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2" href="/" className="navDash">
    MyNFTs@MarketPlace&nbsp;
    </Nav.Link>
   

  </Nav.Item>
</Nav> */}
    </div>
    </>
  );
}

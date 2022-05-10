import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/Navbarui";
import Landing from "./component/Landing";
import Createnft from "./component/Createnft";
import Dashboard from "./component/Dashboard";
import Marketplace from "./component/Marketplace";
import DetailNFT from "./component/DetailNFT";
import MyNFTs from './component/MyNFTs';
import { useState } from "react";

function App(props) {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      alert("You are successfully connected");
      setLoading(false);
      console.log("Function Called");
      // window.preventDefault();
    } else {
      const aa = await alert("Install Metamask");
      window.open(
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        "_blank"
      );
    }
  };
  return (
    <Router>
      <NavBar
        connectWalletHandler={connectWalletHandler}
        account={account}
        loading={loading}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createnft" element={<Createnft />} />
        
        <Route path="/MyNFTs" element={<MyNFTs />} />
        <Route path="/DetailNFT/:id" element={<DetailNFT/>} />
        
        <Route path="/Marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;

// // import logo from './logo.svg';
// import React from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";
// import NavBar from "./component/Navbarui";
// import Landing from "./component/Landing";
// import Createnft from "./component/Createnft";
// import Dashboard from "./component/Dashboard";
// import Marketplace from "./component/Marketplace";

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/createnft" element={<Createnft />} />
//         <Route path="/marketplace" element={<Marketplace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import "./App.css";
import { ethers } from "ethers";

const App = () => {

    let provider = new ethers.providers.Web3Provider(window.ethereum)
    /* 
    const conncetWallet = async () => {
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();

    console.log("Account address s:", await signer.getAddress());
    }
    */

  return (
    <div>App</div>
  )
}

export default App;

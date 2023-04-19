import React, { useState } from "react";
import ContextApp from "./ContextApp";
import { Contract } from "ethers";

const GenNFTsProvider = ({ children }) => {
  const [nftImages, setNFTImages] = useState([]);
  const [contractDetails, setContractDetails] = useState(false);
  const [NFTCID, setNFTCID] = useState();
  const [JSONCID, setJSONCID] = useState();
  const [nftContract, setNFTContract] = useState();

  return (
    <ContextApp.Provider
      value={{
        nftImages,
        setNFTImages,
        contractDetails,
        setContractDetails,
        JSONCID,
        setJSONCID,
        NFTCID,
        setNFTCID,
        nftContract,
        setNFTContract
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export default GenNFTsProvider;

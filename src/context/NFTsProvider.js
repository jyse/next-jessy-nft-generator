import React, { useState } from "react";
import NFTsContext from "./NFTsContext";

const NFTsProvider = ({ children }) => {
  const [nftImages, setNFTImages] = useState([]);

  return (
    <NFTsContext.Provider value={{ nftImages, setNFTImages }}>
      {children}
    </NFTsContext.Provider>
  );
};

export default NFTsProvider;

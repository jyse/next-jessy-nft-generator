export const getGeneratedNFTImgs = async (number) => {
  console.log("🖌️🖼️ Generating NFTs ");
  const response = await fetch("/api/nfts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: number * 1 })
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const getImages = async (layer) => {
  console.log("🖌️🖼️ Getting Images of Layer ");
  const response = await fetch("/api/nfts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ layer: layer })
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

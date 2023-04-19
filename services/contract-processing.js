export const createContractAPI = async (number) => {
  console.log("🖌️🖼️ Creating contract ");
  const response = await fetch("/api/create-contract", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ create: "creating Contract" })
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

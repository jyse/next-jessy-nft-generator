export const postToSpheron = async () => {
  console.log("🧚 Storing images to Spheron");
  const response = await fetch("/api/spheron", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }
  console.log(response, "what is the response here after UPLOADIN? ");
  let result = await response.json();
  return result;
};

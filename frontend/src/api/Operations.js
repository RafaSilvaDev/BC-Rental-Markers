const BASE_URL = "http://localhost:3330";

export const getListinings = async () => {
  try {
    const response = await fetch(`${BASE_URL}/listining`);
    const content = await response.json();
    return content;
  } catch (error) {
    console.error("Error during GET: ", error);
    throw error;
  }
};

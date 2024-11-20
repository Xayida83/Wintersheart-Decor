import dotenv from 'dotenv';

dotenv.config();

export const fetchData = async (endpoint) => {
  const url = `${process.env.JSON_SERVER_BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result; 
    }else {
      throw new Error(
        `Error in fetchData: ${endpoint} - ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred in fetchData: ${error.message}`)
  }
}
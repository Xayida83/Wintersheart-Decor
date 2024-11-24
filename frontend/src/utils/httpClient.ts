
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchData = async (endpoint: string) => {
  const url = `${BASE_URL}/${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred in fetchData: ${error}`);
  }
};

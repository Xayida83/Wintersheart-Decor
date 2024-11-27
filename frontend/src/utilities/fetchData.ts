import httpClient from "./httpClient";

export const fetchData = async (endpoint: string) => {
  try {
    const response = await httpClient.get(`/${endpoint}`);
    return response.data;
  } catch (error: any) {
    console.error(`An error occurred in fetchData: ${error.message}`)
    throw new Error(
      error.response
        ? `Error fetching data: ${error.response.status} - ${error.response.statusText}`
        : 'Network error'
    );
  }
};
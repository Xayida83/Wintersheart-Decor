import httpClient from "./httpClient";

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await httpClient.get(`/${endpoint}`);
    const { data } = response;
    return (data.result?.data || data);
  } catch (error: any) {
    console.error(`Failed to fetch data from ${endpoint}: ${error.message}`);
    throw new Error('Data fetch failed');
  }
};

//* <T> 
//*Med generiska typer kan samma funktion hantera flera olika typer av data utan att behöva skrivas om.
//*I detta fall kan fetchData hämta både en lista med produkter (Product[]) och en enskild produkt (Product).
// import httpClient from "./httpClient";

// export const getProductById = async (id: string | number)  => {
//   try {
//     const response = await httpClient.get(`/products/${id}`);
//     return response.data;
//   } catch (error: any) {
//     console.error(`An error occurred in fetchData: ${error.message}`)
//     throw new Error(
//       error.response
//         ? `Error fetching product: ${error.response.status} - ${error.response.statusText}`
//         : 'Network error'
//     );
//   }
// }
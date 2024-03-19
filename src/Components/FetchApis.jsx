import axios from "axios";
const fetchData = () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
      throw error;
    });
};
export default fetchData;

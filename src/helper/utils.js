import axios from "axios";

export const callAxios = (baseURL) => {
  axios.get(baseURL).then((response) => {
    return response.data
  });
}
import axios from "axios";

export const callAxios = (baseURL) => {
  axios.get(baseURL).then((response) => {
    return response.data
  });
}

export const compareSubscription = ( a, b ) => {
  if ( a.pricec < b.pricec ){
    return -1;
  }
  if ( a.pricec > b.pricec ){
    return 1;
  }
  return 0;
}

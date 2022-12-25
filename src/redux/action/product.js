import {
  getProduct,
  getProductSuccess,
  getProductFailure,
} from "../reducer/product";
import axios from "axios";

export const fetchProduct = () => {
  const request = axios.get(`https://api.spacexdata.com/v3/history`);
  return (dispatch) => {
    dispatch(getProduct());
    request
      .then((response) => {
        dispatch(getProductSuccess(response));
      })

      .catch((error) => dispatch(getProductFailure(error)));
  };
};

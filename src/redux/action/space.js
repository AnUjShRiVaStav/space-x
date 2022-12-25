import { getSpace, getSpaceSuccess, getSpaceFailure } from "../reducer/space";
import axios from "axios";

export const fetchSpace = () => {
  const request = axios.get(`https://api.spacexdata.com/v3/payloads`);
  return (dispatch) => {
    dispatch(getSpace());
    request
      .then((response) => {
        dispatch(getSpaceSuccess(response.data));
      })

      .catch((error) => dispatch(getSpaceFailure(error)));
  };
};

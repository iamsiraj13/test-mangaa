import axios from "axios";
// import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import store from "../../app/store";
import BASE_URL from "../../utils/config";
import {
  getProductDetailsFullfill,
  getProductDetailsPending,
  getProductDetailsRejected,
  getProductFullfill,
  getProductPending,
  getProductRejected,
} from "./product-slice";

//======== get all manga products ==========
export const getProduct = () => {
  store.dispatch(getProductPending());
  let url = `${BASE_URL}/top-list/`;

  return axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      store.dispatch(getProductFullfill(res.data));
    })
    .catch((error) => {
      //   ErrorToast("Something went wrong");
      store.dispatch(getProductRejected());
      return false;
    });
};
//======== get manga details by Id ==========
export const getProductDetails = (id) => {
  store.dispatch(getProductDetailsPending());
  let url = `${BASE_URL}/details/manga/${id}/`;

  return axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      store.dispatch(getProductDetailsFullfill(res.data));
    })
    .catch((error) => {
      //   ErrorToast("Something went wrong");
      store.dispatch(getProductDetailsRejected());
      return false;
    });
};

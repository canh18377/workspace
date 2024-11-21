import { GETTOKEN } from "./type";
import { GETDATA } from "./type";

export const getToken = (payload) => {
  return {
    type: GETTOKEN,
    payload: payload,
  };
};

export const getData = (payload) => {
  return {
    type: GETDATA,
    payload: payload,
  };
};

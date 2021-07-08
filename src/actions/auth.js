import * as api from "../api/rooms";

import { AUTH } from "../actionTypes/auth";

export const register = (router, registerData) => async dispatch => {
  try {
    const { data } = await api.register(registerData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (router, loginData) => async dispatch => {
  try {
    const { data } = await api.login(loginData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

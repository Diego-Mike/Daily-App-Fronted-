import { AUTH, LOGOUT } from "../actionTypes/auth";

const auth = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authDta: action.data };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return auth;
  }
};

export default auth;

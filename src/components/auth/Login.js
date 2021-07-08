import React, { useState } from "react";
import {
  Auth,
  AuthForm,
  AuthInside,
  AuthButtons,
  LoginAccount,
  RegisterAccount
} from "./AuthStyles";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
 
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [auth, setAuth] = useState({ email: "", password: "" });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login(history, auth));
  };

  return (
    <Auth>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInside>
          <h2>L o g i n</h2>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            maxLength="40"
            required
            onChange={e =>
              setAuth({ ...auth, [e.target.name]: e.target.value })
            }
          />
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            maxLength="30"
            required
            onChange={e =>
              setAuth({ ...auth, [e.target.name]: e.target.value })
            }
          />

          <AuthButtons>
            <LoginAccount type="submit">Login</LoginAccount>
            <RegisterAccount to="/register">
              Don't Have An Account?
            </RegisterAccount>
          </AuthButtons>
        </AuthInside>
      </AuthForm>
    </Auth>
  );
};

export default Login;

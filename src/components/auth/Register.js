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
import { register } from "../../actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [auth, setAuth] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register(history, auth));
  };

  return (
    <Auth>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInside>
          <h2>R e g i s t e r</h2>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            maxLength="20"
            required
            onChange={e =>
              setAuth({ ...auth, [e.target.name]: e.target.value })
            }
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            maxLength="20"
            required
            onChange={e =>
              setAuth({ ...auth, [e.target.name]: e.target.value })
            }
          />
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
          <input
            name="confirmPassword"
            type="password"
            placeholder="Repeat Your Password"
            maxLength="30"
            required
            onChange={e =>
              setAuth({ ...auth, [e.target.name]: e.target.value })
            }
          />
          <AuthButtons>
            <LoginAccount type="submit">Register</LoginAccount>
            <RegisterAccount to="/login">
              Already Have An Account?
            </RegisterAccount>
          </AuthButtons>
        </AuthInside>
      </AuthForm>
    </Auth>
  );
};

export default Register;

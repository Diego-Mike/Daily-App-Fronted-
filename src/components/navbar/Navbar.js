import React, { useState, useEffect } from "react";

import { Header, HeaderContainer, SignIn, ToLogin, Auth } from "./NavbarStyled";

import Tie from "../../img/tie.png";

import { LOGOUT } from "../../actionTypes/auth";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";

import decode from "jwt-decode";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodeToken = decode(token);

      if (decodeToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser({});
    history.push("/login");
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <div>
            <img src={Tie} alt="" />
            <h1>
              Dail<span>Y</span>
            </h1>
          </div>
          {!user?.result ? (
            <SignIn>
              <ToLogin to="/login">Login</ToLogin>
            </SignIn>
          ) : (
            <Auth>
              <h2>{user?.result?.name}</h2>
              <span onClick={logout}>Logout</span>
            </Auth>
          )}
        </HeaderContainer>
      </Header>
    </>
  );
};

export default Navbar;

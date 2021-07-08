import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Room from "./components/rooms/Room";

// Calling Actions

import { useDispatch } from "react-redux";
import { gettingRooms } from "./actions/rooms";
import { getTasks } from "./actions/tasks";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingRooms());
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Room />
    </>
  );
};

export default Home;

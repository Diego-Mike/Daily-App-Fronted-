import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { creatingAll } from "../../actions/rooms";

import { ShowForm, CreateRoom, Start, Cancel } from "./CreateRoomsStyled";

const CreateRooms = () => {
  const [showForm, setShowForm] = useState(false);

  const [roomData, setRoomData] = useState({ room: "" });

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  // Sending The Data

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(creatingAll({ ...roomData, name: user?.result?.name }));

    clear();

    // Showing  And Hiding The Form
    setShowForm(false);
  };

  const clear = () => {
    setRoomData({});
  };

  const handleCancel = () => {
    setShowForm(false);
    clear();
  };

  // Creating Rooms
  return (
    <>
      {!showForm ? (
        <ShowForm onClick={() => setShowForm(true)}>Create</ShowForm>
      ) : (
        <CreateRoom onSubmit={handleSubmit}>
          <section>
            <h2>Create Your Room</h2>
            <input
              name="room"
              required
              type="text"
              value={roomData.room}
              onChange={e => setRoomData({ ...roomData, room: e.target.value })}
              placeholder="Example : What i will do in february"
              maxLength="60"
            />
            <div>
              <Start type="submit">Start</Start>
              <Cancel onClick={handleCancel}>Cancel</Cancel>
            </div>
          </section>
        </CreateRoom>
      )}
    </>
  );
};

export default CreateRooms;

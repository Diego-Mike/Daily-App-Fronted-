import React, { useState } from "react";

import {
  MainBackground,
  Container,
  Rooms,
  RoomsButtons,
  RoomsButtonEdit,
  RoomsButtonDelete,
  CreatedTime,
  User,
  OpenItUp,
  RoomStuff,
  MainBackgroundRegister,
  Alert
} from "./RoomStyled";

import { useSelector, useDispatch } from "react-redux";
import { deletingRooms } from "../../actions/rooms";

import moment from "moment";

import CreateRooms from "./CreateRooms";
import FormTodo from "./FormTodo";
import ToDo from "./ToDo";
import Added from "./Added";

const Room = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  const [Todo, setTodo] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [idRoom, setIdRoom] = useState({});
  const [added, setAdded] = useState(false);
  // Asking For The Data

  const rooms = useSelector(state =>
    state.rooms.filter(
      r => r.name === user?.result?.name || r.creator === user?.result?._id
    )
  );

  const handleTodo = Theroom => {
    setTodo(true);
    setIdRoom(Theroom);
    document.body.style = "overflow: hidden";
    setAdded(false);
  };

  const handleForm = id => {
    setShowForm(true);
    setIdRoom(id);
    document.body.style = "overflow: hidden";
  };

  if (user?.result) {
    return (
      <>
        {added && <Added />}

        {/* Todo Window */}

        {Todo && (
          <ToDo setTodo={setTodo} idRoom={idRoom} setIdRoom={setIdRoom} />
        )}

        {/*  */}

        {/* Showing The Form */}

        {showForm && (
          <FormTodo
            setShowForm={setShowForm}
            idRoom={idRoom}
            setIdRoom={setIdRoom}
            setAdded={setAdded}
          />
        )}

        <MainBackground>
          <Container>
            {/* Showing The Rooms */}

            {rooms.map(room => {
              return (
                <Rooms key={room._id}>
                  <section>
                    <User>
                      <CreatedTime>
                        {user?.result?.name} <br />
                        <span>{moment(room.createdAt).fromNow()}</span>
                      </CreatedTime>
                      <span
                        style={{ cursor: "pointer", marginRight: "1rem" }}
                        onClick={() => handleTodo(room)}
                      >
                        <OpenItUp />
                      </span>
                    </User>

                    <RoomStuff>
                      <h2>{room.room}</h2>
                    </RoomStuff>

                    {/* Buttons And The Form To Create Your Shit */}

                    <RoomsButtons>
                      <span>
                        <RoomsButtonEdit onClick={() => handleForm(room._id)} />
                      </span>
                      <span onClick={() => dispatch(deletingRooms(room._id))}>
                        <RoomsButtonDelete />
                      </span>
                    </RoomsButtons>
                  </section>
                </Rooms>
              );
            })}

            {/* Creating Rooms */}

            <CreateRooms />

            {/*  */}
          </Container>
        </MainBackground>
      </>
    );
  } else {
    return (
      <MainBackgroundRegister>
        <Alert>
          Please, <span> Register </span> Or <span> Login </span> To Use <br />
          <span> Daily's </span> Services
        </Alert>
      </MainBackgroundRegister>
    );
  }
};

export default Room;

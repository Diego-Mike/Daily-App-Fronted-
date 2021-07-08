import { GETALL, CREATE, DELETING } from "../actionTypes/rooms";

import * as api from "../api/rooms";

export const gettingRooms = () => async dispatch => {
  try {
    const { data } = await api.getAllRooms();

    dispatch({ type: GETALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const creatingAll = newRoom => async dispatch => {
  try {
    const { data } = await api.creatingRooms(newRoom);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletingRooms = id => async dispatch => {
  try {
    await api.deletingRooms(id);

    dispatch({ type: DELETING, payload: id });
  } catch (error) {
    console.log(error);
  }
};

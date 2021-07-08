import { GETALL, CREATE, DELETING } from "../actionTypes/rooms";

const rooms = (rooms = [], action) => {
  switch (action.type) {
    case GETALL:
      return action.payload;

    case CREATE:
      return [...rooms, action.payload];

    case DELETING:
      return rooms.filter(room => action.payload !== room._id);

    default:
      return rooms;
  }
};

export default rooms;

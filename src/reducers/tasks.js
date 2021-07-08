import {
  GETTASKS,
  CREATETASKS,
  DELETETASKS,
  CHECKTASKS,
  DAYOVER,
  COMMENT
} from "../actionTypes/tasks";

const tasks = (tasks = [], action) => {
  switch (action.type) {
    case GETTASKS:
      return action.payload;

    case CREATETASKS:
      return [...tasks, action.payload];

    case DELETETASKS:
      return tasks.filter(toDelete => toDelete._id !== action.payload);

    case COMMENT:
    case DAYOVER:
    case CHECKTASKS:
      return tasks.map(check =>
        check._id === action.payload._id ? action.payload : check
      );

    default:
      return tasks;
  }
};

export default tasks;

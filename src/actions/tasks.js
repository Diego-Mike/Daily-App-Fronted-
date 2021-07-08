import {
  GETTASKS,
  CREATETASKS,
  DELETETASKS,
  CHECKTASKS,
  DAYOVER,
  COMMENT
} from "../actionTypes/tasks";

import * as api from "../api/rooms.js";

export const getTasks = () => async dispatch => {
  try {
    const { data } = await api.getAllTasks();
    dispatch({ type: GETTASKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTasks = task => async dispatch => {
  try {
    const { data } = await api.createTasks(task);
    dispatch({ type: CREATETASKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTasks = id => async dispatch => {
  try {
    await api.deleteTasks(id);
    dispatch({ type: DELETETASKS, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const checkTasks = (id, specificTask) => async dispatch => {
  try {
    const { data } = await api.checkTasks(id, specificTask);

    dispatch({ type: CHECKTASKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const isDayOver = (id, specificData) => async dispatch => {
  try {
    const { data } = await api.DayCompleted(id, specificData);

    dispatch({ type: DAYOVER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const dayComment = (id, comment) => async dispatch => {
  try {
    const { data } = await api.dayComment(id, comment);

    dispatch({ type: COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

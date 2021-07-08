import axios from "axios";

const API = axios.create({
  baseURL: "https://daily-backend-app.herokuapp.com"
});

API.interceptors.request.use(req => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Rooms

export const getAllRooms = () => API.get("/rooms");

export const creatingRooms = room => API.post("/rooms", room);

export const deletingRooms = id => API.delete(`/rooms/${id}`);

// Auth

export const register = registerData =>
  API.post("/user/register", registerData);

export const login = loginData => API.post("/user/login", loginData);

// Tasks

export const getAllTasks = () => API.get("/tasks");

export const createTasks = task => API.post("/tasks", task);

export const deleteTasks = id => API.delete(`/tasks/${id}`);

export const checkTasks = (id, specificTask) =>
  API.patch(`/tasks/check/${id}`, specificTask);

export const DayCompleted = (id, dayOver) =>
  API.patch(`/tasks/dayover/${id}`, dayOver);

export const dayComment = (id, taskComment) =>
  API.patch(`/tasks/comment/${id}`, taskComment);

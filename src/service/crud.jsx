import axios from "axios";

const url = "http://localhost:3001/data";

export const getAlldata = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const adddata = async (data) => {
  return await axios.post(url, data);
};

export const editdata = async (id, data) => {
  return await axios.put(`${url}/${id}`, data);
};

export const deletedata = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

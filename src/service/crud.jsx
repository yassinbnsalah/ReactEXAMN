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

export const UpdateDataRating = async (data, rate) => {
  try {
    data.nbRater = data.nbRater + 1;
    data.rate = data.rate + rate / data.nbRater;
    if (data.rate>4.5){
      alert("propriéte Excellente !")
    }
    const response = await axios.put(
      "http://localhost:3001/data/" + data.id,
      data
    );
    console.log("Data updated succeffully");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

import { createSlice } from "@reduxjs/toolkit";
import { getAlldata } from "../service/crud";
let initialState = {
  Data: [],
  selectedData: {},
  likescount: 0,
  errors: "",
};

const DataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    incLikes(state, action) {
      if (state.likescount === 0) {state.likescount = 1}
      state.likescount = state.likescount + 1;
    },
    decLikes(state, action) {
      state.likescount = state.likescount - 1;
    },
    populateData(state, action) {
      state.Data = action.payload;
    },
    selectData(state, action) {
      state.selectedData = action.payload;
    },
    unselectData(state) {
      state.selectedData = null;
    },
    clearWish: (state) => {
      state.Data = [];
    },
    deleteDataReducer: (state, action) => {
      const payload = action.payload;
      state.Data = state.Data.filter((DataItem) => DataItem.id !== payload.id);
    },
    updateDataReducer: (state, action) => {
      const payload = action.payload;
      const index = state.Data.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.Data[index] = payload;
      }
    },
    addDataReducer: (state, action) => {
      const payload = action.payload;
      const index = state.Data.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        alert("Data already added");
      } else {
        state.Data.push(payload);
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const getLikes = (state) => {
  return [state.Data.likescount, state.errors];
};

export const IncrementalLike = (state) => async (dispatch) => {
  try {
    dispatch(incLikes(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
export const decrementalLike = (state) => async (dispatch) => {
  try {
    dispatch(decLikes(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
// Tjiblek mel base de données les données w thothomlek fel Redux
export const fetchData = () => async (dispatch) => {
  try {
    const DataResult = await getAlldata();
    dispatch(populateData(DataResult.data));
    dispatch(setErrors(null));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
export const addItemToData = (state) => async (dispatch) => {
  try {
    dispatch(addDataReducer(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
};

export const clearDatalkol = (state) => async (dispatch) => {
  try {
    dispatch(clearWish(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
};

export const deleteitemFromData = (state) => async (dispatch) => {
  try {
    dispatch(deleteDataReducer(state));
  } catch (error) {
    dispatch(setErrors(error));
  }
};
// Tjiblek les données mel Redux
export const selectedData = (state) => {
  return [state.Data.Data, state.errors];
};

export const {
  incLikes,
  decLikes,
  populateData,
  selectData,
  unselectData,
  setErrors,
  clearWish,
  deleteDataReducer,
  updateDataReducer,
  addDataReducer,
} = DataSlice.actions;
export default DataSlice.reducer;

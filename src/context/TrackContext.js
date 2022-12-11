import CreateDataContext from "./CreateDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTracks = (dispatch) => () => {};

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  {
    fetchTracks,
    createTracks,
  },
  []
);

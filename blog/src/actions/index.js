import api from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const res = await api.get("/posts");

  return dispatch({ type: "FETCH_POSTS", payload: res.data });
};

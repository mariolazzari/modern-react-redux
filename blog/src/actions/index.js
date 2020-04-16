import api from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await api.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: data });
};

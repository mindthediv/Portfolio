import { team } from ".";

export const API_POSTS = "https://striveschool-api.herokuapp.com/api/posts/";
export const GET_POSTS = "GET_POSTS";
export const ADD_POST_TEXT = "ADD_POST_TEXT";

export const postsThunk = (user) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_POSTS, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const postsData = await response.json();

        dispatch({
          type: GET_POSTS,
          payload: postsData.reverse().slice(0, 100).reverse(),
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendChange = (paylo) => {
  return {
    type: ADD_POST_TEXT,
    payload: paylo,
  };
};

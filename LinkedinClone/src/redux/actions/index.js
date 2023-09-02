const API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile/";
export const GET_PROFILES = "GET_PROFILES";
export const GET_ALLPROFILES = "GET_ALLPROFILES";
//Action per tutte le esperienze
export const GET_ALLEXPERIENCES = "GET_ALLEXPERIENCES";
//action per post experienzw
export const POST_NEW_EXPE = "POST_NEW_EXPE";

export const LOGIN = "LOGIN";
export const GET_USER = "GET_USER";
export const GET_USERLINK = "GET_USERLINK";
export const GET_PASSWORD = "GET_PASSWORD";
export const ADD_PEOPLE_EXP = "ADD_PEOPLE_EXP";
export const team = [
  {
    // Same username/password used here https://strive.school/linkedin-registration
    userName: "gabriele98",
    password: "portfolio",
    // insert your access token
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYzM2VhZjliYWNlZTAwMTRhMTg2NzYiLCJpYXQiOjE2OTM2NjI4OTYsImV4cCI6MTY5NDg3MjQ5Nn0.bemEZX2BA-DXHkYFlMwI2mftsEwCOkZqteC7hWJ3-KE",
  },
  {
    userName: "alepit",
    password: "alessiop",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjU1NDE4NmE4NzAwMTQzODY3YmMiLCJpYXQiOjE2ODE3MTY1NjQsImV4cCI6MTY4MjkyNjE2NH0.L5-SuknkVHJgea3WZ5Vy9ITPkNgEyTWCd3PUBLuJjSk",
  },
  {
    userName: "AlessioF",
    password: "alessiof",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNlYWNlY2ZjYTEyOTAwMTQ0MGMwZjEiLCJpYXQiOjE2ODE4MjkxMDAsImV4cCI6MTY4MzAzODcwMH0.DZvdaOSboeqiJ7sAs-9zvB1PtS14FVDZMiH53fK-i1s",
  },
  {
    userName: "Davide",
    password: "davide",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjYzZTE4NmE4NzAwMTQzODY3YmQiLCJpYXQiOjE2ODE3MTY3OTgsImV4cCI6MTY4MjkyNjM5OH0.bSwIRR4GF21LG6XvgnbmmW_T7fLNOrWmMJCGxDVIYZE",
  },
  {
    userName: "freiff",
    password: "1234qwer",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQxNDEwMmI0YjQ4NDAwMTQ4ZDVkMjIiLCJpYXQiOjE2ODE5OTgwODIsImV4cCI6MTY4MzIwNzY4Mn0.bKv2_4kra-kj-Wl6-ItnnBB1Nv3yPCEcyT_CWVj943c",
  },
];

export const handleLogin = () => {
  return {
    type: LOGIN,
    payload: true,
  };
};

export const handleUser = (paylo) => {
  return {
    type: GET_USER,
    payload: paylo,
  };
};
export const handlePassword = (paylo) => {
  return {
    type: GET_PASSWORD,
    payload: paylo,
  };
};

export const profileThunk = (user) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL_PROFILES + "me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const profileData = await response.json();
        console.log(profileData, getState);
        dispatch({
          type: GET_PROFILES,
          payload: profileData,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const allProfilesThunk = (user) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL_PROFILES, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const profiles = await response.json();
        dispatch({
          type: GET_ALLPROFILES,
          payload: profiles,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const userLinkThunk = (user, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL_PROFILES + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const profileLink = await response.json();
        dispatch({
          type: GET_USERLINK,
          payload: profileLink,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const allExperiences = (user, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL_PROFILES + id + "/experiences", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const experiences = await response.json();
        dispatch({
          type: GET_ALLEXPERIENCES,
          payload: experiences,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getExperiencesPeople = (user, id) => {
  return async (dispatch, getState) => {
    console.log("fetch");
    try {
      const response = await fetch(API_URL_PROFILES + id + "/experiences", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        const experiences = await response.json();
        console.log(experiences);
        dispatch({ type: ADD_PEOPLE_EXP, payload: experiences });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

import { async } from "q";

import { team } from "./index.js";
const API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile/";

//Fomr Experience
//Action Form New Experience
export const ADD_ROLE = "ADD_ROLE";
export const ADD_COMPANY = "ADD_COMPANY";
export const ADD_DESCRIPTION = "ADD_DESCRIPTION";
export const ADD_START_DATE = "ADD_START_DATE";
export const ADD_END_DATE = "ADD_END_DATE";
export const ADD_AREA = "ADD_AREA";
export const ADD_SINGLE_EXP = "ADD_SINGLE_EXP";
//Fine action form
export const handleNewRole = (role) => {
  return {
    type: ADD_ROLE,
    payload: role,
  };
};
export const handleCompany = (company) => {
  return {
    type: ADD_COMPANY,
    payload: company,
  };
};
export const handleStartDate = (startDate) => {
  return {
    type: ADD_START_DATE,
    payload: startDate,
  };
};
export const handlleDescription = (descr) => {
  return {
    type: ADD_DESCRIPTION,
    payload: descr,
  };
};
export const handleEndDate = (endDate) => {
  return {
    type: ADD_END_DATE,
    payload: endDate,
  };
};
export const handleArea = (area) => {
  return {
    type: ADD_AREA,
    payload: area,
  };
};
export const addSingleExp = (singlexp) => {
  return {
    type: ADD_SINGLE_EXP,
    payload: singlexp,
  };
};
export const postNewExpeThunk = (exp, userid, user) => {
  return async (dispatch, getState) => {
    console.log("fetch");
    try {
      let resp = await fetch(API_URL_PROFILES + userid + "/experiences", {
        method: "POST",
        body: JSON.stringify(exp),
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (resp.ok) {
        let newExpe = await resp.json();
      } else {
        alert("fetch fallita");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const delExpThunk = (userId, expId, user) => {
  return async (dispatch, getStae) => {
    try {
      let resp = await fetch(
        `
        https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId} `,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer " + team.find((u) => u.userName === user).key,
          },
        }
      );
      if (resp.ok) {
        alert("Experience delete");
        window.location.reload();
      } else {
        alert("Eliminazione fallita");
      }
    } catch (error) {}
  };
};

export const modifyExp = (exp, userId, expId, user) => {
  return async (dispatch, getState) => {
    console.log("fetch");
    try {
      let resp = await fetch(
        API_URL_PROFILES + userId + "/experiences/" + expId,
        {
          method: "PUT",
          body: JSON.stringify(exp),
          headers: {
            Authorization:
              "Bearer " + team.find((u) => u.userName === user).key,
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (resp.ok) {
        let expMod = await resp.json();
        console.log(expMod);
        window.location.reload();
      } else {
        alert("fetch fallita");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

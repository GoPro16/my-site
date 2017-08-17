import { handleActions, createAction } from "redux-actions";

const base = "auth/";
const INITIAL_STATE = {
  username:"",
  password:"",
  token:""
};

const setError = createAction(`${base}ERROR`);
export const updateUsername = createAction(`${base}UPDATEUSERNAME`);
export const updatePassword = createAction(`${base}UPDATEPASSWORD`);
const updateToken = createAction(`${base}UPDATETOKEN`);

export default handleActions(
  {
    [setError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [updateUsername]:(state,{payload})=> ({
      ...state,
      username:payload
    }),
    [updatePassword]:(state,{payload})=> ({
      ...state,
      password:payload
    }),
    [updateToken]:(state,{payload})=> ({
      ...state,
      token:payload
    })
    
  },
  INITIAL_STATE
);

import { combineReducers } from "redux";
import loginReducers from "./loginReducers";
import signupReducers from "./signupReducers";
import userReducers from "./userReducers";
import workReducers from "./workReducers"
import getUsersReducers from "./getUsersReducers";
import logoutReducers from "./logoutReducers";
import getWorkLogReducers from "./getWorkLogReducers";
import updateUsersReducers from "./updateUsersReducers";


const rootReducer = combineReducers({
  loginReducers,
  logoutReducers,
  signupReducers,
  userReducers,
  getUsersReducers,
  getWorkLogReducers,
  updateUsersReducers,
  workReducers
})
export default rootReducer
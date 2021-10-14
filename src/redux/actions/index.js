import loginAction from './loginAction';
import signupAction from "./signupAction"
import userAction from './createuserAction';
import workAction from './workAction';
import getUsers from './getUsers';
import  logoutAction  from './loginAction';
import getWorkLog from './getWorkLog';
import updateUsers from './updateUsers';

const allActions ={
    loginAction,
    logoutAction,
    signupAction,
    userAction,
    workAction,
    getUsers,
    updateUsers,
    getWorkLog
}

export default allActions;
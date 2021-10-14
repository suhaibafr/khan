import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import CreateWork from "../CreateWork/CreateWork";
// import GetUsers from "../GetUser/GetUsers";
import styles from "./Dashboard.module.css";
import GetWorkLog from "../GetWorkLog/GetWorkLog";

const UserDashboard = () => {
  const [check, setCheck] = useState("");
  const dispatch = useDispatch();
  // logout function start //
  let history = useHistory();
  const logout = () => {
    localStorage.clear("");
    dispatch(allActions.logoutAction());
    history.push("/");
  };
  // logout function end //

  return (
    <div className={styles.Dashboard}>
      <div className={styles.sidebar}>
        <p>User Dashboard</p>
        <hr />
        <p onClick={() =>setCheck("work")}>Create WorkLog</p>
        <hr />
        {/* <p onClick={() =>setCheck("getUser")}>Show User</p>
        <hr /> */}
        <p onClick={() =>setCheck("log")}>All WorkLog</p>
        <hr />
        <p onClick={() => logout()}>Logout</p>
        <hr />
      </div>
      {/* <div> <CreateWork/></div> */}
      <div className={styles.rend}>
       <div> {check==="work"?(
        <div> <CreateWork/></div>
       ) : (
         ""
       )}</div>
        <div> {check==="log"?(
        <div> <GetWorkLog/></div>
       ) : (
         ""
       )}</div>
       </div>
    </div>
  );
};

export default UserDashboard;

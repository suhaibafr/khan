import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import CreateUser from "../CreateUser/CreateUser";
import GetUsers from "../GetUser/GetUsers";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
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
        <p>Manager Dashboard</p>
        <hr />
        <p onClick={() =>setCheck("User")}>Create User</p>
        <hr />
        <p onClick={() =>setCheck("getUser")}>Show User</p>
        <hr />
        <p onClick={() => logout()}>Logout</p>
        <hr />
      </div>
      <div className={styles.rend}>
       <div> {check==="User"?(
        <div> <CreateUser/></div>
       ) : (
         ""
       )}</div>
        <div> {check==="getUser"?(
        <div> <GetUsers/></div>
       ) : (
         ""
       )}</div>
      
      </div>
    </div>
  );
};

export default Dashboard;

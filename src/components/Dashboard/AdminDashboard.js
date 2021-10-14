import React,{useState} from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import CreateUser from "../CreateUser/CreateUser";
import GetUsers from "../GetUser/GetUsers";
import SignUp from "../SignUp/SignUp";
import styles from "./Dashboard.module.css"




const AdminDashboard = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState("");
  // logout function start //
  let history = useHistory();
  const  logout=()=> {
    localStorage.clear("")
    dispatch(allActions.logoutAction())
   history.push("/")
}
// logout function end //
 
  return (
    
  <div className={styles.Dashboard}>
<div className={styles.sidebar}>
<p>Admin Dashboard</p>
<hr/>
  <p onClick={() =>setCheck("Manager")}>Create Manager</p>
  <hr/>
  <p onClick={() =>setCheck("User")}>Create User</p>
  <hr/>
  <p onClick={() =>setCheck("getUser")}>Show All User</p>
  <hr/>
  <p  onClick={() =>logout()}>Logout</p>
  <hr/>
</div>
 <div className={styles.rend}>
     <div> {check==="Manager"?(
        <div> <SignUp/></div>
       ) : (
         ""
       )}</div>
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

export default AdminDashboard;

import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../redux/actions";
import styles from "./CreateUser.module.css";

const CreateUser = () => {
  let history = useHistory();
    const dispatch = useDispatch();
    const {data} = useSelector(state=>state.loginReducers.users)
    const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
      userType:""
    });
    const handelChange = (e) => {
      const { name, value } = e.target;
  
      setUser({ ...user, [name]: value });
    };
   
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(allActions.userAction(user,data.token));
      if(user){history.push("/")};
    };
   
  return (
    <div className={styles.createuser}>
      <div className={styles.main}>
        <p className={styles.sign} align="center">
          Create User 
        </p>
        <form className={styles.form1} onSubmit={submitHandler}>
          <input
            className={styles.un}
            type="text"
            align="center"
            placeholder="FirstName"
            name="firstName"
            value={user.firstName}
            onChange={handelChange}
          />
          <input
            className={styles.pass}
            type="text"
            align="center"
            placeholder="LastName"
            name="lastName"
            value={user.lastName}
            onChange={handelChange}
          />
          <input
            className={styles.un}
            type="text"
            align="center"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handelChange}
          />
          <input
            className={styles.pass}
            type="text"
            align="center"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handelChange}
          />
          <input
            className={styles.pass}
            type="text"
            align="center"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={user.password_confirmation}
            onChange={handelChange}
          />
          <input
            className={styles.pass}
            type="text"
            align="center"
            placeholder="User Type"
            name="userType"
            value={user.userType}
            onChange={handelChange}
          />
          <button className={styles.submit} align="center">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

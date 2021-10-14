import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Login.module.css";
// import { Link } from "react-router-dom";
import allActions from "../../redux/actions";
import { useHistory } from "react-router-dom";

const Login =  () => {
  let history = useHistory();
  const userData=useSelector ((state)=>state.loginReducers)

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const submitHandler =  (e) => {
    e.preventDefault();

    dispatch(allActions.loginAction(user));

const role = userData?.users?.data?.user?.roles[0].name;
console.log("role da",role)
    if(role=== "manager"){
      return history.push("/manager")
     } 
 else if(role=== "user"){
    return history.push("/user");
    }
 
  else if(role=== "admin") {
  return  history.push("/admin")
  }
 
  };
  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <p className={styles.sign} align="center">
          Login in
        </p>
        <form className={styles.form1} onSubmit={submitHandler}>
          <input
            className={styles.un}
            type="text"
            name="email"
            align="center"
            placeholder="Username"
            value={user.email}
            onChange={handelChange}
          />
          <input
            className={styles.pass}
            name="password"
            type="text"
            align="center"
            placeholder="Password"
            value={user.password}
            onChange={handelChange}
          />
          <button className={styles.submit} type="submit" align="center">
            Login in
          </button>
          {/* <p className={styles.forgot} align="center">
            <Link to="/signup">SignUp</Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;

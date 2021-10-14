import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  const submitHandler =(e) => {
    e.preventDefault();
    dispatch(allActions.signupAction(user));
    if(user){history.push("/")};
  };

  return (
    <div className={styles.signup}>
      <div className={styles.main}>
        <p className={styles.sign} align="center">
          Sign Up
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
          <button className={styles.submit} align="center">
            Sign Up
          </button>
          <p>
            <Link to="/">back to login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

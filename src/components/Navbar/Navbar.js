import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className={style.header}>
        <div className={style.headercontent}>
          <div className={style.logo}>
              <span id={style.blue}>SUH</span>
              <span id={style.orange}>AIB</span>
          </div>
          <div className={style.navBbar}>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

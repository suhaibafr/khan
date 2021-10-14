import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../redux/actions";
import styles from "./CreateWork.module.css";

const CreateWork = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const {data} = useSelector(state=>state.loginReducers.users)
    console.log("log waka",data)
    const [user, setUser] = useState({
        logDate: "",
        hours: "",
        description: ""
    });
    const handelChange = (e) => {
      const { name, value } = e.target;
  
      setUser({ ...user, [name]: value });
    };
   
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(allActions.workAction(user,data.token));
      history.push("/getworklogs")
    };
  return (
    <div className={styles.createWork}>
      <div className={styles.main}>
        <p className={styles.sign} align="center">
          Create Work 
        </p>
        <form className={styles.form1} onSubmit={submitHandler}>
          <input
            className={styles.un}
            type="text"
            align="center"
            placeholder=" example: 2020-08-06"
            name="logDate"
            value={user.logDate}
            onChange={handelChange}
           
          />
          <input
            className={styles.pass}
            type="text"
            align="center"
            placeholder=" example: 7"
            name="hours"
            value={user.hours}
            onChange={handelChange}
        
          />
          <input
            className={styles.dis}
            type="text"
            align="center"
            placeholder="Description"
            name="description"
            value={user.description}
            onChange={handelChange}
           
          />
          <button className={styles.submit} align="center">
           Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWork;

import React, { useEffect,useState} from "react";
import styles from "./GetWorkLog.module.css";
import allActions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const GetWorkLog = () => {
  const [pageNo,setPageNo]=useState(1);
    // const [deleteItem, setDeleteItem] = useState({})
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginReducers);

  const userDetail = useSelector((state) => state.getWorkLogReducers.users);
  let tok=userData.users.data.token;  // token get
  let id=userData.users.data.user.id; // id get
  let log=userDetail.data.workLogs.data;
 
  useEffect(() => {
    dispatch(allActions.getWorkLog(tok,id,pageNo));
    // eslint-disable-next-line
  }, [pageNo]);

  const nextUser=()=>{
    setPageNo(pageNo+1);
  }
  const PrevioseUser=()=>{
    setPageNo(pageNo-1);
  }

  return (   <div>
      <div className={styles.user}>
        <div className={styles.main}>
          <table className={styles.tab}>
            <thead>
              <tr>
                <th>Log Date</th>
                <th>hours</th>
                <th>Discription</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {log.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.log_date}</td>
                    <td>{value.hours}</td>
                    <td>{value.description}</td>
                    <td>
                      <button style={{width:70,color:"white",padding:10,background:"green"}}>Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={PrevioseUser} style={{width:100,color:"white",padding:10,margin:30,background:"black"}}>Previous</button>
          <button onClick={nextUser} style={{width:100,color:"white",padding:10,margin:30,background:"black"}}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default GetWorkLog;



// let token=userData.users.data.token;

//   const deleteHandler = (id, index) =>{
//     axios
//     .delete(
//         `http://34.210.129.167/api/users/${id}`,
//         {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//         }        
//     )
//     .then((res)=>{
//         console.log("deleted Successfully")
      
//         dispatch(allActions.getWorkLog());

//     })
//     .catch(()=>{
//         console.log("deleting err")
//     })
//     console.log("this is delete action ",userDetail)
//     let deleteItem = userDetail;
//     deleteItem.splice(index, 1)
//     setDeleteItem(deleteItem)
//     }

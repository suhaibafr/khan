import React, { useEffect, useState } from "react";
import styles from "./GetUsers.module.css";
import allActions from "../../redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const GetUsers = () => {
  // const [deleteItem, setDeleteItem] = useState({})
  const [pageNo, setPageNo] = useState(1);
  const [deleteUser, setDeleteUser] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginReducers);

  const userDetail = useSelector((state) => state.getUsersReducers.users);
  console.log("userdetail", userDetail);
  console.log(userData, "suhaib");
  useEffect(() => {
    dispatch(allActions.getUsers(userData.users.data.token, pageNo));
    // eslint-disable-next-line
  }, [pageNo, deleteUser]);

  let token = userData.users.data.token; // token get
  // let id=userData.users.data.user.id;
  const deleteHandler = (index, id) => {
    axios
      .delete(`http://34.210.129.167/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("deleted Successfully");
      })
      .catch(() => {
        console.log("deleting err");
      });
  };
  const nextUser = () => {
    setPageNo(pageNo + 1);
  };
  const PrevioseUser = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div>
      <div className={styles.user}>
        <div className={styles.main}>
          <table className={styles.tab}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userDetail?.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>{value.roles && value.roles[0].name}</td>
                    <td>
                      <button
                        style={{
                          width: 70,
                          color: "white",
                          margin: 5,
                          padding: 10,
                          background: "green",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          width: 70,
                          color: "white",
                          padding: 10,
                          background: "green",
                        }}
                        onClick={(e) => {
                          deleteHandler(index, value.id);
                          setDeleteUser(true);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            onClick={PrevioseUser}
            style={{
              width: 100,
              color: "white",
              padding: 10,
              margin: 30,
              background: "black",
            }}
          >
            Previous
          </button>
          <button
            onClick={nextUser}
            style={{
              width: 100,
              color: "white",
              padding: 10,
              margin: 30,
              background: "black",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default GetUsers;

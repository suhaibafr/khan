import axios from "axios"


 const updateUsers = (token,id,user) => async(dispatch)=> {
      dispatch({type: "UPDATE-USER_REQUEST"})
    try{ await axios.get(
        `http://34.210.129.167/api/users/${id}`,
        user ,
        {headers: {
            Authorization: `Bearer ${token}`
        }}
      ).then((response) =>{
          console.log(" work respose da",response)
          console.log("update sha",response)
       dispatch({type: "UPDATE-USER_REQUEST_SUCCESS", payload:response}) //.data.users.data
      })
    
    }
    catch(error){
        dispatch({type: "UPDATE-USER_REQUEST_FAILURE", payload:error})
    }
};

export default updateUsers;

import axios from "axios"


 const getUsers = (token,pageNumber) => async(dispatch)=> {
     console.log("akhwa sha",token)
      dispatch({type: "USER_GET_REQUEST"})
    try{ await axios.get(
        `http://34.210.129.167/api/users?page=${pageNumber}`,
        {headers: {
            Authorization: `Bearer ${token}`
        }}
      ).then((response) =>{
          console.log("respose da",response)
          console.log("babababa",response.data.users.data)
       dispatch({type: "USER_GET_REQUEST_SUCCESS", payload:response.data.users.data})
      })
    
    }
    catch(error){
        dispatch({type: "USER_GET_REQUEST_FAILURE", payload:error})
    }
};

export default getUsers;


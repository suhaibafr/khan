import axios from "axios"


 const getWorkLog = (token,id,pageNumber) => async(dispatch)=> {
      dispatch({type: "LOG_GET_REQUEST"})
    try{ await axios.get(
        `http://34.210.129.167/api/user/${id}/work-logs?page=${pageNumber}`,
        {headers: {
            Authorization: `Bearer ${token}`
        }}
      ).then((response) =>{
          console.log(" work respose da",response)
          console.log("lololo",response)
       dispatch({type: "LOG_GET_REQUEST_SUCCESS", payload:response}) //.data.users.data
      })
    
    }
    catch(error){
        dispatch({type: "LOG_GET_REQUEST_FAILURE", payload:error})
    }
};

export default getWorkLog;


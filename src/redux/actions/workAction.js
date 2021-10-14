import axios from "axios"


 const workAction = (user,token) => async(dispatch)=> {
      dispatch({type: "WORK_CREATE_REQUEST"})
    try{ await axios.post(
        ' http://34.210.129.167/api/work-logs',
        user ,{headers: {
          Authorization: `Bearer ${token}`
        }}
       
      ).then((response) =>{
       dispatch({type: "WORK_CREATE_REQUEST_SUCCESS", payload:response})
       console.log("wakhanda",response)
      })
    
    }
    
    catch(error){
        dispatch({type: "WORK_CREATE_REQUEST_FAILURE", payload:error})
    }
};

export default workAction;
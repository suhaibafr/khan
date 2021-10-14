import axios from "axios"


 const loginAction = (user) => async(dispatch)=> {
      dispatch({type: "USER_LOGIN_REQUEST"})
      
  
    try{ await axios.post(
        'http://34.210.129.167/api/login',
        user 
      ).then((response) =>{
       dispatch({type: "USER_LOGIN_REQUEST_SUCCESS", payload:response})
       localStorage.setItem('token',response.data.token)
      })
      
    }
    catch(error){
        dispatch({type: "USER_LOGIN_REQUEST_FAILURE", payload:error})
    }
    
};


export default loginAction;


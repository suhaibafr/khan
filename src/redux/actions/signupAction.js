import axios from "axios"


 const signup = (user) => async(dispatch)=> {
      dispatch({type: "USER_SIGNUP_REQUEST"})
    try{  await axios.post(
      
        'http://34.210.129.167//api/register',
        user 
        
        // {
        //   firstName:user.firstName,
        //   lastName:user.lastName,
        //   email:user.email,
        //   password:user.password,
        //   password_confirmation:user.password_confirmation
        // } 
        
       
      ).then((response) =>{
       dispatch({type: "USER_SIGNUP_REQUEST_SUCCESS", payload:response})
      })
    }
    catch(error){
        dispatch({type: "USER_SIGNUP_REQUEST_FAILURE", payload:error})
    }
};

export default signup;


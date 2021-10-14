import axios from "axios"


 const userAction = (user,token) => async(dispatch)=> {
      dispatch({type: "USER_CREATE_REQUEST"})
    try{ await axios.post(
        ' http://34.210.129.167/api/users',
        {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
            userType: user.userType
        },{headers: {
            Authorization: `Bearer ${token}`
          }}
      ).then((response) =>{
       dispatch({type: "USER_CREATE_REQUEST_SUCCESS", payload:response})
      })
    
    }
    catch(error){
        dispatch({type: "USER_CREATE_REQUEST_FAILURE", payload:error})
    }
};

export default userAction;


const initialState = {
    users:[],
    loading:true
}

const  signupReducers=(state = initialState, action)=>{
    switch(action.type){

        case "USER_SIGNUP_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "USER_SIGNUP_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "USER_SIGNUP_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}
export default signupReducers;
const initialState = {
    users:[],
    loading:true
}

 const loginReducers=(state = initialState, action)=>{
    switch(action.type){

        case "USER_LOGIN_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "USER_LOGIN_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "USER_LOGOUT":
            return {
                ...state,
                users:null,
            }
           
            case "USER_LOGIN_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}

export default loginReducers;
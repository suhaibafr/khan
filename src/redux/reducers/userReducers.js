const initialState = {
    users:[],
    loading:true
}

 const userReducers=(state = initialState, action)=>{
    switch(action.type){

        case "USER_CREATE_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "USER_CREATE_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "USER_CREATE_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}
export default userReducers;
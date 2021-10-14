const initialState = {
    users:[],
    loading:true
}

 const updateUsersReducers=(state = initialState, action)=>{
    switch(action.type){

        case "UPDATE_USER_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "UPDATE_USER_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "UPDATE_USER_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}
export default updateUsersReducers;
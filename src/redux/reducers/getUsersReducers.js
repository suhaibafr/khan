const initialState = {
    users:[],
    loading:true
}

const  getUsersReducers=(state = initialState, action)=>{
    switch(action.type){

        case "USER_GET_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "USER_GET_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "USER_GET_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}
export default getUsersReducers;
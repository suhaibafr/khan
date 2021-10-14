const initialState = {
    users:[],
    loading:true
}

const  getWorkLogReducers=(state = initialState, action)=>{
    switch(action.type){

        case "LOG_GET_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "LOG_GET_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "LOG_GET_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}
export default getWorkLogReducers;
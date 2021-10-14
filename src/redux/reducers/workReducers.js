const initialState = {
    users:[],
    loading:true
}

 const workReducers=(state = initialState, action)=>{
    switch(action.type){

        case "WORK_CREATE_REQUEST":
        return {
            ...state,
            loading:false

        }
        case "WORK_CREATE_REQUEST_SUCCESS":
            return {
                ...state,
                users:action.payload,
                loading:true
    
            }
            case "WORK_CREATE_REQUEST_FAILURE":
            return {
                ...state,
                loading:false
    
            }
        default: return state
    }

}
export default workReducers;
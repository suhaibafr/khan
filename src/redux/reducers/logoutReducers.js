const initialState = {
    users:[],
    loading:true
}

 const logoutReducers=(state = initialState, action)=>{
    switch(action.type){

       
            case "USER_LOGOUT":
            return {
                ...state,
                users:"",
            }
        default: return state
    }

}

export default logoutReducers;
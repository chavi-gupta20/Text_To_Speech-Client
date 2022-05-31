import { FETCH_PATH_FAILURE,FETCH_PATH_REQUEST,FETCH_PATH_SUCCESS }from "../actions/actionTypes"
const initState ={
    loading:false,
    path:"",
    error:""
}


const rootReducer = (state=initState,action)=>{
    switch(action.type)
    {
        case FETCH_PATH_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        case FETCH_PATH_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case FETCH_PATH_FAILURE:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default rootReducer;
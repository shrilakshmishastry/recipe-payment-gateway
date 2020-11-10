const initialState = {
  data:[],
};

const initialDataLoadReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'LOAD':
        {
            return {
                ...state,
                data: action.data
            };
        }
        default: {return state;}
    }

}
export default initialDataLoadReducer;
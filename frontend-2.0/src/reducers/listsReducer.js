const listsReducer = (state = {
    lists: [],
    loading: false
}, action) => {
    switch(action.type) {
        case 'LOADING_LISTS':
            return {
                ...state, lists: [...state.lists], loading: true
            }
        case 'ADD_LISTS':
            return {
                ...state, lists: action.lists, loading: false
            }
        // case 'ADD_LIST':
        //     return {
        //         lists: 
        //     }
        default: 
            return state;
    }
}

export default listsReducer;
export const itemReducer = (state = {
    items: [],
    loading: false
}, action) => {
    switch(action.type) {
        // case 'EDIT_ITEM':
        //     return {
        //         ...state, items: [...state.items], loading: true
        //     }
        // case 'DELETE_ITEM':
        //     return {
        //         ...state, items: action.items, loading: false
        //     }
        default: 
            return state;
    }
}
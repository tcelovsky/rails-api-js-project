export const itemReducer = (state = {
    items: []
}, action) => {
    switch(action.type) {
        case 'EDIT_ITEM':
            return {
                ...state, items: [...state.items]
            }
        default: 
            return state;
    }
}
import {LIST_ITEMS,ITEM_DETAILS,SELECTED_ITEM} from "./../actionTypes/index";

const initialState = { 
    loggedIn: true,
    breweryItems:[]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_ITEM:
            return {
                ...state,
                channel: action.channel
            };
           
            case LIST_ITEMS:
            return {
                ...state,
                payload: action.items,
                loading: false
            };
            case ITEM_DETAILS:
                return {
                    ...state,
                    payload: action.payload,
                    loading: false
                };
        default:
            return state;
    }
}
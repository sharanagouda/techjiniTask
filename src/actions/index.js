import {LIST_ITEMS,ITEM_DETAILS,SELECTED_ITEM} from "../actionTypes/index";



export function selectedItem(id) {
  return {
    type: SELECTED_ITEM,
    payload: json.articles,
  };
}

export function selectedItemDetails(id) {
  return {
    type: ITEM_DETAILS,
    payload: json.articles,
  };
}
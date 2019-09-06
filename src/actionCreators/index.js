import {LIST_ITEMS,ITEM_DETAILS,SELECTED_ITEM} from "../actionTypes/index";
import {receivedPosts, selectedItem, selectedItemDetails} from "../actions/index";

// async function getListBreweryItems(){
//  //Have a try and catch block for catching errors.
//  try {
//     //Assign the promise unresolved first then get the data using the json method. 
//     const breweryAPICall = await fetch(`https://api.openbrewerydb.org/breweries`);
//     const brewery = await breweryAPICall.json();
//     console.log("hi",brewery.results);
//     this.setState({breweryList: brewery, loading: false});
// } catch(err) {
//     console.log("Error fetching data-----------", err);
// }

// }
export function getListBreweryItems() {
    return dispatch => {
      return (
        fetch(
          `https://api.openbrewerydb.org/breweries`,
          {
            method: "GET"
          }
        )
          .then(result => {
            return result.json();
          })
          .then(jsonResult => {
            console.log("action creator",jsonResult)
            dispatch(receivedPosts(jsonResult));
          }),
        error => console.log(error)
      );
    };
  }
  


  export function getselectedItemDetails(data) {
    return dispatch => {
      return (
        fetch(
          `https://api.openbrewerydb.org/breweries`,
          {
            method: "GET"
          }
        )
          .then(result => {
            return result.json();
          })
          .then(jsonResult => {
            
            dispatch(selectedItemDetails(jsonResult));
          }),
        error => console.log(error)
      );
    };
  }


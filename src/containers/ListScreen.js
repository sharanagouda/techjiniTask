
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,FlatList,
  StatusBar,ActivityIndicator
} from 'react-native';

class ListScreen extends React.Component{

  constructor(props){
    super(props);
     //Define your state for your component.
    this.state={
        brewerySelectedItem: this.props.selectedId,
        breweryID : null,
            //Have a loading state where when data retrieve returns data. 
            loading: true,
            name: null,
  brewery_type: null,
  street: null,
  city: null,
  state:null ,
  postal_code: null,
  country:null,
  longitude: null,
  latitude: null,
  phone: null,
  website_url: null,
  updated_at: null,
        
    }
    console.log(this.state.brewerySelectedItem)
}
async  componentDidMount() {
  //Have a try and catch block for catching errors.
  try {
     //Assign the promise unresolved first then get the data using the json method. 
     const selecteedBreweryAPICall = await fetch(`https://api.openbrewerydb.org/breweries/5494`);
     const brewery = await selecteedBreweryAPICall.json();
     console.log("hi",brewery.id);
     this.setState({
       breweryID:brewery.id,
       name: brewery.name,
       brewery_type: brewery.brewery_type,
       street: brewery.street,
       city: brewery.city,
       state: brewery.state,
       postal_code: brewery.postal_code,
       country:brewery.country,
       longitude: brewery.longitude,
       latitude: brewery.latitude,
       phone: brewery.phone,
       website_url: brewery.website_url,
       updated_at: brewery.updated_at,
        loading: false});
 } catch(err) {
     console.log("Error fetching data-----------", err);
 }
     }

 render() {
   //Destruct breweryDeails and Loading from state.
   const { breweryDetails, loading } = this.state;
   //const {breweries} = this.props;
  
    return (<View>
          <Text style={styles.breweryItemHeader}>{this.state.breweryID}</Text>
          <Text style={styles.breweryItemHeader}>{this.state.name}</Text>
          <Text style={styles.breweryItemHeader}>{this.state.brewery_type}</Text>
          <Text style={styles.breweryItemHeader}>{this.state.city}</Text>
          <Text style={styles.breweryItemHeader}>{this.state.state}</Text>
          <Text style={styles.breweryItemHeader}>{this.state.country}</Text>
          <Text style={styles.breweryItemHeader}>{this.state.phone}</Text>
          </View>)
 }
}

const styles = StyleSheet.create({

});

export default ListScreen;

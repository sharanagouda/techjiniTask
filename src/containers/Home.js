
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,TouchableOpacity,
  Text,FlatList,
  StatusBar,ActivityIndicator
} from 'react-native';
import {Actions} from "react-native-router-flux"
import {connect} from "react-redux";
import {getListBreweryItems,getselectedItemDetails} from "../actionCreators/index";
class Home extends React.Component{

    constructor(){
        super();
         //Define your state for your component.
        this.state={
            breweryList: [],
                //Have a loading state where when data retrieve returns data. 
                loading: true
            
        }
    }
 //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
   
         async  componentDidMount() {
 //Have a try and catch block for catching errors.
 try {
    //Assign the promise unresolved first then get the data using the json method. 
    const breweryAPICall = await fetch(`https://api.openbrewerydb.org/breweries`);
    const brewery = await breweryAPICall.json();
    this.setState({breweryList: brewery, loading: false});
} catch(err) {
    console.log("Error fetching data-----------", err);
}


        // this.props.handletoGetBrewerylist();
        //  this.setState({
        //      breweryList:this.props.breweries
        //  })
        // console.log("Home ", this.props.breweries);
      
    }
    //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument. 
    renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: '#E37861'}} onPress={() =>{Actions.listScreen({selectedId:data.item.id})}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.breweryItemHeader}>{data.item.name}</Text>
                    </View>
                </TouchableOpacity>
    }

 render() {
        //Destruct breweryList and Loading from state.
        const { breweryList, loading } = this.state;
        //const {breweries} = this.props;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={breweryList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
};


const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    breweryItemHeader: {  
        color: '#581845',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
});



const mapStateToProps = (state)=> ({
    breweries: state.app.payload
})
const mapDispatchToProps =(dispatch)=>({
    handletoGetBrewerylist : () => dispatch(getListBreweryItems())
}) 
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
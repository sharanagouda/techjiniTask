import React,{Component} from 'react';
import {Router, Scene} from "react-native-router-flux";
import ListScreen from '../containers/ListScreen';
import Home from '../containers/Home';


export default class Routes extends Component {
    render() {
      return (
          <Router>
                <Scene key="user" hideNavBar={true} initial={this.props.loggedIn}>
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="listScreen" component={ListScreen} title="Home"/>
                </Scene>
          </Router>
      );
    }
  }
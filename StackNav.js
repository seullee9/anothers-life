import React, { Component } from 'react';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import { StackNavigator} from 'react-navigation'
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen'
import DrawerNav from "./DrawerNav";
import App from "./App2"
import People from "./People";


export default StackNav = StackNavigator({
    Main: {
        screen: App,
        navigationOptions:({navigation}) => ({
            title: "Home",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Ionicons name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Ionicons name="ios-settings" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: (props) => ({
            title: "Settings",
        })
    },
    People: {
        screen: People,
        navigationOptions: (props) => ({
          title: "People"
        })
    }
    
})

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RN from 'react-native';
const { BlurView, VibrancyView } = require('react-native-blur');
import {
  StyleSheet,
  AppRegistry,
  NativeModules,
  LayoutAnimation,
  TouchableHighlight,
  Image,
  Text,
  View
} from 'react-native';

class townskeTV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true
    };
  }

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  render() {
    console.log(this.state.focussed)
    return (
      <Image source={{uri: "https://townske.imgix.net/331c89bc-332f-e6b9-3e0b-9eb56e885ce3.jpg?fit=min&w=1800"}}style={styles.container}>
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
            
        </View>
        <View style={{top: 100}}>
        <BlurView  blurType="light" style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', padding: 20, paddingBottom: 120 }}>
        <View style={{flexDirection: !this.state.on ? 'column' : 'row'}}>
          <TouchableHighlight style={[styles.button, this.state.focussed === 0 ? styles.focussed : null]} underlayColor="#777" onFocus={() => this.setState({focussed: 0})} onPress={e => this.setState({focussed: 0})}>
            <Text style={styles.buttonText}>This is my button</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, this.state.focussed === 1 ? styles.focussed : null]} underlayColor="#777" onFocus={() => this.setState({focussed: 1})} onPress={e => this.setState({on: !this.state.on})}>
            <Text style={styles.buttonText}>This is my button</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={[styles.button, {height: this.state.on ? 60 : 130},  this.state.focussed === 2 ? styles.focussed : null]} onFocus={() => this.setState({focussed: 2})} underlayColor="#777" onPress={e => console.log(e)}>
            <Text style={styles.buttonText}>This is my button</Text>
          </TouchableHighlight>
        </View>
        </BlurView>
        </View>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa"
  },
  button: {
    marginLeft: 10, width: 250, height: 60, marginBottom: 10,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#333',
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 4,
      width: 0
    }
   },
  focussed: {
    transform: [{scale:1.1}],
    shadowRadius: 10
  },
  buttonText: {
       fontSize: 18,
       color: 'white'
   },
  welcome: {
    fontSize: 48,
    textAlign: 'center',
    margin: 100,
    backgroundColor: 'transparent',
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('townskeTV', () => townskeTV);



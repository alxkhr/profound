/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Find from './src/find';

// Cmd+R to reload
// Cmd+D or shake for dev menu

class App extends Component {
  render() {
    // TODO implement app structure, authentication, routing
    return <Find />;
  }
}

AppRegistry.registerComponent('profound', () => App);

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: LoadingState.ERROR,
      error: 'Check your connection and reload.',
      data: null,
    };
    this.onFetch = this.onFetch.bind(this);
  }

  async onFetch() {
    this.setState({ loading: LoadingState.LOADING });
    try {
      let response = await fetch('http://localhost:3000/');
      let responseJson = await response.json();
      this.setState({ loading: LoadingState.LOADED, data: responseJson.foo });
    } catch(err) {
      let error = 'unknown error';
      if (err && err.message) error = err.message;
      this.setState({ loading: LoadingState.ERROR, error });
    }
  }

  render() {
    switch (this.state.loading) {
      case LoadingState.LOADING:
        return <View style={styles.container}><Text>Loading...</Text></View>;
      case LoadingState.LOADED:
        return (
          <View style={styles.container}>
            <Text>{this.state.data}</Text>
            <Button onPress={this.onFetch} title="fetch" />
          </View>
        );
      case LoadingState.ERROR:
        return (
          <View style={styles.container}>
            <Text>{this.state.error}</Text>
            <Button onPress={this.onFetch} title="fetch" />
          </View>
        );
      default:
        return <View><Text>Invalid Loading State</Text></View>;
    }
  }
}

const LoadingState = {

  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

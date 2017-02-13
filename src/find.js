import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Flier from './flier';

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: LoadingState.ERROR,
      error: 'Check your connection and reload.',
      fliers: [],
    };
    this.onFetch = this.onFetch.bind(this);
  }

  async componentDidMount() {
    await this.onFetch();
  }

  async onFetch() {
    this.setState({ loading: LoadingState.LOADING });
    try {
      const response = await fetch('https://profound-server.herokuapp.com/discover');
      const { fliers } = await response.json();
      this.setState({ loading: LoadingState.LOADED, fliers }); // TODO get fliers, not foo
    } catch(err) {
      let error = 'unknown error';
      if (err && err.message) error = err.message;
      this.setState({ loading: LoadingState.ERROR, error });
    }
  }

  renderError(error, reload) {
    return function fn() {
      return (
        <View style={styles.container}>
          <Text>{error}</Text>
          <Button onPress={reload} title="fetch" />
        </View>
      );
    }
  }

  render() {
    const { loading, fliers, error } = this.state;
    switch (loading) {
      case LoadingState.LOADING:
        return <View style={styles.container}><Text>Loading...</Text></View>;
      case LoadingState.LOADED:
        return (
          <SwipeCards
            cards={fliers}
            renderCard={(flierProps) => <Flier {...flierProps} />}
            renderNoMoreCards={this.renderError('no more cards', this.onFetch)}
            handleYup={function fn() { console.log('yup'); }}
            handleNope={function fn() { console.log('nope'); }}
          />
        );
      case LoadingState.ERROR:
        return this.renderError(error, this.onFetch)();
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

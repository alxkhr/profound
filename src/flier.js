import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Flier({ name, color }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={{ color: 'black' }}>{name}</Text>
    </View>
  );
}

Flier.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
});

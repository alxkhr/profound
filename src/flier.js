import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Flier({ text, bColor }) {
  return (
    <View style={[styles.card, { backgroundColor: bColor }]}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  );
}

Flier.propTypes = {
  text: PropTypes.string,
  bColor: PropTypes.string,
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

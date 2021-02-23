import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default function Day(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <Text style={{ textAlign: 'center' }}>{props.daily}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width/3,
    backgroundColor: '#DCF7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  }
});
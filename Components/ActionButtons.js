import React from 'react';
import { StyleSheet } from 'react-native';
import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';

export default function ActionButtons() {
  return (
    <ActionButton
      style={{ zIndex: 2 }}
      buttonColor="rgba(231,76,60,1)"
    >
      <ActionButton.Item
        buttonColor='#9b59b6'
        title="Sexy Edit Day"
        onPress={() => console.log("notes tapped!")}
      >
        <Octicons name="watch" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor='#3498db'
        title="Sexy Edit Calendar"
        onPress={() => {}}
      >
        <SimpleLineIcons name="calendar" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

function ThinkButton({ children, onPress, vspace }) {
  const thinkStyle = vspace ? styles.buttonVspace : styles.button;

  return (
    <Button
      mode="outlined"
      color="#ed6b18"
      style={thinkStyle}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 20,
    backgroundColor: '#404040'
  },
  button: {
    height: 36
  },
  buttonVspace: {
    width: 400,
    height: 36,
    marginTop: 4,
    marginBottom: 5
  },
  email: {
    fontSize: 20,
    marginTop: 10
  }
});

export default ThinkButton;

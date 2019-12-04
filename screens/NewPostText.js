import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  newPostView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  newPostNav: {
    backgroundColor: '#ed6b18'
  },
  newPostInput: {
    margin: 30,
    width: 200,
    backgroundColor: 'transparent'
  },

  newPostSubmit: {
    marginLeft: 30,
    marginRight: 30
  },
  mediumHeading: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 20
  },
  email: {
    fontSize: 20,
    marginTop: 10
  }
});
const NewPostText = () => {
  return (
    <View style={styles.newPostView}>
      <TextInput style={styles.newPostInput} />
      <Button
        contentStyle={styles.emailButton}
        mode="contained"
        color="#ed6b18"
        onPress={this._signInEmail}
      >
        Save note
      </Button>
    </View>
  );
};

export default NewPostText;

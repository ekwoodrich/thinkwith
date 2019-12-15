import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  newPostView: {
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%'
  },
  newPostNav: {
    backgroundColor: '#ed6b18'
  },
  newPostInput: {
    height: 200
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
const NewPostText = ({ navigation }) => {
  const _saveNote = e => {
    navigation.navigate('Home');
    e.preventDefault();
  };
  return (
    <View style={styles.newPostView}>
      <TextInput
        autoFocus
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        style={styles.newPostInput}
      />
      <Button
        contentStyle={styles.emailButton}
        mode="contained"
        color="#ed6b18"
        onPress={_saveNote}
      >
        Save note
      </Button>
    </View>
  );
};

export default withNavigation(NewPostText);

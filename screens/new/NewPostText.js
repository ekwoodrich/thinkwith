import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import ThinkButton from '../../components/ui/ThinkButton';

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
    height: 200,
    fontSize: 24
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
  const [noteText, setNoteText] = useState('');
  const ref = firestore().collection('notes');

  async function _uploadNote() {
    let token = await firebase.auth().currentUser.getIdToken(true);

    ref.add({
      text: noteText,
      idToken: token
    });
  }
  const _saveNote = e => {
    _uploadNote()
      .then(docRef => {
        navigation.navigate('Home');
      })
      .catch(error => {
        alert(error);
      });

    //navigation.navigate('Home');
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
        value={noteText}
        onChangeText={text => setNoteText(text)}
        placeholder="Write something"
      />
      <ThinkButton onPress={_saveNote}>Save Note</ThinkButton>
    </View>
  );
};

export default withNavigation(NewPostText);

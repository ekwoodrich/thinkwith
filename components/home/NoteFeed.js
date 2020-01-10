import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading
} from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';
import NoteCard from './NoteCard';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function NoteFeed({ limit, dateStart, dateEnd }) {
  const ref = firestore().collection('notes');
  const [notes, setNotes] = useState([]);
  const noteItems = notes.map(note => <NoteCard note={note} />);

  useEffect(() => {
    if (firebase.auth().currentUser) {
      return ref
        .where('uid', '==', firebase.auth().currentUser.uid)
        .onSnapshot(querySnapshot => {
          const list = [];
          querySnapshot.forEach(doc => {
            const { text, createdOn } = doc.data();
            list.push({
              id: doc.id,
              text,
              createdOn
            });
          });
          setNotes(list);
        });
    }
  }, [ref]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    if (firebase.auth().currentUser) {
      return ref
        .where('uid', '==', firebase.auth().currentUser.uid)
        .get()
        .then(query => {
          const list = [];
          query.forEach(doc => {
            const { text, createdOn } = doc.data();
            list.push({
              id: doc.id,
              text,
              createdOn
            });
          });
          setNotes(list);
          setRefreshing(false);
        });
    }
  }, [ref]);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <Subheading style={styles.feedDateSeparator}> Jan 8, 2020</Subheading>
      </View>
      <View>{noteItems}</View>
    </ScrollView>
  );
}

export default NoteFeed;

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  },
  feedDateSeparator: {
    textAlign: 'center',
    margin: 'auto'
  }
});

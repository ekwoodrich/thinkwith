import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';

function NoteCard(note) {
  return (
    <Card>
      <Card.Content>
        <Paragraph>{note.text}</Paragraph>
      </Card.Content>
    </Card>
  );
}

function NoteFeed() {
  const ref = firestore().collection('notes');
  const [notes, setNotes] = useState([]);
  const noteItems = notes.map(note => NoteCard(note));

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

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>{noteItems}</View>
    </ScrollView>
  );
}

export default NoteFeed;

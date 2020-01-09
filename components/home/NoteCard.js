import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

function NoteCard({ note, navigation }) {
  const _goToCard = () => {
    console.log('card pressed');
    navigation.navigate('View');
  };

  return (
    <Card onPress={_goToCard} style={styles.noteCard}>
      <Card.Content>
        <Paragraph>{note.text}</Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginBottom: 2,
    marginTop: 2
  }
});

export default withNavigation(NoteCard);

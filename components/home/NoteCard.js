import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';
import { StyleSheet } from 'react-native';

function NoteCard({ note }) {
  return (
    <Card style={styles.noteCard}>
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
    borderColor: '#d6d7da',
    marginBottom: 5,
    marginTop: 5
  }
});

export default NoteCard;

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ThinkButton from '../ui/ThinkButton';

const NoteViewer = ({ noteId }) => (
  <View>
    <Text />
    <Card style={styles.noteCard}>
      <Card.Content>
        <Paragraph>Viewing Note {noteId}</Paragraph>
      </Card.Content>
    </Card>
    <ThinkButton>Delete</ThinkButton>
  </View>
);

export default NoteViewer;

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginBottom: 5,
    marginTop: -10,
    marginLeft: 10,
    marginRight: 10
  }
});

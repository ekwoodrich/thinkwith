import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';

function NoteCard({ note }) {
  return (
    <Card>
      <Card.Content>
        <Paragraph>{note.text}</Paragraph>
      </Card.Content>
    </Card>
  );
}

export default NoteCard;

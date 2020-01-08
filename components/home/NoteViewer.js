import React from 'react';
import { Text, View } from 'react-native';

const componentName = ({ noteId }) => (
  <View>
    <Text>Viewing Note {noteId}</Text>
  </View>
);

export default componentName;

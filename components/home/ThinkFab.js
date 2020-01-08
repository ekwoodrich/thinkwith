import React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

function ThinkFab(props) {
  const [open, setOpen] = useState(false);

  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={'plus'}
        style={styles.fabGroup}
        fabStyle={styles.fab}
        color="white"
        actions={[
          {
            icon: 'lead-pencil',
            label: 'Note',
            onPress: () => console.log('Pressed star')
          },
          {
            icon: 'star',
            label: 'Goal',
            onPress: () => console.log('Pressed email')
          },
          {
            icon: 'check',
            label: 'Task',
            onPress: () => console.log('Pressed email')
          },
          {
            icon: 'coffee',
            label: 'Substance',
            onPress: () => console.log('Pressed email')
          },
          {
            icon: 'pill',
            label: 'Medication',
            onPress: () => console.log('Pressed notifications')
          }
        ]}
        onStateChange={nextOpen => setOpen(!open)}
        onPress={() => {}}
      />
    </Portal>
  );
}
const styles = StyleSheet.create({
  appbar: {
    color: 'white'
  },
  fabGroup: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  fab: {
    backgroundColor: '#ed6b18'
  },
  homeContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
});

export default ThinkFab;

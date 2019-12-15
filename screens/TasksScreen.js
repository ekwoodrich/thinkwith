import React, { Component } from 'react';
import { Text, FAB } from 'react-native-paper';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import MainNavbar from '../components/MainNavbar';
class TasksScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <MainNavbar screen="tasks" />
        <FAB
          style={styles.fab}
          icon="plus"
          color="#ed6b18"
          onPress={() => {
            this.props.navigation.navigate('NewPost');
          }}
          theme={{ colors: { accent: 'white' } }}
        />
      </SafeAreaView>
    );
  }
}

export default TasksScreen;

const styles = StyleSheet.create({
  appbar: {
    color: 'white'
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20
  },
  homeContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
});

import React, { Component } from 'react';
import { FAB } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MainNavbar from '../../components/home/MainNavbar';
import ThinkCalendar from '../../components/home/ThinkCalendar';

class CalendarScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <MainNavbar screen="calendar" />
        <ThinkCalendar />
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

export default CalendarScreen;

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

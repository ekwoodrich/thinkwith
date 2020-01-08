import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { withNavigation } from 'react-navigation';
import { Subheading } from 'react-native-paper';
import NoteFeed from './NoteFeed';

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

function ThinkCalendar({ navigation }) {
  return (
    <View>
      <Calendar
        style={styles.calendar}
        onDayPress={day => {
          console.log('selected day', day.dateString);
          navigation.navigate('Home', {
            day: day.dateString
          });
        }}
      />
      <View>
        <Subheading>Jan. 8, 2019</Subheading>
      </View>
      <NoteFeed />
    </View>
  );
}

export default withNavigation(ThinkCalendar);

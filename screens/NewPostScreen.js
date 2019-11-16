import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const MusicRoute = () => (
  <View>
    <Text>sdfsdf</Text>
  </View>
);

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class NewPostScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'text', title: 'Text', icon: 'short-text' },
      { key: 'photo', title: 'Photo', icon: 'camera' },
      { key: 'log', title: 'Recents', icon: 'history' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    text: MusicRoute,
    photo: AlbumsRoute,
    log: RecentsRoute
  });

  render() {
    return (
      <BottomNavigation
        barStyle={styles.newPostNav}
        activeColor="white"
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  newPostView: {},
  newPostNav: {
    backgroundColor: '#ed6b18'
  },
  newPostInput: {
    borderColor: '#ed6b18',
    borderRadius: 5,
    borderWidth: 2,
    margin: 30
  },

  newPostSubmit: {
    marginLeft: 30,
    marginRight: 30
  },
  mediumHeading: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 20
  },
  email: {
    fontSize: 20,
    marginTop: 10
  }
});

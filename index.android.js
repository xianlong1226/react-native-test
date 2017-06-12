/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy1</Text>
        <Button
          onPress={() => navigate('Home')}
          title="go to home"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

// MainScreenNavigator.navigationOptions = {
//   title: 'Main',
// };

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat1')}
          title="got to chat1"
        />
      </View>
    );
  }
}

class ChatScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy1</Text>
        <Button
          onPress={() => navigate('Chat2')}
          title="go to chat 2"
        />
      </View>
    );
  }
}

class ChatScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy2',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy2</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: MainScreenNavigator },
  Home: { screen: HomeScreen },
  Chat1: { screen: ChatScreen1 },
  Chat2: { screen: ChatScreen2 }
});

export default SimpleApp;

AppRegistry.registerComponent('reactnativeapp2', () => SimpleApp);

import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {Firebase, Auth} from '../firebase';
import {Header, Button, Spinner} from '../components/common';
import LoginForm from '../components/LoginForm';
import HomeScreen from './HomeScreen';

class SigninScreen extends Component{
  state = {loggedIn: null};

  componentDidMount() {
    Firebase;

    Auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm/>;
      case true:
        return <HomeScreen/>;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    height: 90,
    marginHorizontal: 20,
  },
  logout: {
    marginTop: 40,
  },
});

export default SigninScreen;
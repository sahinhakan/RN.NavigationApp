import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class TitleLogo extends Component {
  render() {
    return (
      <Image source={require('../../assets/header-icon.png')}></Image>
    )
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <TitleLogo />,
      headerBackTitle: 'Home',
      headerTransparent: true,
      headerRight: (
        <TouchableOpacity style={{ marginRight: 10 }}
          onPress={() => navigation.navigate('Modal')}>
          <Text style={{ color: "#67901F" }}>About</Text>
        </TouchableOpacity>
      )
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Detail 1"
          onPress={() => navigate("Detail", {
            title: 'Detail 1'
          })}
        />
        <Button
          title="Detail 2"
          onPress={() => navigate("Detail", {
            title: 'Detail 2'
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
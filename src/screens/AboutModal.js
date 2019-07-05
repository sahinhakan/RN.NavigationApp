import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class AboutModal extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>About Modal !</Text>
        <Button title="Close"
          onPress={() => goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
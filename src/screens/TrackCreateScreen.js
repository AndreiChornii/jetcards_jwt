import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TrackCreateScreen = () => {
  return <Text style={styles.container}>TrackCreateScreen</Text>;
};

TrackCreateScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    fontSize: 48
  },
});

export default TrackCreateScreen;

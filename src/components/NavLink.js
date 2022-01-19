import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <View style={styles.link}>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.appButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 12,
    color: "#de2768",
    // fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 50
    // textTransform: "uppercase"
    // width: 30,
    // height: 5
  },
  // link: {
  //   marginBottom: 500
  // }
});

export default withNavigation(NavLink);

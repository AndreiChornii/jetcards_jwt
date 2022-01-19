import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.middle}>
      <View style={styles.header}>
        <Text style={styles.titleText}>{headerText}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentelement}>
          <Image
            style={styles.image}
            source={require("../img/smile.png")}
          />
          <View style={styles.inputView}>
            <Input
              placeholder="Login"
              // label="Login"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.contentelement}>
          <Image
            style={styles.image}
            source={require("../img/lock.png")}
          />
          <View style={styles.inputView}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              // label="Password"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <View style={styles.downStyle}>
          <View style={styles.buttonStyle}>
            <Button
              buttonStyle={{
                backgroundColor: 'lightgrey'
              }}
              title={submitButtonText}
              onPress={() => onSubmit({ email, password })}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  middle: {
    flex: 0.80,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  header: {
    // flex: 0.17,
    backgroundColor: "#de2768",
    borderRadius: 5,
    // position: "relative",
    width: "75%",
    height: 70,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: -35
  },
  content: {
    flex: 0.90,
    // backgroundColor: "green",
    justifyContent: "space-around",
    width: "90%",
    alignItems: "center",
    // borderWidth:1,
    // borderColor: "black"
  },

  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  contentelement: {
    borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 10
  },
  image: {
    resizeMode: "cover",
    height: 25,
    width: 25,
    marginRight: 25,
    // borderWidth: 1,
    // borderColor: 'brown',
    alignSelf: "center"
  },
  inputView: {
    height: 35,
    margin: 0,
    // borderBottomWidth: 1,
    // borderBottomColor: "lightgrey",
    padding: 0,
    flex: 0.75,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
  downStyle: {
    alignItems: "center",
    height: 60,
    justifyContent: "space-between"
  },
  buttonStyle: {
    width: 150
  }
});

export default AuthForm;

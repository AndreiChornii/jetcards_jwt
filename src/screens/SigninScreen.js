import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { Context } from '../context/AuthContext';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="JET CARDS Service - Sign in"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="SIGN IN"
      />
      <NavLink
        text="Forgot your Login or Password?"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },

});

export default SigninScreen;

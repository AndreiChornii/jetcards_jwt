import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="JET CARDS Service - Registration"
        errorMessage={state.errorMessage}
        submitButtonText="SIGN UP"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
  header: () => false
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

export default SignupScreen;

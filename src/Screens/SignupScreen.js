import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext); // signup este din authcontext  si state-ul tot de acolo

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account ? Sign in instead!"
      />
    </View>
  );
};
SignupScreen.navigationOptions = () => {
  return { headerShown: false };
};
const styles = StyleSheet.create({
  container: {
    flex: 1, // expand vertical space
    justifyContent: "center", // put all in center
    marginBottom: 200,
  },
});

export default SignupScreen;

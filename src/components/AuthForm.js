import React, { useState } from "react";

import Spacer from "./Spacer";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h2>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)} // cand se schimba textu ia direct mailul si il pune in setEmail
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry={true}
        label="Password"
        valie={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ email, password });
          }}
        />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
    bottom: 10,
  },
});
export default AuthForm;

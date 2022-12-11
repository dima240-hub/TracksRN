import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    // <SafeAreaView
    <View
      style={{ justifyContent: "center", flex: 1, backgroundColor: "black" }}
    >
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;

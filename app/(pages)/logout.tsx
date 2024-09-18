import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

const index = () => {
  const { isLoaded, signOut } = useAuth();
  const onLogoutPress = () => {
    signOut();
  };
  return (
    <View>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <TouchableOpacity onPress={onLogoutPress}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

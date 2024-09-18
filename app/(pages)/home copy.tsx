import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
useRouter;
const index = () => {
  const { isLoaded, signOut } = useAuth();
  const router = useRouter();
  const onLogoutPress = () => {
    signOut();

    router.push({ pathname: "/" });
  };
  return (
    <View>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <Text>index</Text>
      <Text>home</Text>
      <TouchableOpacity onPress={onLogoutPress}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

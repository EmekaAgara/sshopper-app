import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";

const Success = () => {
  return (
    <View style={styles.safeArea}>
      <Text>success</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: "100%",
  },
});

export default Success;

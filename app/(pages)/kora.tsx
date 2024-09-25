import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const Kora = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        startInLoadingState={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // source={{ uri: route.params.paramKey }}
        source={{ uri: "https://google.com" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: "100%",
  },
});

export default Kora;

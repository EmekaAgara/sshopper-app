import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { router, useLocalSearchParams } from "expo-router";

const Kora = () => {
  const { checkoutUrl } = useLocalSearchParams();

  if (typeof checkoutUrl !== "string") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Invalid checkout URL</Text>
      </View>
    );
  }

  const handleShouldStartLoadWithRequest = (request: { url: any }) => {
    const { url } = request;

    if (url.includes("/success")) {
      router.push("/success");
      return false;
    }
    console.log(url);
    return true;
  };
  return (
    <View style={styles.safeArea}>
      {checkoutUrl ? (
        <WebView
          source={{ uri: checkoutUrl }}
          style={{ flex: 1 }}
          startInLoadingState={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          javaScriptEnabled={true}
          // domStorageEnabled={true}
          onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
          renderLoading={() => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="small" color="#808080" />
            </View>
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <ActivityIndicator size="small" color="#808080" />
        </View>
      )}
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

export default Kora;

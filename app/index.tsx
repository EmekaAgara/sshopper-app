import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import SlidingTexts from "@/components/SlidingTexts";
import { Link, Slot, useNavigation, useRouter } from "expo-router";

const { height: deviceHeight } = Dimensions.get("window");

const index = () => {
  const router = useRouter();

  const onGetStartedPress = () => {
    router.push({ pathname: "(auth)/sign-in" });
  };

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: "https://videos.pexels.com/video-files/9785295/9785295-uhd_1440_2732_25fps.mp4",
        }}
        shouldPlay
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        //  resizeMode
      />
      <Image
        style={styles.logo}
        source={require("../assets/images/icon.png")}
      />

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Social Shopper</Text>

        <SlidingTexts />

        <TouchableOpacity style={styles.button} onPress={onGetStartedPress}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.subText}>
          Team AE Demo Project for KoraHACK 2.0 - Redesigning Payments
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    color: "#ffffff",
  },

  button: {
    color: "#000000",
    width: "100%",
    padding: 20,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#E53F71",
  },

  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: "150%",
    paddingTop: deviceHeight * 0.75,
    // marginBottom: deviceHeight * 0.09,
    flex: 1,
    backgroundColor: "#0000005c",
    paddingHorizontal: 20,
  },

  mainText: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },
  subText: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    color: "white",
  },
  ButtonContainer: {
    backgroundColor: "#0067f3",
    width: "100%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  ButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    // marginTop: "35%",
    zIndex: 1,
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
});

export default index;

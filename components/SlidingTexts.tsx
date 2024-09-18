import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const TEXTS = [
  "Explore a seamless shopping experience, as easy as scrolling on social Media",
  "Get product recomendation based on your interests and preferences",
  "Accept payments with ease, Securely Checkout and make Payments with Kora",
  "Sign up as a Vendor, List your Products and get sales as a Vendor",
];

export default function SlidingTexts() {
  const [index, setIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(slideAnim, {
          toValue: -300,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);

        Animated.sequence([
          Animated.timing(slideAnim, {
            toValue: 300,
            duration: 0,
            useNativeDriver: true,
          }),

          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
              toValue: 0,
              duration: 1000,
              easing: Easing.out(Easing.exp),
              useNativeDriver: true,
            }),
          ]),
        ]).start();
      });
    }, 5000);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 3000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();

    return () => clearInterval(intervalId);
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          ...styles.text,
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {TEXTS[index]}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});

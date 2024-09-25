import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  Text,
  TextInput,
  Button,
  View,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";

export default function Page() {
  const [indicator, setIndicator] = useState(false);
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const onSignInPress = React.useCallback(async () => {
    setIndicator(!indicator);
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("(pages)/(tabs)/home");
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      // Check if the error has an 'errors' array
      if (err.errors && err.errors.length > 0) {
        // Access the first error message in the array
        const errorMessage = err.errors[0].message;
        Alert.alert(
          "Ooops 😩",
          errorMessage || "Something went wrong please try again"
        );
        console.error(JSON.stringify(err, null, 2));
      }
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="small" color="gray" animating={indicator} />
      <View style={styles.root}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={[styles.logo]}
        />
        <Text style={styles.title}>Login to your account</Text>
        <View
          style={[
            styles.InputContainer,
            {
              borderColor: focused ? "#E53F71" : "#141518",
              borderWidth: 1,
            },
          ]}
        >
          <TextInput
            inputMode="email"
            autoCapitalize="none"
            value={emailAddress}
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            placeholder={"Email address"}
            placeholderTextColor="#818589"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={styles.input}
          />
        </View>
        {/* <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        /> */}
        {/* <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> */}

        <View
          style={[
            styles.InputContainer,
            {
              borderColor: focusedPassword ? "#E53F71" : "#141518",
              borderWidth: 1,
            },
          ]}
        >
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            placeholder={"Password"}
            placeholderTextColor="#818589"
            style={styles.input}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={onSignInPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View>
          <Link style={styles.subText} href="/sign-up">
            <Text>Don't have an account? </Text>
            <Text style={styles.link}> Signup</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  InputContainer: {
    backgroundColor: "#141518",
    width: "100%",
    borderWidth: 0.1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 6,
    padding: 18,
  },
  input: {
    color: "#818589",
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
  },
  subText: {
    paddingTop: 11,
    color: "#ffffff",
  },
  container: {
    backgroundColor: "#080808",
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

  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: "40%",
    backgroundColor: "#080808",
    height: "100%",
  },

  logo: {
    width: "70%",
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: 10,
    resizeMode: "cover",
    alignSelf: "flex-start",
  },

  title: {
    fontSize: 24,
    color: "white",
    margin: 10,
    alignSelf: "flex-start",
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#E53F71",
  },
});

import { useSignUp } from "@clerk/clerk-expo";
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
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focused, setFocused] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [focusedLname, setFocusedLname] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);

  const onSignUpPress = async () => {
    setIndicator(!indicator);
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
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
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="small" color="gray" animating={indicator} />
      {!pendingVerification && (
        <>
          <View style={styles.root}>
            <Image
              source={require("../../assets/images/icon.png")}
              style={[styles.logo]}
            />
            <Text style={styles.title}>Create an Account</Text>
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
                value={firstName}
                onChangeText={setFirstName}
                placeholder={"First Name"}
                placeholderTextColor="#818589"
                style={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </View>
            <View
              style={[
                styles.InputContainer,
                {
                  borderColor: focusedLname ? "#E53F71" : "#141518",
                  borderWidth: 1,
                },
              ]}
            >
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder={"Last Name"}
                placeholderTextColor="#818589"
                style={styles.input}
                onFocus={() => setFocusedLname(true)}
                onBlur={() => setFocusedLname(false)}
              />
            </View>
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
            <TouchableOpacity style={styles.button} onPress={onSignUpPress}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {pendingVerification && (
        <>
          <TextInput
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={onPressVerify}>
            <Text style={styles.buttonText}>Verify Email</Text>
          </TouchableOpacity>
        </>
      )}
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
